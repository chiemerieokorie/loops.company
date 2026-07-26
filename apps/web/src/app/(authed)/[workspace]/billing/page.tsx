import { api } from "@runway/backend/convex/_generated/api";
import { Badge } from "@runway/ui/components/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@runway/ui/components/card";
import { Separator } from "@runway/ui/components/separator";
import type { Metadata } from "next";
import { Suspense } from "react";

import { ManageBillingButton } from "@/features/billing/manage-billing-button";
import { PlanCards } from "@/features/billing/plan-cards";
import { UpgradedBanner } from "@/features/billing/upgraded-banner";
import { fetchAuthQuery } from "@/lib/auth-server";
import { assertWorkspaceAccess } from "@/lib/workspace-server";

export const metadata: Metadata = { robots: { index: false, follow: false } };

interface Invoice {
	amountPaid: number;
	created: number;
	status: string;
	stripeInvoiceId: string;
}

const CENTS_PER_UNIT = 100;
const usdFromCents = (cents: number) =>
	(cents / CENTS_PER_UNIT).toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
	});
const asDate = (ms: number) =>
	new Date(ms).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
	});

export default async function BillingPage({
	params,
}: {
	params: Promise<{ workspace: string }>;
}) {
	const { workspace } = await params;
	const { workspaceId } = await assertWorkspaceAccess(workspace);

	// One member-readable round-trip for the tier + the caller's role.
	const { plan, role } = await fetchAuthQuery(api.billing.myBillingSummary, {
		workspaceId,
	});
	const isAdmin = role === "owner" || role === "admin";

	// Owner/admin only. Gated on `isAdmin` so a genuine backend error propagates to
	// the error boundary instead of being swallowed and mistaken for "not admin".
	const billing = isAdmin
		? await fetchAuthQuery(api.billing.getWorkspaceBilling, { workspaceId })
		: null;
	const isPaid = plan !== "free";
	const sub = billing?.subscription ?? null;
	const active = sub?.status === "active" || sub?.status === "trialing";

	return (
		<div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
			<Suspense fallback={null}>
				<UpgradedBanner />
			</Suspense>

			<div className="flex items-start justify-between gap-4">
				<div className="flex flex-col gap-1">
					<h1 className="font-medium text-xl tracking-tight">Billing</h1>
					<p className="text-muted-foreground text-sm">
						Plan and invoices for this workspace.
					</p>
				</div>
				{isAdmin && isPaid ? (
					<ManageBillingButton workspaceId={workspaceId} />
				) : null}
			</div>

			<Card>
				<CardHeader>
					<CardDescription>Current plan</CardDescription>
					<CardTitle className="flex items-center gap-2 text-2xl">
						<span className="capitalize">{plan}</span>
						{active ? (
							<Badge className="bg-primary/10 text-primary">
								{sub?.status === "trialing" ? "Trial" : "Active"}
							</Badge>
						) : null}
						{billing?.cancelAtPeriodEnd ? (
							<Badge variant="secondary">Cancels at period end</Badge>
						) : null}
					</CardTitle>
				</CardHeader>
				{sub && billing?.currentPeriodEnd ? (
					<CardContent className="flex flex-col gap-4">
						<Separator />
						<p className="text-muted-foreground text-sm">
							{billing.cancelAtPeriodEnd
								? `Access ends ${asDate(billing.currentPeriodEnd)}.`
								: `Renews ${asDate(billing.currentPeriodEnd)}.`}
						</p>
					</CardContent>
				) : null}
			</Card>

			<BillingActions
				invoices={billing?.invoices ?? []}
				isAdmin={isAdmin}
				isPaid={isPaid}
				workspaceSlug={workspace}
			/>
		</div>
	);
}

function BillingActions({
	isAdmin,
	isPaid,
	workspaceSlug,
	invoices,
}: {
	isAdmin: boolean;
	isPaid: boolean;
	workspaceSlug: string;
	invoices: Invoice[];
}) {
	if (!isAdmin) {
		return (
			<Card>
				<CardContent className="py-6 text-muted-foreground text-sm">
					Billing is managed by your workspace owners and admins.
				</CardContent>
			</Card>
		);
	}
	if (!isPaid) {
		return <PlanCards workspaceSlug={workspaceSlug} />;
	}
	return (
		<div className="flex flex-col gap-4">
			<h2 className="font-medium text-base">Invoices</h2>
			<InvoiceList invoices={invoices} />
		</div>
	);
}

function InvoiceList({ invoices }: { invoices: Invoice[] }) {
	if (invoices.length === 0) {
		return (
			<Card>
				<CardContent className="py-6 text-muted-foreground text-sm">
					No invoices yet.
				</CardContent>
			</Card>
		);
	}
	return (
		<Card>
			<CardContent className="flex flex-col divide-y divide-border p-0">
				{invoices.map((invoice) => (
					<div
						className="flex items-center justify-between px-4 py-3 text-sm"
						key={invoice.stripeInvoiceId}
					>
						<span className="text-muted-foreground">
							{asDate(invoice.created)}
						</span>
						<span className="flex items-center gap-3">
							<Badge variant="secondary">{invoice.status}</Badge>
							<span className="font-medium tabular-nums">
								{usdFromCents(invoice.amountPaid)}
							</span>
						</span>
					</div>
				))}
			</CardContent>
		</Card>
	);
}
