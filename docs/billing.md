# Billing — Workspace Stripe Subscriptions

Workspace-scoped Stripe subscription billing (`free | pro | team`, monthly + annual)
via the [`@convex-dev/stripe`](https://www.convex.dev/components/stripe) component plus
the raw Stripe SDK for embedded Checkout. Entitlement is granted **only** by the
signature-verified webhook and read **reactively** from Convex — never from the
client, the return page, or the JWT.

Verified against `@convex-dev/stripe@0.1.4`, `stripe@22.2.1`,
`@stripe/react-stripe-js@6.6.0`, `@stripe/stripe-js@9.8.0`.

> Why this doc exists: the safe parts of this design are non-obvious (webhook-only
> fulfillment, out-of-order webhook handling, the metadata bridge, the two-SDK split).
> Don't trust them from memory — the load-bearing facts below each say how to
> re-confirm them.

---

## Flow

```
Upgrade CTA (PlanCards, free workspace)
  → /[workspace]/billing/checkout?plan=pro&interval=monthly   (Server Component)
      ├─ assertWorkspaceAccess(slug) → workspaceId            (membership gate)
      ├─ createCheckoutSession(action, owner/admin only)      → { clientSecret }
      │     • resolves price by lookup key (never a hardcoded id)
      │     • one Stripe customer per workspace (idempotency key)
      │     • stamps metadata.orgId = workspaceId
      └─ <CheckoutIsland> mounts <PaymentElement> + confirm()
  on confirm → Stripe redirects to return_url:
      /[workspace]/billing?upgraded=1&session_id=...           (banner; webhook grants plan)
  webhook /stripe/webhook → projectSubscription → billing.setPlan(workspaceId, plan)
  /[workspace]/billing → billing.plan (member) + getWorkspaceBilling (owner/admin)
      → ManageBillingButton → Customer Portal
```

## Load-bearing facts

### B1. Entitlement is granted by the webhook, never the client
`workspaceBilling.plan` is written **only** by `internal.billing.setPlan`, which is
reachable only from the webhook handlers in `http.ts` (after the component verifies the
Stripe signature). The `/checkout/return` banner is display-only; the client never sets
a plan.
**Verify:** `grep -rn "internal.billing.setPlan" packages/backend/convex` — the only
runtime caller is `http.ts`'s webhook handlers (the other hits are a schema/RLS comment
and the test). `setPlan` is an `internalMutation`, so it is not callable from a client.

### B2. Plan is read reactively, not carried in the JWT/session
The tier lives in `workspaceBilling`, keyed by `workspaceId`, read via `currentPlan` /
`billing.plan` / `getWorkspaceBilling`. It is **deliberately not** a JWT claim:

- A downgrade (cancel, `past_due`→`canceled`) must revoke access **immediately**; a JWT
  claim would lag up to the token lifetime (tokens re-mint ~every 15 min/user).
- Plan is per-**workspace**; the token is per-**user** with one active org (a user can be
  `pro` in one workspace, `free` in another).
- Any mutation granting a paid capability must re-check server-side anyway, so a claim
  could only be a UX hint — and a reactive Convex query is a better hint (instant, no
  staleness, no invalidation machinery).

The **only** justified exception is edge/proxy route-gating with no round-trip (the same
reason the *slug* is in the JWT — see `lib/jwt.ts`). If you need it, derive `plan` at
mint time in `buildConvexJwtPayload` and treat it as optimistic/UX only.
**Verify:** `grep -rniE "plan" packages/backend/convex/lib/jwt.ts packages/backend/convex/session.ts`
→ no matches (plan is not in the token).

### B3. Two SDKs, by design
The `@convex-dev/stripe` component owns webhook signature verification, the synced
`customers`/`subscriptions`/`invoices` tables, and the Customer Portal + cancellation.
The **raw Stripe SDK** (`convex/stripe.ts`, `"use node"`) is used only to create the
embedded Checkout Session, because the component's `createCheckoutSession` is
redirect-only and discards the `client_secret` the embedded Elements flow needs.
**Verify:** `convex/stripe.ts` imports both `StripeSubscriptions` (component) and
`Stripe` (raw SDK); `createBillingPortalSession`/`cancelSubscription` use the component,
`createCheckoutSession` uses the raw SDK.

