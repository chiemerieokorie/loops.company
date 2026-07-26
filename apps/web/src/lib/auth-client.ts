import { convexClient } from "@convex-dev/better-auth/client/plugins";
import { ac, roles } from "@runway/backend/convex/lib/permissions";
import {
	magicLinkClient,
	organizationClient,
} from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
	plugins: [
		convexClient(),
		// Orgs are the app's workspaces. Same `ac` + roles as the server so
		// `checkRolePermission` matches the backend's static role definitions.
		organizationClient({ ac, roles }),
		// Enables authClient.signIn.magicLink({ email }) — the server emails the link.
		magicLinkClient(),
	],
});
