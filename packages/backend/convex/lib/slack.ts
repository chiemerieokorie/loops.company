/**
 * Slack "Wins Bot" client + message builders.
 *
 * Posts growth/engagement "wins" to a Slack channel via a bot token +
 * `chat.postMessage` (one credential reaches any channel). Opt-in: every helper
 * no-ops when `SLACK_BOT_TOKEN` (or `SLACK_WINS_CHANNEL`) is unset, so local dev
 * and CI stay silent. No channel id is hardcoded — a starter template must not
 * ship someone else's channel.
 *
 * This module is PURE (no Convex imports) so the builders + sender are unit
 * testable in isolation; the Convex actions that call it live in ../slack.ts.
 *
 * NOTE ON EMOJI: the repo style rule is "no emoji in product copy/source".
 * These strings are NOT product copy — they are internal Slack ops messages,
 * and emoji are idiomatic for a celebratory #*-wins channel. Their use here is a
 * deliberate, scoped exception for this file only. Do not copy this into app/
 * product UI. Event messages use `:shortcode:` emoji (rendered by Slack in
 * mrkdwn); the report header block needs literal unicode (plain_text can't
 * render shortcodes).
 */

// biome-ignore lint/suspicious/noExplicitAny: Slack Block Kit has deeply nested, polymorphic shapes.
type SlackBlock = Record<string, any>;

export interface SlackMessage {
	blocks?: SlackBlock[];
	/** Fallback/notification text (shown in notifications + as plain fallback). */
	text: string;
}

const POST_MESSAGE_URL = "https://slack.com/api/chat.postMessage";

/** Whether the wins bot is configured (both the token and target channel set). */
export function isSlackConfigured(): boolean {
	return Boolean(process.env.SLACK_BOT_TOKEN && process.env.SLACK_WINS_CHANNEL);
}

/**
 * Send a message to the configured wins channel. Returns whether Slack accepted
 * it (`true` = delivered) so callers can keep a counter dense; NEVER throws.
 *
 * No-ops (returns false) when the bot is unconfigured. Best-effort: any network
 * or API failure is logged and swallowed so it can never fail the originating
 * signup/webhook — the caller only learns delivery failed via the return value.
 */
export async function sendSlackMessage(
	message: SlackMessage
): Promise<boolean> {
	const token = process.env.SLACK_BOT_TOKEN;
	const channel = process.env.SLACK_WINS_CHANNEL;
	if (!(token && channel)) {
		return false;
	}

	// Defense in depth: scrub PII from every string in the payload before it
	// leaves the backend, on top of the per-field masking the builders already do.
	const safe = redactMessage(message);
	try {
		const response = await fetch(POST_MESSAGE_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ channel, ...safe }),
		});
		if (!response.ok) {
			console.error(`[slack-wins] chat.postMessage HTTP ${response.status}`);
			return false;
		}
		const data = (await response.json()) as { ok: boolean; error?: string };
		if (!data.ok) {
			console.error(
				`[slack-wins] chat.postMessage failed: ${data.error ?? "unknown"}`
			);
			return false;
		}
		return true;
	} catch (error) {
		console.error("[slack-wins] chat.postMessage threw:", error);
		return false;
	}
}

// =============================================================================
// Privacy helpers
// =============================================================================

/**
 * Scramble an email for the wins channel.
 * "jane.doe@example.com" -> "j***@example.com". No usable `@` -> "***".
 */
export function scrambleEmail(email: string | null | undefined): string {
	if (!email) {
		return "***";
	}
	const atIndex = email.indexOf("@");
	if (atIndex < 1) {
		return "***";
	}
	const domain = email.slice(atIndex + 1);
	if (!domain) {
		return "***";
	}
	return `${email[0]}***@${domain}`;
}

