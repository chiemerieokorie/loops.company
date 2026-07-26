import { ArrowRight, Clock, Globe, Mail } from "lucide-react";
import { defaultOffices } from "./data";

export interface OfficeLocation {
	address: string;
	city: string;
	country: string;
	imageAlt: string;
	imageSrc: string;
	timezone: string;
}

export interface ContactOfficesProps {
	contactHref?: string;
	description?: string;
	email?: string;
	offices?: OfficeLocation[];
	title?: string;
}

export function ContactOffices({
	title = "Our offices",
	description = "Visit us at one of our global locations or reach out online.",
	email = "hello@runwayhq.com",
	contactHref = "#contact-form",
	offices = defaultOffices,
}: ContactOfficesProps) {
	return (
		<section className="bg-background py-24">
			<div className="@container mx-auto max-w-5xl px-6">
				<div className="grid @3xl:grid-cols-[1fr_2fr] gap-12">
					<div>
						<h1 className="text-balance font-semibold text-4xl">{title}</h1>
						<p className="mt-4 text-balance text-muted-foreground">
							{description}
						</p>
						<div className="mt-8 space-y-3">
							<div className="flex items-center gap-2">
								<Mail className="lucide lucide-mail size-4 text-muted-foreground" />
								<a
									className="font-medium hover:underline hover:decoration-primary"
									href={`mailto:${email}`}
								>
									{email}
								</a>
							</div>
							<div className="flex items-center gap-2">
								<Globe className="lucide lucide-globe size-4 text-muted-foreground" />
								<span className="text-muted-foreground">
									Available worldwide
								</span>
							</div>
						</div>
						<a
							className="mt-8 inline-flex h-9 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-4 py-2 font-medium text-primary-foreground text-sm shadow-black/15 shadow-md ring-(--ring-color) ring-1 transition-all [--ring-color:color-mix(in_oklab,black_15%,var(--color-primary))] hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:[--ring-color:color-mix(in_oklab,white_15%,var(--color-primary))] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:drop-shadow-sm"
							href={contactHref}
						>
							Get in touch
							<ArrowRight className="lucide lucide-arrow-right ml-2 size-4" />
						</a>
					</div>
					<div className="grid @md:grid-cols-3 gap-3">
						{offices.map((office) => (
							<div
								className="group row-span-2 grid grid-rows-subgrid gap-0 overflow-hidden rounded-xl bg-card text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
								data-slot="card"
								key={office.city}
							>
								<div className="relative m-px h-32 overflow-hidden rounded-[11px] before:absolute before:inset-0 before:z-1 before:rounded-[11px] before:border before:border-foreground/10">
									<img
										alt={office.imageAlt}
										className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
										decoding="async"
										loading="lazy"
										src={office.imageSrc}
										style={{ color: "transparent" }}
									/>
								</div>
								<div className="flex flex-col p-4">
									<h3 className="font-medium text-sm">{office.city}</h3>
									<p className="mt-0.5 text-muted-foreground text-sm">
										{office.country}
									</p>
									<p className="my-3 text-sm">{office.address}</p>
									<div className="mt-auto flex items-center gap-1 text-xs">
										<Clock className="lucide lucide-clock size-3" />
										{office.timezone}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
