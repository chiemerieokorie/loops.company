import { describe, expect, it } from "vitest";
import { filterSlashItems, type SlashItem } from "./slash-registry";

const noop = () => {
	// no-op command for test fixtures
};
const Icon = () => null;

const items: SlashItem[] = [
	{
		title: "Heading 1",
		description: "",
		icon: Icon,
		aliases: ["h1", "title"],
		command: noop,
	},
	{
		title: "Bullet list",
		description: "",
		icon: Icon,
		aliases: ["ul"],
		command: noop,
	},
	{ title: "Code", description: "", icon: Icon, command: noop },
];

describe("filterSlashItems", () => {
	it("returns everything for an empty query", () => {
		expect(filterSlashItems(items, "")).toHaveLength(3);
		expect(filterSlashItems(items, "   ")).toHaveLength(3);
	});

	it("matches on title, case-insensitively", () => {
		const result = filterSlashItems(items, "CODE");
		expect(result).toHaveLength(1);
		expect(result[0]?.title).toBe("Code");
	});

	it("matches on aliases", () => {
		const result = filterSlashItems(items, "h1");
		expect(result).toHaveLength(1);
		expect(result[0]?.title).toBe("Heading 1");
	});

	it("returns nothing when no item matches", () => {
		expect(filterSlashItems(items, "zzz")).toHaveLength(0);
	});
});
