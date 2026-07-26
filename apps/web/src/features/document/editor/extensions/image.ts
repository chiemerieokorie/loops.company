import { IconAddImage } from "@runway/ui/icons";
import type { Editor, Range } from "@tiptap/core";
import { Image } from "@tiptap/extension-image";
import { toast } from "sonner";
import type { SlashItem } from "../slash/slash-registry";

// Image node. Adapted from Novel (steven-tey/novel, Apache-2.0) — Tiptap's free
// Image extended with width/height attributes so a resize can persist. Images are
// stored by URL (uploaded to Convex file storage, see collab-document), never as
// base64, so the prosemirror-sync OT log stays small.
export const DocumentImage = Image.extend({
	addAttributes() {
		return {
			...this.parent?.(),
			width: { default: null },
			height: { default: null },
		};
	},
}).configure({
	allowBase64: false,
	HTMLAttributes: { class: "rounded-lg border border-border" },
});

// The `/image` slash command, wired to an upload function (Convex storage in
// runway). Defined here so the `setImage` command augmentation from
// @tiptap/extension-image is in scope. Opens a file picker, uploads, inserts the
// returned URL. Pattern from Novel (Apache-2.0), adapted to a Convex upload.
export function createImageSlashItem(
	uploadImage: (file: File) => Promise<string>
): SlashItem {
	return {
		title: "Image",
		description: "Upload an image",
		icon: IconAddImage,
		aliases: ["photo", "picture", "img", "upload"],
		command: (editor: Editor, range: Range) => {
			editor.chain().focus().deleteRange(range).run();
			const input = document.createElement("input");
			input.type = "file";
			input.accept = "image/*";
			const handleChange = async () => {
				const file = input.files?.[0];
				if (!file) {
					return;
				}
				const src = await uploadImage(file);
				editor.chain().focus().setImage({ src }).run();
			};
			input.addEventListener("change", () => {
				handleChange().catch(() => {
					toast.error("Failed to upload image.");
				});
			});
			input.click();
		},
	};
}
