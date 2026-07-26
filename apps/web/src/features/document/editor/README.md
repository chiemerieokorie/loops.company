# Document editor (`features/document/editor`)

A Notion-feel block editor built on the **free** Tiptap/ProseMirror core only: no
Tiptap Cloud, no Pro-licensed extensions. Every dependency it adds is MIT:

| Package | Gives us |
| --- | --- |
| `@tiptap/suggestion` | the `/` slash trigger (same primitive Mention uses) |
| `@tiptap/extensions` | `Placeholder` (the empty-line prompt) |
| `@tiptap/extension-list` | `TaskList` / `TaskItem` (checkbox to-dos) |
| `@tiptap/extension-highlight` | the highlight mark |
| `@tiptap/extension-drag-handle-react` | block drag-to-reorder |

## Why it's shaped this way

The goal is an editor you can **change, improve, or replace** without touching the
document's domain logic. So the module is built around three decoupled seams:

| Concern | Where it lives | How it's injected |
| --- | --- | --- |
| **Transport** (Convex OT sync) | `../collab-document.tsx` | passed in as an extension (`sync.extension`), always **last** |
| **Domain blocks** (none by default) | your feature | pass extra node extensions / slash commands via `buildEditorExtensions({ extensions, slashItems })` |
| **Editor chrome** (slash, bubble, prose, extensions) | this folder | the default; knows nothing about Convex or any domain block |

The editor module never imports domain or Convex code — the document feature
injects anything app-specific from above. To swap the whole editor, reimplement
`editor.tsx` against the same `{ content, extensions }` contract and leave
`collab-document.tsx` mostly intact.

## Files

```
editor/
  editor.tsx            The presentational shell (EditorProvider + bubble menu + drag handle). The replace seam.
  build-extensions.ts   The ONE factory that composes the extension set. Edit here to add/remove an extension.
  editor-config.ts      Shared editorProps: the `.runway-doc-editor` scope class + prose classes on the contenteditable.
  drag-handle.tsx       The block drag handle (a rendered React portal, not an extension); reads the editor from context.
  extensions/
    placeholder.ts      Configured Placeholder: "Press / for commands" + per-heading hints.
    custom-keymap.ts    SelectWithinBlock — Mod-A selects the block first, then the doc (+ pure helpers).
    task-list.ts        Configured TaskList + TaskItem (checkbox to-dos), styled to our tokens.
    highlight.ts        Configured single-color Highlight mark (accent-iris tint).
  slash/
    slash-registry.ts   DATA: SlashItem[] (text, headings, lists, to-do, quote, code, divider) + filterSlashItems().
    slash-command.ts    The Tiptap extension over @tiptap/suggestion (plumbing only).
    slash-menu.tsx      The keyboard-navigable popup (React 19 ref-as-prop, imperative onKeyDown handle).
  bubble/
    bubble-registry.ts  DATA: BubbleItem[] (bold/italic/strike/code/highlight).
    bubble-menu.tsx     The selection menu via the built-in @tiptap/react/menus BubbleMenu + `bubbleShouldShow`.
    link-editor.tsx     Inline link control (LinkForm) that swaps into the bar when the link toggle is pressed.
    link-url.ts         Pure link helpers: normalizeUrl (safe-scheme) + applyLink/removeLink (editor ops).
```

`Link` ships in StarterKit (configured in `build-extensions.ts`: `openOnClick:
false`, autolink, https default). The link control renders **inline** in the bubble
bar rather than in a portaled popover — the BubbleMenu plugin hides on blur unless
focus stays inside the menu's own DOM, so a portal would collapse the bar mid-edit.

The editor's own CSS (placeholder ghost text, task-list checkbox tint) lives in
`@runway/ui` `src/styles/globals.css`, scoped to the `.runway-doc-editor` class that
`editor-config.ts` sets on the editable. `prose-sm` styling comes from the
`@tailwindcss/typography` plugin (also registered in that stylesheet).

## Extending

- **Add a slash command:** append a `SlashItem` to `BUILTIN_SLASH_ITEMS` — or inject
  a domain one via `buildEditorExtensions({ slashItems })`. Shape:
  `{ title, description, icon, aliases?, command(editor, range) }`.
- **Add a bubble toggle:** append a `BubbleItem` to `BUBBLE_ITEMS` —
  `{ name, label, icon, isActive(editor), command(editor) }`.
