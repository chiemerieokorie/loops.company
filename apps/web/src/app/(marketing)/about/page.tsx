import { Separator } from "@runway/ui/components/separator";
import { Container } from "@/features/landing/components/container";
import {
	Heading,
	Lead,
	Subheading,
} from "@/features/landing/components/section";

// Placeholder about page — swap this copy (and the team) for your own story.
const values = [
	{
		name: "Craft",
		description:
			"Every detail matters. We sweat the small things so the product feels effortless to use.",
	},
	{
		name: "Collaboration",
		description:
			"Great work happens together. We build for teams — shared, real-time, and always in sync.",
	},
	{
		name: "Trust & privacy",
		description:
			"Your data is yours. We're transparent about what we collect and give you control over it.",
	},
	{
		name: "Momentum",
		description:
			"We ship early and often, listen closely, and keep improving. Progress compounds.",
	},
];

const team = [
	{
		name: "Your Name",
		role: "Founder & CEO",
		bio: "Introduce your team here — a sentence on who you are and why you're building this.",
	},
];

export default function AboutPage() {
	return (
		<>
			<section className="py-20">
				<Container className="flex flex-col gap-8">
					<div className="max-w-3xl">
						<p className="font-medium text-muted-foreground text-sm">
							About us
						</p>
						<Heading className="mt-4">
							Building tools teams love to use.
						</Heading>
						<Lead className="mt-6 text-lg">
							We build software that helps teams do their best work together —
							organized, collaborative, and fast.
						</Lead>
					</div>
				</Container>
			</section>

			<Separator />

			<section className="py-20">
				<Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
					<Subheading>Why we built this</Subheading>
					<div className="flex flex-col gap-6 text-muted-foreground">
						<p>
							Most teams juggle a dozen disconnected tools — documents in one
							place, conversations in another, and no single source of truth.
							Context gets lost, and work slows down.
						</p>
						<p>
							We wanted one place where a team's work lives together:
							collaborative documents, shared notes, and an assistant that helps
							you move faster — all in a workspace that's fast and easy to use.
						</p>
						<p>
							This is placeholder copy for the starter template — replace it
							with your product's story.
						</p>
					</div>
				</Container>
			</section>

			<Separator />

			<section className="py-20">
				<Container className="flex flex-col gap-16">
					<Subheading>Our values</Subheading>
					<div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
						{values.map((value) => (
							<div className="flex flex-col gap-3" key={value.name}>
								<h3 className="font-medium text-foreground">{value.name}</h3>
								<p className="text-muted-foreground text-sm">
									{value.description}
								</p>
							</div>
						))}
					</div>
				</Container>
			</section>

			<Separator />

			<section className="py-20">
				<Container className="flex flex-col gap-16">
					<Subheading>Team</Subheading>
					<div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
						{team.map((person) => (
							<div className="flex flex-col gap-3" key={person.name}>
								<div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted font-display font-medium text-xl">
									{person.name[0]}
								</div>
								<div>
									<p className="font-medium text-foreground">{person.name}</p>
									<p className="text-muted-foreground text-sm">{person.role}</p>
								</div>
								<p className="text-muted-foreground text-sm">{person.bio}</p>
							</div>
						))}
					</div>
				</Container>
			</section>
		</>
	);
}
