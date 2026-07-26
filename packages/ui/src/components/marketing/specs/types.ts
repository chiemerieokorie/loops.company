import type { ReactNode } from "react";

export interface SpecItem {
	description: string;
	title: string;
}

export interface SpecIconItem {
	description: string;
	icon: ReactNode;
	title: string;
}

export interface SpecNumberedItem {
	description: string;
	title: string;
}
