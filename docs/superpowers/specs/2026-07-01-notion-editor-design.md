# Notion-like Documents Editor — Design Spec

- **Date:** 2026-07-01
- **Status:** Approved for planning
- **Scope:** A workspace-scoped, Notion-feel document editor for `apps/web`, lifted from astor's proven editor and wired to Convex `prosemirror-sync`.

## 1. Summary

Add a **documents workspace** to runway: members of a workspace can create, list,
rename, and delete documents, and edit each in a Notion-feel block editor.
Editing autosaves and syncs in real time (operational-transform) across clients
through Convex's `@convex-dev/prosemirror-sync` component. No Tiptap Cloud, no Pro
extensions, no AI.

The editor itself is **lifted almost verbatim from astor**
(`apps/web/src/features/document/editor/`), which is a production, tested,
deliberately-decoupled Notion editor on free Tiptap v3. Because runway's `main`
already ported astor's org/workspace model, access layer, and `@runway/ui`
(icons, tokens, `separator`/`toggle`, `text-p13` utilities), the port is mostly an
`@astor/ui` → `@runway/ui` import rename plus new backend wiring and routes.

### What "collaboration" means here (important)

`prosemirror-sync` merges concurrent edits via operational transforms and
autosaves snapshots. It does **not** provide live presence cursors / avatars —
that is a documented future feature. v1 therefore delivers real collaborative
editing + persistence, but not the "see other people's cursors" effect. Presence
can be added later via the separate Convex `Presence` component.

## 2. Goals / Non-goals

**In scope (v1):**

