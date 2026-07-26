import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	client: {
		NEXT_PUBLIC_CONVEX_URL: z.url(),
		NEXT_PUBLIC_CONVEX_SITE_URL: z.url(),
		// Optional: billing is provisioned separately from the app. When unset,
		// the checkout island renders a graceful fallback instead of crashing,
		// so the app still builds before Stripe is configured.
		NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().optional(),
	},
	runtimeEnv: {
		NEXT_PUBLIC_CONVEX_URL: process.env.NEXT_PUBLIC_CONVEX_URL,
		NEXT_PUBLIC_CONVEX_SITE_URL: process.env.NEXT_PUBLIC_CONVEX_SITE_URL,
		NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
			process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
	},
	skipValidation: !!process.env.SKIP_ENV_VALIDATION,
	emptyStringAsUndefined: true,
});
