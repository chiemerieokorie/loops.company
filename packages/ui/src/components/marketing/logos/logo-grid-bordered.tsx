import Image from "next/image";

export function LogoGridBordered() {
	return (
		<section className="bg-background py-16">
			<div className="mx-auto max-w-5xl px-6">
				<div className="relative">
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
					<div className="grid grid-cols-3 divide-x divide-y border md:grid-cols-4 lg:grid-cols-5 lg:*:nth-5:border-r-0 lg:*:nth-[n+6]:nth-[-n+9]:border-b-0">
						<div className="flex items-center justify-center px-4 py-6 hover:bg-foreground/5 lg:py-7">
							<Image
								alt="Nvidia Logo"
								className="h-4 w-fit"
								height={16}
								src="https://html.tailus.io/blocks/customers/nvidia.svg"
								unoptimized
								width={64}
							/>
						</div>
						<div className="flex items-center justify-center px-4 py-6 hover:bg-foreground/5 lg:py-7">
							<Image
								alt="Column Logo"
								className="h-4 w-fit"
								height={16}
								src="https://html.tailus.io/blocks/customers/column.svg"
								unoptimized
								width={64}
							/>
						</div>
						<div className="flex items-center justify-center px-4 py-6 hover:bg-foreground/5 lg:py-7">
							<Image
								alt="GitHub Logo"
								className="h-4 w-fit"
								height={16}
								src="https://html.tailus.io/blocks/customers/github.svg"
								unoptimized
								width={64}
							/>
						</div>
						<div className="flex items-center justify-center px-4 py-6 hover:bg-foreground/5 lg:py-7">
							<Image
								alt="Nike Logo"
								className="h-5 w-fit"
								height={20}
								src="https://html.tailus.io/blocks/customers/nike.svg"
								unoptimized
								width={80}
							/>
						</div>
						<div className="flex items-center justify-center px-4 py-6 hover:bg-foreground/5 lg:py-7">
							<Image
								alt="Laravel Logo"
								className="h-4 w-fit"
								height={16}
								src="https://html.tailus.io/blocks/customers/laravel.svg"
								unoptimized
								width={64}
							/>
						</div>
						<div className="flex items-center justify-center px-4 py-6 hover:bg-foreground/5 lg:py-7">
							<Image
								alt="Lilly Logo"
								className="h-7 w-fit"
								height={28}
								src="https://html.tailus.io/blocks/customers/lilly.svg"
								unoptimized
								width={112}
							/>
						</div>
						<div className="flex items-center justify-center px-4 py-6 hover:bg-foreground/5 lg:py-7">
							<Image
								alt="OpenAI Logo"
								className="h-6 w-fit"
								height={24}
								src="https://html.tailus.io/blocks/customers/openai.svg"
								unoptimized
								width={96}
							/>
						</div>
						<div className="flex items-center justify-center px-4 py-6 hover:bg-foreground/5 lg:py-7">
							<Image
								alt="Tailwind CSS Logo"
								className="h-4 w-fit"
								height={16}
								src="https://html.tailus.io/blocks/customers/tailwindcss.svg"
								unoptimized
								width={64}
							/>
						</div>
						<div className="flex items-center justify-center px-4 py-6 hover:bg-foreground/5 lg:py-7">
							<Image
								alt="Vercel Logo"
								className="h-5 w-fit"
								height={20}
								src="https://html.tailus.io/blocks/customers/vercel.svg"
								unoptimized
								width={80}
							/>
						</div>
						<div className="flex items-center justify-center px-4 py-6 hover:bg-foreground/5 lg:py-7">
							<Image
								alt="Zapier Logo"
								className="h-5 w-fit"
								height={20}
								src="https://html.tailus.io/blocks/customers/zapier.svg"
								unoptimized
								width={80}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
