import { Star, Zap } from "lucide-react";
import {
	HuluLogo,
	PrimeVideoLogo,
	StripeLogo,
	TailwindLogo,
	VercelLogo,
} from "./brand-logos";
import type { CaseStudyCardItem } from "./case-study-cards";
import type { TestimonialBentoItem } from "./testimonial-bento";
import type {
	TestimonialCarouselItem,
	TestimonialCarouselStat,
} from "./testimonial-carousel";
import type { TestimonialGridItem } from "./testimonial-grid";
import type { TestimonialTab } from "./testimonial-tabs";

/* -------------------------------------------------------------------------- */
/*  case-study-cards                                                           */
/* -------------------------------------------------------------------------- */

export const defaultCaseStudyCards: CaseStudyCardItem[] = [
	{
		logoNode: <StripeLogo className="h-6 w-14" />,
		gradientClass: "bg-linear-to-b from-indigo-500/10 to-card",
		summary: (
			<>
				Stripe leveraged our platform to streamline payment processing
				workflows,{" "}
				<strong className="text-foreground">
					resulting in a 40% reduction in integration time for new merchants.
				</strong>{" "}
			</>
		),
		caseStudyHref: "#",
		quote:
			"The platform has dramatically improved our payment processing capabilities. We now onboard merchants 40% faster while maintaining top-tier security standards. The developer experience is exceptional.",
		authorName: "Bernard Ngandu",
		authorTitle: "Backend Engineer, Stripe",
		authorAvatar: "https://avatars.githubusercontent.com/u/31113941?v=4",
	},
	{
		logoNode: <PrimeVideoLogo className="h-7 w-20" />,
		gradientClass: "bg-linear-to-b from-cyan-500/10 to-card",
		summary: (
			<>
				Prime utilized our recommendation engine to{" "}
				<strong className="text-foreground">
					increase viewer engagement by 27% and content discovery by 35%
				</strong>
				. Our machine learning algorithms helped them deliver.
			</>
		),
		caseStudyHref: "#",
		quote:
			"The recommendation engine has revolutionized how our users discover content. We've measured significant improvements in engagement metrics, and the personalization capabilities continue to exceed our expectations.",
		authorName: "Glodie Lukose",
		authorTitle: "Frontend Engineer, Prime Video",
		authorAvatar: "https://avatars.githubusercontent.com/u/99137927?v=4",
	},
];

/* -------------------------------------------------------------------------- */
/*  testimonial-bento                                                          */
/* -------------------------------------------------------------------------- */

export const defaultTestimonialBento: [
	TestimonialBentoItem,
	TestimonialBentoItem,
] = [
	{
		quote:
			"Astor has transformed the way I develop web applications. Their extensive collection of UI components, blocks, and templates has significantly accelerated my workflow. The flexibility to customize every aspect allows me to create unique user experiences.",
		authorName: "Méschac Irung",
		authorTitle: "Backend Engineer",
		authorAvatar: "https://avatars.githubusercontent.com/u/47919550?v=4",
		logoNode: <HuluLogo className="h-7 w-16" />,
		dark: false,
	},
	{
		quote:
			"Their extensive collection of UI components, blocks, and templates has significantly accelerated my workflow. The flexibility to customize every aspect allows me to create unique user experiences.",
		authorName: "Bernard Ngandu",
		authorTitle: "Backend Engineer",
		authorAvatar: "https://avatars.githubusercontent.com/u/31113941?v=4",
		logoNode: <VercelLogo className="size-7" />,
		dark: true,
	},
];

/* -------------------------------------------------------------------------- */
/*  testimonial-carousel                                                       */
/* -------------------------------------------------------------------------- */

export const defaultTestimonialCarouselItems: TestimonialCarouselItem[] = [
	{
		logoNode: <HuluLogo className="h-7 w-16" />,
		quote:
			"Implementing Astor components helped us create a more engaging streaming interface. The responsive design system works flawlessly across devices, and we were able to maintain our brand identity while leveraging their robust component architecture.",
		authorName: "Méschac Irung",
		authorTitle: "UI Engineer",
		authorAvatar: "https://avatars.githubusercontent.com/u/47919550?v=4",
	},
];

const statIconClass =
	"size-5 fill-card stroke-card drop-shadow dark:fill-muted-foreground dark:stroke-muted-foreground";

export const defaultTestimonialCarouselStats: TestimonialCarouselStat[] = [
	{
		iconNode: (
			<div
				aria-hidden="true"
				className="flex justify-center gap-1 dark:opacity-75"
			>
				{Array.from({ length: 5 }).map((_, i) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: decorative
					<Star className={statIconClass} key={i} />
				))}
			</div>
		),
		srLabel: "25% Increase in total user engagement",
		label: "25% Increase in total user engagement",
	},
	{
		iconNode: (
			<div
				aria-hidden="true"
				className="flex justify-center gap-1 dark:opacity-75"
			>
				{Array.from({ length: 5 }).map((_, i) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: decorative
					<Zap className={statIconClass} key={i} />
				))}
			</div>
		),
		srLabel: "30% higher retention rate for subscribers",
		label: "30% higher retention rate for subscribers",
	},
];

