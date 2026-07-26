import { ChevronRight } from "lucide-react";
import { defaultCategories, defaultSidebarPosts } from "./data";
import type { BlogAuthor, BlogCategory, BlogPost } from "./types";

/**
 * activeTabVariant controls the styling of the selected category tab.
 * "card" uses bg-card / ring-foreground/5 (Block006).
 * "illustration" uses bg-illustration / ring-border-illustration (Block007).
 */
export interface BlogSidebarNavProps {
	activeTabVariant?: "card" | "illustration";
	categories?: BlogCategory[];
	eyebrow?: string;
	posts?: BlogPost[];
	title?: string;
	titleHighlight?: string;
}

function AuthorRow({ author }: { author: BlogAuthor }) {
	return (
		<div className="grid grid-cols-[auto_1fr] items-center gap-2">
			<div className="aspect-square size-6 overflow-hidden rounded-md border border-transparent bg-card shadow-black/15 shadow-md ring-1 ring-border-illustration">
				<img
					alt={author.name}
					className="size-full object-cover"
					decoding="async"
					height={46}
					loading="lazy"
					src={author.avatarUrl}
					style={{ color: "transparent" }}
					width={46}
				/>
			</div>
			<span className="line-clamp-1 text-muted-foreground text-sm">
				{author.name}
			</span>
		</div>
	);
}

export function BlogSidebarNav({
	eyebrow = "Blog",
	title = "News, insights and more from",
	titleHighlight = "Astor",
	categories = defaultCategories,
	posts = defaultSidebarPosts,
	activeTabVariant = "card",
}: BlogSidebarNavProps) {
	const activeTabClass =
		activeTabVariant === "illustration"
			? "flex w-fit items-center gap-2 rounded-md bg-illustration px-3 py-1 font-medium text-primary text-sm shadow-sm ring-1 ring-border-illustration transition-colors [&>svg]:size-4"
			: "flex w-fit items-center gap-2 rounded-md bg-card px-3 py-1 font-medium text-primary text-sm shadow-sm ring-1 ring-foreground/5 transition-colors [&>svg]:size-4";

	return (
		<section className="bg-background pb-16">
			<div className="@container bg-foreground/9">
				{/* Header strip */}
				<div className="grid-cols-[1fr_auto_1fr] lg:grid">
					<div aria-hidden="true" className="p-[0.5px] max-lg:hidden">
						<div className="h-full rounded-md bg-card" />
					</div>
					<div className="mx-auto w-full p-[0.5px] lg:min-w-5xl">
						<div className="h-full rounded-md bg-card">
							<div className="max-w-lg px-6 pt-12 pb-6 md:pt-24">
								<span className="text-muted-foreground">{eyebrow}</span>
								<h2 className="mt-4 text-balance font-semibold text-4xl text-muted-foreground">
									{title}{" "}
									<strong className="font-semibold text-foreground">
										{titleHighlight}
									</strong>
								</h2>
							</div>
						</div>
					</div>
					<div aria-hidden="true" className="p-[0.5px] max-lg:hidden">
						<div className="h-full rounded-md bg-card" />
					</div>
				</div>

				{/* Sidebar + content */}
				<div className="grid grid-cols-[1fr_auto_1fr]">
					<div aria-hidden="true" className="p-[0.5px]">
						<div className="h-full rounded-md bg-card" />
					</div>
					<div className="mx-auto w-full max-w-5xl p-[0.5px] lg:min-w-5xl">
						<div className="h-full gap-[0.5px] rounded-md bg-foreground/1 lg:grid lg:grid-cols-5">
							{/* Sidebar: vertical on desktop, horizontal scroll on mobile */}
							<div className="lg:sticky lg:top-0 lg:grid lg:h-fit lg:min-h-screen lg:grid-rows-[auto_1fr]">
								<div className="pr-[0.5px] pb-[0.5px] max-lg:w-screen">
									<div className="rounded-md bg-card/75 md:px-6 lg:bg-card">
										<div
											aria-label="Blog categories"
											className="-ml-0.5 flex py-3 max-md:px-6 max-lg:snap-x max-lg:snap-mandatory max-lg:overflow-x-auto lg:flex-col lg:py-5"
											role="tablist"
										>
											{categories.map((cat, i) => (
												<button
													aria-selected={i === 0}
													className="group snap-center text-muted-foreground disabled:pointer-events-none disabled:opacity-50 max-lg:px-1 lg:py-1"
													disabled={cat.disabled}
													key={cat.value}
													role="tab"
												>
													{i === 0 ? (
														<span className={activeTabClass}>
															<span className="capitalize">{cat.label}</span>
														</span>
													) : (
														<span className="flex w-fit items-center gap-2 rounded-md px-3 py-1 text-sm transition-colors hover:text-foreground group-hover:bg-foreground/5 [&>svg]:size-4">
															<span className="capitalize">{cat.label}</span>
														</span>
													)}
												</button>
											))}
										</div>
									</div>
								</div>
								<div
									aria-hidden="true"
									className="p-[0.5px] pl-0 max-lg:hidden"
								>
									<div className="h-full rounded-md bg-card" />
								</div>
							</div>

							{/* Article grid */}
							<div className="relative lg:col-span-4">
								<div className="grid gap-px sm:grid-cols-2">
									{posts.map((post, idx) => (
										<article
											className="group relative flex flex-col space-y-4 rounded-md bg-card p-6 duration-200 hover:bg-card/75"
											key={post.title + post.dateIso + idx}
										>
											<div className="relative aspect-video overflow-hidden rounded-[10px] shadow-black/10 shadow-md before:absolute before:inset-0 before:inset-ring-1 before:inset-ring-background/10 before:rounded-[10px] before:border before:border-foreground/15">
												<img
													alt={post.title}
													className="h-full w-full object-cover"
													decoding="async"
													height={4500}
													loading={idx === 0 ? "eager" : "lazy"}
													sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
													src={post.imageUrl}
													style={{ color: "transparent" }}
													width={6394}
												/>
											</div>
											<time
												className="block text-muted-foreground text-sm"
												dateTime={post.dateIso}
											>
												{post.date}
											</time>
											<h2 className="font-semibold text-foreground">
												<a
													className="before:absolute before:inset-0"
													href={post.href}
												>
													{post.title}
												</a>
											</h2>
											<p className="text-muted-foreground">{post.excerpt}</p>
											<div className="mt-auto grid grid-cols-[1fr_auto] items-end gap-2 pt-4">
												<div className="space-y-2">
													{post.authors.map((author) => (
														<AuthorRow author={author} key={author.name} />
													))}
												</div>
												<div className="flex h-6 items-center">
													<span
														aria-label={`Read ${post.title}`}
														className="flex items-center gap-1 font-medium text-primary text-sm transition-colors duration-200 group-hover:text-foreground"
													>
														Read
														<ChevronRight
															aria-hidden="true"
															className="size-3.5 translate-y-px duration-200 group-hover:translate-x-0.5"
															strokeWidth={2.5}
														/>
													</span>
												</div>
											</div>
										</article>
									))}
								</div>
							</div>
						</div>
					</div>
					<div aria-hidden="true" className="p-[0.5px]">
						<div className="h-full rounded-md bg-card" />
					</div>
				</div>
			</div>
		</section>
	);
}
