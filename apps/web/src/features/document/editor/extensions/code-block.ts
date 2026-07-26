import { CodeBlockLowlight } from "@tiptap/extension-code-block-lowlight";
import { common, createLowlight } from "lowlight";

// Syntax-highlighted code blocks. Adapted from Novel (steven-tey/novel,
// Apache-2.0). Replaces StarterKit's plain `codeBlock` (disabled in
// build-extensions). `common` covers ~37 language grammars — enough for most
// docs without pulling every grammar. highlight.js token classes render inside
// the block; the surface is tinted to our tokens below.
export const DocumentCodeBlock = CodeBlockLowlight.configure({
	lowlight: createLowlight(common),
	HTMLAttributes: {
		class: "rounded-md border bg-muted p-4 font-mono text-sm",
	},
});
