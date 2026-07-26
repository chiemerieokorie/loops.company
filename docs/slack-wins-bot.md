# Slack "Wins Bot"

Post growth wins from the Runway backend to a Slack channel — new signups, new
members, new subscriptions — plus a daily/weekly aggregate report. It's **opt-in
and silent by default**: nothing is posted until you set the env vars, so local
dev, preview, and CI deployments stay quiet.

Code: [`convex/slack.ts`](../packages/backend/convex/slack.ts) (actions + crons
wiring), [`convex/lib/slack.ts`](../packages/backend/convex/lib/slack.ts) (pure
client + formatters), [`convex/slack/internal.ts`](../packages/backend/convex/slack/internal.ts)
(report query). Design notes:
[`docs/superpowers/specs/2026-07-12-slack-wins-bot-design.md`](superpowers/specs/2026-07-12-slack-wins-bot-design.md).

---

## 1. Setup

### a. Create a Slack app + bot token

1. Go to <https://api.slack.com/apps> → **Create New App** → *From scratch*. Pick
   your workspace.
2. **OAuth & Permissions** → *Scopes* → *Bot Token Scopes* → add **`chat:write`**.
3. **Install to Workspace** and copy the **Bot User OAuth Token** (`xoxb-…`).
4. Create (or pick) the target channel, e.g. `#runway-wins`. **Invite the bot**
   to it: in the channel, `/invite @YourApp`.
5. Get the channel **ID** (not the name): open the channel → *View channel
   details* → the `C…` id at the bottom.

### b. Set the Convex deployment env vars

```bash
pnpm convex env set SLACK_BOT_TOKEN xoxb-...
pnpm convex env set SLACK_WINS_CHANNEL C0XXXXXXX
# prod only — turns on the daily/weekly aggregate report crons:
pnpm convex env set SLACK_REPORTS_ENABLED true
```

| Var | Required | Effect |
| --- | --- | --- |
| `SLACK_BOT_TOKEN` | to enable anything | Bot token (`xoxb-…`) with `chat:write`. |
| `SLACK_WINS_CHANNEL` | to enable anything | Target channel **id**. Both this and the token must be set or the bot no-ops. |
| `SLACK_REPORTS_ENABLED` | reports only | `"true"` enables the report crons. Set on **prod only** — event pings fire on every configured deployment, but only this gates the aggregates. |

No channel id is hardcoded, so the starter never ships someone else's channel.
If either of the first two is unset, every helper returns early and posts nothing.

---

## 2. What it posts

### Event wins (real-time)

| Win | Fires from | Message |
| --- | --- | --- |
| **New signup** | Better Auth `user.onCreate` trigger ([`auth.ts`](../packages/backend/convex/auth.ts)) | `:tada: *New signup*` · masked identity · `signup #N this month` |
| **New member** | `member.onCreate` trigger, non-owner roles only | `:wave: *New member joined <workspace>*` · role · `member #N this month` |
| **New subscription** | Stripe `checkout.session.completed` ([`http.ts`](../packages/backend/convex/http.ts)) | `:moneybag: *New <plan> subscription* — <amount>` · `customer #N this month` |

Every win is **scheduled** (`ctx.scheduler.runAfter(0, …)`) from the originating
write, never called inline — so a Slack outage can never fail a signup, an invite
acceptance, or a Stripe webhook. All three funnel through one `internal.slack.postWin`
action over a typed `WinEvent` union.

The **`#N this month`** counter is a per-type monthly count kept in the
`winCounters` table. `postWin` bumps it to number the message and **rolls it back
if delivery fails**, so the sequence stays dense (a failed send doesn't burn a
number). The member-joined win is guarded on `role !== "owner"` so a new signup's
auto-created default workspace doesn't double-post.

### Reports (cron, prod only)

Two crons in [`crons.ts`](../packages/backend/convex/crons.ts) — `slack-daily-report`
(13:30 UTC) and `slack-weekly-report` (Mondays 14:00 UTC) — post an aggregate:
new/total users, new/total workspaces, documents + notes created + totals, over
the window, with a closing founder quote. Gated on `SLACK_REPORTS_ENABLED=true`.

---

## 3. PII redaction

Two layers, both in [`lib/slack.ts`](../packages/backend/convex/lib/slack.ts):

1. **Per-field masking** — the formatters mask emails to `j***@domain` via
   `scrambleEmail` before composing a message.
2. **Auto-redaction net** — `sendSlackMessage` runs **every string** in the
   outgoing payload through `redactPii` right before the `fetch`, as defense in
   depth. So even a free-text field that slips through (a user's display name or a
   workspace name that happens to contain an address or phone number) is scrubbed:
   - **Emails** anywhere → `j***@domain`.
   - **Phone/card-like digit runs** (10–15 digits) → `***1234` (last 4 kept).
   - Short numbers — amounts, `#N` counts, dates, Slack ids — are left intact, and
     already-masked values are inert.

