// Shared completion channel: a task POSTs its result back to a Convex HTTP endpoint
// (convex/http.ts) so an internal mutation can persist the RawRef inside a trusted,
// membership-free context. The shared secret (present in both the Trigger.dev
// project env and the Convex deployment env) is the only thing that authorizes the
// write — Convex compares it in constant time before touching the row.

export async function postCallback(
	callbackUrl: string,
	body: Record<string, unknown>
): Promise<void> {
	const secret = process.env.TRIGGER_CALLBACK_SECRET;
	if (!secret) {
		throw new Error(
			"TRIGGER_CALLBACK_SECRET is not set in the task environment"
		);
	}
	const res = await fetch(callbackUrl, {
		method: "POST",
		headers: {
			"content-type": "application/json",
			"x-trigger-callback-secret": secret,
		},
		body: JSON.stringify(body),
	});
	if (!res.ok) {
		const text = await res.text();
		throw new Error(`callback to ${callbackUrl} failed: ${res.status} ${text}`);
	}
}
