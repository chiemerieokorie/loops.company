"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

// Display-only celebration after the embedded checkout returns to
// `/[workspace]/billing?upgraded=1`. Entitlement is granted by the webhook, not
// here — so this just reassures while the plan flips in reactively, then strips the
// query params (replaceState, not router.replace, to avoid an unmount mid-toast).
export function UpgradedBanner() {
	const params = useSearchParams();
	// `replaceState` bypasses the router, so `useSearchParams` may still report
	// `upgraded=1` on later renders — a ref guard keeps the toast to exactly once.
	const celebrated = useRef(false);

	useEffect(() => {
		if (celebrated.current || params.get("upgraded") !== "1") {
			return;
		}
		celebrated.current = true;
		toast.success("Payment received — activating your plan…");
		const url = new URL(window.location.href);
		url.searchParams.delete("upgraded");
		url.searchParams.delete("session_id");
		window.history.replaceState(null, "", url.toString());
	}, [params]);

	return null;
}
