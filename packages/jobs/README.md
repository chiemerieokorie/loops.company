# @runway/jobs

Runway's [Trigger.dev](https://trigger.dev) background-jobs project. It runs in its
own Node runtime, deployed separately to loops.company's **self-hosted** Trigger.dev
instance (`https://trigger.loops.company`) — it is not part of the Next.js or Convex
bundles. The Convex backend enqueues runs with `tasks.trigger(...)` (see
`convex/jobs.ts`); each task does its work and POSTs its result back to a Convex HTTP
endpoint (`convex/http.ts`).

It consumes loops' shared toolkit, published to GitHub Packages:

- [`@chiemerieokorie/trigger-kit`](https://github.com/chiemerieokorie/loops/tree/main/packages/trigger)
  — R2 raw-blob storage (`putRaw`/`putRawAt`), the Convex `rawRef` validator, and the
  `rawStore()` build extension + `SHARED_RETRIES`.
- [`@chiemerieokorie/docling`](https://github.com/chiemerieokorie/loops/tree/main/packages/docling)
  — client for the self-hosted `docling-serve` (PDF/HTML → Markdown/JSON) + its
  `docling()` build extension.

## Tasks

| id | file | needs | what it does |
| --- | --- | --- | --- |
| `hello-world` | `src/trigger/example.ts` | — | skeleton; verify the project deploys/runs |
| `export-note` | `src/trigger/export-note.ts` | R2 | note → Markdown → R2 → `rawRef` on the note |
| `parse-document` | `src/trigger/parse-document.ts` | R2 + docling | external URL → Markdown (docling) → R2 → `rawRef` on a `documentImports` row |

## Setup

1. **Auth to GitHub Packages** (installs the `@chiemerieokorie/*` deps):
   ```sh
   export NODE_AUTH_TOKEN=$(gh auth token)   # token needs read:packages
   pnpm install
   ```
2. **Set the project ref** in `trigger.config.ts` (`project: "proj_…"`) from the
   self-hosted dashboard.
3. **Configure env** — copy `.env.example` to `.env` and fill it in. The R2 +
   docling + callback-secret vars must also exist on the **Trigger.dev project env**
   for deployed runs; the build extensions sync them from your deploy environment at
   `trigger.dev deploy` time (`syncEnv: true` in `trigger.config.ts`).

## Develop & deploy

```sh
pnpm --filter @runway/jobs trigger:dev      # trigger.dev dev — local run loop
pnpm --filter @runway/jobs trigger:deploy   # trigger.dev deploy — push to the instance
pnpm --filter @runway/jobs check-types
```

The scripts are named `trigger:*` (not `dev`/`deploy`) on purpose, so the repo-wide
`pnpm dev` / `turbo dev` doesn't try to spawn `trigger.dev dev` (which needs an auth
token and would hang the dev pipeline).

The CLI targets the self-hosted instance via `TRIGGER_API_URL` +
`TRIGGER_ACCESS_TOKEN`. CI deploys on push to `main` (see
`.github/workflows/deploy-jobs.yml`).