// Any email address anywhere in a string.
const EMAIL_RE = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;
// A phone/card-like run: an optional leading +, then a stretch of digits and
// separators (space, dash, dot, parens). Kept deliberately loose here — the real
// filter is `maskDigits`, which only masks when the run holds 10–15 actual
// digits, so amounts, counts, dates, and Slack ids are never touched.
const DIGIT_RUN_RE = /\+?\d[\d\s().-]{8,}\d/g;
const PHONE_MIN_DIGITS = 10;
const PHONE_MAX_DIGITS = 15;

function maskDigits(run: string): string {
	const digits = run.replace(/\D/g, "");
	if (digits.length < PHONE_MIN_DIGITS || digits.length > PHONE_MAX_DIGITS) {
		return run;
	}
	return `***${digits.slice(-4)}`;
}

/**
 * Auto-redact PII from a string — a defense-in-depth net on top of the per-field
 * masking the builders already do. Emails collapse to `j***@domain`; phone/card-
 * like digit runs to `***1234`. Applied to EVERY string in an outgoing message by
 * `sendSlackMessage` (via `redactMessage`), so a name, workspace name, or any
 * free-text field that happens to carry PII is scrubbed before it leaves the
 * backend. Already-masked values (`j***@…`, `***1234`) are inert under both rules.
 */
export function redactPii(text: string): string {
	return text
		.replace(EMAIL_RE, (match) => scrambleEmail(match))
		.replace(DIGIT_RUN_RE, (match) => maskDigits(match));
}

// Deep-map `redactPii` over every string in a Block Kit message, returning a new
// object (never mutating the caller's). Structural strings — block `type`s,
// colors, mrkdwn markers — don't match the PII patterns, so only user-facing text
// is transformed.
function redactValue(value: unknown): unknown {
	if (typeof value === "string") {
		return redactPii(value);
	}
	if (Array.isArray(value)) {
		return value.map(redactValue);
	}
	if (value && typeof value === "object") {
		return Object.fromEntries(
			Object.entries(value).map(([key, v]) => [key, redactValue(v)])
		);
	}
	return value;
}

function redactMessage(message: SlackMessage): SlackMessage {
	return redactValue(message) as SlackMessage;
}

// =============================================================================
// Block Kit helpers
// =============================================================================

function header(text: string): SlackBlock {
	return { type: "header", text: { type: "plain_text", text, emoji: true } };
}

function context(parts: string[]): SlackBlock {
	return {
		type: "context",
		elements: parts.map((t) => ({ type: "mrkdwn", text: t })),
	};
}

function section(markdown: string): SlackBlock {
	return { type: "section", text: { type: "mrkdwn", text: markdown } };
}

function divider(): SlackBlock {
	return { type: "divider" };
}

/** Monospace label/value table via a rich_text_preformatted block. */
function table(rows: [string, string][]): SlackBlock {
	const maxLabel = Math.max(...rows.map(([label]) => label.length));
	const lines = rows.map(
		([label, value]) => `${label.padEnd(maxLabel)}  ${value}`
	);
	return {
		type: "rich_text",
		elements: [
			{
				type: "rich_text_preformatted",
				elements: [{ type: "text", text: lines.join("\n") }],
			},
		],
	};
}

// =============================================================================
// Win events
// =============================================================================

// A discriminated union over Runway's generic win types. The scheduled payload
// carries only ids (see `winEventValidator` in ../slack.ts, kept in sync); the
// action resolves identity + workspace name best-effort before formatting.
export type WinEvent =
	| { type: "signup"; userId: string }
	| { type: "member"; userId: string; workspaceId: string; role: string }
	| {
			type: "subscription";
			workspaceId: string;
			plan: string;
			amountCents?: number;
			currency?: string;
			isRenewal: boolean;
	  };

export interface WinIdentity {
	email: string | null;
	name: string | null;
}

/** Identity + workspace fields resolved for a win before it's formatted. */
export interface WinContext {
	identity: WinIdentity;
	workspaceName?: string;
}

function formatAmount(amountCents: number, currency: string): string {
	const code = currency.toUpperCase();
	try {
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: code,
		}).format(amountCents / 100);
	} catch {
		return `${(amountCents / 100).toFixed(2)} ${code}`;
	}
}

