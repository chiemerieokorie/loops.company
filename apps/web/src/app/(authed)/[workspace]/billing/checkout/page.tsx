import { api } from "@runway/backend/convex/_generated/api";
import {
	type BillingInterval,
	isBillingInterval,
	isPaidPlan,
	type PaidPlan,
} from "@runway/backend/convex/lib/billingPlans";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@runway/ui/components/card";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { CheckoutIsland } from "@/features/billing/checkout-island";
import { fetchAuthAction } from "@/lib/auth-server";
import { assertWorkspaceAccess } from "@/lib/workspace-server";

export const metadata: Metadata = { robots: { index: false, follow: false } };

const PLAN_LABELS: Record<PaidPlan, string> = { pro: "Pro", team: "Team" };

export default async function CheckoutPage({
	params,
	searchParams,
}: {
	params: Promise<{ workspace: string }>;
	searchParams: Promise<{ plan?: string; interval?: string }>;
}) {
	const { workspace } = await params;
	const sp = await searchParams;
	const plan: PaidPlan = sp.plan && isPaidPlan(sp.plan) ? sp.plan : "pro";
	const interval: BillingInterval =
		sp.interval && isBillingInterval(sp.interval) ? sp.interval : "monthly";

	const { workspaceId } = await assertWorkspaceAccess(workspace);
	// createCheckoutSession returns { clientSecret: null } for EXPECTED refusals
	// (non-admin, already-subscribed) → redirect to billing. A genuine misconfig
	// (e.g. a missing Stripe price) throws and surfaces in the error boundary rather
	// than silently bouncing.
	const { clientSecret } = await fetchAuthAction(
		api.stripe.createCheckoutSession,
		{ workspaceId, plan, interval }
	);
	if (!clientSecret) {
		redirect(`/${workspace}/billing`);
	}

	return (
		<div className="@container mx-auto w-full max-w-4xl">
			<div className="grid @2xl:grid-cols-[1fr_1.2fr] gap-6">
				<div className="flex flex-col gap-1">
					<h1 className="font-medium text-xl tracking-tight">
						Upgrade to {PLAN_LABELS[plan]}
					</h1>
					<p className="text-muted-foreground text-sm">
						Billed {interval === "monthly" ? "monthly" : "annually"}. Cancel
						anytime from the billing page.
					</p>
					<Card className="mt-4">
						<CardHeader>
							<CardDescription>Plan</CardDescription>
							<CardTitle className="text-lg">
								Runway {PLAN_LABELS[plan]} ·{" "}
								{interval === "monthly" ? "Monthly" : "Annual"}
							</CardTitle>
						</CardHeader>
						<CardContent className="text-muted-foreground text-sm">
							Your total is calculated by Stripe and shown in the payment form.
						</CardContent>
					</Card>
				</div>
				<CheckoutIsland clientSecret={clientSecret} submitLabel="Subscribe" />
			</div>
		</div>
	);
}
