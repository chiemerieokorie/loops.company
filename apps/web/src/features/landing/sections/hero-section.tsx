import { buttonVariants } from "@runway/ui/components/button";
import { IconArrowRight, IconChevronRightSmall } from "@runway/ui/icons";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../components/container";
import { Screenshot } from "../components/screenshot";
import { Heading, Lead } from "../components/section";

const logos = [
	{ n: 9, w: 51 },
	{ n: 10, w: 70 },
	{ n: 11, w: 100 },
	{ n: 12, w: 85 },
	{ n: 13, w: 75 },
	{ n: 8, w: 85 },
];

export function HeroSection() {
	return (
		<section className="py-16" id="hero">
			<Container className="flex flex-col gap-16">
				<div className="flex flex-col gap-20">
					<div className="flex flex-col items-start gap-6">
						<a
							className="group inline-flex max-w-full items-center gap-3 rounded-full bg-muted px-3 py-1 text-sm transition-colors hover:bg-muted/70"
							href="/"
						>
							<span className="truncate text-muted-foreground">
								Introducing v1.0 — now in public beta
							</span>
							<span className="h-3 w-px bg-border" />
							<span className="inline-flex shrink-0 items-center gap-1 font-medium text-foreground">
								Learn more
								<IconChevronRightSmall className="size-4" />
							</span>
						</a>
						<Heading className="max-w-4xl">
							Everything your team needs, in one workspace.
						</Heading>
						<Lead className="max-w-2xl text-lg">
							Bring your documents, notes, and conversations together,
							collaborate in real time, and let AI handle the busywork — all in
							one place.
						</Lead>
						<div className="flex items-center gap-3">
							<Link className={buttonVariants({ size: "lg" })} href="/signup">
								Get started
							</Link>
							<Link
								className={buttonVariants({ size: "lg", variant: "ghost" })}
								href="#features"
							>
								See features
								<IconArrowRight />
							</Link>
						</div>
					</div>

					<Screenshot
						className="rounded-2xl"
						placement="bottom"
						wallpaper="blue"
					>
						<Image
							alt="Product screenshot"
							className="dark:hidden"
							height={1990}
							src="/landing/img/screenshots/1.webp"
							width={3440}
						/>
						<Image
							alt="Product screenshot"
							className="not-dark:hidden"
							height={1990}
							src="/landing/img/screenshots/1-color-mist.webp"
							width={3440}
						/>
					</Screenshot>
				</div>

				<div className="grid grid-cols-2 place-items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
					{logos.map(({ n, w }) => (
						<span className="opacity-60" key={n}>
							<Image
								alt=""
								className="dark:hidden"
								height={32}
								src={`/landing/img/logos/${n}-color-black-height-32.svg`}
								width={w}
							/>
							<Image
								alt=""
								className="hidden dark:block"
								height={32}
								src={`/landing/img/logos/${n}-color-white-height-32.svg`}
								width={w}
							/>
						</span>
					))}
				</div>
			</Container>
		</section>
	);
}
