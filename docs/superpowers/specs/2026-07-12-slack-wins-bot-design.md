# Slack "Wins Bot" — design

Post growth wins from the Runway backend to a Slack channel, plus daily/weekly
aggregate reports. Ported from MatchPath's Wins Bot (`medres`), generalized to
Runway's domain (users, workspaces/orgs, documents, notes, Stripe billing) and
kept generic so the starter template ships a reusable pattern, not domain copy.

## Principles

- **Opt-in / silent by default.** Every helper no-ops when `SLACK_BOT_TOKEN` or
  `SLACK_WINS_CHANNEL` is unset, so local dev and CI post nothing. No channel ID
  is hardcoded (a starter must not ship someone's channel).
- **Best-effort, never blocks the app.** Pings are scheduled (`scheduler.runAfter`),
  so a Slack outage can never fail a signup, an invite, or a Stripe webhook.
  `sendSlackMessage` never throws — every failure is logged and swallowed, and it
  returns a `delivered` boolean the counter uses for its rollback.
- **Privacy.** Two layers: the formatters mask emails per-field
  (`jane@example.com → j***@example.com`), and `sendSlackMessage` runs every string
  in the outgoing payload through `redactPii` (emails + phone/card-like digit runs)
  as a defense-in-depth net right before send.

Setup + usage + how to extend (and how to scale the report with the aggregate
component) live in [`docs/slack-wins-bot.md`](../../slack-wins-bot.md).

Event wins funnel through a **single `postWin` action over a discriminated
`WinEvent` union** (pattern adopted from astor-nano's wins bot). Each message is
numbered with a **per-type monthly counter** (`winCounters` table) that is bumped
+1 to number the message and **rolled back −1 if delivery fails**, so the
"#N this month" sequence tracks *delivered* wins and stays dense.

## Architecture — files (all under `packages/backend/convex`)

- **`lib/slack.ts`** — pure client + formatter, no Convex imports (unit-testable):
  - `isSlackConfigured()` — both env vars present.
  - `sendSlackMessage(msg): Promise<boolean>` — POST to `chat.postMessage`;
    no-ops (returns `false`) when unconfigured; **never throws** — logs+swallows
    every failure and returns whether Slack accepted it (so `postWin` can roll the
    counter back).
  - `scrambleEmail`, Block Kit helpers (`header`/`section`/`table`/`divider`/`context`).
  - `WinEvent` type + `formatWin(event, resolved, count)` — single formatter over
    the union, renders "#N this month"; `buildReportMessage` for the aggregates.
  - `ReportStats` / `ReportUserCounts` types, `formatAmount`, founder quotes.
  - Scoped, commented emoji exception (internal ops copy, not product UI).
- **`slack.ts`** — `postWin` (internalAction over `winEventValidator`),
  `getWinIdentity` (internalQuery via `authComponent.getAnyUserById`),
  `bumpWinCounter` (internalMutation, floored at 0), `sendDailyReport`,
  `sendWeeklyReport`. `postWin` resolves identity + workspace name **best-effort**
  (a lookup failure is caught and degrades to an anonymous `***` label, never
  dropping a win), bumps the counter, sends, and rolls the counter back on failure.
  Reports are additionally gated on `SLACK_REPORTS_ENABLED === "true"` (prod-only).
- **`slack/internal.ts`** — `getReportStats(since, until)` (new/total workspaces via
  owner `memberships`, documents + notes created + total) and
  `getWorkspaceOwnerUserId` (owner lookup for the subscription win).
- **`schema.ts`** — `winCounters` table: `{ key: "<type>:<YYYY-MM>", count, updatedAt }`
  indexed `by_key`.

## Wiring

- **New signup** — `auth.ts` `user.onCreate` trigger schedules
  `postWin({ event: { type: "signup", userId } })` alongside `createDefaultWorkspace`.
- **New member joined** — `auth.ts` `member.onCreate` trigger schedules
  `postWin({ event: { type: "member", … } })` **only when
  `projectRole(member.role) !== "owner"`**, so it fires for genuine teammates and
  never for the auto-created default-workspace owner (no double-fire with signup).
- **New subscription** — `http.ts` `checkout.session.completed` handler schedules
  `postWin({ event: { type: "subscription", … isRenewal: false } })` after
  `setPlan`. Renewals (`invoice.paid`) are left as a commented hook.
- **Reports** — two crons in `crons.ts`: `slack-daily-report` (daily 13:30 UTC) and
  `slack-weekly-report` (Mondays 14:00 UTC).

## Env vars (all optional; documented in CLAUDE.md + docs/cloud-env.md)

- `SLACK_BOT_TOKEN` — bot token (`xoxb-…`), `chat:write` scope. Gates everything.
- `SLACK_WINS_CHANNEL` — target channel ID. Required alongside the token.
- `SLACK_REPORTS_ENABLED` — `"true"` to enable the cron reports (prod only).

## Testing

- `lib/slack.test.ts` — `scrambleEmail`, `formatWin` per win type (+ anonymous
  fallback), and `sendSlackMessage` boolean return across unconfigured / success /
  HTTP error / API error / network throw (mock `fetch`).
- `slack.test.ts` — `bumpWinCounter` (increment / key isolation / floor at 0) and
  `postWin` (no-op unconfigured, posts + numbers when configured, counter rollback
  keeps "#N this month" dense on failed delivery) via convex-test.
- `slack/internal.test.ts` — `getReportStats` window aggregation +
  `getWorkspaceOwnerUserId` (convex-test).

## Out of scope

- Explicit "new workspace created" ping (covered by signup + member-joined).
- Renewal / churn / cancellation pings (hook left in place, not wired).
- Two-way Slack (Events API) — the bot only sends outbound.
