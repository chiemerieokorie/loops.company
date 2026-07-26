import { ChevronRight } from "lucide-react";
import { defaultListPosts } from "./data";
import type { BlogListPost } from "./types";

export type { BlogListPost };

export interface BlogListProps {
	posts?: BlogListPost[];
	title?: string;
	titleHighlight?: string;
}

export function BlogList({
	title = "Latest",
	titleHighlight = "News",
	posts = defaultListPosts,
}: BlogListProps) {
	return (
		<section className="@container bg-background py-16 md:py-24">
			<div className="mx-auto max-w-5xl px-6">
				<div className="max-w-md">
					<h2 className="text-balance font-semibold text-4xl text-muted-foreground">
						{title}{" "}
						<strong className="font-semibold text-foreground">
							{titleHighlight}
						</strong>
					</h2>
				</div>

				<div className="mt-12 md:mt-20">
					{posts.map((post, idx) => (
						<div key={post.title + post.dateIso + idx}>
							<div
								aria-hidden="true"
								className="h-px bg-[length:4px_1px] bg-repeat-x opacity-20 [background-image:linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)]"
							/>
							<article className="group relative grid gap-4 py-6 duration-200 md:grid-cols-[1fr_auto]">
								<div className="grid gap-4 md:grid-cols-[auto_1fr_auto]">
									<div className="flex gap-4 max-md:justify-between">
										<span className="text-muted-foreground text-sm capitalize md:hidden">
											{post.category}
										</span>
										<time
											className="text-muted-foreground text-sm md:w-24"
											dateTime={post.dateIso}
										>
											{post.date}
										</time>
									</div>
									<h2 className="font-semibold text-foreground">
										{post.title}
									</h2>
									<div className="flex h-6 w-24 items-center max-md:hidden">
										<span className="text-muted-foreground text-sm capitalize">
											{post.category}
										</span>
									</div>
								</div>
								<div className="flex gap-4 max-md:justify-between md:grid md:w-40 md:grid-cols-[1fr_auto]">
									<div className="flex justify-end gap-2">
										{post.authors.map((author) => (
											<div
												className="aspect-square size-6 overflow-hidden rounded-md border border-transparent bg-card shadow-black/15 shadow-md ring-1 ring-border-illustration"
												key={author.name}
											>
												<img
													alt={author.name}
													className="size-full object-cover"
													decoding="async"
													height={40}
													loading="lazy"
													src={author.avatarUrl}
													style={{ color: "transparent" }}
													width={40}
												/>
											</div>
										))}
									</div>
									<div className="flex h-6 items-center">
										<a
											aria-label={`Read ${post.title}`}
											className="flex items-center gap-1 font-medium text-primary text-sm transition-colors duration-200 before:absolute before:inset-0 hover:text-foreground"
											href={post.href}
										>
											Read
											<ChevronRight
												aria-hidden="true"
												className="size-3.5 translate-y-px duration-200 group-hover:translate-x-0.5"
												strokeWidth={2.5}
											/>
										</a>
									</div>
								</div>
							</article>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