### B4. `metadata.orgId` is the only bridge from Stripe back to a workspace
`buildEmbeddedSessionParams` stamps `{ orgId: workspaceId, workspaceId, userId, plan }`
into the session metadata **and mirrors it onto `subscription_data.metadata`** so it
survives onto the synced subscription row and every renewal event. The component indexes
`subscriptions.orgId` (→ `getSubscriptionByOrgId`, `listInvoicesByOrgId`), and its
`handleSubscriptionCreated` backfills `orgId` onto any invoice that synced *before* the
subscription. **Dropping `orgId` from `subscription_data.metadata` silently breaks both
`getSubscriptionByOrgId` and `listInvoicesByOrgId`.**
**Verify:** `convex/lib/billingPlans.ts` → `buildEmbeddedSessionParams` sets
`subscription_data: { metadata }`; the component's `dist/component/private.js`
`handleSubscriptionCreated` has the invoice backfill loop.

### B5. Prices are resolved at runtime by lookup key
No price ids in code. `createCheckoutSession` calls
`stripe.prices.list({ lookup_keys: [lookupKeyFor(plan, interval)] })`. Rotating a price
in the Stripe dashboard never touches code as long as the lookup key stays the same.
Keys: `runway_pro_monthly`, `runway_pro_annual`, `runway_team_monthly`,
`runway_team_annual` (`convex/lib/billingPlans.ts` → `CHECKOUT_PLANS`).

### B6. `setPlan` is idempotent, OCC-safe, and ignores stale deletes
The near-simultaneous `checkout.session.completed` + first subscription event both call
`setPlan`; the OCC loser retries, re-reads the now-present row, and patches — one row,
never a duplicate. A downgrade event that omits money-state fields doesn't clobber the
stored `stripeCustomerId`. `clearSubscription` (cancellation) resets the
subscription/period fields but keeps the customer map. And a stale/redelivered
`subscription.deleted` racing a re-subscribe is **ignored** when its
`expectedSubscriptionId` no longer matches the stored one (webhook delivery is not
ordered).
**Verify:** `pnpm --filter @runway/backend test` — see `billing.test.ts`
("idempotent", "downgrade preserves the customer id", "ignores a stale delete…").

### B7. Subscription projection uses a safe default, and follows the price
The status→plan decision is the pure `planForSubscription` (`lib/billingPlans.ts`):
`active`/`trialing`/`past_due` → **grant** (past_due keeps access during dunning, and
grants rather than no-ops so a row an out-of-order event downgraded self-heals);
**everything else → free** — a safe default that also covers `unpaid`, `canceled`,
`incomplete`, `incomplete_expired`, `paused`, and any future status, so a non-paying
subscription never silently retains access. The plan is derived from the price's
**lookup key** (falling back to the checkout metadata), so a plan switch through the
Customer Portal is reflected even though the metadata is stale.
**Verify:** `pnpm --filter @runway/backend test` → `billingPlans.test.ts` locks the
status matrix + price-based resolution; `convex/http.ts` `projectSubscription` calls
`planForSubscription`.

### B8. The double-billing guard checks all rows
`createCheckoutSession` throws if the workspace already has an active subscription. It
uses `listSubscriptionsByOrgId(...).some(active|trialing)` — **not** `.first()`, which
could return a stale `canceled` row and let a second concurrent subscription through.
**Verify:** `convex/stripe.ts` → `existingSubs.some(... "active" || "trialing")`.

### B9. Owner/admin gating + RLS
Billing mutations (checkout, portal, cancel) run as Node actions with no `ctx.db`; they
delegate the owner/admin check to `internal.billing.requireBillingRole` → `assertRole`.
`getWorkspaceBilling` (subscription + invoices) is owner/admin; `billing.plan` /
`billing.myRole` are member-readable. `workspaceBilling` is **read-only** in the RLS net
(`lib/functions.ts`) — only the webhook's internal mutations write it, on the raw db.
**Verify:** `convex/billing.ts` (`requireBillingRole`, `assertRole` in
`getWorkspaceBilling`); `lib/functions.ts` `buildRules` → `workspaceBilling: { read }`.

