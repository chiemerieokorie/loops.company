import { afterEach, describe, expect, it, vi } from "vitest";

import {
	formatWin,
	redactPii,
	scrambleEmail,
	sendSlackMessage,
	type WinContext,
} from "./slack";

afterEach(() => {
	vi.unstubAllEnvs();
	vi.unstubAllGlobals();
	vi.restoreAllMocks();
});

function stubConfigured() {
	vi.stubEnv("SLACK_BOT_TOKEN", "xoxb-test");
	vi.stubEnv("SLACK_WINS_CHANNEL", "C123");
}

const jane: WinContext = {
	identity: { name: "Jane Doe", email: "jane@example.com" },
	workspaceName: "Acme",
};
const anon: WinContext = { identity: { name: null, email: null } };

describe("scrambleEmail", () => {
	it("masks the local part", () => {
		expect(scrambleEmail("jane.doe@example.com")).toBe("j***@example.com");
	});

	it("returns *** for malformed or missing input", () => {
		expect(scrambleEmail("no-at-sign")).toBe("***");
		expect(scrambleEmail("@leading")).toBe("***");
		expect(scrambleEmail(null)).toBe("***");
		expect(scrambleEmail(undefined)).toBe("***");
	});
});

describe("redactPii", () => {
	it("masks an email embedded anywhere in the text", () => {
		expect(redactPii("ping jane.doe@acme.io about it")).toBe(
			"ping j***@acme.io about it"
		);
	});

	it("masks a phone-length digit run to the last 4", () => {
		expect(redactPii("call +1 (415) 555-2671 now")).toBe("call ***2671 now");
	});

	it("leaves short numbers (amounts, counts, dates) untouched", () => {
		expect(redactPii("$19.99 · customer #3 · 2026-07-12")).toBe(
			"$19.99 · customer #3 · 2026-07-12"
		);
	});

	it("is inert on already-masked values", () => {
		expect(redactPii("j***@acme.io and ***2671")).toBe(
			"j***@acme.io and ***2671"
		);
	});
});

describe("formatWin", () => {
	it("numbers a signup with the masked identity", () => {
		const msg = formatWin({ type: "signup", userId: "u1" }, jane, 7);
		expect(msg.text).toContain("New signup");
		expect(msg.text).toContain("Jane Doe · j***@example.com");
		expect(msg.text).toContain("signup #7 this month");
		expect(msg.blocks).toHaveLength(1);
	});

	it("falls back to an anonymous label when identity is unknown", () => {
		const msg = formatWin(
			{ type: "member", userId: "u1", workspaceId: "w1", role: "member" },
			anon,
			2
		);
		expect(msg.text).toContain("New member joined a workspace");
		expect(msg.text).toContain("***");
		expect(msg.text).toContain("member #2 this month");
	});

	it("shows the workspace name and role for a member win", () => {
		const msg = formatWin(
			{ type: "member", userId: "u1", workspaceId: "w1", role: "admin" },
			jane,
			1
		);
		expect(msg.text).toContain("New member joined Acme");
		expect(msg.text).toContain("admin");
	});

	it("formats a new subscription with the amount", () => {
		const msg = formatWin(
			{
				type: "subscription",
				workspaceId: "w1",
				plan: "pro",
				amountCents: 1999,
				currency: "usd",
				isRenewal: false,
			},
			jane,
			3
		);
		expect(msg.text).toContain("New pro subscription");
		expect(msg.text).toContain("$19.99");
		expect(msg.text).toContain("Acme");
		expect(msg.text).toContain("customer #3 this month");
	});

	it("omits the amount and reframes a renewal", () => {
		const msg = formatWin(
			{ type: "subscription", workspaceId: "w1", plan: "pro", isRenewal: true },
			jane,
			5
		);
		expect(msg.text).toContain("Subscription renewed");
		expect(msg.text).not.toContain("$");
	});
});

describe("sendSlackMessage", () => {
	it("returns false and never calls fetch when unconfigured", async () => {
		vi.stubEnv("SLACK_BOT_TOKEN", "");
		vi.stubEnv("SLACK_WINS_CHANNEL", "");
		const fetchMock = vi.fn();
		vi.stubGlobal("fetch", fetchMock);

		await expect(sendSlackMessage({ text: "hi" })).resolves.toBe(false);
		expect(fetchMock).not.toHaveBeenCalled();
	});

	it("posts to the configured channel and returns true on success", async () => {
		stubConfigured();
		const fetchMock = vi.fn().mockResolvedValue({
			ok: true,
			status: 200,
			json: () => Promise.resolve({ ok: true }),
		});
		vi.stubGlobal("fetch", fetchMock);

		await expect(sendSlackMessage({ text: "hi" })).resolves.toBe(true);
		expect(fetchMock).toHaveBeenCalledWith(
			expect.stringContaining("chat.postMessage"),
			expect.objectContaining({
				headers: expect.objectContaining({ Authorization: "Bearer xoxb-test" }),
				body: expect.stringContaining('"channel":"C123"'),
			})
		);
	});

	it("scrubs PII from the outgoing body (defense in depth)", async () => {
		stubConfigured();
		const fetchMock = vi.fn().mockResolvedValue({
			ok: true,
			status: 200,
			json: () => Promise.resolve({ ok: true }),
		});
		vi.stubGlobal("fetch", fetchMock);

		await sendSlackMessage({ text: "raw jane@acme.io joined" });

		const body = fetchMock.mock.calls[0][1].body;
		expect(body).toContain("j***@acme.io");
		expect(body).not.toContain("jane@acme.io");
	});

	it("returns false (logged, not thrown) on an HTTP error", async () => {
		stubConfigured();
		const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {
			// swallow
		});
		vi.stubGlobal(
			"fetch",
			vi.fn().mockResolvedValue({ ok: false, status: 503 })
		);

		await expect(sendSlackMessage({ text: "hi" })).resolves.toBe(false);
		expect(errorSpy).toHaveBeenCalled();
	});

	it("returns false on a Slack API error (ok: false)", async () => {
		stubConfigured();
		vi.spyOn(console, "error").mockImplementation(() => {
			// swallow
		});
		vi.stubGlobal(
			"fetch",
			vi.fn().mockResolvedValue({
				ok: true,
				status: 200,
				json: () => Promise.resolve({ ok: false, error: "channel_not_found" }),
			})
		);

		await expect(sendSlackMessage({ text: "hi" })).resolves.toBe(false);
	});

	it("returns false when fetch throws (network down)", async () => {
		stubConfigured();
		vi.spyOn(console, "error").mockImplementation(() => {
			// swallow
		});
		vi.stubGlobal(
			"fetch",
			vi.fn().mockRejectedValue(new Error("network down"))
		);

		await expect(sendSlackMessage({ text: "hi" })).resolves.toBe(false);
	});
});
