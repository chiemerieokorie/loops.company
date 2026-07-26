import { expoClient } from "@better-auth/expo/client";
import {
	convexClient,
	crossDomainClient,
} from "@convex-dev/better-auth/client/plugins";
import { ac, roles } from "@runway/backend/convex/lib/permissions";
import { env } from "@runway/env/native";
import {
	magicLinkClient,
	organizationClient,
} from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import Constants from "expo-constants";
// biome-ignore lint/performance/noNamespaceImport: expo-secure-store is passed as a whole-module storage adapter to expoClient
import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

export const authClient = createAuthClient({
	baseURL: env.EXPO_PUBLIC_CONVEX_SITE_URL,
	plugins: [
		convexClient(),
		// Orgs are the app's workspaces. Same `ac` + roles as the server.
		organizationClient({ ac, roles }),
		// Enables authClient.signIn.magicLink({ email }) — the server emails the link.
		magicLinkClient(),
		Platform.OS === "web"
			? crossDomainClient()
			: expoClient({
					scheme: Constants.expoConfig?.scheme as string,
					storagePrefix: Constants.expoConfig?.scheme as string,
					storage: SecureStore,
				}),
	],
});
