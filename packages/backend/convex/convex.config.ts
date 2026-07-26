import agent from "@convex-dev/agent/convex.config";
import prosemirrorSync from "@convex-dev/prosemirror-sync/convex.config";
import resend from "@convex-dev/resend/convex.config";
import stripe from "@convex-dev/stripe/convex.config.js";
import { defineApp } from "convex/server";
import { v } from "convex/values";
// Locally-installed Better Auth component (labs.convex.dev/better-auth local
// install) — defined in ./betterAuth so we own the generated schema and can use the
// organization plugin (not in the default-supported set).
import betterAuth from "./betterAuth/convex.config";

// Declared environment variables give us deploy-time validation and typed access via
// the generated `env` object (`import { env } from "./_generated/server"`), and stop
// a required var from being removed or set to an invalid value from the dashboard/CLI.
//
// REQUIRED vars fail the push when unset; OPTIONAL vars (v.optional) don't — that's
// deliberate for the integrations that degrade gracefully when unconfigured (billing,
// OAuth, AI, the Trigger callback), so the backend still deploys before they're set up.
// `CONVEX_CLOUD_URL` / `CONVEX_SITE_URL` are Convex system vars — always present, so
// they must not be declared here.
const app = defineApp({
	env: {
		// Resolved web origin — Better Auth trusted origins + Stripe return URLs.
		// Required: `auth.ts` and `stripe.ts` throw at call time when it's missing.
		SITE_URL: v.string(),
		// Native deep-link scheme for auth redirects; `auth.ts` falls back to
		// "runway://" when unset.
		NATIVE_APP_URL: v.optional(v.string()),
		// Billing (Stripe). Optional: `getStripe()` throws only when checkout runs, so
		// the app builds and deploys before billing is provisioned.
		STRIPE_SECRET_KEY: v.optional(v.string()),
		// Transactional email (Resend). EMAIL_FROM falls back to the Resend sandbox
		// sender; RESEND_TEST_MODE is a toggle — anything other than "false" keeps
		// test mode on, so unset also means test mode.
		EMAIL_FROM: v.optional(v.string()),
		RESEND_TEST_MODE: v.optional(v.union(v.literal("true"), v.literal("false"))),
		// Google OAuth — the provider registers only when both are set (`auth.ts`).
		GOOGLE_CLIENT_ID: v.optional(v.string()),
		GOOGLE_CLIENT_SECRET: v.optional(v.string()),
		// Facebook OAuth — same both-or-neither registration as Google.
		FACEBOOK_CLIENT_ID: v.optional(v.string()),
		FACEBOOK_CLIENT_SECRET: v.optional(v.string()),
		// AI assistant — read lazily by the OpenAI provider, gated on
		// `api.assistant.isConfigured`, so unset just disables the feature.
		OPENAI_API_KEY: v.optional(v.string()),
		// Shared secret authenticating the Trigger.dev export callback (`http.ts`).
		// Optional: the callback returns 401 when unset rather than blocking deploy.
		TRIGGER_CALLBACK_SECRET: v.optional(v.string()),
	},
});
app.use(betterAuth);
app.use(stripe);
app.use(resend);
// Collaborative document sync (OT). Stores each document's steps + snapshots keyed
// by docId; the app gates access by workspace membership in convex/prosemirror.ts.
app.use(prosemirrorSync);
// AI assistant (convex/assistant.ts). Owns the conversation threads, messages, and
// stream deltas in its own tables; the app keeps a thin `assistantThreads` projection
// for tenancy/listing. No env is required at push time — the OpenAI key is read
// lazily by the provider at call time, so the backend deploys before AI is configured.
app.use(agent);

export default app;
