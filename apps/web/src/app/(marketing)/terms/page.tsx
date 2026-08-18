import { Container } from "@/features/landing/components/container";
import { Heading, Lead } from "@/features/landing/components/section";

const sections = [
	{
		title: "Acceptance of terms",
		body: `By accessing or using Loops ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, do not use the Service.

These Terms apply to all users, including free trial users, paid subscribers, and anyone accessing the Service on behalf of an organization.`,
	},
	{
		title: "Your account",
		body: `You are responsible for maintaining the security of your account and for all activity that occurs under it. You must not share your credentials or allow others to access your account.

You must provide accurate information when creating your account and keep it up to date. Loops reserves the right to suspend accounts with inaccurate or incomplete information.`,
	},
	{
		title: "Acceptable use",
		body: `You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to: use the Service to process data you don't have rights to; attempt to reverse-engineer or extract our proprietary algorithms; scrape or bulk-export data beyond your own account data; use the Service to harass, abuse, or harm others; or resell or sublicense access without written permission.`,
	},
	{
		title: "Subscriptions and payment",
		body: `Paid plans are billed in advance on a monthly or annual basis. You authorize us to charge your payment method on a recurring basis until you cancel.

You may cancel at any time. Cancellation takes effect at the end of the current billing period. We do not provide refunds for partial periods. If we discontinue the Service with less than 30 days notice, you are entitled to a pro-rated refund.`,
	},
	{
		title: "Intellectual property",
		body: `Loops owns all intellectual property in the Service, including the platform and its software. These Terms do not grant you any ownership rights.

You own your content and data. By using the Service you grant us a limited license to process your data solely to provide the Service to you. We do not claim ownership of your work.`,
	},
	{
		title: "Data and privacy",
		body: `Our Privacy Policy governs how we collect, use, and protect your personal data. By using the Service, you agree to our Privacy Policy.

You are responsible for the accuracy and legality of data you upload. You represent that you have rights to any data you bring into the platform.`,
	},
	{
		title: "Disclaimers and limitation of liability",
		body: `THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS.

TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR LIABILITY TO YOU FOR ANY CLAIMS ARISING FROM THESE TERMS OR YOUR USE OF THE SERVICE SHALL NOT EXCEED THE AMOUNTS YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.`,
	},
	{
		title: "Changes to these terms",
		body: "We may update these Terms from time to time. We will notify you of material changes by email at least 14 days before they take effect. Continued use after the effective date constitutes acceptance of the updated Terms.",
	},
	{
		title: "Governing law",
		body: "These Terms are governed by the laws of the State of Delaware, without regard to conflict of law principles. Disputes shall be resolved exclusively in the state or federal courts located in Delaware.",
	},
	{
		title: "Contact",
		body: "Questions about these Terms? Email hello@loops.company.",
	},
];

export default function TermsPage() {
	return (
		<section className="py-20">
			<Container className="flex flex-col gap-16">
				<div className="flex flex-col gap-6">
					<p className="font-medium text-muted-foreground text-sm">
						Last updated June 24, 2026
					</p>
					<Heading>Terms of Service</Heading>
					<Lead className="max-w-2xl text-lg">
						Please read these terms carefully before using Loops. By using the
						service, you agree to be bound by them.
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