- **Add a block/mark extension:** configure it in `extensions/<name>.ts`, then add
  it to the array in `build-extensions.ts`. If it needs CSS, scope it under
  `.runway-doc-editor` in the UI globals.
- **Restyle:** the menus are plain shadcn-token markup; touch only the `.tsx`.

## Invariants (don't break these)

- **Order matters in `extensions`:** the collab transport (`sync.extension`) must
  stay **last** so its plugin wraps everything above it.
- **Free Tiptap only:** verify any new extension isn't Pro before depending on it;
  never wire Tiptap Cloud (collaboration is the Convex `prosemirror-sync` component).
- **Never auto-create:** documents are created server-side via
  `api.prosemirror.createDocument` (which records the workspace membership gate). The
  editor surfaces a "not created" state rather than calling the hook's auto-create,
  which would hit the gated `submitSnapshot` with no `documents` row.

## Tests

Vitest is set up in `apps/web` (`pnpm --filter web test`). Covered so far — the
editor's pure helpers, which run without a Convex deployment:

- `bubble/link-url.test.ts` — `normalizeUrl` (safe-scheme guard + https default).
- `slash/slash-registry.test.ts` — `filterSlashItems` (title/alias matching).

Follow-ups:
- **Backend membership gate** (`prosemirror.list/rename/remove` deny non-members)
  via `convex-test`. Needs a `convex dev` codegen pass first — `convex-test` imports
  the whole `convex/` module graph, including `betterAuth/_generated`, which only
  exists after codegen.
- **Editor browser tests** (slash/bubble/extensions) — astor ships Playwright/Chromium
  versions; porting them needs a browser-vitest harness runway doesn't have yet.

---

## Shipped from Novel (steven-tey/novel · Apache-2.0)

Adapted from Tiptap v2 → v3 and wired to our stack (see the repo-root `NOTICE`):

- **Image upload** — `extensions/image.ts` (`/image` slash command → file picker →
  upload) backed by Convex file storage (`packages/backend/convex/files.ts`).
  Images are stored by URL, never base64, so the OT log stays small.
- **Syntax-highlighted code blocks** — `extensions/code-block.ts` (lowlight,
  ~37 languages), replacing StarterKit's plain `codeBlock`.
- **Underline** — added to the bubble menu (StarterKit v3 provides the mark).
- `TextStyle` + `Color` extensions are installed and composed (foundation for the
  colour picker below).

## Roadmap — researched, deliberately deferred

Reference editors surveyed: **Novel** (steven-tey/novel · Apache-2.0 · Tiptap),
**Yoopta-Editor** (MIT · Slate.js), plus featul/anarlog (MIT) and dub/plane
(**AGPL-3.0**). **Licensing rule:** copy from Apache/MIT sources *with attribution*;
only *learn patterns* from AGPL sources — copying their code would impose AGPL.
Yoopta is MIT but Slate/Yjs-based, so it's learn-only for architectural reasons.

| Feature | Source / note |
| --- | --- |
| Text colour picker | Novel palette; `TextStyle`+`Color` already installed. Must render **inline** in the bubble bar (like the link control) — a portaled dropdown collapses the BubbleMenu on blur. |
| Image drag/drop + paste + resize | Novel's `upload-images` plugin (base64 placeholder) + `react-moveable`. v1 is slash-upload only. |
| AI assist (inline autocomplete / commands) | Novel (Apache-2.0) → a Convex action calling an LLM |
| Live presence cursors / avatars | Convex `Presence` component (separate from `prosemirror-sync`) |
| Tables | Tiptap's free table extensions (featul/Yoopta show the UX) |
| Callout / toggle / accordion / steps blocks | Yoopta feature set (learn-only; build as Tiptap nodes) |
| `@mentions` | free `Mention` extension (same `@tiptap/suggestion` primitive as the slash menu) |
| YouTube / Twitter embeds, Math (KaTeX) | Novel (Apache-2.0) extensions; each needs a small insert UI |
| Heading outline / TOC, Markdown / HTML export | Yoopta serializers/TOC show the surface |

### Won't take

- **Yjs / Hocuspocus collaboration.** Incompatible with `@convex-dev/prosemirror-sync`
  (OT, not CRDT). Do not port a second collab layer.
- **Tiptap Cloud / any Pro-licensed extension.** Collaboration is the Convex
  component; keep the editor on the free core.
