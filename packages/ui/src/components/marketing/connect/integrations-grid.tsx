import { defaultGridIntegrations } from "./data";
import type { Integration } from "./types";

export interface IntegrationsGridProps {
	integrations?: Integration[];
}

export function IntegrationsGrid({
	integrations = defaultGridIntegrations,
}: IntegrationsGridProps) {
	return (
		<section className="bg-background py-24">
			<div className="mx-auto max-w-5xl px-6">
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{integrations.map((integration) => (
						<div
							className="relative rounded-xl bg-card p-6 text-card-foreground shadow shadow-black/[0.065] ring-1 ring-border"
							data-slot="card"
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
		</section>
	);
}
