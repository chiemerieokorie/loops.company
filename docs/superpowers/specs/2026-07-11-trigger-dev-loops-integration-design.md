# Trigger.dev + loops toolkit integration — design

Date: 2026-07-11
Branch: `claude/trigger-dev-loops-integration-5a46ac`

## Goal

Bring loops.company's Trigger.dev setup into Runway: a durable background-jobs
runtime that consumes loops' shared toolkit packages and is wired to the Convex
backend. "The trigger there" = the `~/projects/loops.company` monorepo, which
publishes two GitHub-Packages libraries and self-hosts a Trigger.dev instance +
a docling service:

- `@chiemerieokorie/trigger-kit@^0.2.0` — R2 raw-blob storage
  (`putRaw`/`putRawAt`/`getRaw`), the Convex `rawRef` validator (`/convex`), and a
  `rawStore()` build extension + `SHARED_RETRIES` (`/build`). (This is the current
  name; the older `@chiemerieokorie/trigger@0.1.0` is the pre-rename package.)
- `@chiemerieokorie/docling@^0.3.0` — TS client (`DoclingClient`) for the self-hosted
  `docling-serve` (PDF/HTML → structured Markdown/JSON), plus a `docling()` build
  extension (`/build`).
- Self-hosted Trigger.dev at `https://trigger.loops.company`; docling at
  `https://docling.loops.company`.

Runway is exactly the "product repo" these are built to be consumed by.

## Latest SDK only

Trigger.dev **v4** (`@trigger.dev/sdk@^4.4.5`, matching loops' `@trigger.dev/build`
peer). Never the deprecated v2 `new Trigger().listen()` / `client.defineJob`. Tasks
are defined with `task()` / `schemaTask()` from `@trigger.dev/sdk`; backends trigger
via `tasks.trigger<typeof task>("id", payload)` with a **type-only** import.

## Architecture

New workspace package **`@runway/jobs`** (`packages/jobs`) holds the Trigger.dev
project — its own Node runtime, deployed separately to the self-hosted Trigger.dev
instance. It is NOT imported by the app except as a **type-only** import for
`tasks.trigger` generics.

```
Convex mutation (member action)                 packages/jobs (Trigger.dev runtime)
  └─ "use node" action: jobs.ts                    trigger/documentSnapshot.ts
       tasks.trigger<typeof task>(id, payload) ───▶ schemaTask.run:
                                                       - do work (read doc / docling)
                                                       - putRaw(...) → RawRef  (R2)
                                                       - POST callback to Convex http
  http.ts  /trigger/*-complete  ◀──────────────────  (shared-secret header)
    └─ internal.*.attachRef({ ...rawRef })  →  store rawRef on the row
```

Callback (server→server HTTP) is the completion channel — simplest and it keeps the
`rawRef` write inside a trusted internal mutation. Trigger.dev Realtime is the
alternative (see `trigger-realtime` skill) if the UI later needs live progress.

### Tasks (`packages/jobs/src/trigger/`)

1. `example.ts` — `helloWorld` skeleton, no external deps. Proves the pipeline.
2. `export-note.ts` — `exportNoteTask` (`schemaTask`, `noteExportPayload`): renders a
   note to Markdown and `putRawAt({ id: "{workspaceId}:{noteId}", ... })`, POSTs the
   `RawRef` back. Needs only R2 (no docling) — the simplest end-to-end proof.
   (Chosen over a ProseMirror-snapshot task, which would need the full editor schema +
   a mutation ctx server-side — too much coupling for a starter demo.)
3. `parse-document.ts` — `parseDocumentTask` (`schemaTask`, `parseDocumentPayload`):
   `DoclingClient.convertUrlAndWait(sourceUrl, { toFormats: ["md"], tableMode:
   "accurate" })`, `putRaw(... md)`, POSTs the `RawRef`. The canonical loops job.

Payload contracts live in `src/payloads.ts` as Zod schemas (dependency-light — only
`zod`), so the backend imports the inferred TYPES from `@runway/jobs/payloads` without
pulling the task implementations into the Convex bundle.

`trigger.config.ts`: `defineConfig({ project, runtime: "node", dirs: ["./src/trigger"],
retries: SHARED_RETRIES, build: { extensions: [rawStore()] } })`.

### Backend changes (`packages/backend/convex`)