To broaden coverage (e.g. redact more formats), extend `redactPii` in `lib/slack.ts`
and add a case to its tests in [`lib/slack.test.ts`](../packages/backend/convex/lib/slack.test.ts).
Because the net runs on the whole payload, you don't need to touch the formatters.

---

## 4. Adding a new win type

1. Add a variant to the `WinEvent` union in `lib/slack.ts` **and** the matching
   `winEventValidator` in `slack.ts` (keep them in sync).
2. Handle the new `event.type` in `formatWin` (its own emoji + `#N this month`
   line).
3. If it needs identity/workspace lookups, extend `resolveWin` in `slack.ts`
   (wrap lookups in the existing best-effort `try/catch` — a failed lookup must
   degrade to the anonymous `***` label, never drop a win).
4. Schedule it from the originating write:
   `ctx.scheduler.runAfter(0, internal.slack.postWin, { event: { type: "…", … } })`.
5. Add a `formatWin` case test and, if useful, a `postWin` test in
   [`slack.test.ts`](../packages/backend/convex/slack.test.ts).

---

## 5. Scaling the report with the aggregate component (optional)

`getReportStats` ([`slack/internal.ts`](../packages/backend/convex/slack/internal.ts))
counts by scanning the `documents`, `notes`, and `memberships` tables with
`.collect()`. That's intentional and fine for a **twice-daily** report at
starter/early scale. If those tables grow large enough that the scan is a problem,
swap it for [`@convex-dev/aggregate`](https://github.com/get-convex/aggregate),
which maintains O(log n) counts.

> **Trade-off first.** The aggregate is only correct if **every write** to a
> counted table mirrors it in the same mutation. That means instrumenting the
> insert/delete sites for `documents` (create + `prosemirror.purge`), `notes`
> (create + `notes.purge`), and — for the workspace count — `memberships`
> (`syncMembership` insert + `removeMembership` delete + role-change `replace`),
> plus a one-time backfill. It earns its keep on hot-path reads (read on every
> request), less so on a cron. Do this only when the scan actually hurts.

### a. Install + register

```bash
pnpm --filter @runway/backend add @convex-dev/aggregate
```

```ts
// convex/convex.config.ts
import aggregate from "@convex-dev/aggregate/convex.config";
// …
app.use(aggregate, { name: "documentsByCreation" });
app.use(aggregate, { name: "notesByCreation" });
```

### b. Define the aggregates

```ts
// convex/lib/aggregates.ts
import { TableAggregate } from "@convex-dev/aggregate";
import { components } from "../_generated/api";
import type { DataModel } from "../_generated/dataModel";

// Keyed by _creationTime so a report window is just a key range.
export const documentsByCreation = new TableAggregate<{
  Key: number;
  DataModel: DataModel;
  TableName: "documents";
}>(components.documentsByCreation, {
  sortKey: (doc) => doc._creationTime,
});

export const notesByCreation = new TableAggregate<{
  Key: number;
  DataModel: DataModel;
  TableName: "notes";
}>(components.notesByCreation, { sortKey: (doc) => doc._creationTime });
```

### c. Keep them in sync (the write discipline)

At **every** insert/delete of the counted tables, mirror it in the same mutation:

```ts
// on create:
const id = await ctx.db.insert("documents", doc);
await documentsByCreation.insert(ctx, await ctx.db.get(id));

// on delete (e.g. prosemirror.purge):
const doc = await ctx.db.get(documentId);
if (doc) await documentsByCreation.delete(ctx, doc);
```

Miss one write path and the count silently drifts — this is the whole cost of the
component. (`convex-helpers` `Triggers` can automate this so you can't forget; see
the aggregate README's "attach to a table via triggers" section.)

### d. Backfill existing rows

New aggregates start empty. Deploy the sync writes first (so new rows are counted),
then run a one-time backfill using the idempotent method so a re-run is safe:

```ts
export const backfillDocuments = internalMutation({
  args: {},
  handler: async (ctx) => {
    for (const doc of await ctx.db.query("documents").collect()) {
      await documentsByCreation.insertIfDoesNotExist(ctx, doc);
    }
  },
});
```

### e. Read it in `getReportStats`

Replace the scans with range counts (`countBatch` batches the window + total):

```ts
const [documentsCreated, totalDocuments] = await documentsByCreation.countBatch(
  ctx,
  [
    { bounds: { lower: { key: since, inclusive: true }, upper: { key: until, inclusive: false } } },
    {}, // all-time total
  ]
);
```

Workspaces (owner memberships only) are the fiddly one — the count changes on
owner↔member **role edits**, so its aggregate needs a `.replace` on every role
change in `syncMembership`. If that's not worth it, keep just the workspace count
as a scan and aggregate only `documents`/`notes`.
