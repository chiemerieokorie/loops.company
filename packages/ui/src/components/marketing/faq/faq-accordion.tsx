"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@runway/ui/components/accordion";

export interface FaqItem {
	answer: string;
	question: string;
}

export interface FaqGroup {
	items: FaqItem[];
	label: string;
}

export interface FaqAccordionProps {
	groups?: FaqGroup[];
	subtitle?: string;
	supportHref?: string;
	supportText?: string;
	title?: string;
}

const defaultGroups: FaqGroup[] = [
	{
		label: "General",
		items: [
			{
				question: "How long does shipping take?",
				answer:
					"Standard shipping typically takes 5–7 business days. Expedited options are available at checkout.",
			},
			{
				question: "What payment methods do you accept?",
				answer:
					"We accept all major credit cards, PayPal, and bank transfers for annual plans.",
			},
			{
				question: "Can I change or cancel my order?",
				answer:
					"You can modify or cancel your order within 24 hours of placing it by contacting our support team.",
			},
		],
	},
	{
		label: "Shipping",
		items: [
			{
				question: "Do you ship internationally?",
				answer:
					"Yes, we ship to over 50 countries worldwide. International delivery times vary by destination.",
			},
			{
				question: "What is your return policy?",
				answer:
					"We offer a 30-day hassle-free return policy. Items must be in their original condition.",
			},
			{
				question: "How do I track my order?",
				answer:
					"Once your order ships, you'll receive a tracking number via email. Use it on our tracking page.",
			},
		],
	},
];

export function FaqAccordion({
	title = "FAQs",
	subtitle = "Your questions answered",
	supportText = "Can't find what you're looking for?",
	supportHref = "#",
	groups = defaultGroups,
}: FaqAccordionProps) {
	return (
		<section className="bg-background py-16 md:py-24">
			<div className="mx-auto max-w-5xl px-1 md:px-6">
				<div className="grid gap-8 md:grid-cols-5 md:gap-12">
					{/* Sidebar */}
					<div className="max-w-lg max-md:px-6 md:col-span-2">
						<h2 className="font-semibold text-4xl text-foreground">{title}</h2>
						<p className="mt-4 text-balance text-lg text-muted-foreground">
							{subtitle}
						</p>
						<p className="mt-6 text-muted-foreground max-md:hidden">
							{supportText}{" "}
							<a
								className="font-medium text-primary hover:underline"
								href={supportHref}
							>
								Contact our customer support team
							</a>
						</p>
					</div>

					{/* Accordion groups */}
					<div className="space-y-12 md:col-span-3">
						{groups.map((group) => (
							<div className="space-y-4" key={group.label}>
								<h3 className="pl-6 font-semibold text-foreground text-lg">
									{group.label}
								</h3>
								<div className="-space-y-1">
									<Accordion>
										{group.items.map((item) => (
											<AccordionItem
												className="rounded-xl border-b border-none px-6 py-1 last:border-b-0 data-open:bg-card data-open:shadow-sm data-open:ring-1 data-open:ring-border"
												key={item.question}
												value={item.question}
											>
												<AccordionTrigger className="border-b py-4 font-medium text-base hover:no-underline data-open:border-transparent">
													{item.question}
												</AccordionTrigger>
												<AccordionContent>
													<p className="pb-4 text-muted-foreground">
														{item.answer}
													</p>
												</AccordionContent>
											</AccordionItem>
										))}
									</Accordion>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Mobile support link */}
				<p className="mt-12 px-6 text-muted-foreground md:hidden">
					{supportText}{" "}
					<a
						className="font-medium text-primary hover:underline"
						href={supportHref}
					>
						Contact our customer support team
					</a>
				</p>
			</div>
		</section>
	);
}