function identityLabel(identity: WinIdentity): string {
	const masked = scrambleEmail(identity.email);
	return identity.name ? `${identity.name} · ${masked}` : masked;
}

/**
 * Build the Slack payload for a win. Pure — no ctx, no env. `count` is the
 * per-type monthly sequence number, rendered as "#N this month". Returns both a
 * `text` fallback (notifications/preview) and a single mrkdwn `section` block.
 */
export function formatWin(
	event: WinEvent,
	resolved: WinContext,
	count: number
): SlackMessage {
	const who = identityLabel(resolved.identity);
	const workspace = resolved.workspaceName ?? "a workspace";
	const lines: string[] = [];

	if (event.type === "signup") {
		lines.push(":tada: *New signup*");
		lines.push(`${who} · signup #${count} this month`);
	} else if (event.type === "member") {
		lines.push(`:wave: *New member joined ${workspace}*`);
		lines.push(`${who} · ${event.role} · member #${count} this month`);
	} else {
		const amount =
			event.amountCents === undefined
				? null
				: formatAmount(event.amountCents, event.currency ?? "usd");
		const title = event.isRenewal
			? "Subscription renewed"
			: `New ${event.plan} subscription`;
		const emoji = event.isRenewal ? ":arrows_counterclockwise:" : ":moneybag:";
		lines.push(`${emoji} *${title}*${amount ? ` — ${amount}` : ""}`);
		lines.push(`${workspace} · ${who} · customer #${count} this month`);
	}

	const text = lines.join("\n");
	return { text, blocks: [section(text)] };
}

// =============================================================================
// Reports
// =============================================================================

const FOUNDER_QUOTES = [
	"Every product starts with a single signup. Keep building.",
	"Solo doesn't mean alone — your users are rooting for you.",
	"Consistency beats intensity. Another day shipped.",
	"Small steps compound into giant leaps. You're proof.",
	"One person, one vision, unlimited potential. Keep building.",
	"The world needs what you're building. Don't stop now.",
	"You chose the hard path. That's exactly why you'll win.",
];

export interface ReportStats {
	documentsCreated: number;
	// Window activity (created in [since, until))
	newWorkspaces: number;
	notesCreated: number;
	totalDocuments: number;
	totalNotes: number;
	// All-time snapshot
	totalWorkspaces: number;
}

export interface ReportUserCounts {
	newUsers: number;
	totalUsers: number;
}

function buildReportTable(
	stats: ReportStats,
	users: ReportUserCounts
): [string, string][] {
	const fmt = (n: number) => n.toLocaleString();
	return [
		["New users", fmt(users.newUsers)],
		["Total users", fmt(users.totalUsers)],
		["New workspaces", fmt(stats.newWorkspaces)],
		["Total workspaces", fmt(stats.totalWorkspaces)],
		["Documents created", fmt(stats.documentsCreated)],
		["Notes created", fmt(stats.notesCreated)],
		["Total documents", fmt(stats.totalDocuments)],
		["Total notes", fmt(stats.totalNotes)],
	];
}

function pickQuote(seed: number): string {
	const index = Math.abs(Math.floor(seed)) % FOUNDER_QUOTES.length;
	// Literal fallback keeps the return type `string` under strict
	// `noUncheckedIndexedAccess`.
	return FOUNDER_QUOTES[index] ?? "Keep building.";
}

export function buildReportMessage(args: {
	cadence: "Daily" | "Weekly";
	periodLabel: string;
	stats: ReportStats;
	users: ReportUserCounts;
	/** Deterministic seed for the closing quote (e.g. the report's `since`). */
	quoteSeed: number;
}): SlackMessage {
	return {
		text: `Runway — ${args.cadence} report: ${args.periodLabel}`,
		// 📊
		blocks: [
			header(`\u{1f4ca} Runway — ${args.cadence} Report`),
			context([args.periodLabel]),
			divider(),
			table(buildReportTable(args.stats, args.users)),
			divider(),
			context([`_${pickQuote(args.quoteSeed)}_`]),
		],
	};
}
