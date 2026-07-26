import { MEMORY_ITEMS } from "./data";
import {
	GeminiLogo,
	OpenAILogo,
	PerplexityLogo,
	VercelLogo,
} from "./integration-logos";

export interface FeatureBentoAiMemoryProps {
	aiMemoryDescription?: string;
	aiMemoryTitle?: string;
	analyticsDescription?: string;
	analyticsTitle?: string;
	biometricDescription?: string;
	biometricTitle?: string;
	campaignDescription?: string;
	campaignTitle?: string;
	feedbackDescription?: string;
	feedbackTitle?: string;
	messagingDescription?: string;
	messagingTitle?: string;
}

export function FeatureBentoAiMemory({
	aiMemoryTitle = "Smart Home Automation",
	aiMemoryDescription = "AI-powered memory context that learns your preferences for a personalized experience.",
	biometricTitle = "Biometric Access",
	biometricDescription = "Secure, fast authentication powered by biometric recognition.",
	campaignTitle = "Marketing Campaigns",
	campaignDescription = "Manage and automate your marketing campaigns with real-time insights.",
	messagingTitle = "Team Messaging",
	messagingDescription = "Connect team members with seamless, contextual messaging.",
	analyticsTitle = "Data Visualization",
	analyticsDescription = "Track performance metrics with real-time insights and interactive charts.",
	feedbackTitle = "Customer Feedback",
	feedbackDescription = "Collect insights with multi-model AI evaluation for smarter decisions.",
}: FeatureBentoAiMemoryProps) {
	return (
		<section className="@container py-24">
			<h2 className="sr-only">Features</h2>
			<div className="mx-auto w-full max-w-5xl px-6">
				<div className="grid @4xl:grid-cols-3 @xl:grid-cols-2 @4xl:grid-rows-2 gap-3">
					{/* Left column spanning 2 rows: AI Memory */}
					<div
						className="@4xl:row-span-2 overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<div>
							<h3 className="font-semibold text-foreground">{aiMemoryTitle}</h3>
							<p className="mt-3 text-muted-foreground">
								{aiMemoryDescription}
							</p>
						</div>
						{/* Context window UI */}
						<div
							aria-hidden="true"
							className="mt-8 rounded-xl border bg-muted/50 p-4"
						>
							<div className="mb-3 flex items-center justify-between">
								<span className="font-medium text-sm">Memory Context</span>
								<span className="text-muted-foreground text-xs">
									4,096 / 8,192 tokens
								</span>
							</div>
							{/* Token usage bar */}
							<div className="mb-4 h-1.5 overflow-hidden rounded-full bg-muted">
								<div className="h-full w-1/2 rounded-full bg-gradient-to-r from-primary to-primary/70" />
							</div>
							{/* Memory items */}
							<div className="space-y-2">
								{MEMORY_ITEMS.map((item) => (
									<div
										className="flex items-start gap-2 rounded-lg bg-background p-2 text-xs"
										key={item.label}
									>
										<div
											className={`mt-0.5 size-2 shrink-0 rounded-full ${item.color}`}
										/>
										<span className="text-muted-foreground">{item.label}</span>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Biometric access — Nuro radial SVG */}
					<div
						className="overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<div aria-hidden="true" className="mb-6 flex justify-center">
							<svg
								className="size-16 text-primary"
								fill="none"
								viewBox="0 0 212 143"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M44.0209 55.3542C43.1945 54.7639 42.6916 54.0272 42.5121 53.1442C42.3327 52.2611 42.5995 51.345 43.3125 50.3958C50.632 40.3611 59.812 32.5694 70.8525 27.0208C81.8931 21.4722 93.668 18.6979 106.177 18.6979C118.691 18.6979 130.497 21.3849 141.594 26.7587C152.691 32.1326 161.958 39.8936 169.396 50.0417C170.222 51.1042 170.489 52.0486 170.196 52.875C169.904 53.7014 169.401 54.4097 168.688 55C167.979 55.5903 167.153 55.8571 166.208 55.8004C165.264 55.7437 164.438 55.2408 163.729 54.2917C157.236 45.0833 148.885 38.0307 138.675 33.1337C128.466 28.2368 117.633 25.786 106.177 25.7812C94.7257 25.7812 83.9827 28.2321 73.948 33.1337C63.9132 38.0354 55.5903 45.0881 48.9792 54.2917C48.2709 55.3542 47.4445 55.9444 46.5 56.0625C45.5556 56.1806 44.7292 55.9444 44.0209 55.3542Z"
									stroke="currentColor"
									strokeWidth="1.5"
								/>
								<line
									stroke="currentColor"
									strokeLinecap="round"
									strokeOpacity="0.4"
									strokeWidth="6"
									x1="3"
									x2="209"
									y1="72"
									y2="72"
								/>
							</svg>
						</div>
						<h3 className="font-semibold text-foreground">{biometricTitle}</h3>
						<p className="mt-3 text-muted-foreground">{biometricDescription}</p>
					</div>

					{/* Campaign scheduling */}
					<div
						className="overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<h3 className="font-semibold text-foreground">{campaignTitle}</h3>
						<p className="mt-3 text-muted-foreground">{campaignDescription}</p>
						<div aria-hidden="true" className="mt-6 space-y-2">
							<div className="flex gap-2 rounded-md border bg-muted/50 p-2 text-xs">
								<div className="w-1 rounded-full bg-primary" />
								<div>
									<div className="font-medium">Start Date</div>
									<div className="text-muted-foreground">
										Feb 6, 2024 at 00:00
									</div>
								</div>
							</div>
							<div className="flex gap-2 rounded-md border bg-muted/50 p-2 text-xs">
								<div className="w-1 rounded-full bg-primary" />
								<div>
									<div className="font-medium">End Date</div>
									<div className="text-muted-foreground">
										Mar 6, 2024 at 00:00
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Team messaging chat bubble */}
					<div
						className="overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<div aria-hidden="true" className="mb-6">
							<div className="flex items-center gap-2">
								<img
									alt="Shadcn"
									className="size-6 rounded-full object-cover"
									decoding="async"
									height="24"
									loading="lazy"
									src="https://avatars.githubusercontent.com/u/124599?v=4"
									width="24"
								/>
								<span className="font-medium text-xs">
									Shadcn <span className="ml-1 opacity-65">12m ago</span>
								</span>
							</div>
							<div className="mt-2 w-fit rounded-2xl rounded-tl bg-linear-to-b from-illustration to-foreground/5 p-3 text-sm shadow-black/6.5 shadow-md ring-1 ring-border-illustration">
								Hey <span className="text-primary">@bernard</span>, I&apos;ve
								updated the dashboard metrics.
							</div>
						</div>
						<h3 className="font-semibold text-foreground">{messagingTitle}</h3>
						<p className="mt-3 text-muted-foreground">{messagingDescription}</p>
					</div>

					{/* Data visualization area chart */}
					<div
						className="overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<div aria-hidden="true" className="mb-6 overflow-hidden rounded-xl">
							<svg
								className="w-full"
								preserveAspectRatio="none"
								viewBox="0 0 276 80"
								xmlns="http://www.w3.org/2000/svg"
							>
								<defs>
									<linearGradient id="fillA-memory" x1="0" x2="0" y1="0" y2="1">
										<stop
											offset="0%"
											stopColor="var(--color-primary)"
											stopOpacity="0.4"
										/>
										<stop
											offset="55%"
											stopColor="var(--color-primary)"
											stopOpacity="0.05"
										/>
									</linearGradient>
									<linearGradient id="fillB-memory" x1="0" x2="0" y1="0" y2="1">
										<stop
											offset="0%"
											stopColor="var(--color-indigo-300)"
											stopOpacity="0.4"
										/>
										<stop
											offset="55%"
											stopColor="var(--color-indigo-300)"
											stopOpacity="0.05"
										/>
									</linearGradient>
								</defs>
								<path
									d="M0,65C18,65,37,65,55,65C73,65,92,65,110,57C128,49,147,36,165,40C184,44,202,65,221,61C239,57,258,28,276,0L276,80L0,80Z"
									fill="url(#fillB-memory)"
								/>
								<path
									d="M0,65C18,65,37,65,55,65C73,65,92,65,110,57C128,49,147,36,165,40C184,44,202,65,221,61C239,57,258,28,276,0"
									fill="none"
									stroke="var(--color-indigo-300)"
									strokeWidth="1.5"
								/>
								<path
									d="M0,62C18,62,37,62,55,62C73,62,92,62,110,50C128,38,147,18,165,22C184,26,202,50,221,45C239,40,258,20,276,0L276,0C258,28,239,57,221,61C202,65,184,44,165,40C147,36,128,49,110,57C92,65,73,65,55,65C37,65,18,65,0,65Z"
									fill="url(#fillA-memory)"
								/>
								<path
									d="M0,62C18,62,37,62,55,62C73,62,92,62,110,50C128,38,147,18,165,22C184,26,202,50,221,45C239,40,258,20,276,0"
									fill="none"
									stroke="var(--color-primary)"
									strokeWidth="1.5"
								/>
							</svg>
						</div>
						<h3 className="font-semibold text-foreground">{analyticsTitle}</h3>
						<p className="mt-3 text-muted-foreground">{analyticsDescription}</p>
					</div>

					{/* Customer feedback — AI model logos */}
					<div
						className="overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<div aria-hidden="true" className="mb-6 flex flex-wrap gap-2">
							{/* Perplexity */}
							<div className="flex size-8 items-center justify-center rounded-lg bg-illustration ring-1 ring-border-illustration">
								<PerplexityLogo className="size-4" />
							</div>
							{/* OpenAI */}
							<div className="flex size-8 items-center justify-center rounded-lg bg-illustration ring-1 ring-border-illustration">
								<OpenAILogo className="size-4" />
							</div>
							{/* Gemini */}
							<div className="flex size-8 items-center justify-center rounded-lg bg-illustration ring-1 ring-border-illustration">
								<GeminiLogo className="size-4" />
							</div>
							{/* Vercel */}
							<div className="flex size-8 items-center justify-center rounded-lg bg-foreground ring-1 ring-border-illustration">
								<VercelLogo className="size-4 fill-background" />
							</div>
						</div>
						<h3 className="font-semibold text-foreground">{feedbackTitle}</h3>
						<p className="mt-3 text-muted-foreground">{feedbackDescription}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
