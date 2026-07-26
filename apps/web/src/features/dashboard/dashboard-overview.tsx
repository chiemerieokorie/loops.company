"use client";

import { api } from "@runway/backend/convex/_generated/api";
import { Badge } from "@runway/ui/components/badge";
import { buttonVariants } from "@runway/ui/components/button";
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyTitle,
} from "@runway/ui/components/empty";
import { Progress } from "@runway/ui/components/progress";
import {
	type CentralIconProps,
	IconBubbleSparkle,
	IconCreditCard1,
	IconFileText,
	IconNoteText,
	IconPeople,
	IconPlusMedium,
} from "@runway/ui/icons";
import { useConvexAuth, useQuery } from "convex/react";
import Link from "next/link";
import type { FC, ReactNode } from "react";

import { OnboardingChecklist } from "../onboarding/onboarding-checklist";
import { relativeTime } from "./lib/format";

const RECENT_LIMIT = 6;

// The workspace overview: usage-at-a-glance stat tiles (backed by the reactive
// `entitlements` query — plan, plus live document/note counts against the plan caps),
// quick-action shortcuts, and a recent-documents list. Everything is a flat `bg-muted`
// surface per the design system; the icon squares invert to `bg-background`.
export function DashboardOverview({
	workspaceId,
	workspaceSlug,
}: {
	workspaceId: string;
	workspaceSlug: string;
}) {
	// Skip until the Convex client is authed: these mount on the dashboard landing and
	// would otherwise fire before the token lands on a fresh load / mid-refresh (the
	// stat tiles hold their "—/—" placeholder in the meantime).
	const { isAuthenticated } = useConvexAuth();
	const entitlements = useQuery(
		api.entitlement.entitlements,
		isAuthenticated ? { workspaceId } : "skip"
	);
	const documents = useQuery(
		api.prosemirror.list,
		isAuthenticated ? { workspaceId } : "skip"
	);
	const ws = `/${workspaceSlug}`;

	return (
		<div className="flex flex-col gap-6">
			<OnboardingChecklist workspaceSlug={workspaceSlug} />

			<div className="grid gap-2 sm:grid-cols-3">
				<StatTile
					cap={entitlements?.limits.maxDocuments}
					icon={IconFileText}
					label="Documents"
					used={entitlements?.usage.documents}
				/>
				<StatTile
					cap={entitlements?.limits.maxNotes}
					icon={IconNoteText}
					label="Notes"
					used={entitlements?.usage.notes}
				/>
				<PlanTile plan={entitlements?.plan} ws={ws} />
			</div>

			<div className="grid gap-2 sm:grid-cols-3">
				<ActionCard
					description="Start a collaborative, real-time document."
					href={`${ws}/documents`}
					icon={IconPlusMedium}
					title="New document"
				/>
				<ActionCard
					description="Add people to your workspace and set roles."
					href={`${ws}/members`}
					icon={IconPeople}
					title="Invite teammates"
				/>
				<ActionCard
					description="Draft, summarize, and answer with AI."
					href={`${ws}/assistant`}
					icon={IconBubbleSparkle}
					title="Ask the assistant"
				/>
			</div>

			<section className="flex flex-col gap-2.5">
				<div className="flex items-center justify-between">
					<h3 className="font-medium text-foreground text-sm">
						Recent documents
					</h3>
					<Link
						className="text-muted-foreground text-sm transition-colors hover:text-foreground"
						href={`${ws}/documents`}
					>
						View all
					</Link>
				</div>
				<RecentDocuments documents={documents} workspaceSlug={workspaceSlug} />
			</section>
		</div>
	);
}