- Workspace-scoped documents: list, create, rename, delete.
- Notion-feel editing: paragraphs, H1–H3, bullet/ordered/**task** lists,
  blockquote, code block, divider; bold/italic/strike/inline code, highlight,
  links. (Astor's bubble toolbar exposes exactly these marks — no underline;
  add it later as a one-line registry entry if wanted.)
- `/` slash command menu (10 built-in blocks) and a floating bubble toolbar for
  inline formatting + inline link editor.
- Empty-state placeholder hints; Notion-style `Mod-A` (select block, then doc).
- **Block drag-handle** for reordering (added on top of the astor lift — astor
  researched but deferred this).
- Real-time OT sync + autosave via Convex; multi-tab / multi-client.
- `prose-sm` typography via `@tailwindcss/typography`.

**Out of scope (deferred, each a clean follow-up):**

- AI assistance.
- Live presence cursors / avatars (`prosemirror-sync` limitation).
- Image upload, `@mentions`, emoji picker, math, tables.
- Per-document sharing beyond workspace membership (access = workspace membership).

## 3. Access model

Documents belong to a **workspace** (Better Auth organization id, a string).
A document is readable/writable only by a member of its workspace — the same
model astor uses, now that runway has the org/workspace layer on `main`.

- The five component-generated sync endpoints are gated **only** by
  `checkRead`/`checkWrite` (they do not pass through `authedQuery`/`authedMutation`
  and are not covered by the RLS net). Their gate is `assertDocMember`, which
  resolves the doc's workspace and calls `assertMember`.
- `createDocument` / `list` / `rename` / `remove` are built from
  `authedQuery`/`authedMutation` (RLS net + explicit `assertMember`).

## 4. Architecture

Three decoupled seams, inherited from astor's editor README:

| Concern | Where | How injected |
| --- | --- | --- |
| Transport (Convex OT sync) | `collab-document.tsx` | `sync.extension`, always **last** in the array |
| Domain blocks | (none in runway v1) | astor injected a MetricBlock here; runway injects nothing |
| Editor chrome (slash, bubble, prose, extensions) | `features/document/editor/` | the default; knows nothing about Convex |

### 4.1 Frontend — lift `features/document/editor/**` (import rename only)

Copy verbatim from astor, changing `@astor/ui` → `@runway/ui`:

- `editor.tsx` — the `EditorProvider` shell + bubble menu (the `{content, extensions}` contract).
- `build-extensions.ts` — the one factory that composes the extension set. **Add the drag-handle here.**
- `editor-config.ts` — `editorProps`; the scope class (renamed, see §4.4) + `prose-sm`.
- `extensions/placeholder.ts`, `task-list.ts`, `highlight.ts`, `custom-keymap.ts`.
- `slash/slash-registry.ts`, `slash-command.ts`, `slash-menu.tsx`.
- `bubble/bubble-registry.ts`, `bubble-menu.tsx`, `link-editor.tsx`, `link-url.ts`.

All `@astor/ui/icons` used by the chrome (IconH1/H2/H3, IconParagraph,
IconListBullets, IconNumberedList, IconChecklist, IconOpenQuote1, IconCode,
IconMinusLarge, IconBold, IconItalic, IconStrikeThrough, IconHighlight,
IconChainLink1, IconBrokenChainLink1) exist in `@runway/ui/icons`. Custom-token
classes (`border-border-subtle`, `bg-accent-iris/20`, `shadow-soft`, `text-p13`)
all resolve in `@runway/ui` globals. `separator` and `toggle` primitives exist.

### 4.2 Frontend — `collab-document.tsx` (copy + genericize)

Strip astor's `MetricBlock` / `metric-engine` injection. Result:

```tsx
export function CollabDocument({ docId }: { docId: string }) {
  const sync = useTiptapSync(api.prosemirror, docId, { snapshotDebounceMs: 1000 });
  const extensions = useMemo(
    () => (sync.extension ? buildEditorExtensions({ extensions: [sync.extension] }) : []),
    [sync.extension]
  );
  if (sync.isLoading) return <LoadingState />;
  if (sync.initialContent === null) return <NotCreatedState />; // never auto-create; created server-side
  return (
    <div className="mx-auto w-full max-w-[620px] px-2">
      <Editor content={sync.initialContent} extensions={extensions} />
    </div>
  );
}
```

### 4.3 Routes & shell (net-new — astor has no flat documents list to lift)

- `(authed)/[workspace]/documents/page.tsx` — server component; resolve the
  workspace via `assertWorkspaceAccess(params.workspace)`; render a
  `<DocumentList workspaceId={...} />` client component.
- `(authed)/[workspace]/documents/[docId]/page.tsx` — render `<CollabDocument docId={params.docId} />`.
- `features/document/document-list.tsx` — client: `useQuery(api.prosemirror.list, { workspaceId })`,
  a "New document" button (`useMutation(api.prosemirror.createDocument)` → `router.push(.../documents/<docId>)`),
  and per-row rename/delete via the existing `dropdown-menu` primitive.
- Add `"documents"` to `WORKSPACE_ROUTES` in `apps/web/src/lib/workspace-routes.ts`
  (so the slug-rewrite proxy recognizes the route).
- Add a "Documents" entry to `features/shell/app-sidebar.tsx`.

### 4.4 Editor CSS

Port astor's scoped block from `apps/web/src/index.css` (the `.is-empty::before`
placeholder ghost text + the `taskList` checkbox tint) into `@runway/ui`
`globals.css`, renaming the scope class `.astor-doc-editor` → `.runway-doc-editor`,
and update the class string in `editor-config.ts` to match.

### 4.5 Backend — `packages/backend/convex`

- **`convex.config.ts`:** `app.use(prosemirrorSync)`.
- **`schema.ts`:** add
  ```ts
  documents: defineTable({
    docId: v.string(),       // prosemirror-sync doc id = crypto.randomUUID()
    workspaceId: v.string(), // Better Auth organization id (tenancy boundary)
    title: v.string(),
  })
    .index("by_doc", ["docId"])
    .index("by_workspace", ["workspaceId"]),
  ```
- **`lib/functions.ts` → `buildRules`:** add `documents: workspaceScoped` so authed
  handlers may read/insert/patch/delete the table through the RLS-wrapped `db`
  (deny-by-default would otherwise block it).
- **`prosemirror.ts` (new):**
  ```ts
  const prosemirrorSync = new ProsemirrorSync(components.prosemirrorSync);

  async function assertDocMember(ctx, docId) {
    const doc = await ctx.db.query("documents")
      .withIndex("by_doc", q => q.eq("docId", docId)).first();
    if (!doc) throw new Error("document not found");
    await assertMember(ctx, doc.workspaceId);
  }

  export const { getSnapshot, submitSnapshot, latestVersion, getSteps, submitSteps } =
    prosemirrorSync.syncApi({ checkRead: assertDocMember, checkWrite: assertDocMember });

  export const createDocument = authedMutation({
    args: { workspaceId: v.string(), title: v.string() },
    returns: v.string(),
    handler: async (ctx, { workspaceId, title }) => {
      await assertMember(ctx, workspaceId);
      const docId = crypto.randomUUID();
      await prosemirrorSync.create(ctx, docId, { type: "doc", content: [] });
      await ctx.db.insert("documents", { docId, workspaceId, title });
      return docId;
    },
  });

  export const list = authedQuery({ /* { workspaceId } → assertMember → by_workspace rows */ });
  export const rename = authedMutation({ /* { docId, title } → assertDocMember → patch title */ });
  export const remove = authedMutation({ /* { docId } → assertDocMember → delete row (see §7) */ });
  ```
  Drop astor's sheet-bound path entirely (`sheetId`, `forSheet`,
  `assertSheetAccess`, `assertWorkbookAccess`).

### 4.6 Data flow

`New` → `createDocument` (empty ProseMirror doc + `documents` row, one txn) →
navigate to `/[workspace]/documents/<docId>` → `useTiptapSync` subscribes to the
snapshot and installs the sync extension → edits become steps (`submitSteps`) that
fan out reactively (`getSteps`); debounced snapshots persist the full doc. Every
sync read/write passes `assertDocMember` (workspace membership).

## 5. Dependencies to add

- `apps/web`: `@tiptap/core`, `@tiptap/pm`, `@tiptap/react`, `@tiptap/starter-kit`,
  `@tiptap/suggestion`, `@tiptap/extensions`, `@tiptap/extension-list`,
  `@tiptap/extension-highlight` (all `^3.27.1`, the Tiptap v3 line astor pins),
  plus `@tiptap/extension-drag-handle-react` (same v3 line — new to runway, astor
  deferred it), `@convex-dev/prosemirror-sync` (`^0.2.4`), and the ProseMirror
  peers astor pins (`prosemirror-collab`, `-model`, `-state`, `-transform`).
- `packages/backend`: `@convex-dev/prosemirror-sync` (`^0.2.4`).
- Root/UI: `@tailwindcss/typography` (registered via `@plugin` in the Tailwind v4
  `globals.css`) for `prose-sm`.

## 6. Error handling

- Unauthenticated → handled by the existing `(authed)` / `[workspace]` layout gates.
- Unknown or foreign `docId` → `assertDocMember` throws (`"forbidden"` / `"document not found"`);
  the editor renders a not-found / no-access state.
- Sync errors → `onSyncError` → `sonner` toast.
- `warnOnUnsyncedClose` (default on) guards against tab-close data loss.

## 7. Open implementation details (verify during build)

- **Delete cleanup:** confirm whether `prosemirror-sync` exposes a per-doc delete
  for its `snapshots`/`deltas`. If not, `remove` deletes the `documents` row and the
  OT log is orphaned (harmless — unreachable without the row); add a cron sweep
  later if needed. astor never implemented delete, so there is no reference to lift.
- **Drag-handle:** confirm the exact package/version and any required CSS; ensure it
  composes with the sync view plugin (it is a view plugin, so expected safe).
- **Typography in Tailwind v4:** wire `@plugin "@tailwindcss/typography";` in the UI
  `globals.css`.

## 8. Testing

- **Editor chrome:** astor's browser tests (`slash.browser.test.tsx`,
  `bubble.browser.test.tsx`, `extensions.browser.test.tsx`, `link-url` node test)
  port with the code (import-path adjustments only).
- **Backend:** `convex-test` for `createDocument` / `list` / `rename` / `remove`
  happy paths and the `assertDocMember` gate (a non-member is denied read and
  write), following runway's existing Convex test patterns.
- `check-types` and `ultracite` must pass.

## 9. Build sequence

1. **Backend foundation** — deps; `convex.config.ts`; `documents` table + `by_doc`/`by_workspace`;
   `documents` RLS rule; `prosemirror.ts` (sync API + CRUD); backend tests.
2. **UI package** — port the scoped editor CSS into `@runway/ui` globals (renamed);
   register `@tailwindcss/typography`.
3. **Frontend editor** — lift `editor/**` + `collab-document.tsx` (strip MetricBlock),
   rename imports, add the drag-handle; port the editor browser tests.
4. **Routes & shell** — documents list + editor pages; `WORKSPACE_ROUTES`; sidebar nav.
5. **Docs** — port the genericized editor README (§10) alongside the code.
6. **Verify** — `check-types`, `ultracite`, editor browser tests, and a manual
   create → type → reload → persists pass.

## 10. Documentation to port

Astor's editor ships an architecture README
(`apps/web/src/features/document/editor/README.md`) that documents the three
decoupled seams, the extension table, the "don't break these" invariants (sync
transport stays **last**; free-Tiptap-only), and a researched roadmap with
licensing discipline. It is one of the highest-value things to take — a starter
template benefits enormously from an editor that explains itself.

Port it to `apps/web/src/features/document/editor/README.md`, **genericized**:

- Strip astor-domain references: "underwriting", the metric block, `arch/07`,
  `STACK.md §6`, `PRD.md §8.9`, and the metric-specific invariant.
- Keep: the seams table, the extension table, the ordering/free-Tiptap invariants,
  the "Extending" and "Tests" sections, and the roadmap (§11) — these are exactly
  the guidance a starter user needs to extend the editor safely.

Astor's `docs/arch/07-DOCUMENT-PLANE.md` is mostly astor-domain (atomic metric
blocks, underwriting) — reference only; do not lift.

## 11. Reference editors evaluated & roadmap (deferred)

We evaluated **Novel** (steven-tey/novel, Apache-2.0, Tiptap) and **Yoopta-Editor**
(yoopta-editor, MIT, Slate.js). Neither changes the architecture:

- **Novel** shares our Tiptap foundation and validates the approach. Nothing new
  is needed for v1; it's a clean, attribution-friendly reference for the deferred
  **AI** phase (its autocomplete uses the Vercel AI SDK — for runway that maps to a
  Convex action calling an LLM) and for **image upload** (it uses Vercel Blob; for
  runway that maps to Convex file storage).
- **Yoopta** is a rich feature menu but is **Slate-based** and collaborates via
  **Yjs CRDT** — incompatible with Convex `prosemirror-sync` (OT). Treat it as a
  **feature-inspiration / learn-only** source, never a code lift; adopting it would
  mean abandoning both the astor lift and prosemirror-sync.

**Roadmap (deliberately deferred — do NOT expand v1):**

| Feature | Source / license note |
| --- | --- |
| AI assist (inline autocomplete / commands) | Novel (Apache-2.0) pattern → Convex action + LLM |
| Image upload | Novel pattern → Convex file storage |
| Live presence cursors / avatars | Convex `Presence` component (separate from `prosemirror-sync`) |
| Tables | Tiptap free table extensions (Yoopta/featul show the UX) |
| Callout / toggle / accordion / steps blocks | Yoopta feature set (learn-only; build as Tiptap nodes) |
| `@mentions` of users/entities | Tiptap free `Mention` (same `@tiptap/suggestion` primitive as our slash menu) |
| Heading outline / Table of contents | Yoopta TOC; plane (AGPL — rebuild, don't copy) |
| Markdown / HTML export | Yoopta serializers show the surface |
| Math (KaTeX), embeds, code syntax highlighting | Yoopta plugin set (learn-only) |

**Licensing discipline (inherited from astor's README):** copy from Apache/MIT
sources *with attribution* (Novel); only *learn patterns* from AGPL sources (dub,
plane) — copying their code would impose AGPL. Yoopta is MIT but Slate-based, so
it's learn-only for architectural reasons, not licensing ones.
