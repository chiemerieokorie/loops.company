/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as assistant from "../assistant.js";
import type * as auth from "../auth.js";
import type * as billing from "../billing.js";
import type * as crons from "../crons.js";
import type * as defaultWorkspace from "../defaultWorkspace.js";
import type * as documentImports from "../documentImports.js";
import type * as emailEvents from "../emailEvents.js";
import type * as entitlement from "../entitlement.js";
import type * as files from "../files.js";
import type * as grants from "../grants.js";
import type * as healthCheck from "../healthCheck.js";
import type * as http from "../http.js";
import type * as jobs from "../jobs.js";
import type * as lib_access from "../lib/access.js";
import type * as lib_activeOrg from "../lib/activeOrg.js";
import type * as lib_billingPlans from "../lib/billingPlans.js";
import type * as lib_defaultWorkspace from "../lib/defaultWorkspace.js";
import type * as lib_functions from "../lib/functions.js";
import type * as lib_jwt from "../lib/jwt.js";
import type * as lib_membershipSync from "../lib/membershipSync.js";
import type * as lib_permissions from "../lib/permissions.js";
import type * as lib_plans from "../lib/plans.js";
import type * as lib_slack from "../lib/slack.js";
import type * as notes from "../notes.js";
import type * as privateData from "../privateData.js";
import type * as prosemirror from "../prosemirror.js";
import type * as resend from "../resend.js";
import type * as sendEmails from "../sendEmails.js";
import type * as session from "../session.js";
import type * as slack from "../slack.js";
import type * as slack_internal from "../slack/internal.js";
import type * as stripe from "../stripe.js";
import type * as userPreferences from "../userPreferences.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  assistant: typeof assistant;
  auth: typeof auth;
  billing: typeof billing;
  crons: typeof crons;
  defaultWorkspace: typeof defaultWorkspace;
  documentImports: typeof documentImports;
  emailEvents: typeof emailEvents;
  entitlement: typeof entitlement;
  files: typeof files;
  grants: typeof grants;
  healthCheck: typeof healthCheck;
  http: typeof http;
  jobs: typeof jobs;
  "lib/access": typeof lib_access;
  "lib/activeOrg": typeof lib_activeOrg;
  "lib/billingPlans": typeof lib_billingPlans;
  "lib/defaultWorkspace": typeof lib_defaultWorkspace;
  "lib/functions": typeof lib_functions;
  "lib/jwt": typeof lib_jwt;
  "lib/membershipSync": typeof lib_membershipSync;
  "lib/permissions": typeof lib_permissions;
  "lib/plans": typeof lib_plans;
  "lib/slack": typeof lib_slack;
  notes: typeof notes;
  privateData: typeof privateData;
  prosemirror: typeof prosemirror;
  resend: typeof resend;
  sendEmails: typeof sendEmails;
  session: typeof session;
  slack: typeof slack;
  "slack/internal": typeof slack_internal;
  stripe: typeof stripe;
  userPreferences: typeof userPreferences;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {
  betterAuth: import("../betterAuth/_generated/component.js").ComponentApi<"betterAuth">;
  stripe: import("@convex-dev/stripe/_generated/component.js").ComponentApi<"stripe">;
  resend: import("@convex-dev/resend/_generated/component.js").ComponentApi<"resend">;
  prosemirrorSync: import("@convex-dev/prosemirror-sync/_generated/component.js").ComponentApi<"prosemirrorSync">;
  agent: import("@convex-dev/agent/_generated/component.js").ComponentApi<"agent">;
};