- `schema.ts`: import `rawRef` from `@chiemerieokorie/trigger-kit/convex`.
  - `notes` += `exportRef: v.optional(rawRef)`.
  - new `documentImports` table `{ workspaceId, sourceUrl, filename, status:
    "pending"|"ready"|"failed", ref: v.optional(rawRef), error: v.optional(...) }`
    with `by_workspace` index — the docling ingest record.
- `jobs.ts` — a `"use node"` file: `authedAction exportNote({ noteId })` and
  `internalAction enqueueDocumentImport({ importId })`. Each gathers its payload from
  an internal query, then `tasks.trigger("<id>", payload)` (payload typed via
  `@runway/jobs/payloads`). `TRIGGER_SECRET_KEY` / `TRIGGER_API_URL` from Convex env;
  `callbackUrl` built from `CONVEX_SITE_URL`.
- `notes.ts` — internal query `loadForExport({ noteId, userId })` (asserts membership)
  + internal mutation `attachExportRef({ noteId, ref })`.
- `documentImports.ts` — `authed*` `request`/`list`, internal query `loadForJob`, and
  internal mutations `attachRef({ importId, ref })` / `markFailed`. `request` inserts
  the row `pending` and schedules `internal.jobs.enqueueDocumentImport`.
- `lib/functions.ts` — RLS rule `documentImports: workspaceScoped`.
- `http.ts` — two `httpAction` routes `/trigger/note-export-complete` and
  `/trigger/import-complete`, guarded by a constant-time check of an
  `x-trigger-callback-secret` header (`TRIGGER_CALLBACK_SECRET`), calling the
  internal `attach*Ref` mutations.

### Root / tooling

- `.npmrc` += `@chiemerieokorie:registry=https://npm.pkg.github.com` +
  `//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}` (keep `node-linker=isolated`).
- `packages/jobs/package.json` — deps `@trigger.dev/sdk`, `@chiemerieokorie/trigger`,
  `@chiemerieokorie/docling`; dev `@trigger.dev/build`, `trigger.dev`, `typescript`.
  Scripts: `deploy` (`trigger.dev deploy`), `dev` (`trigger.dev dev`), `check-types`.
- Turbo: `@runway/jobs` gets `check-types`; excluded from `turbo dev` (its own
  `trigger.dev dev` loop, run manually).
- CI: a `deploy-jobs` workflow (on push to `main`, `packages/jobs/**`) running
  `trigger.dev deploy` with `TRIGGER_ACCESS_TOKEN` + `NODE_AUTH_TOKEN` secrets.

## Prerequisites (owner-provided, out of band)

Trigger.dev project ref + `TRIGGER_SECRET_KEY`; `TRIGGER_ACCESS_TOKEN` (deploy PAT);
GitHub `read:packages` token (`NODE_AUTH_TOKEN`); Cloudflare R2 bucket + `R2_*`
(on the Trigger project env); docling `DOCLING_SERVE_URL` + `DOCLING_SERVE_API_KEY`
(on the Trigger project env); `TRIGGER_CALLBACK_SECRET` (Convex env + Trigger project
env); Convex `TRIGGER_API_URL=https://trigger.loops.company`.

## Known flags / risks

- `@chiemerieokorie/*` are **private** GitHub Packages — `pnpm install` fails without
  `NODE_AUTH_TOKEN` (`read:packages`). Backend codegen imports `rawRef` from the
  package, so the backend build depends on it resolving. Wired into `ci.yml` and
  `deploy-jobs.yml` via `secrets.NODE_AUTH_TOKEN`.
- pnpm's global `minimumReleaseAge` guard blocks freshly-published versions; the two
  first-party packages are added to `minimumReleaseAgeExclude` in `pnpm-workspace.yaml`.
- `@trigger.dev/build`'s `tsconfck` peer wants TypeScript `^5`, but the repo catalog
  pins `typescript@^6` — a benign install peer warning; `tsc` typechecks fine.
- Pinned to the current published names/versions: `@chiemerieokorie/trigger-kit@^0.2.0`
  (the rename of `@chiemerieokorie/trigger`) and `@chiemerieokorie/docling@^0.3.0`
  (which ships the `docling()` build extension).

## Non-goals

Front-end UI for imports/snapshots (a later feature); replacing Convex crons/scheduler
for in-DB work (Trigger.dev is only for durable/external/long-running jobs).
