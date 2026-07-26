import { ChevronRight } from "lucide-react";
import {
	defaultCategories,
	defaultHeroPost,
	defaultSplitMorePosts,
} from "./data";
import type { BlogAuthor, BlogCategory, BlogPost } from "./types";

export interface BlogSplitHeroProps {
	categories?: BlogCategory[];
	eyebrow?: string;
	heroPost?: BlogPost;
	morePosts?: BlogPost[];
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

export function BlogSplitHero({
	eyebrow = "Blog",
	title = "News, insights and more from",
	titleHighlight = "Astor",
	categories = defaultCategories,
	heroPost = defaultHeroPost,
	morePosts = defaultSplitMorePosts,
}: BlogSplitHeroProps) {
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

				{/* Hero split article */}
				<div className="grid grid-cols-[1fr_auto_1fr]">
					<div aria-hidden="true" className="p-[0.5px]">
						<div className="h-full rounded-md bg-card" />
					</div>
					<div className="mx-auto w-full max-w-5xl p-[0.5px] lg:min-w-5xl">
						<div className="group relative rounded-md">
							<article className="group grid gap-px sm:grid-cols-2">
								<div className="rounded-md bg-card/75 p-6 group-hover:bg-card">
									<div className="relative aspect-auto overflow-hidden rounded-[10px] shadow-black/10 shadow-md before:absolute before:inset-0 before:inset-ring-1 before:inset-ring-background/10 before:rounded-[10px] before:border before:border-foreground/10">
										<img
											alt={heroPost.title}
											className="h-full w-full object-cover"
											decoding="async"
											height={4500}
											sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
											src={heroPost.imageUrl}
											style={{ color: "transparent" }}
											width={6394}
										/>
									</div>
								</div>
								<div className="flex flex-col space-y-4 rounded-md bg-card p-6 md:py-12">
									<time
										className="block text-muted-foreground text-sm"
										dateTime={heroPost.dateIso}
									>
										{heroPost.date}
									</time>
									<h2 className="text-balance font-semibold text-foreground text-lg md:text-xl">
										<a
											className="before:absolute before:inset-0"
											href={heroPost.href}
										>
											{heroPost.title}
										</a>
									</h2>
									<p className="text-muted-foreground">{heroPost.excerpt}</p>
									<div className="mt-auto grid grid-cols-[1fr_auto] items-end gap-2 pt-4">
										<div className="space-y-2">
											{heroPost.authors.map((author) => (
												<AuthorRow author={author} key={author.name} />
											))}
										</div>
										<div className="flex h-6 items-center">
											<span
												aria-label={`Read ${heroPost.title}`}
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
								</div>
							</article>
						</div>
					</div>
					<div aria-hidden="true" className="p-[0.5px]">
						<div className="h-full rounded-md bg-card" />
					</div>
				</div>

				{/* Category tabs row */}
				<div className="grid-cols-[1fr_auto_1fr] lg:grid">
					<div aria-hidden="true" className="p-[0.5px] max-lg:hidden">
						<div className="h-full rounded-md bg-card" />
					</div>
					<div className="mx-auto max-w-5xl p-[0.5px] lg:w-full lg:min-w-5xl">
						<div className="h-full rounded-md bg-card/75 py-3 md:px-6 lg:bg-card">
							<div
								aria-label="Blog categories"
								className="-ml-0.5 flex snap-x snap-mandatory overflow-x-auto py-3 max-md:px-6"
								role="tablist"
							>
								{categories.map((cat, i) => (
									<button
										aria-selected={i === 0}
										className="group snap-center px-1 text-muted-foreground disabled:pointer-events-none disabled:opacity-50"
										disabled={cat.disabled}
										key={cat.value}
										role="tab"
									>
										{i === 0 ? (
											<span className="flex w-fit items-center gap-2 rounded-md bg-card px-3 py-1 font-medium text-primary text-sm shadow-sm ring-1 ring-foreground/5 transition-colors [&>svg]:size-4">
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
					<div aria-hidden="true" className="p-[0.5px] max-lg:hidden">
						<div className="h-full rounded-md bg-card" />
					</div>
				</div>

				{/* More posts grid */}
				{morePosts.length > 0 && (
					<div className="grid grid-cols-[1fr_auto_1fr]">
						<div aria-hidden="true" className="p-[0.5px]">
							<div className="h-full rounded-md bg-card" />
						</div>
						<div className="mx-auto w-full max-w-5xl p-[0.5px] lg:min-w-5xl">
							<div className="h-full rounded-md bg-foreground/1">
								<div className="relative">
									<h2 className="sr-only">More Articles</h2>
									<div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3">
										{morePosts.map((post, idx) => (
											<article
												className="group relative flex flex-col space-y-4 rounded-md bg-card p-6 duration-200 hover:bg-card/75"
												key={post.title + post.dateIso + idx}
											>
												<div className="relative aspect-video overflow-hidden rounded-[10px] shadow-black/10 shadow-md before:absolute before:inset-0 before:inset-ring-1 before:inset-ring-background/10 before:rounded-[10px] before:border before:border-foreground/10">
													<img
														alt={post.title}
														className="h-full w-full object-cover"
														decoding="async"
														height={4500}
														loading="lazy"
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
												<h3 className="font-semibold text-foreground">
													<a
														className="before:absolute before:inset-0"
														href={post.href}
													>
														{post.title}
													</a>
												</h3>
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
				)}
			</div>
		</section>
	);
}
