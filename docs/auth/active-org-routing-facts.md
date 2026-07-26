# Active-Org Routing — Facts & How to Verify

Load-bearing facts behind the `/[workspace]` routing design (JWT-claim + reactivity),
each with the exact way to re-confirm it. Companion to
[`workspace-routing-prd.md`](./workspace-routing-prd.md). Last verified **2026-06-24**
against `@convex-dev/better-auth@0.12.2`, `better-auth@1.6.11`, dev deployment
`brazen-marmot-607`.

> Why this doc exists: the design rests on non-obvious integration behavior. Don't
> trust it from memory — re-run the checks below if anything seems off.

---

## F1. The auth cookie is `better-auth.convex_jwt`, set on the app domain
**Fact:** this stack is JWT-cookie-based (not a standard Better Auth session cookie).
The cookie is `HttpOnly` (server-readable in `proxy.ts`), prefix `better-auth.`. The
Next handler (`convexBetterAuthNextJs`) proxies `/api/auth/*` to the Convex `.site`
and forwards `Set-Cookie`, so it lands on the app domain.
**Verify:**
```bash
curl -s -i "https://<deployment>.convex.site/api/auth/get-session" | grep -i set-cookie
# → set-cookie: better-auth.convex_jwt=...
```

## F2. The JWT is signed (JWS), payload is readable without a key
**Fact:** alg is EdDSA (standard) or **RS256** (`customJwt` — what dev returns). Either
way it's *signed*, not encrypted → the proxy can base64url-decode the payload as an
**optimistic routing hint** (no verification, no secret). Authority lives elsewhere (F6).
**Verify:**
```bash
curl -s "https://<deployment>.convex.site/api/auth/convex/jwks" | grep -o '"alg":"[^"]*"'
# → "alg":"RS256"
```

## F3. A custom `jwt.definePayload` REPLACES the default user claims
**Fact (source `@convex-dev/better-auth/src/plugins/convex/index.ts`):**
```ts
definePayload: async ({ user, session }) => ({
  ...(opts.jwt?.definePayload ? await opts.jwt.definePayload({ user, session })
                              : omit(user, ["id","image"])),   // ← replaced if we supply one
  sessionId: session.id, iat: ...,                              // ← always appended
})
```
So our `definePayload` must re-include the default user claims (`omit(user,["id","image"])`)
or Convex identity loses `email`/`name`. `sub` (user id) is set by Better Auth's jwt
plugin (`getSubject`), is NOT in this payload, and is preserved regardless.
**Verify:** read the installed file, or `convex/lib/jwt.ts` (our builder re-includes them)
and `convex/jwt.test.ts` (asserts email/name survive, id/image dropped).

## F4. `definePayload` receives the full session row (with our additionalFields)
**Fact (source `better-auth/dist/plugins/jwt/sign.mjs`):** `getJwtToken` calls
`definePayload(ctx.context.session)`; the convex wrapper passes `{ user, session }`
where `session` is the full session row. The type is
`session: Session & Record<string, any>` → `session.activeOrganizationSlug` is
accessible (typed `any`). The slug is **not** in the JWT by default.
**Verify:** `convex/jwt.test.ts` (unit) + F5 (live).

## F5. A real minted JWT carries `activeOrganizationSlug` — VALIDATED
**Fact:** a throwaway probe (signup → wait for default-org trigger → verify that one
user → fresh sign-in → `GET /api/auth/convex/token` → decode) produced:
```
activeOrganizationId:   "jh72t9rs13jetv0264m07vgn4d899z77"  (== resolved default org)
activeOrganizationSlug: "probe-user-jzl0hb"
keys: iat,name,email,emailVerified,createdAt,updatedAt,
      activeOrganizationId,activeOrganizationSlug,sessionId,sub,exp,iss,aud
```
**Verify (repeatable):** the probe was deleted; to re-run, re-create a throwaway
`internalAction` that signs up + verifies one user + hits `/api/auth/convex/token`
and base64url-decodes (use `atob`, **not** `Buffer` — absent in the Convex runtime).
Do NOT disable `requireEmailVerification` globally to do this (verify the one user
instead). Token endpoint is session-gated:
```bash
curl -s -o /dev/null -w "%{http_code}" ".../api/auth/convex/token"   # → 401 unauthed
```

## F6. The cookie/JWT is a routing HINT only — authority is fresh + reactive
**Fact:** `proxy.ts` uses the decoded slug only to rewrite bare paths. The
authoritative checks are: (a) `preloadAuthQuery` in the `[workspace]` layout — a
**fresh** server query (not cookie-stale) that also seeds (b) `usePreloadedAuthQuery`
client reactivity (sub-second revocation), over (c) `assertMember` RLS in every
`authedQuery`. So a stale/forged cookie can only misroute to a URL the next layer
rejects — never a data leak.
**Verify:** `packages/backend/convex/lib/access.ts` (`assertMember`),
`convex/lib/functions.ts` (deny-by-default RLS), `convex/rls-net.test.ts`.

