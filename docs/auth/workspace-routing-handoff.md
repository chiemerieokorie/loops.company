# Workspace Routing — Implementation Status & Handoff

**Status:** core shipped to `main`; perf + a few correctness items open.
**Last updated:** 2026-06-25.
**For:** the next agent picking this up. Read this first, then `workspace-routing-prd.md`
(design) and `active-org-routing-facts.md` (verified mechanics + how to re-check them).

---

## 1. What this is

Org-scoped routing: every authenticated surface is prefixed with the workspace slug
(`/acme`, `/acme/billing`, …), the overview lives at the workspace **root**, and the
active workspace is carried in the Convex JWT so the proxy can resolve bare paths with
no backend round-trip. Orgs **are** workspaces (`org.id === workspaceId`).

## 1a. Original goals (why we did this)

The product asks that shaped every decision — use these to judge whether the
implementation still matches intent:

1. **The slug prefixes every authed surface** — `/[workspace]`, `/[workspace]/billing`,
   `/[workspace]/sheet`, … so URLs are **shareable and bookmarkable** to a specific
   workspace, and the app always knows which workspace it's in from the URL.
2. **Land users straight in their workspace** — sign-in/OAuth/invite should drop you
   on **your workspace**, never a marketing detour or a generic dashboard hop.
3. **Fast, smooth, efficient — NO redundant session round-trips.** The active slug was
   denormalized so we could route off it **without re-fetching the session on every
   navigation**. "It should feel instant." (This is the bar the current per-nav
   `getActiveOrg` round-trip falls short of — see §5.1.)
4. **The overview is the workspace ROOT `/[workspace]`** — not `/[workspace]/dashboard`,
   not `/[workspace]/workbooks`. Workbooks/sheet/document/etc. are distinct scoped routes.
5. **`/` stays a PUBLIC landing page** — never a root redirect.
6. **Security is layered** — the cookie/JWT is an *optimistic routing hint only*;
   `assertMember` RLS in every Convex query is the real boundary. Routing can be wrong
   without ever leaking data.
7. **`/sheet` + `/document` (public, fixture-backed) are TEMPORARY** — the real
   versions live in the workspace (`/[workspace]/sheet`, `/[workspace]/document`); the
   public ones stay only as anon demos until the scoped versions are built (WS3).

## 1b. Expected end-to-end flow (the target UX)

| Action | Expected result |
|--------|-----------------|
| **Sign in / sign up / OAuth** | Land **directly** on `/[yourSlug]` (the overview). Fast — no `/dashboard` hop, no marketing flash. |
| **Navigate within your workspace** (sidebar, links) | **Instant** — the slug is already in the URL; ideally **zero backend round-trips** (the cookie/URL vouches; data is RLS-gated). |
| **Type a bare path** (`/billing`) while signed in | Proxy rewrites to `/[yourSlug]/billing` (zero backend round-trip). Anonymous request → falls through (e.g. public `/sheet`). |
| **Switch workspace** (switcher) | `setActive` → land on `/[newSlug]`; the active workspace + subsequent bare-path routing follow you. Should feel immediate. |
| **Deep-link to ANOTHER of your workspaces** (`/other/…`) | Renders it, then **promotes** it to active (client-side). |
| **Deep-link to a workspace you're NOT in / a bad slug** | Bounce to **your** workspace if you have one; friendly **not-found** only if you're genuinely orgless. Never a data/existence leak. |
| **Accept an invite** | Land **directly** in the **invited** workspace. |
| **Sign out, then sign in as a different user (same browser)** | Land in the NEW user's workspace — the previous user's slug must NOT linger (see §5.3). |
| **Brand-new user (pre default-org)** | A "preparing your workspace" state, not a redirect loop or a bounce to `/` (deferred, §5.6). |

## 2. Shipped (merged to `main`)

| PR | What |
|----|------|
| **#157** WS1 | Active slug in the `convex_jwt` (derive-on-read); `proxy.ts` bare-path rewrite |
| **#158** WS2 | Overview at the `/[workspace]` ROOT; `workbooks/sheet/document/members/billing/settings` scoped routes; `/dashboard` home-alias |
| **#159** WS4/5/7 | `setActiveWorkspace` (setActive + token re-mint); invite lands in the invited workspace; foreign-slug client promote; `[workspace]/not-found.tsx` |
| **#161** | CI fix — repaired the `metric-block` browser test (it queried a native `<select>` the redesign replaced with a Base UI `Select`) |
| **#162** | Sign-in fix — login routes **directly** to `/[slug]`; gate **recovers** on mismatch (no dead-end); auth success toasts removed |

