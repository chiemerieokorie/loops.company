# CLAUDE.md — Runway engineering guide

Guidance for Claude Code (and humans) working in this repo. Read this first.

> **Code standards** (formatting, lint, type-safety rules) live in `.claude/CLAUDE.md` /
> `AGENTS.md` (Ultracite/Biome). This file is the **project** guide: what Runway is, how
> it's structured, and the conventions that aren't a linter's job.

---

## What Runway is

A batteries-included **starter template** built on [Better-T-Stack](https://better-t-stack.dev):
**Next.js** (web) + **Expo** (native) + a **WXT** browser extension, backed by **Convex**
(reactive DB + functions + file storage) with **Better Auth** for auth and a
**multi-tenant organization/workspace** model. UI is **shadcn** primitives (`base-nova`,
Base UI) in a shared `@runway/ui` package.

The point of a starter is that its patterns are copied into real apps — so keep them
generic, well-factored, and self-explaining. Features are lifted/adapted from
[`~/projects/astor`](../astor) (the reference implementation); take the pattern, drop the
domain specifics.

---

## Monorepo layout (pnpm + Turborepo)

```
apps/
  web/         # Next.js 16 (App Router, React 19). Port 3001.
  native/      # Expo / React Native (uniwind).
  extension/   # WXT browser extension.
packages/
  backend/     # Convex — schema, functions, components (Better Auth, prosemirror-sync,
               # resend, stripe). The reactive backend + auth + org model.
  ui/          # Design system — shadcn/base-nova primitives + @runway/ui/icons + shared styles.
  env/         # Boot-validated typed env (@t3-oss/env). web.ts / native.ts.
  config/      # Shared tsconfig / tooling config.
```

Everything is scoped `@runway/*`. Convex `convex/` filenames become API identifiers —
**use camelCase, never hyphens** (a file `foo-bar.ts` breaks `api.foo-bar`).

### `apps/web/src/` feature directory layout

Feature code is colocated under `src/features/<domain>/`, not split by type:

```
features/
  shell/       ← app-sidebar, nav-items.ts, nav-user, workspace-switcher, header-breadcrumb
  dashboard/   ← workspace overview widgets
  document/    ← collab-document, document-view, document-list, editor/ (the Notion editor)
  members/ settings/ billing/   ← workspace-scoped feature pages
  landing/     ← marketing / landing page sections
  shared/      ← providers, theme-provider, cross-feature bits
```

**Rules:**
- A feature's internal utilities stay inside that feature (`features/document/editor/`), not a global `lib/`.
- Cross-feature imports are allowed when a genuine dependency exists.
- `src/lib/` is reserved for **auth + workspace wiring** (`auth-client.ts`, `auth-server.ts`,
  `workspace-client.ts`, `workspace-server.ts`, `workspace-routes.ts`).
- `src/app/` contains only Next.js route/layout files; all logic lives in `features/`.

---

## Commands

- `pnpm dev` — everything (Turborepo). `pnpm dev:web` / `pnpm dev:server` for one target.
- `pnpm dev:setup` — configure Convex (`convex dev --configure`) for the project.
- `pnpm check` / `pnpm fix` — Ultracite (Biome) lint / auto-format. The gate is strict.
- `pnpm --filter web test` — a package's Vitest suite.
- `pnpm --filter web test:e2e` — Playwright E2E (auth gate + public-page smoke). Run
  `pnpm --filter web exec playwright install chromium` once first. Drives the real app
  against dummy Convex URLs; **not** in the `turbo test` CI gate — on demand only.
- `pnpm dlx ultracite fix` — always run before committing.

### Running the backend (local & cloud)

Convex is required before the app works. Two ways to bring a dev backend up:

- **Local (accountless, no cloud resources):**
  `pnpm --filter @runway/backend exec convex dev --once --configure=new --dev-deployment local --project runway`
  — provisions an anonymous local backend (`http://127.0.0.1:3210`), codegens `_generated`,
  and pushes the schema. Good for CI / throwaway testing.
- **Cloud dev (persistent, shareable):**
  `... --configure=existing --project runway --team <team> --dev-deployment cloud` — a real
  `*.convex.cloud` dev deployment.

Either writes `packages/backend/.env.local` (`CONVEX_URL`, `CONVEX_SITE_URL`). Then point the
web app at it — `apps/web/.env`:

```
NEXT_PUBLIC_CONVEX_URL=<CONVEX_URL>
NEXT_PUBLIC_CONVEX_SITE_URL=<CONVEX_SITE_URL>
```

### Cloud development in Claude Code (claude.ai/code)

The `scripts/` are for developing in the **Claude Code cloud environment**, where there's
no local backend — you work against your **existing Convex dev deployment** (full runbook:
`docs/cloud-env.md`):

1. In the cloud environment's **env-vars box**, set `CONVEX_DEPLOY_KEY` (a *dev* deploy key
   from the Convex dashboard → your project → Settings → "Generate a dev deploy key"), plus
   `NEXT_PUBLIC_CONVEX_URL` (`https://<name>.convex.cloud`) and `NEXT_PUBLIC_CONVEX_SITE_URL`
   (`https://<name>.convex.site`).