## F7. ⚠ `setActive` does NOT update our slug field (KNOWN GAP — fix in WS1.0a)
**Fact:** `activeOrganizationSlug` is seeded only on `session.create`
(`applyActiveOrgToSession`). `authClient.organization.setActive` updates
`activeOrganizationId` but not our custom slug → after a workspace switch the JWT slug
is stale and the proxy would route to the OLD workspace. **Not yet fixed.**
**Verified mechanics:**
- **Better Auth `databaseHooks.session.update.before`** receives only the **partial
  patch** (issue #4767) and it's *unconfirmed* it fires on `setActive` → wrong tool.
- **Convex component `triggers.session.onUpdate`** (the `@convex-dev/better-auth`
  feature, distinct from databaseHooks) runs **in the same transaction**, fires on any
  session row change, and provides the **full `newDoc` + `oldDoc`** — the reliable
  reaction mechanism (we already use these triggers for member/org/user). But its
  `ctx.db` is the **app** db, so writing back to the component `session` table needs a
  component mutation + a recursion guard.
**Decision (DONE — derive-on-read):** `buildConvexJwtPayload` and `getActiveOrg`
resolve the slug from the authoritative `activeOrganizationId` via
`ctx.runQuery(getOrganizationSlug, { orgId })` at mint/read time. **Verified:**
`ctx.runQuery` works in the `/convex/token` mint context (live probe, F5).
**Scope of the fix — important:** this makes every **server read** always fresh
(`getActiveOrg`, the gate). But the **JWT in the cookie** is only re-derived when the
token is *re-minted* (~15-min expiry / client refresh), so the **proxy's** slug can
lag for up to that window after a `setActive` switch → it may route a bare path to the
*previous* workspace until the cookie refreshes. Bounded and non-security (the gate
re-derives fresh and validates membership; data is RLS-safe). **Full fix (WS5): force
a token refresh right after `setActive`** in the switcher (and the switcher already
`router.push`es to the new slug directly, so only bare-path navigation in that window
is affected). The `session.onUpdate` trigger remains the fallback if a *stored* slug
is ever reintroduced.

## F8. `definePayload` is NOT schema-affecting
**Fact:** it changes JWT payload content only — no Better Auth schema regen
(`npx auth generate`) or migration needed. The `activeOrganizationSlug` field already
exists (added in #148). A normal `convex dev`/`codegen` push suffices.
**Verify:** `npx convex dev --once` succeeds with no schema/migration prompt.

## F9. Deployment env prerequisites
**Fact:** `BETTER_AUTH_SECRET`, `SITE_URL`, `GOOGLE_*`, `FACEBOOK_*` are set on dev.
The **Next side does not need `BETTER_AUTH_SECRET`** (the proxy decodes the JWT
optimistically; it never verifies the signature).
**Verify:**
```bash
cd packages/backend && npx convex env list | grep -iE "BETTER_AUTH_SECRET|SITE_URL"
```

---

## F10. Post-auth landing: push DIRECTLY to `/[slug]`, never `/dashboard`
**Fact (learned the hard way — PR #162):** auth flows must route the user **directly**
to their workspace, not via the `/dashboard` proxy alias. `/dashboard` is a *home
alias* the proxy resolves from the `convex_jwt` cookie — but right after sign-in the
cookie can still hold the **previous session's** slug (the provider re-mints it
asynchronously on session change). So `router.push("/dashboard")` immediately after
sign-in routed users to `/[staleSlug]` → the gate found them not-a-member → dead-end.

**The pattern (login + invite both use it):**
1. `await authClient.convex.token({ fetchOptions: { throw: false } })` — force a fresh
   `convex_jwt` mint for the new/changed session (keeps *subsequent* bare-path proxy
   routing correct; the cookie only re-derives on a fresh mint — F7).
2. `const { activeOrganizationSlug } = await convex.query(api.session.getActiveOrg, {})`
   — read the slug off the FRESH session (server-authoritative, not the cookie).
3. `router.push(activeOrganizationSlug ? \`/${activeOrganizationSlug}\` : "/dashboard")`.
`/dashboard` survives only as the orgless fallback. **Rule:** any client flow that
changes the session (login, `setActive`, invite-accept) must re-mint the token via
`authClient.convex.token()` (or the `setActiveWorkspace` helper) — the provider's
auto-refresh only fires on a `sessionId` *change*, not a field update.
**Verify:** Convex failure logs should show NO `assertWorkspaceAccess` "forbidden" /
"not authenticated" bursts right after sign-in (`npx convex logs … --status failure`).

## F11. The `[workspace]` gate must RECOVER, not dead-end
**Fact (PR #162):** on the mismatch path, when `assertWorkspaceAccess` throws
(non-member / unknown / stale slug), the gate must **redirect to the user's real
active workspace if they have one** (`redirect(\`/${activeOrganizationSlug}\`)`), and
only `notFound()` when the user is genuinely orgless. A blanket `notFound()` (the
original §4.7 implementation) dead-ended legitimately-signed-in users who were merely
routed to a stale/wrong slug. No redirect loop: the real slug matches on the next pass.

## F12. Auth pages carry NO success toasts
**Fact (convention):** auth flows (login/signup/forgot/reset/invite) show **error**
toasts only — no `toast.success`. Success is conveyed by navigation (login/invite →
workspace; signup/reset → `/login`) or an inline state (`forgot-password` sets `sent`).
A success toast that immediately unmounts on navigation is a redundant flash.