## 3. Architecture (how it works)

Three layers; the cookie is an *optimistic routing hint*, never authorization.

1. **Proxy** (`apps/web/src/proxy.ts`) — Next 16 proxy (`PROXY_FILENAME='proxy'`).
   Base64url-decodes the `better-auth.convex_jwt` cookie (no verify) → reads
   `activeOrganizationSlug` → rewrites bare known routes (`/billing` → `/[slug]/billing`)
   and the `/dashboard` home-alias → `/[slug]`. Registry: `lib/workspace-routes.ts`
   (`WORKSPACE_ROUTES`, `resolveWorkspaceRewrite`, `slugFromJwt`).
2. **Gate** (`apps/web/src/app/(authed)/[workspace]/layout.tsx`) — the authoritative
   check. `getActiveOrg()` → if `slug === params.workspace` render; else
   `assertWorkspaceAccess(slug)` → member ⇒ render + `<PromoteActiveWorkspace>`;
   not-a-member ⇒ **redirect to the user's real workspace** if they have one, else
   `notFound()`.
3. **Data** — `assertMember` RLS in every `authedQuery` is the real boundary
   (`lib/access.ts`, `lib/functions.ts`). The cookie/JWT can be stale without leaking.

**Slug = derive-on-read:** `convex/lib/jwt.ts buildConvexJwtPayload` and
`convex/session.ts getActiveOrg` resolve the slug from the authoritative
`activeOrganizationId` via `ctx.runQuery(getOrganizationSlug)` at mint/read time — no
stored slug field. (Verified: `ctx.runQuery` works in the `/convex/token` mint context.)

**Auth flows** push directly to `/[slug]` (read via `getActiveOrg` after a token
re-mint), NOT `/dashboard`. The re-mint primitive: `lib/workspace-client.ts
setActiveWorkspace(id)` = `authClient.organization.setActive` + `authClient.convex.token()`.

**Docs:** `docs/auth/workspace-routing-prd.md` (design + WS0–WS8 task list),
`docs/auth/active-org-routing-facts.md` (F1–F12 + how-to-verify),
`packages/backend/CLAUDE.md` (JWT seam, triggers-vs-databaseHooks, schema-regen rules).

## 4. File map

```
apps/web/src/
  proxy.ts                                  proxy bare-path rewrite
  lib/workspace-routes.ts (+ .test.ts)      registry + slugFromJwt + resolveWorkspaceRewrite
  lib/workspace-client.ts                   setActiveWorkspace (setActive + token re-mint)
  lib/workspace-server.ts                   getActiveOrg / assertWorkspaceAccess (fetchAuthQuery)
  app/(authed)/[workspace]/
    layout.tsx                              the gate
    page.tsx                                overview (root); workbooks/, sheet/, document/, billing/, members/, settings/
    not-found.tsx                           friendly "not found / no access"
  app/(authed)/dashboard/page.tsx           bare /dashboard null-slug fallback
  features/shell/workspace-switcher.tsx     the switcher
  features/shell/promote-active-workspace.tsx  client promote (foreign slug)
  features/shell/nav-items.ts               sidebar nav
  features/auth/login-form.tsx              direct /[slug] landing
  app/invite/[token]/page.tsx               invite → invited workspace
packages/backend/convex/
  lib/jwt.ts                                buildConvexJwtPayload (derive-on-read)
  session.ts                                getActiveOrg / assertWorkspaceAccess / listMyWorkspaces
  betterAuth/queries.ts                     getOrganizationSlug / getOrganizationIdBySlug
  lib/activeOrg.ts                          applyActiveOrgToSession (seed on create) + clear-on-removal
  auth.ts                                   definePayload wired; triggers
```

---

## 5. OPEN ISSUES (pick these up)

