import { DoclingClient } from "@chiemerieokorie/docling";
import { putRaw, type RawRef } from "@chiemerieokorie/trigger-kit";
import { schemaTask } from "@trigger.dev/sdk";
import { postCallback } from "../callback.js";
import { parseDocumentPayload } from "../payloads.js";

// Build the docling client at call time so its env is read at runtime (not when the
// module is imported / bundled).
function doclingClient(): DoclingClient {
	const baseUrl = process.env.DOCLING_SERVE_URL;
	if (!baseUrl) {
		throw new Error("DOCLING_SERVE_URL is not set in the task environment");
	}
	return new DoclingClient({
		baseUrl,
		apiKey: process.env.DOCLING_SERVE_API_KEY,
	});
}

// The canonical loops job: convert a messy external PDF/HTML into clean Markdown
// (docling), stash it in R2 (trigger-kit), and hand the RawRef back to Convex to
// persist on the `documentImports` row. Uses a UNIQUE key (no stable content id), so
// each run writes a fresh object.
export const parseDocumentTask = schemaTask({
	id: "parse-document",
	schema: parseDocumentPayload,
	run: async (payload): Promise<{ ref: RawRef }> => {
		const result = await doclingClient().convertUrlAndWait(payload.sourceUrl, {
			toFormats: ["md"],
			tableMode: "accurate",
		});
		if (result.status !== "success" || !result.markdown) {
			throw new Error(`docling conversion failed: ${result.status}`);
		}
		const ref = await putRaw({
			source: "runway",
			sourceType: "docling-markdown",
			sourceUrl: payload.sourceUrl,
			contentType: "text/markdown",
			body: result.markdown,
		});
		await postCallback(payload.callbackUrl, {
			importId: payload.importId,
			ref,
		});
		return { ref };
	},
});
