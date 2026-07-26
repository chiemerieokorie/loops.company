#!/usr/bin/env bash
set -euo pipefail

# Setup for the CLAUDE CODE CLOUD environment (claude.ai/code) — paste
# `bash scripts/cloud-setup.sh` into the environment's Setup Script box.
#
# Unlike CI (which spins up a throwaway ANONYMOUS-LOCAL backend), cloud development
# connects to your EXISTING Convex dev deployment via CONVEX_DEPLOY_KEY, so your work
# lives on a real, persistent, shareable backend.
#
# Set these in the cloud environment's env-vars box:
#   CONVEX_DEPLOY_KEY            (required) a Convex *dev* deploy key for your project's
#                               dev deployment — Convex dashboard → your project →
#                               Settings → "Generate a dev deploy key".
#   NEXT_PUBLIC_CONVEX_URL       (recommended) https://<your-deployment>.convex.cloud
#   NEXT_PUBLIC_CONVEX_SITE_URL  (recommended) https://<your-deployment>.convex.site
#
# The deployment's OWN env vars (SITE_URL, RESEND_API_KEY, …) persist on the real
# deployment — set them once with `pnpm convex env set NAME=value`.

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [ -z "${CONVEX_DEPLOY_KEY:-}" ]; then
	cat >&2 <<'MSG'
ERROR: CONVEX_DEPLOY_KEY is not set.
Cloud development pushes to your EXISTING Convex dev deployment, which needs a dev
deploy key. Generate one in the Convex dashboard (your project → Settings →
"Generate a dev deploy key") and add it to the cloud environment's env-vars box as
CONVEX_DEPLOY_KEY. (CI does NOT use this — it provisions a throwaway local backend.)
MSG
	exit 1
fi

# corepack honours package.json#packageManager; a no-op where pnpm is already set up.
if ! command -v pnpm >/dev/null 2>&1; then
	corepack enable
	corepack prepare --activate
fi

echo "==> Installing dependencies (frozen lockfile)"
pnpm install --frozen-lockfile

# Push functions + schema to the EXISTING dev deployment the key selects, and codegen
# `_generated`. CONVEX_DEPLOY_KEY authenticates non-interactively (no login, no local
# backend). `--once` does a single push + codegen then exits — no lingering daemon.
echo "==> Pushing functions + schema to your Convex dev deployment (codegen)"
pnpm --filter @runway/backend exec convex dev --once

# Point the web app at the same deployment so `next dev` boots against it. Prefer the
# values from the env-vars box; fall back to whatever `convex dev` wrote to the
# backend's .env.local. Only write if the file is absent (a value in the box wins).
WEB_ENV="$ROOT/apps/web/.env.local"
BACKEND_ENV="$ROOT/packages/backend/.env.local"

read_backend() {
	[ -f "$BACKEND_ENV" ] &&
		grep -E "^$1=" "$BACKEND_ENV" | tail -1 | cut -d= -f2- | tr -d '"' || true
}

CONVEX_URL="${NEXT_PUBLIC_CONVEX_URL:-$(read_backend CONVEX_URL)}"
CONVEX_SITE_URL="${NEXT_PUBLIC_CONVEX_SITE_URL:-$(read_backend CONVEX_SITE_URL)}"

if [ -n "$CONVEX_URL" ] && [ ! -f "$WEB_ENV" ]; then
	echo "==> Writing $WEB_ENV (-> $CONVEX_URL)"
	{
		echo "NEXT_PUBLIC_CONVEX_URL=$CONVEX_URL"
		[ -n "$CONVEX_SITE_URL" ] && echo "NEXT_PUBLIC_CONVEX_SITE_URL=$CONVEX_SITE_URL"
	} >"$WEB_ENV"
elif [ -z "$CONVEX_URL" ]; then
	echo "==> NOTE: NEXT_PUBLIC_CONVEX_URL not found. Set it (and" >&2
	echo "    NEXT_PUBLIC_CONVEX_SITE_URL) in the env-vars box so the web app boots" >&2
	echo "    against your deployment." >&2
fi

echo "==> Setup complete."
echo "    Start the dev servers (detached, logs in .dev-logs/):  pnpm dev-cloud:up"
echo "    Stop them:                                             pnpm dev-cloud:down"
echo "    Stream live Convex logs:                               pnpm convex logs"
