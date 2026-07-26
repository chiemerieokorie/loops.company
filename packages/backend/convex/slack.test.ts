import { afterEach, describe, expect, it, vi } from "vitest";

import { internal } from "./_generated/api";
import { setupBackend } from "./test.setup";

afterEach(() => {
	vi.unstubAllEnvs();
	vi.unstubAllGlobals();
	vi.restoreAllMocks();
});

function stubConfigured() {
	vi.stubEnv("SLACK_BOT_TOKEN", "xoxb-test");
	vi.stubEnv("SLACK_WINS_CHANNEL", "C123");
}

// A signup win only resolves identity via the Better Auth component, which is
// excluded from the test module map — the lookup fails gracefully to anonymous,
// which is exactly the best-effort path we want to exercise here.
const SIGNUP = { type: "signup" as const, userId: "u1" };

describe("bumpWinCounter", () => {
	it("increments per key, isolates keys, and floors at 0", async () => {
		const t = setupBackend();
		const a1 = await t.mutation(internal.slack.bumpWinCounter, {
			key: "signup:2026-07",
		});
		const a2 = await t.mutation(internal.slack.bumpWinCounter, {
			key: "signup:2026-07",
		});
		const b1 = await t.mutation(internal.slack.bumpWinCounter, {
			key: "member:2026-07",
		});
		const rolledBack = await t.mutation(internal.slack.bumpWinCounter, {
			key: "signup:2026-07",
			delta: -1,
		});
		const floored = await t.mutation(internal.slack.bumpWinCounter, {
			key: "member:2026-07",
			delta: -5,
		});

		expect(a1).toBe(1);
		expect(a2).toBe(2);
		expect(b1).toBe(1);
		expect(rolledBack).toBe(1);
		expect(floored).toBe(0);
	});
});

describe("postWin", () => {
	it("no-ops (never calls fetch) when the bot is unconfigured", async () => {
		vi.stubEnv("SLACK_BOT_TOKEN", "");
		vi.stubEnv("SLACK_WINS_CHANNEL", "");
		const fetchMock = vi.fn();
		vi.stubGlobal("fetch", fetchMock);

		const t = setupBackend();
		await t.action(internal.slack.postWin, { event: SIGNUP });

		expect(fetchMock).not.toHaveBeenCalled();
	});

	it("posts to Slack and numbers the message when configured", async () => {
		stubConfigured();
		const fetchMock = vi.fn().mockResolvedValue({
			ok: true,
			status: 200,
			json: () => Promise.resolve({ ok: true }),
		});
		vi.stubGlobal("fetch", fetchMock);

		const t = setupBackend();
		await t.action(internal.slack.postWin, { event: SIGNUP });

		expect(fetchMock).toHaveBeenCalledTimes(1);
		const body = JSON.parse(fetchMock.mock.calls[0][1].body);
		expect(body.text).toContain("New signup");
		expect(body.text).toContain("signup #1 this month");
	});

	it("rolls the counter back on failed delivery so numbering stays dense", async () => {
		stubConfigured();
		vi.spyOn(console, "error").mockImplementation(() => {
			// swallow
		});
		// First delivery fails, second succeeds — the successful one must still be
		// numbered #1, not #2.
		const fetchMock = vi
			.fn()
			.mockResolvedValueOnce({ ok: false, status: 503 })
			.mockResolvedValue({
				ok: true,
				status: 200,
				json: () => Promise.resolve({ ok: true }),
			});
		vi.stubGlobal("fetch", fetchMock);

		const t = setupBackend();
		await t.action(internal.slack.postWin, { event: SIGNUP });
		await t.action(internal.slack.postWin, { event: SIGNUP });

		const body = JSON.parse(fetchMock.mock.calls[1][1].body);
		expect(body.text).toContain("signup #1 this month");
	});
});
