// @vitest-environment node
import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

// Enforcement for the authorization net (lib/functions.ts). Every member-facing
// query/mutation MUST be built from `authedQuery`/`authedMutation` (or the explicit
// `publicQuery`/`sessionMutation` escape hatches) — NEVER the raw `query`/`mutation`
// from `_generated/server`, which would bypass the deny-by-default RLS backstop.
// `internalQuery`/`internalMutation` (never internet-exposed) and the `QueryCtx`/
// `MutationCtx` TYPES are unaffected. lib/functions.ts is the ONE sanctioned home for
// the raw builders — everything else routes through it, so a forgotten check can never
// reach the db unguarded.
//
// This scans source TEXT (it does not execute anything), so a violation is caught at
// author time regardless of whether the offending function is ever called. Runs in the
// `node` environment (the file docblock above) so it can read the tree — the rest of
// the suite runs under edge-runtime for convex-test.

const CONVEX_DIR = dirname(fileURLToPath(import.meta.url));
const SANCTIONED = join("lib", "functions.ts");
const SKIP_DIRS = new Set(["_generated", "betterAuth", "node_modules"]);

// Match a (possibly multi-line) named import from "./_generated/server" and report
// whether it pulls in the raw `query` or `mutation` builder (exact identifier — so
// `internalQuery`, `internalMutation`, `type QueryCtx` are correctly ignored).
const SERVER_IMPORT =
	/import\s*\{([\s\S]*?)\}\s*from\s*["']\.\/_generated\/server["']/g;
const PROSEMIRROR_CHECK_READ = /checkRead:\s*assertDocRead/;
const PROSEMIRROR_CHECK_WRITE = /checkWrite:\s*assertDocWrite/;

function importsRawBuilder(source: string): boolean {
	for (const match of source.matchAll(SERVER_IMPORT)) {
		const names = (match[1] ?? "").split(",").map((name) => name.trim());
		if (names.includes("query") || names.includes("mutation")) {
			return true;
		}
	}
	return false;
}

function sourceFiles(dir: string, prefix = ""): string[] {
	const out: string[] = [];
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const rel = join(prefix, entry.name);
		if (entry.isDirectory()) {
			if (!SKIP_DIRS.has(entry.name)) {
				out.push(...sourceFiles(join(dir, entry.name), rel));
			}
		} else if (
			entry.name.endsWith(".ts") &&
			!(entry.name.endsWith(".test.ts") || entry.name.endsWith(".d.ts"))
		) {
			out.push(rel);
		}
	}
	return out;
}

describe("authorization net is not bypassable", () => {
	it("only lib/functions.ts imports the raw query/mutation builders", () => {
		const offenders = sourceFiles(CONVEX_DIR)
			.filter((rel) => rel !== SANCTIONED)
			.filter((rel) =>
				importsRawBuilder(readFileSync(join(CONVEX_DIR, rel), "utf8"))
			);
		expect(
			offenders,
			`raw query/mutation imported outside lib/functions.ts (use authedQuery/authedMutation, or the publicQuery/sessionMutation escape hatches):\n${offenders.join("\n")}`
		).toEqual([]);
	});

	// The prosemirror sync endpoints are component-generated and run on the RAW db, so
	// they bypass the RLS net entirely — the document plane is gated SOLELY by syncApi's
	// checkRead/checkWrite. Losing either leaves documents open, and the import-scan
	// above can't see it. Guard it explicitly.
	it("the prosemirror syncApi keeps its checkRead + checkWrite gate", () => {
		const source = readFileSync(join(CONVEX_DIR, "prosemirror.ts"), "utf8");
		expect(source).toMatch(PROSEMIRROR_CHECK_READ);
		expect(source).toMatch(PROSEMIRROR_CHECK_WRITE);
	});
});