/* -------------------------------------------------------------------------- */
/*  testimonial-grid                                                           */
/* -------------------------------------------------------------------------- */

export const defaultTestimonialGridItems: TestimonialGridItem[] = [
	{
		quote:
			"The platform has dramatically improved our design workflow. We now prototype interfaces 40% faster while maintaining our high-quality standards. The developer experience is truly exceptional.",
		authorName: "Yves Kalume",
		authorTitle: "Android Engineer, Moneco",
		authorAvatar: "https://avatars.githubusercontent.com/u/55670723?v=4",
	},
	{
		quote:
			"Integrating Astor into our streaming platform was seamless. The performance gains were immediate, and our user engagement metrics have increased by 25% since implementation.",
		authorName: "Meschac Irung",
		authorTitle: "Frontend Engineer, Hulu",
		authorAvatar: "https://avatars.githubusercontent.com/u/47919550?v=4",
	},
	{
		quote:
			"As a payment processor, security and reliability are paramount. Astor delivers on both fronts, with robust testing capabilities that have helped us identify and resolve edge cases before deployment.",
		authorName: "Bernard Ngandu",
		authorTitle: "Backend, Stripe",
		authorAvatar: "https://avatars.githubusercontent.com/u/31113941?v=4",
	},
	{
		quote:
			"The A/B testing capabilities have revolutionized how we roll out new features. We can now make data-driven decisions with confidence, leading to a 30% improvement in user retention.",
		authorName: "Glodie Lukose",
		authorTitle: "Engineer, Prime Video",
		authorAvatar: "https://avatars.githubusercontent.com/u/99137927?v=4",
	},
	{
		quote:
			"Building Astor has been a journey of continuous improvement. Seeing how our platform empowers developers to create better user experiences makes all the hard work worthwhile.",
		authorName: "Theo Balick",
		authorTitle: "CTO, Astor",
		authorAvatar: "https://avatars.githubusercontent.com/u/68236786?v=4",
	},
	{
		quote:
			"The component system in Astor is a game-changer for UI development. It's helped us standardize our design language while maintaining the flexibility needed for complex interfaces.",
		authorName: "Ras Micky",
		authorTitle: "Software Engineer",
		authorAvatar: "https://avatars.githubusercontent.com/u/69605071?v=4",
	},
	{
		quote:
			"We've streamlined our entire design process thanks to Astor. The platform allows us to iterate faster and optimize our component library, leading to a more consistent user experience across all our projects.",
		authorName: "Adam Wathan",
		authorTitle: "CEO, Tailwind Labs",
		authorAvatar: "https://avatars.githubusercontent.com/u/4323180?v=4",
		logoNode: <TailwindLogo />,
	},
	{
		quote:
			"Astor has transformed how we approach frontend development at Hulu. The testing framework helped us reduce bugs by 40% and accelerated our feature deployment pipeline significantly.",
		authorName: "Shadcn",
		authorTitle: "Frontend Engineer, Hulu",
		authorAvatar: "https://avatars.githubusercontent.com/u/124599?v=4",
		logoNode: <HuluLogo height={20} width={56} />,
	},
	{
		quote:
			"The analytics dashboard in Astor gives us unprecedented visibility into user behavior. We've been able to make targeted improvements that increased our conversion rates by 18%.",
		authorName: "Glodie Lukose",
		authorTitle: "Engineer, Stripe",
		authorAvatar: "https://avatars.githubusercontent.com/u/99137927?v=4",
		logoNode: <StripeLogo height={24} width={56} />,
	},
];

/* -------------------------------------------------------------------------- */
/*  testimonial-tabs                                                           */
/* -------------------------------------------------------------------------- */

export const defaultTestimonialTabs: TestimonialTab[] = [
	{
		id: "stripe",
		logoLabel: "Stripe",
		logoNode: <StripeLogo className="h-auto w-12" />,
		caseStudyHref: "/case-studies/stripe",
		caseStudySummary:
			"Stripe leveraged our platform to streamline payment processing workflows, resulting in a 40% reduction in integration time for new merchants. Our API-first approach allowed their team to customize payment flows while maintaining PCI compliance across all touchpoints.",
		quote:
			"The platform has dramatically improved our payment processing capabilities. We now onboard merchants 40% faster while maintaining top-tier security standards. The developer experience is exceptional.",
		authorName: "Bernard Ngandu",
		authorTitle: "Backend Engineer, Stripe",
		authorAvatar: "https://avatars.githubusercontent.com/u/31113941?v=4",
	},
	{
		id: "hulu",
		logoLabel: "Hulu",
		logoNode: <HuluLogo className="h-auto w-12" />,
		caseStudySummary: "",
		quote: "",
		authorName: "",
		authorTitle: "",
		authorAvatar: "",
	},
];
