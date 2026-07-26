import { v } from "convex/values";

// Plan tiers + their feature caps. `free` is the default; `pro`/`team` are the paid
// tiers a workspace can subscribe to. Keep this the single source of truth for the
// tier names AND for "what does each tier unlock" — extend the `PlanLimits` shape and
// the per-tier values as the product grows. Gates read the workspace's plan
// (`billing.currentPlan`) and compare live usage against these caps; the enforcement
// helpers live in convex/entitlement.ts.

export type PlanName = "free" | "pro" | "team";

export const DEFAULT_PLAN: PlanName = "free";

export function isPlanName(value: string): value is PlanName {
	return value === "free" || value === "pro" || value === "team";
}

// The tier union as a Convex validator — the single source of truth for `PlanName` in
// function `args`/`returns` (billing.ts, entitlement.ts). Keeps a new tier a one-line
// change here rather than an edit to every inline `v.union(...)`.
export const planValidator = v.union(
	v.literal("free"),
	v.literal("pro"),
	v.literal("team")
);

// The per-workspace caps a plan unlocks. Numeric caps only for now (the two example
// resources a workspace accumulates); add booleans (e.g. `aiAssistant`) or more caps
// as you gate more features. These are illustrative starter defaults — tune them to
// your pricing.
export interface PlanLimits {
	/** Max collaborative documents a workspace may hold. */
	maxDocuments: number;
	/** Max notes a workspace may hold. */
	maxNotes: number;
}

export const PLAN_LIMITS: Record<PlanName, PlanLimits> = {
	free: { maxDocuments: 3, maxNotes: 10 },
	pro: { maxDocuments: 100, maxNotes: 500 },
	team: { maxDocuments: 1000, maxNotes: 5000 },
};

export function planLimits(plan: PlanName): PlanLimits {
	return PLAN_LIMITS[plan];
}
