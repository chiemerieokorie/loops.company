import Image from "next/image";
import {
	defaultStepsBorderedGrid,
	defaultTestimonialBorderedGrid,
} from "./data";

export interface StepsBorderedGridProps {
	description?: string;
	steps?: Array<{
		number: string;
		title: string;
		description: string;
	}>;
	testimonial?: {
		quote: string;
		author: string;
		handle: string;
		avatarUrl: string;
	};
	title?: string;
}

export function StepsBorderedGrid({
	title = "Set up your pipeline in minutes",
	description = "Our powerful analytics platform helps you visualize complex data, identify trends, and make data-driven decisions with confidence.",
	steps = defaultStepsBorderedGrid,
	testimonial = defaultTestimonialBorderedGrid,
}: StepsBorderedGridProps) {
	return (
		<section className="overflow-hidden bg-background">
			<div className="mx-auto max-w-5xl px-6 py-24 xl:px-0">
				<div className="@container relative">
					{/* Corner crosshair decorators */}
					<div
						aria-hidden="true"
						className="mask-radial-from-15% -translate-[calc(50%-0.5px)] absolute size-3 before:absolute before:inset-0 before:m-auto before:h-px before:bg-foreground/25 after:absolute after:inset-0 after:m-auto after:w-px after:bg-foreground/25"
					/>
					<div
						aria-hidden="true"
						className="mask-radial-from-15% absolute right-0 size-3 translate-x-[calc(50%-0.5px)] -translate-y-[calc(50%-0.5px)] before:absolute before:inset-0 before:m-auto before:h-px before:bg-foreground/25 after:absolute after:inset-0 after:m-auto after:w-px after:bg-foreground/25"
					/>
					<div
						aria-hidden="true"
						className="mask-radial-from-15% absolute right-0 bottom-0 size-3 translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)] before:absolute before:inset-0 before:m-auto before:h-px before:bg-foreground/25 after:absolute after:inset-0 after:m-auto after:w-px after:bg-foreground/25"
					/>
					<div
						aria-hidden="true"
						className="mask-radial-from-15% absolute bottom-0 size-3 -translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)] before:absolute before:inset-0 before:m-auto before:h-px before:bg-foreground/25 after:absolute after:inset-0 after:m-auto after:w-px after:bg-foreground/25"
					/>

					<div className="grid @3xl:grid-cols-3 grid-cols-1 @3xl:divide-x border">
						{/* Header column */}
						<div className="w-full @4xl:p-12 @xl:p-8 p-6">
							<h2 className="mb-6 font-semibold text-3xl text-foreground">
								{title}
							</h2>
							<p className="text-lg text-muted-foreground">{description}</p>
						</div>

						{/* Steps column */}
						<div className="relative col-span-2 divide-y *:p-6 @4xl:*:p-12 @xl:*:p-8">
							{steps.map((step, index) => (
								<div className="group space-y-6" key={index}>
									<div>
										<span className="flex size-7 items-center justify-center rounded-full bg-foreground/5 font-medium text-foreground text-sm">
											{step.number}
										</span>
										<h3 className="my-4 font-semibold text-foreground text-lg">
											{step.title}
										</h3>
										<p className="text-muted-foreground">{step.description}</p>
									</div>
									{/* Step-specific illustration */}
									{index === 0 && (
										<div
											aria-hidden="true"
											className="overflow-hidden rounded-2xl border border-transparent bg-illustration p-8 shadow-black/6.5 shadow-md ring-1 ring-border-illustration"
										>
											<div>
												<h3 className="mb-1 font-semibold text-foreground">
													Monitoring
												</h3>
												<p className="text-muted-foreground text-sm">
													January - June 2024
												</p>
											</div>
											<div className="mt-6 flex h-40 items-end gap-3">
												{[70, 100, 75, 90, 50, 100].map((h, i) => (
													<div className="flex flex-1 items-end gap-1" key={i}>
														<div
															className="flex-1 rounded-sm bg-emerald-500/60"
															style={{ height: `${h}%` }}
														/>
														<div
															className="flex-1 rounded-sm bg-indigo-500/60"
															style={{ height: `${h * 0.65}%` }}
														/>
													</div>
												))}
											</div>
										</div>
									)}
									{index === 1 && (
										<div
											aria-hidden="true"
											className="flex flex-col items-center justify-center rounded-2xl border border-transparent bg-illustration p-8 shadow-black/6.5 shadow-md ring-1 ring-border-illustration"
										>
											<div className="mb-4 flex size-8 items-center justify-center rounded-full border border-dashed">
												<svg
													className="size-4 text-muted-foreground"
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
													<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
													<path d="m9 12 2 2 4-4" />
												</svg>
											</div>
											<div className="text-center text-muted-foreground text-sm">
												Identity verification in progress
											</div>
										</div>
									)}
									{index === 2 && (
										<div
											aria-hidden="true"
											className="h-fit max-w-[calc(100vw-6rem)] overflow-hidden rounded-2xl border border-transparent bg-illustration shadow-black/6.5 shadow-md ring-1 ring-border-illustration"
										>
											<div className="mt-4 flex gap-1.5 px-4">
												<div className="size-2 rounded-full border border-foreground/5 bg-muted-foreground/10" />
												<div className="size-2 rounded-full border border-foreground/5 bg-muted-foreground/10" />
												<div className="size-2 rounded-full border border-foreground/5 bg-muted-foreground/10" />
											</div>
											<div className="space-y-1 p-4 font-mono text-muted-foreground text-xs">
												<div>
													<span className="text-rose-500">$ch</span> ={" "}
													<span className="text-blue-500">curl_init</span>();
												</div>
												<div>
													<span className="text-blue-500">curl_setopt</span>
													($ch,{" "}
													<span className="text-blue-500">CURLOPT_URL</span>,{" "}
													<span className="text-emerald-600">
														&apos;https://api.example.com/data&apos;
													</span>
													);
												</div>
												<div>
													<span className="text-blue-500">curl_setopt</span>
													($ch,{" "}
													<span className="text-blue-500">CURLOPT_POST</span>,{" "}
													<span className="text-blue-500">1</span>);
												</div>
												<div>
													<span className="text-rose-500">$response</span> ={" "}
													<span className="text-blue-500">curl_exec</span>($ch);
												</div>
											</div>
										</div>
									)}
								</div>
							))}
						</div>
					</div>

					{testimonial && (
						<blockquote className="relative mt-12 max-w-xl pl-4 before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-full before:bg-primary">
							<p>
								{testimonial.quote.includes("it's") ||
								testimonial.quote.includes("It's")
									? testimonial.quote
											.replace("It's", "It’s")
											.replace("it's", "it’s")
									: testimonial.quote}
							</p>
							<div className="mt-6 flex items-center gap-2">
								<div className="size-6 overflow-hidden rounded-full border bg-background p-0.5 shadow shadow-zinc-950/5">
									<Image
										alt={testimonial.author}
										className="aspect-square rounded-full object-cover"
										height={24}
										src={testimonial.avatarUrl}
										unoptimized
										width={24}
									/>
								</div>
								<span>{testimonial.author}</span>
								<span className="text-muted-foreground">
									{testimonial.handle}
								</span>
							</div>
						</blockquote>
					)}
				</div>
			</div>
		</section>
	);
}
