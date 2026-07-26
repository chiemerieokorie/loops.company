import {
	IconFolder1,
	IconFolder2,
	IconFolderBookmarks,
	IconFolderCloud,
	IconFolderDownload,
	IconFolderLink,
	IconFolderOpen,
	IconFolderPaper,
	IconFolderRestricted,
	IconFolderShared,
	IconFolderShield,
	IconFolderSparkle,
	IconFolders,
	IconFolders2,
	IconFolderUpload,
} from "@runway/ui/icons";
import { cn } from "@runway/ui/lib/utils";

// Folder glyph + color helpers. A folder's appearance is stored as two strings on
// the Convex doc: a discriminated `glyph` ("emoji:🏠" | "icon:IconFolderCloud") and
// a named `color` token ("indigo"). This module is the single source of truth that
// turns those strings into rendered UI for both the picker and the list.

type IconComponent = typeof IconFolder1;

// A CURATED subset of the IconFolder* family — explicit so the 2k-icon barrel stays
// tree-shakeable (never index it dynamically). The keys are the names stored in
// `glyph` as "icon:<key>".
export const FOLDER_ICONS: Record<string, IconComponent> = {
	IconFolder1,
	IconFolder2,
	IconFolderOpen,
	IconFolderCloud,
	IconFolderSparkle,
	IconFolderBookmarks,
	IconFolderShared,
	IconFolderShield,
	IconFolderLink,
	IconFolderPaper,
	IconFolderRestricted,
	IconFolderDownload,
	IconFolderUpload,
	IconFolders,
	IconFolders2,
};

export const DEFAULT_FOLDER_ICON = "IconFolder1";

// The tokenized palette (a contained exception to the indigo+slate system, namespaced
// under --folder-*). Order is the swatch order in the picker.
export const FOLDER_COLORS = [
	"indigo",
	"teal",
	"sky",
	"violet",
	"amber",
	"rose",
	"emerald",
	"fuchsia",
] as const;

export type FolderColor = (typeof FOLDER_COLORS)[number];
export const DEFAULT_FOLDER_COLOR: FolderColor = "indigo";

// Static class map (NOT a template string) so Tailwind's JIT sees every literal and
// generates the utilities from the @theme --color-folder-* tokens.
const FOLDER_COLOR_CLASSES: Record<
	FolderColor,
	{ text: string; bg: string; border: string }
> = {
	indigo: {
		text: "text-folder-indigo",
		bg: "bg-folder-indigo",
		border: "border-folder-indigo",
	},
	teal: {
		text: "text-folder-teal",
		bg: "bg-folder-teal",
		border: "border-folder-teal",
	},
	sky: {
		text: "text-folder-sky",
		bg: "bg-folder-sky",
		border: "border-folder-sky",
	},
	violet: {
		text: "text-folder-violet",
		bg: "bg-folder-violet",
		border: "border-folder-violet",
	},
	amber: {
		text: "text-folder-amber",
		bg: "bg-folder-amber",
		border: "border-folder-amber",
	},
	rose: {
		text: "text-folder-rose",
		bg: "bg-folder-rose",
		border: "border-folder-rose",
	},
	emerald: {
		text: "text-folder-emerald",
		bg: "bg-folder-emerald",
		border: "border-folder-emerald",
	},
	fuchsia: {
		text: "text-folder-fuchsia",
		bg: "bg-folder-fuchsia",
		border: "border-folder-fuchsia",
	},
};

// Per-swatch classes for the color picker's RadioGroupItem. Kept here (not in the
// picker) so the palette is enumerated literally in ONE place. `data-checked` keeps
// the swatch its own color when selected (the base item otherwise flips to primary).
// Literal strings (NOT constructed) so Tailwind's JIT emits each utility.
export const FOLDER_SWATCH_CLASSES: Record<FolderColor, string> = {
	indigo:
		"border-folder-indigo bg-folder-indigo data-checked:border-folder-indigo data-checked:bg-folder-indigo",
	teal: "border-folder-teal bg-folder-teal data-checked:border-folder-teal data-checked:bg-folder-teal",
	sky: "border-folder-sky bg-folder-sky data-checked:border-folder-sky data-checked:bg-folder-sky",
	violet:
		"border-folder-violet bg-folder-violet data-checked:border-folder-violet data-checked:bg-folder-violet",
	amber:
		"border-folder-amber bg-folder-amber data-checked:border-folder-amber data-checked:bg-folder-amber",
	rose: "border-folder-rose bg-folder-rose data-checked:border-folder-rose data-checked:bg-folder-rose",
	emerald:
		"border-folder-emerald bg-folder-emerald data-checked:border-folder-emerald data-checked:bg-folder-emerald",
	fuchsia:
		"border-folder-fuchsia bg-folder-fuchsia data-checked:border-folder-fuchsia data-checked:bg-folder-fuchsia",
};

function isFolderColor(value: string | undefined): value is FolderColor {
	return value !== undefined && value in FOLDER_COLOR_CLASSES;
}

// Resolve a stored color name to a utility class, falling back to the default.
export function folderColorClass(
	color: string | undefined,
	variant: "text" | "bg" | "border" = "text"
): string {
	const key = isFolderColor(color) ? color : DEFAULT_FOLDER_COLOR;
	return FOLDER_COLOR_CLASSES[key][variant];
}

type ParsedGlyph =
	| { kind: "emoji"; value: string }
	| { kind: "icon"; name: string };

// Parse the discriminated glyph string. Unknown/missing → the default folder icon
// (never throws — a corrupt or future glyph value degrades gracefully).
export function parseGlyph(glyph: string | undefined): ParsedGlyph {
	if (glyph?.startsWith("emoji:")) {
		return { kind: "emoji", value: glyph.slice("emoji:".length) };
	}
	if (glyph?.startsWith("icon:")) {
		const name = glyph.slice("icon:".length);
		return {
			kind: "icon",
			name: name in FOLDER_ICONS ? name : DEFAULT_FOLDER_ICON,
		};
	}
	return { kind: "icon", name: DEFAULT_FOLDER_ICON };
}

export function FolderGlyph({
	glyph,
	className,
}: {
	glyph?: string;
	className?: string;
}) {
	const parsed = parseGlyph(glyph);
	if (parsed.kind === "emoji") {
		return (
			<span
				aria-hidden="true"
				className={cn(
					"inline-flex items-center justify-center leading-none",
					className
				)}
			>
				{parsed.value}
			</span>
		);
	}
	const Icon = FOLDER_ICONS[parsed.name] ?? IconFolder1;
	return <Icon aria-hidden="true" className={className} />;
}
