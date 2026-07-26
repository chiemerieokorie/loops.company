import { docling } from "@chiemerieokorie/docling/build";
import { rawStore, SHARED_RETRIES } from "@chiemerieokorie/trigger-kit/build";
import { defineConfig } from "@trigger.dev/sdk";

// Trigger.dev project config. `project` is the ref from the self-hosted dashboard
// (https://trigger.loops.company) — replace the placeholder before the first deploy.
//
// The build extensions each sync their env vars to the deployed project at
// `trigger.dev deploy` time, so those secrets must be present in the deploy
// environment (CI job / your shell):
//   - rawStore → R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET
//   - docling  → DOCLING_SERVE_URL, DOCLING_SERVE_API_KEY
// Plus TRIGGER_CALLBACK_SECRET (used by tasks to authenticate their callback POST to
// Convex) — set it in the Trigger.dev project env directly, or add it to rawStore's
// `extraEnv` to sync it from the deploy environment alongside the R2 vars.
export default defineConfig({
	project: "proj_replace_me",
	dirs: ["./src/trigger"],
	runtime: "node",
	maxDuration: 300,
	retries: SHARED_RETRIES,
	build: {
		extensions: [
			rawStore({ syncEnv: true, extraEnv: ["TRIGGER_CALLBACK_SECRET"] }),
			docling({ syncEnv: true }),
		],
	},
});
