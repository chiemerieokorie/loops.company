import {
	type CentralIconProps,
	IconBubbleSparkle,
	IconCreditCard1,
	IconFileText,
	IconHome,
	IconPeople,
	IconSettingsGear1,
	IconTrashCan,
} from "@runway/ui/icons";

import type { Route } from "next";
import type { FC } from "react";

export interface NavItem {
	href: Route;
	icon: FC<CentralIconProps>;
	label: string;
}

// Sidebar nav for a given workspace. Overview is the workspace ROOT `/[slug]`;
// everything else is scoped under it.
export function navItems(workspaceSlug: string): NavItem[] {
	const ws = `/${workspaceSlug}`;
	return [
		{ label: "Overview", href: ws as Route, icon: IconHome },
		{
			label: "Documents",
			href: `${ws}/documents` as Route,
			icon: IconFileText,
		},
		{
			label: "Assistant",
			href: `${ws}/assistant` as Route,
			icon: IconBubbleSparkle,
		},
		{ label: "Members", href: `${ws}/members` as Route, icon: IconPeople },
		{
			label: "Billing",
			href: `${ws}/billing` as Route,
			icon: IconCreditCard1,
		},
		{
			label: "Settings",
			href: `${ws}/settings` as Route,
			icon: IconSettingsGear1,
		},
		{ label: "Trash", href: `${ws}/trash` as Route, icon: IconTrashCan },
	];
}
