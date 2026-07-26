#!/usr/bin/env bash
set -euo pipefail

# Stop the dev servers started by scripts/dev-up.sh, including the whole
# pnpm/turbo/next/convex child tree. Recurses with `pgrep -P` (portable across Linux +
# macOS) so it works whether the server was started via setsid or nohup — no reliance
# on process groups.

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
LOGDIR="$ROOT/.dev-logs"

kill_tree() {
	local p="$1"
	for c in $(pgrep -P "$p" 2>/dev/null); do
		kill_tree "$c"
	done
	kill "$p" 2>/dev/null || true
}

for pidfile in "$LOGDIR"/*.pid; do
	[ -e "$pidfile" ] || continue
	name="$(basename "$pidfile" .pid)"
	pid="$(cat "$pidfile")"
	if kill -0 "$pid" 2>/dev/null; then
		echo "==> stopping $name (pid $pid + children)"
		kill_tree "$pid"
	fi
	rm -f "$pidfile"
done

echo "==> dev servers stopped"