### 5.1 Navigation is slow (~1s per `/[workspace]` nav) — HIGH
The gate calls `getActiveOrg()` (a Convex round-trip: `createAuth(ctx)` instantiates
Better Auth + `getSession` + `getOrganizationSlug`) on **every** navigation, even the
common in-workspace path. **Fix (the PRD's intended optimization, not yet done):** in
the gate, decode the `convex_jwt` cookie **server-side** (`cookies()` in the layout,
reuse `slugFromJwt`) — if `params.workspace === cookieSlug`, render with **zero
round-trips** (data is RLS-gated regardless); fall back to `getActiveOrg` +
`assertWorkspaceAccess` only on a cookie miss/mismatch. Consider whether `createAuth`
instantiation per-`getActiveOrg` is itself a cost worth caching.

### 5.2 Switcher does two sequential HTTP calls before navigating — MEDIUM
`workspace-switcher.tsx handleSwitch` awaits `setActiveWorkspace` (which is
`setActive` **then** `convex.token()`) before `router.push`. The token re-mint does
**not** need to block: the switcher pushes directly to `/[slug]`, and the gate's
`getActiveOrg` reads the fresh **session row** (updated by `setActive`), not the cookie
claim. **Fix:** `await setActive(...)` → `router.push('/'+slug)` → fire
`authClient.convex.token()` **async** (fire-and-forget, for subsequent bare-path
routing). Removes ~300ms from the perceived switch.

### 5.3 "forbidden: not a member" on navigation (stale cross-user slug) — MEDIUM
**Data (confirmed via runOneoffQuery):** every user currently has exactly **one**
workspace (their default org, role `owner`) — there is no real multi-workspace
switching yet. The `assertWorkspaceAccess` "forbidden" logs come from navigating to a
**stale slug from a previous user's session** (sign out as A, sign in as B, but a
cookie/URL still points at A's workspace). The gate recovery (#162) redirects them to
their real workspace, so it's not fatal — but the root cause is the stale `convex_jwt`
across user sessions. **Fix:** ensure sign-out clears/expires the `convex_jwt` (and the
proxy/gate treat a cross-user slug as a clean redirect, which they now do). Re-check
`npx convex logs --status failure` after — the bursts should stop.

### 5.4 Occasional "not authenticated" from `getActiveOrg`/`assertWorkspaceAccess` — LOW
The gate reads sometimes run with no identity (token-forwarding timing in
`fetchAuthQuery`). The #162 fresh-token mint mitigated it. If it recurs, dig into
`convexBetterAuthNextJs` token forwarding (`lib/auth-server.ts`) vs `isAuthenticated`.

### 5.5 WS3 — real per-workspace sheet/document — LARGE (the next feature)
`/[workspace]/sheet` and `/[workspace]/document` are **Empty stubs** (the public
top-level `/sheet` + `/document` were left as anon demos). Build the shell-less,
workspace-data-backed versions (`SheetWorkspace`/`DocumentView` carry their own
`AppShell` — extract the inner content so it nests in the `[workspace]` SidebarInset),
then retire the public routes. Also decide the anonymous-compute e2e (it hits public
`/sheet`) — keep a `/demo` or authenticate the test.

### 5.6 Small deferrals
- **T5.1** — derive the sidebar nav fully from `WORKSPACE_ROUTES` (it's hand-listed in
  `nav-items.ts`, currently in sync).
- **T7.2** — orgless "preparing workspace" state (a brand-new user pre-default-org-trigger
  bounces to `/`).
- **`activeOrganizationSlug` session field** (#148) is now vestigial (derive-on-read
  reads the id, not this field) — dropping it is a schema-regen cleanup.

### 5.7 Unrelated but on `main`
The `metric-block` browser test was fixed (#161), but other UI work may have its own
issues — `gate`/`browser`/`e2e`/`perf` are the CI tiers; `browser` is real Chromium
(Playwright); vitest 1.6 has NO `@vitest/browser/context`/`userEvent` (dispatch events
manually).

---

## 6. How to verify / debug

- **Runtime errors:** `cd packages/backend && npx convex logs --status failure` — the
  gate's `assertWorkspaceAccess` throws (caught + handled) surface here.
- **Data:** `mcp__convex__runOneoffQuery` (read-only; NO imports beyond the wrappers,
  so it can read app tables like `memberships` but can't call component queries).
- **The JWT:** mint one with the throwaway-probe recipe in `active-org-routing-facts.md`
  F5 (signup → verify-one-user → sign-in → `/api/auth/convex/token` → `atob`-decode).
- **Tests:** `pnpm --filter @runway/backend exec vitest run` (122 backend),
  `cd apps/web && pnpm exec vitest run src/lib/workspace-routes.test.ts` (proxy logic),
  `pnpm exec tsc --noEmit` (web), `npx convex dev --once` (backend codegen = authoritative typecheck).
