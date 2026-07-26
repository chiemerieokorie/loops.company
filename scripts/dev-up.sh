#!/usr/bin/env bash
set -euo pipefail

# Start the dev servers DETACHED, with stdout+stderr captured to files you (or an
# autonomous agent) can tail. Run once after scripts/cloud-setup.sh. Idempotent: skips
# a server that's already up. Stop with scripts/dev-down.sh.
#
#   convex dev  -> watches your functions and pushes them to your EXISTING Convex dev
#                  deployment (CONVEX_DEPLOY_KEY) with live codegen — NO local backend.
#   next dev    -> the web app on :3001
#
# Logs:  .dev-logs/convex.log   .dev-logs/web.log   (tail these to debug)
# Live Convex function logs:  pnpm convex logs

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
LOGDIR="$ROOT/.dev-logs"
mkdir -p "$LOGDIR"

start() {
	local name="$1" cmd="$2"
	local log="$LOGDIR/$name.log" pid="$LOGDIR/$name.pid"
	if [ -f "$pid" ] && kill -0 "$(cat "$pid")" 2>/dev/null; then
		echo "==> $name already running (pid $(cat "$pid"))"
		return
	fi
	echo "==> starting $name -> $log"
	# Detach so the server survives this script (and the Setup Script) exiting. setsid
	# gives a fresh session on Linux; macOS has no setsid, so fall back to nohup.
	if command -v setsid >/dev/null 2>&1; then
		setsid bash -c "$cmd" >"$log" 2>&1 &
	else
		nohup bash -c "$cmd" >"$log" 2>&1 &
	fi
	echo $! >"$pid"
}

wait_for() {
	local name="$1" url="$2" tries=60
	printf '==> waiting for %s (%s) ' "$name" "$url"
	while [ "$tries" -gt 0 ]; do
		if curl -sf -o /dev/null "$url" 2>/dev/null; then
			echo "ready"
			return 0
		fi
		printf '.'
		sleep 2
		tries=$((tries - 1))
	done
	echo " TIMEOUT — check $LOGDIR/$name.log"
	return 1
}

WEB_PORT="${WEB_PORT:-3001}"

start convex "pnpm --filter @runway/backend exec convex dev"
start web "pnpm dev:web"

# `convex dev` has no local endpoint (it pushes to your cloud deployment), so we only
# readiness-check the web app. Non-fatal — check the logs if it times out.
wait_for web "http://127.0.0.1:$WEB_PORT" || true

echo "==> dev servers up (web :$WEB_PORT; convex dev watching -> your cloud deployment)."
echo "    Logs in $LOGDIR/ ; stop with scripts/dev-down.sh (or pnpm dev-cloud:down)."
