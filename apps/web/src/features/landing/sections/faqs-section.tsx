import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@runway/ui/components/accordion";
import { Container } from "../components/container";
import { Subheading } from "../components/section";

const faqs = [
	{
		id: "faq-1",
		question: "Do I need a credit card to get started?",
		answer:
			"No. The Free plan needs no credit card — sign up and start working in your own workspace right away. Upgrade whenever your team needs more room or AI.",
	},
	{
		id: "faq-2",
		question: "Can my whole team use the same workspace?",
		answer:
			"Yes. Invite as many teammates as your plan allows, assign roles, and collaborate on the same documents and notes in real time.",
	},
	{
		id: "faq-3",
		question: "How does the AI assistant work?",
		answer:
			"The assistant lives in your workspace and can draft, summarize, and answer questions grounded in your team's context. It's included on the Pro and Team plans.",
	},
	{
		id: "faq-4",
		question: "Can I change or cancel my plan anytime?",
		answer:
			"Absolutely. Upgrade, downgrade, or cancel at any time from your billing settings — changes take effect at the end of your current period.",
	},
];

export function FaqsSection() {
	return (
		<section className="py-16" id="faqs">
			<Container className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2">
				<Subheading>Questions &amp; answers</Subheading>
				<Accordion>
					{faqs.map((faq) => (
						<AccordionItem
							className="border-border border-b"
							key={faq.id}
							value={faq.id}
						>
							<AccordionTrigger className="text-base">
								{faq.question}
							</AccordionTrigger>
							<AccordionContent className="pr-12 text-muted-foreground">
								<p>{faq.answer}</p>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</Container>
		</section>
	);
}
