# Cloud development (Claude Code / claude.ai/code)

How to run Runway inside the **Claude Code cloud environment**, where there is no local
machine and no local Convex backend. In the cloud you develop against your **existing
Convex dev deployment** — a real, persistent, shareable backend — authenticated by a
deploy key.

> **This is not CI.** CI (`.github/workflows/ci.yml`) provisions a throwaway
> _anonymous-local_ backend (`convex dev --once`, no key) for isolated test runs. Cloud
> development is the opposite: it connects to your real project so your work persists and
> is shareable. The two must not be conflated — don't give CI a deploy key, and don't
> point the cloud scripts at a local backend.

## 1. One-time: get a dev deploy key

In the [Convex dashboard](https://dashboard.convex.dev) → your project → your **dev**
deployment → **Settings** → **Generate a dev deploy key**. Copy it.

The deployment also needs its own env vars set once (they persist on the deployment):

```
pnpm convex env set SITE_URL http://localhost:3001
pnpm convex env set RESEND_API_KEY re_...        # optional (email)
pnpm convex env set GOOGLE_CLIENT_ID ...         # optional (Google OAuth)
pnpm convex env set OPENAI_API_KEY sk-...        # optional (AI assistant)
pnpm convex env set SLACK_BOT_TOKEN xoxb-...     # optional (Slack wins bot)
pnpm convex env set SLACK_WINS_CHANNEL C0...     # optional (Slack wins bot channel)
pnpm convex env set SLACK_REPORTS_ENABLED true   # optional (prod-only daily/weekly reports)
# …see CLAUDE.md "Required Convex deployment env vars"
```

## 2. Configure the cloud environment

In the cloud environment's **environment variables** box, set:

| Variable | Required | Value |
| --- | --- | --- |
| `CONVEX_DEPLOY_KEY` | ✅ | the dev deploy key from step 1 |
| `NEXT_PUBLIC_CONVEX_URL` | recommended | `https://<your-deployment>.convex.cloud` |
| `NEXT_PUBLIC_CONVEX_SITE_URL` | recommended | `https://<your-deployment>.convex.site` |

The two `.convex.cloud` / `.convex.site` URLs are shown on your deployment's dashboard
page. They're not secrets (safe for the public env-vars box); `CONVEX_DEPLOY_KEY` **is** a
secret.

## 3. Setup Script

Point the environment's **Setup Script** at:

```
bash scripts/cloud-setup.sh
```

It installs dependencies and runs `convex dev --once`, which — because `CONVEX_DEPLOY_KEY`
is set — authenticates non-interactively and **pushes your functions + schema to your
existing dev deployment** and codegens `_generated`. If `apps/web/.env.local` doesn't
already exist and a Convex URL is resolvable (from the env-vars box or the backend's
`.env.local`), it writes that file so the web app boots against the deployment; otherwise
it prints a note asking you to set `NEXT_PUBLIC_CONVEX_URL` yourself.

## 4. Run the dev servers

Once, in-session:

```
pnpm dev-cloud:up      # start convex dev (watch → your deployment) + next dev, detached
pnpm dev-cloud:down    # stop them
pnpm convex logs       # stream live backend function logs
```

`dev-cloud:up` starts both servers detached with logs under `.dev-logs/`
(`convex.log`, `web.log`) so an agent can tail them. `convex dev` here has **no local
backend** — it watches your functions and pushes them to your cloud deployment with live
codegen. `next dev` serves the web app on **:3001**.

## Scripts reference

| Script | What it does |
| --- | --- |
| `scripts/cloud-setup.sh` | Install deps + push/codegen to your dev deployment via `CONVEX_DEPLOY_KEY`. Fails fast if the key is missing. |
| `scripts/dev-up.sh` | Start `convex dev` (watch → deployment) + `next dev` detached, logs in `.dev-logs/`. Idempotent. |
| `scripts/dev-down.sh` | Stop both servers and their child process trees. |

`package.json` exposes these as `setup:cloud`, `dev-cloud:up`, `dev-cloud:down`, and a
`convex` passthrough (`pnpm convex <args>` → the backend's Convex CLI).

## Troubleshooting

- **`ERROR: CONVEX_DEPLOY_KEY is not set`** — add the dev deploy key to the env-vars box.
- **Web app can't reach the backend** — set `NEXT_PUBLIC_CONVEX_URL` /
  `NEXT_PUBLIC_CONVEX_SITE_URL` in the env-vars box (the setup script also tries to derive
  them from what `convex dev` wrote to `packages/backend/.env.local`).
- **`MissingEnvironmentVariables` on push** — set the named deployment env vars with
  `pnpm convex env set …` (step 1).
- **Servers not responding** — tail `.dev-logs/convex.log` / `.dev-logs/web.log`.
