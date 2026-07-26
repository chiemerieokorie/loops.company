"use client";

import { env } from "@runway/env/web";
import { Alert, AlertDescription } from "@runway/ui/components/alert";
import { Button } from "@runway/ui/components/button";
import {
	CheckoutElementsProvider,
	PaymentElement,
	useCheckoutElements,
} from "@stripe/react-stripe-js/checkout";
import { type Appearance, loadStripe } from "@stripe/stripe-js";
import { useTheme } from "next-themes";
import { type FormEvent, useEffect, useState } from "react";

import { readStripeAppearance, STRIPE_FONTS } from "./lib/stripe-appearance";

// Module scope → Stripe.js loads once. The publishable key is OPTIONAL in the env
// schema so the app builds before billing is provisioned; `null` → fallback card.
const publishableKey = env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = publishableKey ? loadStripe(publishableKey) : null;

export function CheckoutIsland({
	clientSecret,
	submitLabel,
}: {
	clientSecret: string;
	submitLabel: string;
}) {
	const { resolvedTheme } = useTheme();
	const [appearance, setAppearance] = useState<Appearance | null>(null);

	// Resolve oklch tokens → literal colors for Stripe's iframe, re-running on theme.
	useEffect(() => {
		setAppearance(readStripeAppearance(resolvedTheme === "dark"));
	}, [resolvedTheme]);

	if (!stripePromise) {
		return (
			<div className="rounded-xl border border-border border-dashed p-6 text-muted-foreground text-sm">
				Payments are not configured yet. Set{" "}
				<code className="font-mono text-foreground">
					NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
				</code>{" "}
				to enable checkout.
			</div>
		);
	}

	if (!appearance) {
		return (
			<div className="py-10 text-center text-muted-foreground text-sm">
				Loading checkout…
			</div>
		);
	}

	return (
		<div className="rounded-xl bg-background p-4 ring-1 ring-border sm:p-6">
			<CheckoutElementsProvider
				// Re-mount cleanly on a theme flip so Elements re-init with new literals.
				key={resolvedTheme ?? "system"}
				options={{
					clientSecret,
					elementsOptions: { appearance, fonts: STRIPE_FONTS },
				}}
				stripe={stripePromise}
			>
				<CheckoutForm submitLabel={submitLabel} />
			</CheckoutElementsProvider>
		</div>
	);
}

function CheckoutForm({ submitLabel }: { submitLabel: string }) {
	const result = useCheckoutElements();
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);

	if (result.type === "loading") {
		return (
			<div className="py-10 text-center text-muted-foreground text-sm">
				Loading checkout…
			</div>
		);
	}
	if (result.type === "error") {
		return (
			<Alert variant="destructive">
				<AlertDescription>{result.error.message}</AlertDescription>
			</Alert>
		);
	}

	const { checkout } = result;
	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (submitting || !checkout.canConfirm) {
			return;
		}
		setSubmitting(true);
		setError(null);
		// Success → Stripe redirects to the session return_url; only errors return.
		const confirmation = await checkout.confirm();
		if (confirmation.type === "error") {
			setError(confirmation.error.message);
			setSubmitting(false);
		}
	};

	return (
		<form className="flex flex-col gap-5" onSubmit={onSubmit}>
			{/* Name lives on the customer already — hide the cardholder-name field. */}
			<PaymentElement
				options={{ fields: { billingDetails: { name: "never" } } }}
			/>
			{error ? (
				<Alert variant="destructive">
					<AlertDescription>{error}</AlertDescription>
				</Alert>
			) : null}
			<Button
				className="w-full"
				disabled={submitting || !checkout.canConfirm}
				size="lg"
				type="submit"
			>
				{submitting ? "Processing…" : submitLabel}
			</Button>
		</form>
	);
}
