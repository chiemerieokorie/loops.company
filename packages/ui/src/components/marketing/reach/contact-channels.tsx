import { Building2, Headphones, MessageSquare } from "lucide-react";

export interface ContactChannelsProps {
	chatHref?: string;
	description?: string;
	docsHref?: string;
	faqHref?: string;
	officeHref?: string;
	phoneNumber?: string;
	title?: string;
}

export function ContactChannels({
	title = "Get in touch",
	description = "Choose the best way to reach us. Our team is here to help.",
	chatHref = "#chat",
	phoneNumber = "+1 (555) 000-0000",
	officeHref = "#directions",
	faqHref = "#faq",
	docsHref = "#docs",
}: ContactChannelsProps) {
	return (
		<section className="bg-background py-24">
			<div className="@container mx-auto max-w-5xl px-6">
				<div className="text-center">
					<h1 className="text-balance font-semibold text-4xl md:text-5xl lg:tracking-tight">
						{title}
					</h1>
					<p className="mx-auto mt-4 max-w-xl text-balance text-lg text-muted-foreground">
						{description}
					</p>
				</div>
				<div className="mx-auto mt-12 grid max-w-2xl @2xl:grid-cols-3 @sm:grid-cols-2 gap-3">
					<div
						className="group relative flex flex-col rounded-xl bg-card p-6 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border transition-shadow hover:shadow-lg"
						data-slot="card"
					>
						<MessageSquare className="lucide lucide-message-square mb-6 size-4 text-muted-foreground" />
						<h2 className="font-medium">Chat with us</h2>
						<p className="mt-2 mb-4 text-muted-foreground text-sm">
							Speak to our friendly team via live chat.
						</p>
						<a
							className="mt-auto font-medium text-primary text-sm hover:underline"
							href={chatHref}
						>
							Start a conversation
						</a>
					</div>
					<div
						className="group relative flex flex-col rounded-xl bg-card p-6 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border transition-shadow hover:shadow-lg"
						data-slot="card"
					>
						<Headphones className="lucide lucide-headphones mb-6 size-4 text-muted-foreground" />
						<h2 className="font-medium">Call us</h2>
						<p className="mt-2 mb-4 text-muted-foreground text-sm">
							Mon-Fri from 8am to 5pm.
						</p>
						<a
							className="mt-auto font-medium text-primary text-sm hover:underline"
							href={`tel:${phoneNumber.replace(/\s/g, "")}`}
						>
							{phoneNumber}
						</a>
					</div>
					<div
						className="group relative flex flex-col rounded-xl bg-card p-6 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border transition-shadow hover:shadow-lg"
						data-slot="card"
					>
						<Building2 className="lucide lucide-building2 mb-6 size-4 text-muted-foreground" />
						<h2 className="font-medium">Visit us</h2>
						<p className="mt-2 mb-4 text-muted-foreground text-sm">
							Visit our office HQ.
						</p>
						<a
							className="mt-auto font-medium text-primary text-sm hover:underline"
							href={officeHref}
						>
							Get directions
						</a>
					</div>
				</div>
				<div className="mx-auto mt-3 max-w-2xl rounded-xl bg-muted/50 p-8 text-center">
					<h2 className="font-semibold text-xl">
						Can&apos;t find what you&apos;re looking for?
					</h2>
					<p className="mt-2 text-muted-foreground">
						Check out our comprehensive documentation and FAQ section.
					</p>
					<div className="mt-6 flex justify-center gap-3">
						<a
							className="inline-flex h-8 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-3 font-medium text-primary-foreground text-xs shadow-black/15 shadow-md ring-(--ring-color) ring-1 transition-all [--ring-color:color-mix(in_oklab,black_15%,var(--color-primary))] hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:[--ring-color:color-mix(in_oklab,white_15%,var(--color-primary))] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:drop-shadow-sm"
							href={faqHref}
						>
							Browse FAQ
						</a>
						<a
							className="inline-flex h-8 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-3 font-medium text-xs shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
							href={docsHref}
						>
							View documentation
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
