import { expo } from "@better-auth/expo";
import {
	type AuthFunctions,
	createClient,
	type GenericCtx,
} from "@convex-dev/better-auth";
import { convex, crossDomain } from "@convex-dev/better-auth/plugins";
import { requireActionCtx } from "@convex-dev/better-auth/utils";
import { type BetterAuthOptions, betterAuth } from "better-auth/minimal";
import { magicLink, organization } from "better-auth/plugins";

import { components, internal } from "./_generated/api";
import type { DataModel } from "./_generated/dataModel";
import authConfig from "./auth.config";
import authSchema from "./betterAuth/schema";
import {
	applyActiveOrgToSession,
	clearActiveOrgForMember,
	clearActiveOrgForWorkspace,
} from "./lib/activeOrg";
import { createDefaultWorkspace } from "./lib/defaultWorkspace";
import { publicQuery } from "./lib/functions";
import { buildConvexJwtPayload } from "./lib/jwt";
import {
	projectRole,
	removeMembership,
	removeWorkspaceMemberships,
	syncMembership,
} from "./lib/membershipSync";
import { ac, roles } from "./lib/permissions";

const siteUrl = process.env.SITE_URL as string;
const nativeAppUrl = process.env.NATIVE_APP_URL || "runway://";

// Google and Facebook OAuth are optional. Each provider is registered ONLY when both
// of its secrets are present (set via `convex env set NAME=…`), so the backend still
// pushes before OAuth is configured — same graceful-when-unset posture as Stripe/
// Resend. When absent, `signIn.social({ provider })` returns a clean error the sign-in
// UI surfaces as a toast (no server crash).
const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const facebookClientId = process.env.FACEBOOK_CLIENT_ID;
const facebookClientSecret = process.env.FACEBOOK_CLIENT_SECRET;

// Explicitly typed (rather than inlined) to break the self-referential inference
// cycle: these reference `internal.auth.*`, whose generated types derive from the
// `triggersApi()` exports below, which derive from `authComponent`. The annotation
// fixes the config's shape so `authComponent` no longer depends on its own type.
const authFunctions: AuthFunctions = {
	onCreate: internal.auth.onCreate,
	onUpdate: internal.auth.onUpdate,
	onDelete: internal.auth.onDelete,
};

// Locally-installed component (labs.convex.dev/better-auth local install). The
// `local.schema` is our generated Better Auth schema (./betterAuth/schema), which
// the org plugin extended with organization/member/invitation.
//
// `triggers` fire in the APP's mutation context whenever a component row changes,
// which is how org membership stays projected into the app's `memberships` table.
// We key on the `member` table so EVERY path keeps the projection in sync —
// invite-accept, addMember, the owner row created with the org, removeMember, and
// role updates. The `organization` onDelete is a cleanup net.
export const authComponent = createClient<DataModel, typeof authSchema>(
	components.betterAuth,
	{
		local: { schema: authSchema },
		triggers: {
			// Every new user gets a default organization (= workspace) so no user is
			// ever orgless. Thin delegation — the logic lives in lib/defaultWorkspace
			// (it schedules an action that calls auth.api.createOrganization; the
			// resulting owner member row then flows through the `member` trigger into
			// `memberships`).
			user: {
				onCreate: async (ctx, user) => {
					// Slack "wins bot" new-signup win (convex/slack.postWin). Best-effort
					// and opt-in: the action no-ops unless SLACK_BOT_TOKEN +
					// SLACK_WINS_CHANNEL are set, and it only schedules an action so it
					// never blocks signup.
					await ctx.scheduler.runAfter(0, internal.slack.postWin, {
						event: { type: "signup", userId: user._id },
					});
					await createDefaultWorkspace(ctx, user);
				},
			},
			member: {
				onCreate: async (ctx, member) => {
					await syncMembership(ctx, member);
					// Slack "wins bot" new-member win — only for genuine teammates
					// joining an existing workspace. Excluding "owner" skips the
					// auto-created default-workspace owner (which fires on every signup),
					// so a signup never double-pings as both a signup and a member.
					const role = projectRole(member.role);
					if (role !== "owner") {
						await ctx.scheduler.runAfter(0, internal.slack.postWin, {
							event: {
								type: "member",
								userId: member.userId,
								workspaceId: member.organizationId,
								role,
							},
						});
					}
				},
				onUpdate: (ctx, member) => syncMembership(ctx, member),
				// Remove the projection row, THEN clear the active org from the user's
				// sessions so a just-removed member stops claiming the workspace they
				// left (lib/activeOrg).
				onDelete: (ctx, member) =>
					removeMembership(ctx, member.userId, member.organizationId).then(() =>
						clearActiveOrgForMember(ctx, member.userId, member.organizationId)
					),
			},
			organization: {
				// Clear every member's active org FIRST (it reads the `memberships` rows
				// for the userIds), THEN drop the projection rows. Ordering matters: the
				// fan-out needs those rows to still exist.
				onDelete: (ctx, org) =>
					clearActiveOrgForWorkspace(ctx, org._id).then(() =>
						removeWorkspaceMemberships(ctx, org._id)
					),
			},
		},
		authFunctions,
	}
);

