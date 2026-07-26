import { describe, expect, it } from "vitest";
import { normalizeUrl } from "./link-url";

describe("normalizeUrl", () => {
	it("prepends https:// to a schemeless host", () => {
		expect(normalizeUrl("example.com")).toBe("https://example.com/");
	});

	it("preserves an explicit https URL (incl. path)", () => {
		expect(normalizeUrl("https://example.com/a/b?c=1")).toBe(
			"https://example.com/a/b?c=1"
		);
	});

	it("allows http and mailto schemes", () => {
		expect(normalizeUrl("http://example.com")).toBe("http://example.com/");
		expect(normalizeUrl("mailto:a@b.com")).toBe("mailto:a@b.com");
	});

	it("rejects unsafe schemes (injection vectors)", () => {
		expect(normalizeUrl("javascript:alert(1)")).toBeNull();
		expect(normalizeUrl("data:text/html,<script>1</script>")).toBeNull();
	});

	it("returns null for empty / whitespace input", () => {
		expect(normalizeUrl("")).toBeNull();
		expect(normalizeUrl("   ")).toBeNull();
	});
});
