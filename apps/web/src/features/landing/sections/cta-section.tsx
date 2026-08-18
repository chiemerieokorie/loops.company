import { buttonVariants } from "@runway/ui/components/button";
import { IconChevronRightSmall } from "@runway/ui/icons";
import Link from "next/link";
import { Container } from "../components/container";
import { Lead, Subheading } from "../components/section";

export function CtaSection() {
	return (
		<section className="py-16" id="call-to-action">
			<Container>
				<div className="flex flex-col gap-8 rounded-3xl bg-muted/50 p-10 sm:p-16">
					<div className="flex max-w-3xl flex-col gap-4">
						<Subheading>Ready to bring your team together?</Subheading>
						<Lead>
							Create your workspace in seconds and start collaborating today —
							no credit card required.
						</Lead>
					</div>
					<div className="flex items-center gap-3">
						<Link className={buttonVariants({ size: "lg" })} href="/contact">
							Get started
						</Link>
						<Link
							className={buttonVariants({ size: "lg", variant: "ghost" })}
							href="/contact"
						>
							Contact sales
							<IconChevronRightSmall />
						</Link>
					</div>
				</div>
			</Container>
		</section>
	);
}
