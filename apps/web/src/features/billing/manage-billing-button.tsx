"use client";

import { api } from "@runway/backend/convex/_generated/api";
import { Button } from "@runway/ui/components/button";
import { useAction } from "convex/react";
import { useState } from "react";
import { toast } from "sonner";

// Opens the Stripe Customer Portal (manage payment method, invoices, cancel). The
// action returns null if the workspace never purchased.
export function ManageBillingButton({ workspaceId }: { workspaceId: string }) {
	const openPortal = useAction(api.stripe.createBillingPortalSession);
	const [loading, setLoading] = useState(false);

	const onClick = async () => {
		setLoading(true);
		try {
			const result = await openPortal({ workspaceId });
			if (result?.url) {
				window.location.href = result.url;
				return;
			}
			toast.error("No billing portal is available yet.");
		} catch {
			toast.error("Couldn't open the billing portal. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<Button
			disabled={loading}
			onClick={onClick}
			type="button"
			variant="outline"
		>
			{loading ? "Opening…" : "Manage billing"}
		</Button>
	);
}
