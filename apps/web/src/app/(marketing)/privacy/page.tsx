import { Container } from "@/features/landing/components/container";
import { Heading, Lead } from "@/features/landing/components/section";

const sections = [
	{
		title: "Information we collect",
		body: `We collect information you provide directly to us when you create an account, subscribe to a plan, or contact us for support. This includes your name, email address, payment information, and any data you upload or create within the platform.

We also collect usage data automatically — including log data, device information, IP address, browser type, pages visited, and feature interactions. This helps us understand how the product is used and where to focus improvement.`,
	},
	{
		title: "How we use your information",
		body: `We use collected information to operate and improve Runway, process payments, send transactional and product communications, provide customer support, and comply with legal obligations.

We do not sell your personal information to third parties. We do not use your content to train models or share it with other customers.`,
	},
	{
		title: "Data storage and security",
		body: `Your data is stored on infrastructure provided by Convex and Vercel. We use industry-standard encryption in transit (TLS) and at rest (AES-256).

Access to your data within Runway is scoped to your organization. Our team can access data for support and debugging purposes, and will always notify you before doing so unless legally prohibited.`,
	},
	{
		title: "Data retention",
		body: `We retain your data for as long as your account is active. If you close your account, we will delete your personal data within 90 days, except where we are required by law to retain it longer.

Deleted items are kept in the trash for 30 days to support recovery, then permanently removed.`,
	},
	{
		title: "Cookies",
		body: `We use cookies for authentication and session management. We do not use third-party advertising cookies. We may use Stripe cookies for payment processing.

You can disable cookies in your browser settings, but doing so will prevent you from logging in.`,
	},
	{
		title: "Your rights",
		body: `You have the right to access, correct, export, or delete your personal data at any time. Submit requests to privacy@runway.app. We will respond within 30 days.

For California residents (CCPA) and EU/UK residents (GDPR), additional rights apply. Contact us for details.`,
	},
	{
		title: "Changes to this policy",
		body: `We may update this Privacy Policy from time to time. We will notify you of material changes by email or via an in-app notice at least 14 days before the change takes effect.

Your continued use of Runway after a change takes effect constitutes your acceptance of the updated policy.`,
	},
	{
		title: "Contact us",
		body: "Questions about this policy or your data? Email us at privacy@runway.app. We aim to respond within 2 business days.",
	},
];

export default function PrivacyPage() {
	return (
		<section className="py-20">
			<Container className="flex flex-col gap-16">
				<div className="flex flex-col gap-6">
					<p className="font-medium text-muted-foreground text-sm">
						Last updated June 24, 2026
					</p>
					<Heading>Privacy Policy</Heading>
					<Lead className="max-w-2xl text-lg">
						We take your privacy seriously. This policy explains what data we
						collect, how we use it, and what rights you have over it.
					</Lead>
				</div>

				<div className="mx-auto flex w-full max-w-2xl flex-col gap-12">
					{sections.map((section) => (
						<div className="flex flex-col gap-4" key={section.title}>
							<h2 className="font-display font-medium text-xl tracking-tight">
								{section.title}
							</h2>
							<div className="flex flex-col gap-4">
								{section.body
									.trim()
									.split("\n\n")
									.map((para) => (
										<p
											className="text-muted-foreground leading-relaxed"
											key={para}
										>
											{para}
										</p>
									))}
							</div>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
}
