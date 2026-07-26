import { task } from "@trigger.dev/sdk";

// The smallest possible task — no external services, no callback. Trigger it from
// the Trigger.dev dashboard "Test" tab (or `tasks.trigger("hello-world", {...})`)
// to confirm the project is deployed and runs before wiring up the real jobs.
export const helloWorld = task({
	id: "hello-world",
	// Returns a Promise (Trigger requires it) without `async` — there's nothing to
	// await in this skeleton, and an empty `async` trips the no-floating-async lint.
	run: (payload: { name?: string }) => {
		const name = payload.name ?? "world";
		return Promise.resolve({ greeting: `hello, ${name}` });
	},
});