2. **Setup Script:** `bash scripts/cloud-setup.sh` — installs deps and pushes your
   functions/schema to that deployment (`convex dev --once`, codegen), authenticated
   non-interactively by the key. No login, no local backend.
3. **Start the servers in-session:** `pnpm dev-cloud:up` (detached — `convex dev` watches +
   pushes to your deployment, `next dev` on `:3001`; logs in `.dev-logs/`). Stop with
   `pnpm dev-cloud:down`; stream backend logs with `pnpm convex logs`.

This is **distinct from CI**, which provisions a throwaway *anonymous-local* backend
(`convex dev --once`, no key — `.github/workflows/ci.yml`) for isolated test runs. Cloud dev
uses your real, persistent project; CI uses a disposable one. **Don't** point the cloud
scripts at the anonymous-local backend, and don't change CI's local step to use a deploy key.

**Required Convex deployment env vars** (set with `convex env set`; the push fails with
`MissingEnvironmentVariables` naming any that are absent):
- `SITE_URL` — the **resolved** web origin (e.g. `http://localhost:3001`), for Better Auth
  trusted origins. Not a fixed value if the port varies.
- `RESEND_API_KEY` (+ `EMAIL_FROM`) — transactional email. **Note:** `emailAndPassword`
  currently sets `requireEmailVerification: true`, so without a working Resend key new
  signups can't verify and sign-in returns 403. Configure Resend, or relax verification.