### B10. `ui_mode: "elements"` is cast on purpose
`stripe-node@22`'s types predate the `custom`→`elements` rename; the runtime literal is
correct, so `billingPlans.ts` casts `"elements" as unknown as …`. Do not "fix" this.

### B11. Stripe's iframe can't read our tokens — resolve to literals
Stripe Elements render cross-origin and can't parse `oklch()` or read CSS variables.
`features/billing/lib/stripe-appearance.ts` resolves each design token to a literal
color via a `<canvas>` (which normalizes any CSS Color 4 value), themes light/dark, and
loads the font into the frame separately; the provider re-mounts on a theme flip.

---

## Files

| File | Role |
|------|------|
| `convex/schema.ts` | `workspaceBilling` table (one row/workspace) |
| `convex/lib/plans.ts` | `PlanName` (`free`/`pro`/`team`) |
| `convex/lib/billingPlans.ts` | lookup keys, `buildEmbeddedSessionParams`, return URL — pure, unit-testable |
| `convex/billing.ts` | `setPlan` (webhook writer), `requireBillingRole`, `myRole`, customer map, `getWorkspaceBilling`, `currentPlan`/`plan` |
| `convex/stripe.ts` | `createCheckoutSession`, `createBillingPortalSession`, `cancelSubscription` (Node actions) |
| `convex/http.ts` | Stripe webhook projector → `setPlan` |
| `convex/lib/functions.ts` | `workspaceBilling` read-only RLS rule |
| `features/billing/checkout-island.tsx` | embedded `<PaymentElement>` + `confirm()`; token→appearance; key-unset fallback |
| `features/billing/plan-cards.tsx` | Pro/Team + monthly/annual toggle → checkout route |
| `features/billing/manage-billing-button.tsx` | opens the Customer Portal |
| `features/billing/upgraded-banner.tsx` | one-shot post-checkout toast |
| `app/(authed)/[workspace]/billing/{page,checkout}.tsx` | billing dashboard + embedded checkout |

## Setup

1. **Stripe → Products/Prices.** Create the paid tiers with **exactly** these price
   lookup keys: `runway_pro_monthly`, `runway_pro_annual`, `runway_team_monthly`,
   `runway_team_annual`.
2. **Stripe → Webhooks.** Add `https://<deployment>.convex.site/stripe/webhook` for:
   `checkout.session.completed`, `customer.subscription.created`,
   `customer.subscription.updated`, `customer.subscription.deleted`. Copy the signing
   secret.
3. **Stripe → Billing → Customer Portal:** enable it.
4. **Convex env:** `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `SITE_URL`
   (public origin, no trailing slash).
5. **Web env:** `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` (`pk_…`, optional in the schema —
   the checkout island renders a fallback if unset).
6. Run `convex dev` (or `pnpm dev:setup`) to push the schema + components and generate
   the API.

## Testing

- Unit / `convex-test`: `pnpm --filter @runway/backend test` — `billing.test.ts` locks
  `setPlan` idempotency, the money-state / customer-map behavior, the stale-delete
  guard, and the `requireBillingRole` role gate. `pnpm --filter web test` — the
  token→appearance mapper.
- **Test-mode smoke test (do this once live):** upgrade → pay with `4242 4242 4242 4242`
  → confirm the webhook flips `workspaceBilling.plan` → the billing page reflects it →
  open the portal → cancel → confirm the downgrade. This is the only check that
  exercises the real webhook path end to end.

## Extending

- **Gate a feature on the plan:** read `currentPlan(ctx, workspaceId)` in a
  query/mutation and compare against the tier (add an `assertPlan(ctx, workspaceId,
  ["pro","team"])` helper when you have paid features). Billing *tracks* the plan; it
  does not gate anything yet.
- **Add/rename a tier:** update `PlanName` (`lib/plans.ts`), `CHECKOUT_PLANS`
  (`lib/billingPlans.ts`), the `PLANS` display copy (`plan-cards.tsx`), and the checkout
  page's `PAID_PLANS` — then create the matching Stripe prices.
- **Billing emails:** the app has Resend wired (`convex/resend.ts`, `emails/`); hook a
  "welcome to Pro" / dunning email off `setPlan` when you want them.
