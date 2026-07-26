"use client";

import { type FormEvent, useState } from "react";
import type { FooterNavLink } from "./types";

export interface FooterWithNewsletterProps {
	address?: string;
	companyLinks?: FooterNavLink[];
	companyName?: string;
	linkedinHref?: string;
	newsletterDescription?: string;
	onSubscribe?: (email: string) => void;
	productLinks?: FooterNavLink[];
	resourceLinks?: FooterNavLink[];
	statusLabel?: string;
	statusOk?: boolean;
	twitterHref?: string;
	year?: number;
}

export function FooterWithNewsletter({
	companyName = "Astor",
	address = "San Francisco, CA 94102 - United States",
	year = 2026,
	productLinks = [
		{ label: "Features", href: "#" },
		{ label: "Solution", href: "#" },
		{ label: "Partnerships", href: "#" },
		{ label: "Mobile App", href: "#" },
	],
	resourceLinks = [
		{ label: "Blog", href: "#" },
		{ label: "Documentation", href: "#" },
		{ label: "Support", href: "#" },
	],
	companyLinks = [
		{ label: "About", href: "#" },
		{ label: "Licence", href: "#" },
		{ label: "Privacy", href: "#" },
	],
	twitterHref = "#",
	linkedinHref = "#",
	newsletterDescription = "Get the latest product news and behind the scenes updates. Unsubscribe at any time.",
	statusLabel = "All Systems Normal",
	statusOk = true,
	onSubscribe,
}: FooterWithNewsletterProps) {
	const [email, setEmail] = useState("");

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSubscribe?.(email);
		setEmail("");
	};

	return (
		<footer className="bg-background pt-8 sm:pt-20" role="contentinfo">
			<div className="mx-auto max-w-5xl space-y-16 px-6">
				<div className="flex flex-wrap justify-between gap-6">
					<div className="max-w-xs space-y-6 md:col-span-2">
						<a className="font-semibold text-foreground" href="/">
							{companyName}
						</a>
						<p className="text-balance text-muted-foreground text-sm">
							{address}
						</p>
					</div>
					<div className="flex flex-wrap gap-3 text-sm">
						<a
							aria-label="X/Twitter"
							className="block text-muted-foreground hover:text-primary"
							href={twitterHref}
							rel="noopener noreferrer"
							target="_blank"
						>
							<svg
								className="size-5"
								height="1em"
								viewBox="0 0 24 24"
								width="1em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
									fill="currentColor"
								/>
							</svg>
						</a>
						<a
							aria-label="LinkedIn"
							className="block text-muted-foreground hover:text-primary"
							href={linkedinHref}
							rel="noopener noreferrer"
							target="_blank"
						>
							<svg
								className="size-5"
								height="1em"
								viewBox="0 0 24 24"
								width="1em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
									fill="currentColor"
								/>
							</svg>
						</a>
					</div>
				</div>
				<div
					aria-hidden="true"
					className="h-px bg-[length:6px_1px] bg-repeat-x opacity-25 [background-image:linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)]"
				/>
				<div className="grid gap-12 md:grid-cols-5">
					<div className="grid gap-6 sm:grid-cols-3 md:col-span-3">
						<div className="space-y-4 text-sm">
							<span className="block font-medium">Product</span>
							<div className="flex flex-wrap gap-4 sm:flex-col">
								{productLinks.map((link) => (
									<a
										className="block text-muted-foreground duration-150 hover:text-primary"
										href={link.href}
										key={link.label}
									>
										<span>{link.label}</span>
									</a>
								))}
							</div>
						</div>
						<div className="space-y-4 text-sm">
							<span className="block font-medium">Resources</span>
							<div className="flex flex-wrap gap-4 sm:flex-col">
								{resourceLinks.map((link) => (
									<a
										className="block text-muted-foreground duration-150 hover:text-primary"
										href={link.href}
										key={link.label}
									>
										<span>{link.label}</span>
									</a>
								))}
							</div>
						</div>
						<div className="space-y-4 text-sm">
							<span className="block font-medium">Company</span>
							<div className="flex flex-wrap gap-4 sm:flex-col">
								{companyLinks.map((link) => (
									<a
										className="block text-muted-foreground duration-150 hover:text-primary"
										href={link.href}
										key={link.label}
									>
										<span>{link.label}</span>
									</a>
								))}
							</div>
						</div>
					</div>
					<div className="md:col-span-2">
						<form
							className="ml-auto w-full space-y-4 md:max-w-xs"
							onSubmit={handleSubmit}
						>
							<label
								className="block select-none font-medium text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
								data-slot="label"
								htmlFor="newsletter-email"
							>
								Subscribe to our newsletter
							</label>
							<div className="flex gap-2">
								<input
									className="flex h-8 w-full min-w-0 rounded-md border border-transparent bg-background px-3 py-1 text-base shadow outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground/75 focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-foreground/5 dark:aria-invalid:ring-destructive/40 dark:focus-visible:border-foreground/25"
									data-slot="input"
									id="newsletter-email"
									name="email"
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Your email"
									required
									type="email"
									value={email}
								/>
								<button
									className="inline-flex h-8 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-3 font-medium text-primary-foreground text-shadow-sm text-xs shadow-black/15 shadow-md ring-1 ring-[--ring-color] transition-all [--ring-color:color-mix(in_oklab,black_15%,var(--color-primary))] hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:[--ring-color:color-mix(in_oklab,white_15%,var(--color-primary))] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:drop-shadow-sm"
									type="submit"
								>
									<span>Subscribe</span>
								</button>
							</div>
							<p className="text-muted-foreground text-xs">
								{newsletterDescription}
							</p>
						</form>
					</div>
				</div>
				<div className="flex flex-wrap justify-between gap-4 border-t py-8">
					<span className="text-muted-foreground text-sm">
						&copy; {year} {companyName}, All rights reserved
					</span>
					<div className="flex items-center gap-2 rounded-full border border-transparent bg-card py-1 pr-4 pl-2 shadow ring-1 ring-foreground/5">
						<div className="relative flex size-3">
							<span
								className={`absolute inset-0 block size-full animate-pulse rounded-full duration-1500 ${statusOk ? "bg-emerald-100" : "bg-red-100"}`}
							/>
							<span
								className={`relative m-auto block size-1 rounded-full ${statusOk ? "bg-emerald-500" : "bg-red-500"}`}
							/>
						</div>
						<span className="text-sm">{statusLabel}</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
