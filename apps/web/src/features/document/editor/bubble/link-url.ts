import type { Editor } from "@tiptap/core";

// Pure link helpers, kept free of React so the URL normalization is unit-testable
// in plain Node and the editor ops stay a thin, named seam.

const SAFE_PROTOCOLS = new Set(["http:", "https:", "mailto:"]);
// Matches a leading "scheme:" so we only prepend https:// to schemeless input.
const SCHEME_RE = /^[a-z][\w+.-]*:/i;

// Normalize user input to a safe href, or null if it isn't one. Schemeless input
// gets https://; only http/https/mailto are allowed (javascript:, data:, etc. are
// rejected so a typed link can't become an injection vector).
export function normalizeUrl(input: string): string | null {
	const trimmed = input.trim();
	if (!trimmed) {
		return null;
	}
	const candidate = SCHEME_RE.test(trimmed) ? trimmed : `https://${trimmed}`;
	try {
		const url = new URL(candidate);
		return SAFE_PROTOCOLS.has(url.protocol) ? url.toString() : null;
	} catch {
		return null;
	}
}

// Apply the typed value as a link over the current selection (or the link under
// the caret). Empty/invalid input clears an existing link. Returns true when the
// form should close, false to keep editing so the user can correct the input.
export function applyLink(editor: Editor, value: string): boolean {
	const href = normalizeUrl(value);
	if (!href) {
		if (editor.isActive("link")) {
			removeLink(editor);
			return true;
		}
		return false;
	}
	editor.chain().focus().extendMarkRange("link").setLink({ href }).run();
	return true;
}

export function removeLink(editor: Editor): void {
	editor.chain().focus().extendMarkRange("link").unsetLink().run();
}
