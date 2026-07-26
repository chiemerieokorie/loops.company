import { defaultBorderedGridIntegrations } from "./data";
import type { Integration } from "./types";

export interface IntegrationsBorderedGridProps {
	integrations?: Integration[];
}

export function IntegrationsBorderedGrid({
	integrations = defaultBorderedGridIntegrations,
}: IntegrationsBorderedGridProps) {
	return (
		<section className="@container bg-background py-24">
			<div className="mx-auto max-w-5xl px-6">
				<div className="relative">
					{/* Corner crosshair decorators */}
					<div
						aria-hidden="true"
						className="mask-radial-from-15% absolute size-3 -translate-x-[calc(50%-0.5px)] -translate-y-[calc(50%-0.5px)] before:absolute before:inset-0 before:m-auto before:h-px before:bg-foreground/25 after:absolute after:inset-0 after:m-auto after:w-px after:bg-foreground/25"
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

					<div className="grid @2xl:grid-cols-3 @md:grid-cols-2 @md:divide-x divide-y border @2xl:*:nth-3:border-r-0 @max-2xl:*:nth-2:border-r-0 @max-2xl:*:nth-4:border-r-0 @2xl:*:nth-4:border-b-0 @md:*:nth-5:border-b-0">
						{integrations.map((integration) => (
							<div
								className="relative p-6 hover:bg-foreground/[0.03]"
								key={integration.name}
							>
								<div className="*:size-8">{integration.icon}</div>
								<div className="space-y-2 pt-6">
									<h3 className="font-medium text-base">
										{integration.href ? (
											<a
												className="before:absolute before:inset-0"
												href={integration.href}
											>
												{integration.name}
											</a>
										) : (
											integration.name
										)}
									</h3>
									{integration.description && (
										<p className="line-clamp-2 text-muted-foreground">
											{integration.description}
										</p>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
