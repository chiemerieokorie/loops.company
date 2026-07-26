"use client";

export interface TextArticleTruncatedProps {
	onReadMore?: () => void;
	paragraphs?: Array<{
		text: string;
		highlights?: string[];
	}>;
	readMoreLabel?: string;
}

export function TextArticleTruncated({
	readMoreLabel = "Read More",
	onReadMore,
}: TextArticleTruncatedProps) {
	const defaultContent = (
		<div className="space-y-4 text-lg text-muted-foreground *:leading-relaxed">
			<p>
				I&apos;m honored to be with you today for your commencement from one of
				the{" "}
				<strong className="font-medium text-foreground">
					finest universities
				</strong>{" "}
				in the world. Truth be told, I{" "}
				<strong className="font-medium text-foreground">
					never graduated from college
				</strong>
				. And this is the closest I&apos;ve ever gotten to a college graduation.
			</p>
			<p>
				Today I want to tell you{" "}
				<strong className="font-medium text-foreground">three stories</strong>{" "}
				from my life. That&apos;s it. No big deal. Just{" "}
				<strong className="font-medium text-foreground">three stories</strong>.
			</p>
			<p>
				The first story is about{" "}
				<strong className="font-medium text-foreground">
					connecting the dots
				</strong>
				. I dropped out of{" "}
				<strong className="font-medium text-foreground">Reed College</strong>{" "}
				after the first six months, but then stayed around as a{" "}
				<strong className="font-medium text-foreground">drop-in</strong> for
				another 18 months or so before I really quit. So why&apos;d I drop out?
			</p>
			<p>
				It started before I was born. My{" "}
				<strong className="font-medium text-foreground">
					biological mother
				</strong>{" "}
				was a young, unwed graduate student, and she decided to put me up for{" "}
				<strong className="font-medium text-foreground">adoption</strong>. She
				felt very strongly that I should be adopted by{" "}
				<strong className="font-medium text-foreground">
					college graduates
				</strong>
				, so everything was all set for me to be adopted at birth by a{" "}
				<strong className="font-medium text-foreground">
					lawyer and his wife
				</strong>
				.
			</p>
			<p>
				Except that when I popped out, they decided at the last minute that they
				really wanted a{" "}
				<strong className="font-medium text-foreground">girl</strong>. So my
				parents, who were on a{" "}
				<strong className="font-medium text-foreground">waiting list</strong>,
				got a call in the middle of the night asking, &ldquo;We&apos;ve got an{" "}
				<strong className="font-medium text-foreground">
					unexpected baby boy
				</strong>
				. Do you want him?&rdquo; They said, &ldquo;
				<strong className="font-medium text-foreground">Of course</strong>
				.&rdquo;
			</p>
		</div>
	);

	return (
		<section className="bg-background py-16 md:py-32">
			<div className="mx-auto max-w-5xl px-6">
				<div className="relative mx-auto max-w-2xl rounded-3xl border border-transparent bg-card p-8 pb-20 shadow ring-1 ring-foreground/5 sm:p-12 sm:pb-24">
					<button
						className="group absolute bottom-8 left-8 z-10 flex h-8 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md bg-secondary px-3 pr-2.5 font-medium text-secondary-foreground text-xs transition-all hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 sm:bottom-10 sm:left-12 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
						onClick={onReadMore}
						type="button"
					>
						<span>{readMoreLabel}</span>
						<svg
							aria-hidden="true"
							className="lucide lucide-plus !size-3.5 opacity-50 duration-300 group-hover:rotate-90"
							fill="none"
							height="24"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2.5"
							viewBox="0 0 24 24"
							width="24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M5 12h14" />
							<path d="M12 5v14" />
						</svg>
					</button>
					<div
						className="mask-b-from-45% relative overflow-hidden"
						style={{ height: "22rem" }}
					>
						{defaultContent}
					</div>
				</div>
			</div>
		</section>
	);
}