- `STRIPE_SECRET_KEY` / `STRIPE_WEBHOOK_SECRET` — billing (only if the billing feature is used).
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` — Google OAuth (optional). The provider is
  registered only when **both** are set (`convex/auth.ts`), so the push succeeds without them;
  the "Continue with Google" button then surfaces a toast until they're configured. Set the
  OAuth redirect URI to `<SITE_URL>/api/auth/callback/google`.
- `FACEBOOK_CLIENT_ID` / `FACEBOOK_CLIENT_SECRET` — Facebook OAuth (optional). Same
  graceful-when-unset behavior as Google (registered only when **both** are set). Set the
  OAuth redirect URI to `<SITE_URL>/api/auth/callback/facebook`.
- `OPENAI_API_KEY` — AI assistant (optional). Read lazily by the `@ai-sdk/openai` provider
  (`convex/assistant.ts`), so the push succeeds without it; the assistant page shows a setup
  hint (gated on `api.assistant.isConfigured`) until it's set.
- `SLACK_BOT_TOKEN` / `SLACK_WINS_CHANNEL` — Slack "wins bot" (optional). Posts growth wins
  (signups, new members, new subscriptions) + daily/weekly reports to a Slack channel via
  `chat.postMessage` (`convex/slack.ts`, `convex/lib/slack.ts`). Read lazily and **opt-in**:
  every helper no-ops unless BOTH are set, so dev/CI stay silent. `SLACK_BOT_TOKEN` is a bot
  token (`xoxb-…`) with the `chat:write` scope; `SLACK_WINS_CHANNEL` is the target channel id.
  Full setup + usage: `docs/slack-wins-bot.md`.
- `SLACK_REPORTS_ENABLED` — set to `true` to enable the daily/weekly aggregate report crons
  (optional; **prod only**). Event pings fire on every configured deployment; only this gates
  the aggregates so non-prod deployments never post them.

Env is boot-validated (`packages/env/src/*`), so a missing `NEXT_PUBLIC_*` crashes the app —
keep those files and the deployment env set in sync when you add a required var.

**Always declare every env var you add** — client/native vars in `packages/env/src/{web,native}.ts`
(`@t3-oss/env`), and Convex backend vars in `packages/backend/convex/convex.config.ts`
(`defineApp({ env })`, `v.optional(...)` for ones that degrade gracefully) — never read an
undeclared `process.env`.

---

## Agent skills — invoke the right one before the work

Skills encode how to do things correctly in this stack. **Invoke the matching skill
BEFORE starting the work, consult it while deciding, and don't reinvent** what a skill
already covers. This is not optional. When several apply, run process/design skills
first (they set direction), then implementation skills.

| Work | Skills (invoke first) | Agents |
| --- | --- | --- |
| **UI / design** (any UI change, however small) | `frontend-design`, `ui-ux-pro-max`, `web-design-guidelines`, `shadcn`; `apple-design` + `emil-design-eng` for craft/polish | `design-engineer`, `linear-enforcer` |
| **Motion / animation** (transitions, gestures, springs, drag/swipe/sheets) | `apple-design`, `emil-design-eng`, `vercel-react-view-transitions`; `animation-vocabulary` to name an effect; `review-animations` / `improve-animations` to audit | — |
| **Convex** (anything under a `convex/` dir — functions, schema, queries, sync, files, crons, auth wiring) | `convex-best-practices`, `convex-functions`, `convex-realtime`, `convex-schema-validator`, `convex-http-actions`, `convex-cron-jobs`, `convex-migrations`, `convex-security-audit`, `convex-component-authoring`; `convex` routes to the right one when unsure | `convex-dev`, `convex:convex-expert`, `convex:convex-reviewer`, `convex-test` |
| **Convex — task-specific** | `convex-migration-helper` (breaking schema changes / backfills), `convex-performance-audit` (slow reads, OCC conflicts, insights findings), `convex-create-component` (new reusable component), `convex-quickstart` / `convex-setup-auth` (bootstrap only) | `convex:convex-expert` |
| **Convex AI agents** (the assistant feature — threads, tools, streaming, RAG) | `convex-agents` | `convex-dev` |
| **Better Auth** (auth, sessions, plugins, the org model) | `better-auth-best-practices` | — |
| **React / Next.js** (components, RSC boundaries, data fetching, routing) | `next-best-practices`, `vercel-react-best-practices`, `vercel-composition-patterns` | — |
| **UI-library migration** (Radix → Base UI, shadcn base swap) | `migrate-radix-to-base` | — |
| **Codebase audit / roadmap** (find bugs/tech-debt, plan next work, handoff plans) | `improve` (source; read-only), `improve-animations` (motion) | — |
| **Scope / planning** (feature planning, MVP scoping, "just one more feature") | `avoid-feature-creep` | — |
| **Docs / prose** (READMEs, guides, marketing copy review) | `writing-guidelines` | — |
| **Deploy / Vercel ops** (only if a target is Vercel-hosted) | `deploy-to-vercel`, `vercel-cli-with-tokens`, `vercel-optimize` | — |
| **Testing** | `vitest` (+ `convex-test` for backend membership-gate tests) | `convex-test` |
| **Billing** | `stripe:stripe-best-practices` | — |
| **Cross-cutting** | `ultracite` (lint/format standards), `turborepo` (tasks/caching), `typescript-best-practices`, `zod` | — |

If a skill exists for the task, use it — even when you think you know the answer; the
stack (Convex object-syntax functions, Better Auth org plugin, base-nova UI) has
non-obvious correct patterns these skills capture.

### Newly added skills — how & when

Installed via `npx skills add`, tracked in `skills-lock.json`, symlinked into `.claude/skills/`.
To refresh/add more: `npx skills add <owner>/<repo>` (add `NPM_CONFIG_MINIMUM_RELEASE_AGE=0`
to bypass the npm new-package release-age block).

**Design & motion craft** (source: `shadcn/ui`, `emilkowalski/skills`)
- **`apple-design`** — Apple's interface + physical-motion philosophy for the web. Use when
  building or reviewing gesture-driven UI, spring animations, drag/swipe/sheet interactions,
  interruptible transitions, translucent depth, or optical typography. Reach for it on any
  "make it feel native/premium" work — pairs with our shadcn primitives, doesn't replace them.
- **`emil-design-eng`** — Emil Kowalski's philosophy on UI polish and the invisible details
  that make software feel great. Use during design review and final polish passes; it sets the
  craft bar. Runs *alongside* our own design rules (flat cards, `normal`/`medium` weights,
  semantic tokens) — those still win where they conflict.
- **`review-animations`** — reviews existing animation/motion code against that craft bar
  (defaults to flagging; approval is earned). Use to critique a specific animation diff.
- **`improve-animations`** — read-only motion *audit* across the app that emits prioritized,
  self-contained plans for another agent to execute. Use for "audit our motion / make the app
  feel better" roadmap work, not a single diff.
- **`animation-vocabulary`** — reverse-lookup glossary ("the bouncy popover thing" → *Pop in*).
  Use only to *name* an effect so you can prompt/spec it precisely; not for building.

**React motion** (source: `vercel-labs/agent-skills`)
- **`vercel-react-view-transitions`** — React View Transition API (`<ViewTransition>`,
  `addTransitionType`, CSS pseudo-elements). Use for page/route transitions, shared-element
  animations, list reorder, or enter/exit **without a third-party animation lib**. First choice
  for animating between UI states in our Next.js app.

**Migration** (source: `shadcn/ui`)
- **`migrate-radix-to-base`** — migrates React components/projects from Radix UI to Base UI.
  Relevant because `@runway/ui` is already **base-nova / Base UI**; use it when lifting a
  Radix-based component from elsewhere (e.g. from astor) into our Base-UI design system, or to
  convert a single primitive ("migrate accordion").

**Audit & planning** (source: `shadcn/improve`, `emilkowalski/skills`)
- **`improve`** — surveys a codebase as a senior advisor and produces prioritized, **read-only**
  handoff plans (bugs, security, perf, test coverage, tech debt, migrations, DX, roadmap). It
  never edits source. Use for "audit this / where do we take Runway next / write a plan for
  another agent" — then execute with the normal implementation skills + agents.

**Docs / prose** (source: `vercel-labs/agent-skills`)
- **`writing-guidelines`** — reviews docs/prose against a writing handbook. Use when asked to
  review READMEs, `docs/*`, or landing/marketing copy for voice, tone, and style. Documentation
  and `features/landing/` copy are the natural targets.

**Vercel ops** (source: `vercel-labs/agent-skills`) — *only if a Runway target is deployed to Vercel*
- **`deploy-to-vercel`** — deploy an app/site to Vercel ("push this live", preview deploys).
- **`vercel-cli-with-tokens`** — Vercel CLI via access-token auth (non-interactive/CI); use for
  scripted deploys and setting Vercel env vars without interactive login.
- **`vercel-optimize`** — Vercel cost/performance optimization (Function Invocations, Build
  Minutes, Fast Data Transfer, caching, Core Web Vitals). Use to cut a Vercel bill or fix slow
  routes on a deployed project. Note: the backend is **Convex**, not Vercel functions — these
  apply to the Next.js `apps/web` hosting layer only.

**Convex — routing & task-specific** (source: `waynesutton/convexskills`, `get-convex/agent-skills`)
- **`convex`** — umbrella router: routes an underspecified Convex request to the right specific
  skill (`convex-functions`, `convex-realtime`, `convex-agents`, …). Start here when you're not
  sure which Convex skill fits; otherwise invoke the specific one directly.
- **`convex-agents`** — building AI agents with the **Convex Agent component** (thread
  management, tool integration, streaming, RAG, workflow orchestration). This is the skill for
  the assistant feature (`convex/assistant.ts`, gated on `OPENAI_API_KEY`) — use it before
  touching threads/tools/streaming there.
- **`convex-migration-helper`** — plans schema/data migrations with the widen → migrate → narrow
  pattern and `@convex-dev/migrations`. Use for breaking schema changes, backfills, table
  reshaping, or zero-downtime rollouts (complements `convex-migrations`, which is the concept).
- **`convex-performance-audit`** — audits reads, subscriptions, write contention (OCC conflicts),
  and function limits. Use when a feature is slow, insights flags read amplification, or you hit
  OCC write conflicts.
- **`convex-create-component`** — builds a reusable Convex component with isolated tables and an
  app-facing API. Use when authoring a **new** self-contained component (pairs with the concept
  skill `convex-component-authoring`).
- **`convex-security-audit`** — deep authorization/data-boundary/action-isolation/rate-limit
  review. Use for a security pass on Convex functions before shipping (heavier than the
  `convex-security-check` checklist).
- **`convex-quickstart`** / **`convex-setup-auth`** — bootstrap-only (new Convex app, first
  `convex dev`, wiring auth from scratch). Runway is **already** set up (Convex + Better Auth org
  model), so these are rarely needed here — prefer `better-auth-best-practices` for auth work.

**Scope discipline** (source: `waynesutton/convexskills`)
- **`avoid-feature-creep`** — invoke when planning features, scoping an MVP, triaging a backlog,
  or whenever a request is "just one more thing." Fits this repo's charter: Runway is a
  **starter template** — keep patterns generic and resist bloat.

**Convex-evals harness** (source: `get-convex/convex-evals`) — *repo-maintenance tooling, NOT app dev*
- **`add-eval`**, **`add-model`**, **`analyze-eval`**, **`analyze-run`**, **`analyze-ablation`**,
  **`validate-guidelines`** — these operate on Convex's own **eval suite** (adding evals/models,
  investigating failing eval runs, validating `guidelines.ts` changes). They are irrelevant to
  building Runway features; only reach for them if you're actually working inside the
  `get-convex/convex-evals` project. Listed here for completeness because they were installed.

---

## UI — shadcn primitives only

**Mandatory UI workflow — run the UI skills for ANY UI change**, no matter how small.
Invoke them **before** (set direction), **during** (as you decide), and **after** (review +
polish): `frontend-design`, `ui-ux-pro-max`, `web-design-guidelines`, and `shadcn`
(plus `design-engineer` / `linear-enforcer` agents where relevant). Not optional.

The app + design system are **shadcn** (`base-nova`, Base UI) in `@runway/ui`
(`packages/ui/src/styles/globals.css` holds the tokens). When building or changing UI:

- **Compose from shadcn primitives** — `Card*`, `Item`, `Table`, `Alert`, `Empty`, `Badge`,
  `Button`, `Sidebar*`, `DropdownMenu`, `Field`/`InputGroup`, `Input`, `Label`, `Select`,
  `Separator`, `Toggle`. Don't hand-roll `<button>`/`<input>`/`<select>`/`<table>`/`<label>`
  when a primitive exists.
- **Add shadcn components to `@runway/ui`, NEVER `apps/web`:**
  `pnpm dlx shadcn@latest add <name> -c packages/ui`. The app consumes via
  `@runway/ui/components/<name>`.
- **Icons: `@runway/ui/icons` only** — named exports, e.g. `import { IconFileText } from "@runway/ui/icons"`.
  Use `lucide-react` only for a gap the set doesn't cover.
- **Images: always `next/image`**, never `<img>`.
- **Flat cards — one surface everywhere.** Cards are a flat `bg-muted` fill (no shadow/border/ring);
  separation comes from fill contrast, not elevation. Nested panels invert (`bg-background`
  inside a card). `shadow-soft` is reserved for floating overlays (dropdowns, popovers,
  dialogs) — never cards. `border-border-subtle` stays functional-chrome only (inputs, frames).
- **Font weight: `normal`/`medium` only** — no `semibold`/`bold`, headings included. Runtime
  numbers (counts, prices, timers) get `tabular-nums`.
- **Semantic tokens only** (`bg-muted`, `text-muted-foreground`, `border-border`, `accent-iris`,
  the `text-p13`/`text-h1` named scale) — never raw hex.
- **Sidebar:** `Sidebar variant="inset"` → logo `SidebarHeader` → one flat `SidebarGroup` from
  `features/shell/nav-items.ts` (`SidebarMenuButton` with `isActive`/`tooltip`/`render={<Link/>}`)
  → `NavUser` in `SidebarFooter`.

---

## Commit / PR conventions

- **Never** add AI footers or `Co-Authored-By` attributions to commits or PRs (user standard).
- Conventional-commit messages grouped by type (`feat`/`fix`/`docs`).
- Branch off `main`; open PRs against `main`.
- Attribution for third-party code lifted into the repo goes in the root `NOTICE` (e.g. the
  editor adapts Novel, Apache-2.0).