// The component invokes these to dispatch the `triggers` above into app context.
// They must be exported (referenced lazily as `internal.auth.*` in authFunctions).
export const { onCreate, onUpdate, onDelete } = authComponent.triggersApi();

// Split from `createAuth` so the component (convex/betterAuth/adapter.ts) can read
// the typed options via `createApi(schema, createAuthOptions)` WITHOUT instantiating
// Better Auth (which would need deployment env vars).
export function createAuthOptions(ctx: GenericCtx<DataModel>) {
	return {
		baseURL: siteUrl,
		trustedOrigins: [siteUrl, nativeAppUrl, "exp://"],
		database: authComponent.adapter(ctx),
		// Each provider is registered only when both its secrets are set (see the env
		// reads above), so an unconfigured deployment omits it rather than shipping a
		// broken provider. `signIn.social` on the client drives these — no extra plugin.
		socialProviders: {
			...(googleClientId && googleClientSecret
				? {
						google: {
							clientId: googleClientId,
							clientSecret: googleClientSecret,
						},
					}
				: {}),
			...(facebookClientId && facebookClientSecret
				? {
						facebook: {
							clientId: facebookClientId,
							clientSecret: facebookClientSecret,
						},
					}
				: {}),
		},
		emailAndPassword: {
			enabled: true,
			// Verification is enforced: users must confirm their email (via the link in
			// the verification email, sent on sign-up below) before they can sign in.
			// This also makes `afterEmailVerification` — where the welcome email fires —
			// a reliable step in the sign-up flow.
			requireEmailVerification: true,
			sendResetPassword: async ({ user, url }) => {
				await requireActionCtx(ctx).runAction(
					internal.sendEmails.sendPasswordReset,
					{ to: user.email, url, name: user.name }
				);
			},
		},
		emailVerification: {
			sendOnSignUp: true,
			autoSignInAfterVerification: true,
			sendVerificationEmail: async ({ user, url }) => {
				await requireActionCtx(ctx).runAction(
					internal.sendEmails.sendVerification,
					{ to: user.email, url, name: user.name }
				);
			},
			afterEmailVerification: async (user) => {
				await requireActionCtx(ctx).runAction(internal.sendEmails.sendWelcome, {
					to: user.email,
					name: user.name,
					url: siteUrl,
				});
			},
		},
		// On session create, default the active org to the user's first workspace so a
		// freshly signed-in user lands in a workspace without an explicit "set active
		// org" round-trip. Runs in a Better Auth request context whose `ctx` exposes
		// `runQuery` (not `ctx.db`); no membership → leave the session unchanged (never
		// throw: a user may sign in before the default-org trigger lands).
		databaseHooks: {
			session: {
				create: {
					before: (session) => applyActiveOrgToSession(ctx, session),
				},
			},
		},
		plugins: [
			expo(),
			crossDomain({ siteUrl }),
			// Orgs ARE workspaces: the org id is the app's `workspaceId` and members
			// project into the `memberships` table (see lib/membershipSync). Static
			// custom roles (owner/admin/member) are defined over the `ac` surface
			// (lib/permissions) and match the app's role union 1:1.
			//
			// AUTHORIZATION BOUNDARY (read before building org-management UI):
			//  - App-resource access is gated SOLELY by `assertMember`/`assertRole`
			//    over the `memberships` projection (lib/access). Do NOT gate app
			//    authorization on Better Auth `hasPermission` here.
			//  - `addMember` is server-only (no HTTP route; reachable only via
			//    `auth.api.addMember`) and performs NO caller authorization. If we ever
			//    call it, enforce the caller's role ourselves first.
			organization({
				ac,
				roles,
				// Emails the invitation via the Resend + React Email layer
				// (convex/sendEmails, packages/backend/emails/workspaceInviteEmail).
				sendInvitationEmail: async (data) => {
					const inviteLink = `${siteUrl}/accept-invitation/${data.id}`;
					await requireActionCtx(ctx).runAction(
						internal.sendEmails.sendWorkspaceInvite,
						{
							to: data.email,
							url: inviteLink,
							workspaceName: data.organization.name,
							inviterName: data.inviter?.user?.name,
						}
					);
				},
			}),
			// Passwordless sign-in: emails a one-time link via the Resend + React Email
			// layer (convex/sendEmails, packages/backend/emails/magicLinkEmail).
			// Clicking the link verifies the address and signs the user in.
			magicLink({
				sendMagicLink: async ({ email, url }) => {
					await requireActionCtx(ctx).runAction(
						internal.sendEmails.sendMagicLink,
						{ to: email, url }
					);
				},
			}),
			convex({
				authConfig,
				jwksRotateOnTokenGenerationError: true,
				// Carry the active workspace slug in the JWT so the web proxy can resolve
				// `/[slug]/…` from the `convex_jwt` cookie with no backend round-trip
				// (lib/jwt). A custom definePayload REPLACES the default user claims, so
				// buildConvexJwtPayload re-includes them.
				jwt: { definePayload: (args) => buildConvexJwtPayload(ctx, args) },
			}),
		],
	} satisfies BetterAuthOptions;
}

export function createAuth(ctx: GenericCtx<DataModel>) {
	return betterAuth(createAuthOptions(ctx));
}

export const getCurrentUser = publicQuery({
	args: {},
	handler: async (ctx) => await authComponent.safeGetAuthUser(ctx),
});
