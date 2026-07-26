import { ChevronRight } from "lucide-react";
import {
	defaultCategories,
	defaultHorizontalFeaturedPosts,
	defaultHorizontalMorePosts,
} from "./data";
import type { BlogAuthor, BlogCategory, BlogPost } from "./types";

export interface BlogHorizontalCardsProps {
	categories?: BlogCategory[];
	eyebrow?: string;
	featuredPosts?: BlogPost[];
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

export function BlogHorizontalCards({
	eyebrow = "Blog",
	title = "News, insights and more from",
	titleHighlight = "Astor",
	categories = defaultCategories,
	featuredPosts = defaultHorizontalFeaturedPosts,
	morePosts = defaultHorizontalMorePosts,
}: BlogHorizontalCardsProps) {
	return (
		<section className="@container bg-background py-16 md:py-24">
			<div className="mx-auto max-w-6xl px-6">
				<div className="max-w-md">
					<span className="text-muted-foreground">{eyebrow}</span>
					<h2 className="mt-4 text-balance font-semibold text-4xl text-muted-foreground">
						{title}{" "}
						<strong className="font-semibold text-foreground">
							{titleHighlight}
						</strong>
					</h2>
				</div>

				<div className="mt-12 mb-6 -ml-0.5 flex justify-between gap-4 max-md:-mx-6 md:mt-16">
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
									<span className="flex w-fit items-center gap-2 rounded-md bg-card px-3 py-1 font-medium text-primary text-sm shadow-black/6.5 shadow-sm ring-1 ring-border transition-colors [&>svg]:size-4">
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

				<div className="relative">
					<div
						aria-hidden="true"
						className="pointer-events-none absolute -inset-x-px -inset-y-6 border-x"
					/>
					<div
						aria-hidden="true"
						className="pointer-events-none absolute inset-x-0 -inset-y-6 left-1/2 w-2 -translate-x-1 border-x max-sm:hidden lg:left-1/3 lg:-translate-x-1.5"
					/>
					<div
						aria-hidden="true"
						className="pointer-events-none absolute inset-x-0 -inset-y-6 right-1/3 ml-auto w-2 translate-x-1.5 border-x max-lg:hidden"
					/>
					<div className="space-y-12">
						{featuredPosts.map((post) => (
							<div className="group relative" key={post.title + post.dateIso}>
								<div
									aria-hidden="true"
									className="pointer-events-none absolute -inset-x-6 -inset-y-px group-first:border-y"
								/>
								<article className="group relative gap-2 rounded-xl border border-transparent bg-card/75 shadow-black/6.5 shadow-md ring-1 ring-foreground/3 duration-200 focus-within:bg-card/50 hover:bg-card/50 sm:grid sm:grid-cols-3">
									<div className="relative m-0.5 aspect-square overflow-hidden rounded-[10px] before:absolute before:inset-0 before:rounded-[10px] before:border before:border-border-illustration">
										<img
											alt={post.title}
											className="h-full w-full object-cover"
											decoding="async"
											height={4500}
											loading="eager"
											sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
											src={post.imageUrl}
											style={{ color: "transparent" }}
											width={6394}
										/>
									</div>
									<div className="col-span-2 grid gap-3 p-6">
										<time
											className="text-muted-foreground text-sm"
											dateTime={post.dateIso}
										>
											{post.date}
										</time>
										<h2 className="text-balance font-semibold text-foreground text-lg md:text-xl">
											<a
												className="before:absolute before:inset-0"
												href={post.href}
											>
												{post.title}
											</a>
										</h2>
										<p className="text-muted-foreground">{post.excerpt}</p>
										<div className="grid grid-cols-[1fr_auto] items-end gap-2 pt-4">
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
									</div>
								</article>
							</div>
						))}
					</div>
				</div>

				{morePosts.length > 0 && (
					<div className="mt-12">
						<div className="relative">
							<div
								aria-hidden="true"
								className="pointer-events-none absolute -inset-x-px -inset-y-6 border-x"
							/>
							<div
								aria-hidden="true"
								className="pointer-events-none absolute inset-x-0 -inset-y-6 left-1/2 w-2 -translate-x-1.5 border-x max-sm:hidden lg:left-1/3 lg:-translate-x-1.5"
							/>
							<div
								aria-hidden="true"
								className="pointer-events-none absolute inset-x-0 -inset-y-6 right-1/3 ml-auto w-2 translate-x-1.5 border-x max-lg:hidden"
							/>
							<div
								aria-hidden="true"
								className="pointer-events-none absolute -inset-x-6 -inset-y-px border-y"
							/>
							<div className="-mx-6 border-b px-12 py-2">
								<h2 className="font-medium text-foreground text-xs uppercase">
									More Articles
								</h2>
							</div>
							<div className="grid gap-x-2 sm:grid-cols-2 lg:grid-cols-3">
								{morePosts.map((post, idx) => (
									<article
										className="group relative row-span-4 grid grid-rows-subgrid gap-3 border-b p-6 duration-200 focus-within:bg-foreground/2 hover:bg-foreground/2"
										key={post.title + post.dateIso + idx}
									>
										<time
											className="text-muted-foreground text-sm"
											dateTime={post.dateIso}
										>
											{post.date}
										</time>
										<h3 className="font-semibold text-foreground text-lg">
											<a
												className="before:absolute before:inset-0"
												href={post.href}
											>
												{post.title}
											</a>
										</h3>
										<p className="text-muted-foreground">{post.excerpt}</p>
										<div className="grid grid-cols-[1fr_auto] items-end gap-2 pt-4">
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
				)}
			</div>
		</section>
	);
}
