import { ArrowBigDown, ArrowBigRight } from "lucide-react";

export interface StepsCenteredProps {
	ctaHref?: string;
	ctaLabel?: string;
	description?: string;
	/**
	 * "horizontal" renders a 3-column grid with right-pointing arrows (default).
	 * "vertical" renders a single-column stack with downward arrows.
	 */
	direction?: "horizontal" | "vertical";
	eyebrow?: string;
	title?: string;
}

function CsvIllustration() {
	return (
		<div aria-hidden="true" className="relative mx-auto size-fit">
			<div className="absolute -right-3 bottom-2 z-10 rounded bg-teal-500 px-1.5 py-0.5 font-semibold text-[10px] text-white shadow-lg shadow-teal-900/25 after:absolute after:inset-0 after:rounded after:border after:border-foreground/15">
				CSV
			</div>
			<div className="corner-tr-bevel relative z-0 w-16 space-y-2 rounded-md rounded-tr-[15%] bg-illustration p-2 shadow-black/6.5 shadow-md ring-1 ring-border-illustration">
				<div className="space-y-[3px]">
					<div className="flex gap-0.5">
						<div className="h-2 flex-1 rounded-sm bg-foreground/15" />
						<div className="h-2 flex-1 rounded-sm bg-foreground/15" />
						<div className="h-2 flex-1 rounded-sm bg-foreground/15" />
					</div>
					{Array.from({ length: 6 }).map((_, i) => (
						<div className="flex gap-0.5" key={i}>
							<div className="h-2 flex-1 rounded-sm bg-foreground/5" />
							<div className="h-2 flex-1 rounded-sm bg-foreground/5" />
							<div className="h-2 flex-1 rounded-sm bg-foreground/5" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

function DocumentStackIllustration() {
	return (
		<div aria-hidden="true" className="flex -space-x-4">
			{[
				{ color: "blue", label: "BTC", icon: "bitcoin" },
				{ color: "green", label: "USD", icon: "dollar" },
				{ color: "red", label: "EURO", icon: "euro" },
			].map(({ color, label }) => (
				<div
					className={`before:mask-b-from-65% relative w-16 translate-y-1 -rotate-12 space-y-2 rounded-lg bg-illustration p-2 shadow-black/6.5 shadow-md ring-1 ring-border-illustration before:absolute before:inset-0.5 before:rounded-[6px] before:border before:border-foreground/5 before:bg-linear-to-b before:from-25% before:from-${color}-500/15 before:to-75%`}
					key={label}
				>
					<div
						className={`flex -translate-x-0.5 items-center gap-0.5 text-${color}-900 dark:text-${color}-300`}
					>
						<span className="font-medium text-xs">{label}</span>
					</div>
					<div className="space-y-1.5">
						<div className="flex items-center gap-1">
							<div className="h-[3px] w-2.5 rounded-full bg-border" />
							<div className="h-[3px] w-6 rounded-full bg-border" />
						</div>
						<div className="flex items-center gap-1">
							<div className="h-[3px] w-2.5 rounded-full bg-border" />
							<div className="h-[3px] w-6 rounded-full bg-border" />
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-[3px] w-full rounded-full bg-border" />
						<div className="flex items-center gap-1">
							<div className="h-[3px] w-2/3 rounded-full bg-border" />
							<div className="h-[3px] w-1/3 rounded-full bg-border" />
						</div>
					</div>
					<svg
						className="ml-auto size-3"
						fill="none"
						height="24"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						viewBox="0 0 24 24"
						width="24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284" />
						<path d="M3 21h18" />
					</svg>
				</div>
			))}
		</div>
	);
}

function ReportIllustration() {
	return (
		<div className="flex w-fit gap-2">
			{[0, 1].map((i) => (
				<div
					className="w-16 space-y-2 rounded-md bg-illustration p-2 shadow-black/6.5 shadow-md ring-1 ring-border-illustration"
					key={i}
				>
					<div className="flex items-center gap-1">
						<div className="size-2.5 rounded-full bg-foreground/15" />
						<div className="h-[3px] w-4 rounded-full bg-foreground/15" />
					</div>
					<div className="space-y-1.5">
						<div className="flex items-center gap-1">
							<div className="h-[3px] w-2.5 rounded-full bg-foreground/15" />
							<div className="h-[3px] w-6 rounded-full bg-foreground/15" />
						</div>
						<div className="flex items-center gap-1">
							<div className="h-[3px] w-2.5 rounded-full bg-foreground/15" />
							<div className="h-[3px] w-6 rounded-full bg-foreground/15" />
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-[3px] w-full rounded-full bg-foreground/15" />
						<div className="flex items-center gap-1">
							<div className="h-[3px] w-2/3 rounded-full bg-foreground/15" />
							<div className="h-[3px] w-1/3 rounded-full bg-foreground/15" />
						</div>
					</div>
					<svg
						className="ml-auto size-3"
						fill="none"
						height="24"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						viewBox="0 0 24 24"
						width="24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284" />
						<path d="M3 21h18" />
					</svg>
				</div>
			))}
		</div>
	);
}

const stepsData = [
	{
		label: "Data Collection",
		description:
			"Easily import data from multiple sources and formats with our intuitive integration tools.",
		illustration: <CsvIllustration />,
	},
	{
		label: "Automated Analysis",
		description:
			"Our AI-powered system processes complex datasets to identify patterns and insights instantly.",
		illustration: <DocumentStackIllustration />,
	},
	{
		label: "Actionable Reports",
		description:
			"Transform insights into beautiful visualizations and shareable reports to drive decisions.",
		illustration: <ReportIllustration />,
	},
];

export function StepsCentered({
	eyebrow = "Our Process",
	title = "Simple Three-Step Workflow",
	description = "Experience our streamlined approach to data analysis that empowers your team to make informed decisions quickly and efficiently.",
	ctaLabel = "Get Started",
	ctaHref = "/sign-up",
	direction = "horizontal",
}: StepsCenteredProps) {
	const isHorizontal = direction === "horizontal";

	return (
		<section className="overflow-hidden">
			<div className="m-4 rounded-[2rem] bg-background py-24">
				<div className="@container relative mx-auto w-full max-w-5xl px-6">
					<div className="mx-auto max-w-2xl text-center">
						{eyebrow && <span className="text-primary">{eyebrow}</span>}
						<h2 className="mt-4 font-semibold text-4xl text-foreground">
							{title}
						</h2>
						<p className="mt-4 text-balance text-lg text-muted-foreground">
							{description}
						</p>
					</div>

					{isHorizontal ? (
						<div className="my-20 grid @3xl:grid-cols-3 gap-12">
							{stepsData.map((step, index) => (
								<div
									className="row-span-3 grid grid-rows-subgrid gap-8 text-center"
									key={index}
								>
									<span className="mx-auto flex size-6 items-center justify-center rounded-full border bg-foreground/5 font-medium text-foreground text-sm">
										{index + 1}
									</span>
									<div className="relative self-center">
										<div className="mx-auto w-fit">{step.illustration}</div>
										{index < stepsData.length - 1 && (
											<ArrowBigRight className="absolute inset-y-0 right-0 my-auto @3xl:block hidden translate-x-[150%] fill-illustration stroke-illustration drop-shadow" />
										)}
									</div>
									<div className="space-y-3 self-end">
										<h3 className="font-medium text-foreground text-lg">
											{step.label}
										</h3>
										<p className="text-balance text-muted-foreground">
											{step.description}
										</p>
									</div>
								</div>
							))}
						</div>
					) : (
						<div className="mx-auto my-8 grid gap-12 *:py-6 md:max-w-[33%]">
							{stepsData.map((step, index) => (
								<div className="relative" key={index}>
									<div className="text-center">
										<span className="mx-auto flex size-6 items-center justify-center rounded-full border bg-foreground/5 font-medium text-foreground text-sm">
											{index + 1}
										</span>
										<div className="mx-auto my-8 w-fit">
											{step.illustration}
										</div>
										<h3 className="mb-3 font-medium text-foreground text-lg">
											{step.label}
										</h3>
										<p className="text-balance text-muted-foreground">
											{step.description}
										</p>
									</div>
									{index < stepsData.length - 1 && (
										<ArrowBigDown className="absolute inset-x-0 bottom-0 mx-auto translate-y-[150%] fill-illustration stroke-illustration drop-shadow" />
									)}
								</div>
							))}
						</div>
					)}

					{ctaLabel && (
						<a
							className="mx-auto flex h-9 w-fit cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-4 py-2 font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50"
							href={ctaHref}
						>
							{ctaLabel}
						</a>
					)}
				</div>
			</div>
		</section>
	);
}
