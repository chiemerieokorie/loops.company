import { CtaSection } from "@/features/landing/sections/cta-section";
import { FaqsSection } from "@/features/landing/sections/faqs-section";
import { FeaturesSection } from "@/features/landing/sections/features-section";
import { HeroSection } from "@/features/landing/sections/hero-section";
import { HowItWorksSection } from "@/features/landing/sections/how-it-works-section";
import { PricingSection } from "@/features/landing/sections/pricing-section";

// The marketing home page. Generic, product-agnostic starter copy — swap the strings
// in each section for your product. A lean set of sections (hero → features →
// how-it-works → pricing → faq → cta) that reads as one coherent page.
export default function Page() {
	return (
		<>
			<HeroSection />
			<FeaturesSection />
			<HowItWorksSection />
			<PricingSection />
			<FaqsSection />
			<CtaSection />
		</>
	);
}