function StatTile({
	icon: Icon,
	label,
	used,
	cap,
}: {
	icon: FC<CentralIconProps>;
	label: string;
	used?: number;
	cap?: number;
}) {
	const pct =
		used !== undefined && cap
			? Math.min(100, Math.round((used / cap) * 100))
			: 0;
	return (
		<div className="flex flex-col gap-3 rounded-xl bg-muted p-4">
			<div className="flex items-center justify-between">
				<span className="flex size-9 items-center justify-center rounded-md bg-background text-muted-foreground">
					<Icon className="size-4" />
				</span>
				<span className="text-muted-foreground text-sm tabular-nums">
					{used ?? "—"} / {cap ?? "—"}
				</span>
			</div>
			<div className="flex flex-col gap-2">
				<span className="font-medium text-foreground text-sm">{label}</span>
				{/* Invert the track to bg-background so it reads on the muted tile. */}
				<Progress
					className="[&_[data-slot=progress-track]]:bg-background"
					value={pct}
				/>
			</div>
		</div>
	);
}

function PlanTile({ plan, ws }: { plan?: string; ws: string }) {
	return (
		<div className="flex flex-col gap-3 rounded-xl bg-muted p-4">
			<div className="flex items-center justify-between">
				<span className="flex size-9 items-center justify-center rounded-md bg-background text-muted-foreground">
					<IconCreditCard1 className="size-4" />
				</span>
				{plan ? (
					<Badge
						className="capitalize"
						variant={plan === "free" ? "secondary" : "default"}
					>
						{plan}
					</Badge>
				) : null}
			</div>
			<div className="flex flex-col gap-2">
				<span className="font-medium text-foreground text-sm">Plan</span>
				<Link
					className="text-muted-foreground text-sm transition-colors hover:text-foreground"
					href={`${ws}/billing`}
				>
					Manage billing
				</Link>
			</div>
		</div>
	);
}

function ActionCard({
	href,
	icon: Icon,
	title,
	description,
}: {
	href: string;
	icon: FC<CentralIconProps>;
	title: string;
	description: string;
}) {
	return (
		<Link
			className="flex flex-col gap-2 rounded-xl bg-muted p-4 transition-colors hover:bg-muted/70"
			href={href}
		>
			<span className="flex size-9 items-center justify-center rounded-md bg-background text-foreground">
				<Icon className="size-4" />
			</span>
			<span className="font-medium text-foreground text-sm">{title}</span>
			<span className="text-muted-foreground text-xs">{description}</span>
		</Link>
	);
}

interface DocumentSummary {
	createdAt: number;
	docId: string;
	title: string;
}

function RecentDocuments({
	documents,
	workspaceSlug,
}: {
	documents: DocumentSummary[] | undefined;
	workspaceSlug: string;
}): ReactNode {
	if (documents === undefined) {
		return null;
	}
	if (documents.length === 0) {
		return (
			<Empty className="rounded-xl border border-border-subtle border-dashed">
				<EmptyHeader>
					<EmptyTitle>No documents yet</EmptyTitle>
					<EmptyDescription>
						Create your first document to get started.
					</EmptyDescription>
				</EmptyHeader>
				<EmptyContent>
					<Link
						className={buttonVariants({ size: "sm" })}
						href={`/${workspaceSlug}/documents`}
					>
						<IconPlusMedium />
						New document
					</Link>
				</EmptyContent>
			</Empty>
		);
	}
	return (
		<div className="grid gap-2 sm:grid-cols-2">
			{documents.slice(0, RECENT_LIMIT).map((doc) => (
				<Link
					className="flex items-center gap-3 rounded-xl bg-muted px-3 py-2.5 transition-colors hover:bg-muted/60"
					href={`/${workspaceSlug}/documents/${doc.docId}`}
					key={doc.docId}
				>
					<span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-background text-muted-foreground">
						<IconFileText className="size-4" />
					</span>
					<div className="flex min-w-0 flex-col">
						<span className="truncate font-medium text-foreground text-sm">
							{doc.title || "Untitled"}
						</span>
						<span className="truncate text-muted-foreground text-xs tabular-nums">
							{relativeTime(doc.createdAt)}
						</span>
					</div>
				</Link>
			))}
		</div>
	);
}
