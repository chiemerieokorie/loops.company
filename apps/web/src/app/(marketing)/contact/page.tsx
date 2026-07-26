import { Separator } from "@runway/ui/components/separator";
import { Container } from "@/features/landing/components/container";
import {
	Heading,
	Lead,
	Subheading,
} from "@/features/landing/components/section";

const channels = [
	{
		name: "General",
		email: "hello@runway.app",
		description: "Product questions, partnerships, press inquiries.",
	},
	{
		name: "Support",
		email: "support@runway.app",
		description: "Help with your account, billing, or technical issues.",
	},
	{
		name: "Privacy",
		email: "privacy@runway.app",
		description: "Data requests, GDPR/CCPA, deletion requests.",
	},
	{
		name: "Legal",
		email: "legal@runway.app",
		description: "Terms, contracts, compliance questions.",
	},
];

export default function ContactPage() {
	return (
		<>
			<section className="py-20">
				<Container className="flex flex-col gap-8">
					<div className="max-w-2xl">
						<p className="font-medium text-muted-foreground text-sm">Contact</p>
						<Heading className="mt-4">Get in touch.</Heading>
						<Lead className="mt-6 text-lg">
							We're a small team and read every message. Expect a reply within
							one business day.
						</Lead>
					</div>
				</Container>
			</section>

			<Separator />

			<section className="py-20">
				<Container className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
					{channels.map((channel) => (
						<div className="flex flex-col gap-3" key={channel.name}>
							<p className="font-medium text-foreground">{channel.name}</p>
							<a
								className="font-medium text-primary text-sm hover:underline"
								href={`mailto:${channel.email}`}
							>
								{channel.email}
							</a>
							<p className="text-muted-foreground text-sm">
								{channel.description}
							</p>
						</div>
					))}
				</Container>
			</section>

			<Separator />

			<section className="py-20">
				<Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
					<Subheading>Based in the US</Subheading>
					<div className="flex flex-col gap-4 text-muted-foreground">
						<p>
							Runway is a fully remote company. Our team works across US time
							zones, so we're responsive from 8am ET to 8pm PT on business days.
						</p>
						<p>
							We don't have a physical office. If you're looking to meet in
							person, we attend industry conferences and meetups from time to
							time — reach out if you'd like to connect.
						</p>
					</div>
				</Container>
			</section>
		</>
	);
}
