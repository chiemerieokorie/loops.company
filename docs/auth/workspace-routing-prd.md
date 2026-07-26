# PRD — Workspace-Scoped Routing (`/[workspace]/…`)

**Status:** proposed · **Owner:** —  · **Created:** 2026-06-24

Make the org slug the prefix of every authenticated surface (`/acme/workbooks`,
`/acme/billing`, `/acme/sheet/…`), land users straight in their workspace, and
read the active slug **without redundant session round-trips** — using the slug
already denormalized on the session (#148) the way it was meant to be used.

---

## 1. Problem

`#150` org-scoped only the dashboard (`/[workspace]/dashboard`). Everything else
is inconsistent or wasteful:

1. **Only `dashboard` is scoped.** The 12 workspace-scoped backend tables
   (`workbooks`, `documents`, `sheets`, `workspaceBilling`, `invitations`, …) have
   no `/[workspace]/…` routes. `/sheet` and `/document` are **public, fixture-backed,
   un-scoped** pages.
2. **A redundant session round-trip on landing.** `/dashboard` reads the session
   (Convex query → `getSession`) only to compute the slug and redirect; then
   `/[workspace]/layout` reads the *same* session again. Login bounces through that
   hop. The slug is on the session precisely to avoid this.
3. **No round-trip-free read of the active slug.** Every gate check is a Convex
   `getActiveOrg` call. The convex `better-auth.convex_jwt` cookie (already set) can
   carry the slug as a JWT claim (via `jwt.definePayload`); the proxy base64-decodes
   it for zero-backend-call routing. *(Original thesis was `cookieCache`/`getCookieCache`;
   the spike found this stack is JWT-cookie-based, so that was the wrong tool — §4.)*
4. **Collateral debt** surfaced by the migration: `lucide-react` imports in
   `app/document`, `components/sheet/*`, `app-shell`, `document/*`, `mode-toggle`,
   `loader` (violates the **@runway/icons-only** rule); two shells (the new
   `Sidebar` vs the old `AppShell`/`ShellNav` used by `/document`); a stale
   `shell-nav.tsx` comment ("root redirects to /sheet").

**Goal:** one consistent, fast, smooth pattern — `/[workspace]/<surface>` for all
authed UI; the active workspace resolved from the session/cookie, not re-fetched.

---

## 2. Current state (inventory)

**Routes today**
```
(marketing)/  page,about,contact,privacy,terms   PUBLIC  ✓ keep
(auth)/       login,signup,forgot,reset,verify    PUBLIC  ✓ keep
(authed)/[workspace]/dashboard                    SCOPED  ✓ done (#150)
(authed)/dashboard                                REDIRECT hop  ← remove/replace
/sheet        SheetWorkspace (fixture)            PUBLIC  ← migrate to scoped
/document     AppShell+DocumentView (fixture)     PUBLIC  ← migrate to scoped
/invite/[token]                                   PUBLIC  ✓ keep (entry → workspace)
/api/auth/[...all]                                handler ✓ keep
```

**Backend (already built)** — `session.getActiveOrg`, `session.assertWorkspaceAccess`,
`session.listMyWorkspaces`, `betterAuth/queries.getOrganizationIdBySlug`,
`lib/access.assertMember`, and the membership projection. Session carries
`activeOrganizationId` + `activeOrganizationSlug` (#148); access-loss clears it (#152).

**Auth flows → `/dashboard`** — `login-form`, `social-auth-buttons` (`callbackURL`),
`invite/[token]`.

---

## 3. Target URL map

```
/                       marketing landing            PUBLIC
/login /signup /…       auth                         PUBLIC
/invite/[token]         accept → /[slug]             PUBLIC entry

/[workspace]                overview (the root)      SCOPED   ← today's /[workspace]/dashboard MOVES HERE
/[workspace]/workbooks/[id] a workbook               SCOPED
/[workspace]/sheet/[id]     the grid surface         SCOPED   ← from /sheet
/[workspace]/documents/[id] published doc            SCOPED   ← from /document
/[workspace]/billing        plan + usage             SCOPED
/[workspace]/members        team + invites           SCOPED
/[workspace]/settings       workspace settings       SCOPED
```
**Decided:** the overview lives at the **workspace root `/[workspace]`** (its own
`page.tsx`) — not `/[workspace]/dashboard`, not `/[workspace]/workbooks`. The
current `(authed)/[workspace]/dashboard/page.tsx` content moves to
`(authed)/[workspace]/page.tsx`; the bare `(authed)/dashboard` redirect page is
deleted (the proxy handles post-login landing → `/[slug]`). Every other authed
surface is `/[workspace]/<name>`.

---

## 4. Design — how the slug is resolved (DECIDED: JWT-claim + reactivity)

Three layers, each with one job. Separating them makes "round-trip-free" and
"never stale" both true at once — the cookie is only ever an *optimistic routing
hint*, while every *authority* decision is fresh.

### Layer 1 — Proxy: optimistic routing (zero round-trip) via the convex JWT
**Spike result (T0.2): use the JWT cookie that already exists, NOT `cookieCache`.**
A `curl` probe of the deployment showed this integration is driven by a
`better-auth.convex_jwt` cookie (the Convex JWT), not a standard Better Auth session
cookie — so `cookieCache`/`getCookieCache` (which key off `better-auth.session_data`)
is the wrong tool here and is unconfirmed in this setup. Instead:

- The convex plugin exposes `jwt.definePayload({ user, session })`; `session` carries
  our additionalFields. Add `activeOrganizationSlug` (+ id) to the JWT claims there.
  (Confirmed: the default payload is `omit(user,["id","image"]) + sessionId + iat` —
  the slug is NOT present today, so we add it.)
- In `proxy.ts` (Next 16), read the `better-auth.convex_jwt` cookie (HttpOnly →
  server-readable) and **base64-decode its payload** to get the slug — **no signature
  verification, no secret, zero Convex calls**. Rewrite bare authed paths to the
  active workspace (`/billing` → `/<slug>/billing`, post-login `/` → `/<slug>`).
- This is **routing only, never authorization** — a decoded-but-unverified claim is a
  fine *hint* (Better Auth docs call cookie reads "optimistic"). Worst case if the
  JWT is stale/forged: it routes to a URL the next (authoritative) layer rejects. No
  data exposure. No `BETTER_AUTH_SECRET` needed on the Next side.

Advantages over `cookieCache`: uses a cookie that's already set + refreshed by the
convex client, a first-class extension point (`definePayload`), no new secret on
Next, no separate cookie mechanism to enable/verify.

### Layer 2 — Page/layout: the authoritative, FRESH read (`preloadAuthQuery`)
The `[workspace]` layout/page uses `preloadAuthQuery(...)`, which runs the Convex
query **server-side at request time** — so it is **not cookie-stale; it is fresh**.
This single read does triple duty: SSR data + the auth/membership check + seeding
the client subscription. It is *the one necessary read* — not the redundant
`/dashboard` hop we're deleting.

### Layer 3 — Client: live reactivity (`usePreloadedAuthQuery`)
The preloaded query is handed to a client component via `usePreloadedAuthQuery`,
which renders the SSR value then **subscribes**. For any connected client a
membership/active-org change propagates in **sub-second** (Convex push) — the client
guard redirects/clears the instant access is revoked. This is strictly better than a
TTL and is what makes staleness a non-issue.

Underneath all three, the **data boundary is always fresh**: `assertMember` runs in
every `authedQuery` (`lib/access`, deny-by-default RLS), so workspace data can never
be served to a non-member regardless of cookie state.

### Why this resolves the staleness concern (the confirmation)
- The cookie feeds **only** the proxy's *route guess*; it is never an authority.
- The page's `preloadAuthQuery` is a **fresh** server query → the authoritative
  check has **no** cookie staleness.
- The client subscription corrects the *shell* reactively (sub-second), not on a TTL.
- `#152`'s server-side active-org clear remains as **defense-in-depth** for the
  cold/disconnected path and to keep the proxy's routing guess sane.
- ⇒ JWT expiration is fine as-is (it only affects how good the optimistic route
  guess is, which self-corrects at Layer 2). No tight-TTL tradeoff needed.

**Spike (T0.2) — DONE (code + CLI):** confirmed via `convex env list` (secret/URLs
set) and a `curl` probe of `…convex.site/api/auth/get-session` (cookie model is
`better-auth.convex_jwt`, prefix `better-auth.`). Conclusion: skip `cookieCache`,
extend the convex JWT `definePayload` with the slug, decode in the proxy (above).
**One probe remains:** after adding `definePayload`, sign in once and decode the
minted `convex_jwt` to eyeball the `activeOrganizationSlug` claim end-to-end. If for
any reason the JWT can't carry it, fall back to direct client-side routing for the
auth flows (proxy resolves bare paths via a minimal one-read resolver) — Layers 2–3
are unchanged regardless.

---

## 4.5 Spike findings — verified (2026-06-24)

All confirmed by reading the installed source (`@convex-dev/better-auth@0.12.2`,
`better-auth@1.6.11`), the upstream raw `src/plugins/convex/index.ts` (commit
`dd9f1ee`), and live `curl`/`convex env` against dev `brazen-marmot-607`.

**Cookie model (CLI/`curl`)**
- The integration's auth cookie is **`better-auth.convex_jwt`** (the Convex JWT),
  `HttpOnly; Path=/; SameSite=Lax`, cookie prefix **`better-auth.`** (default).
- It is set by the `…convex.site/api/auth/*` endpoint and proxied to the **app
  domain** by the Next handler (`convexBetterAuthNextJs` forwards `Set-Cookie`), so
  `proxy.ts` (server) can read it via `request.cookies`. HttpOnly does not block
  server reads.
- There is **no** standard `better-auth.session_data` cookie in this setup → Better
  Auth `cookieCache`/`getCookieCache` is the wrong mechanism here. (`getCookieCache`
  also requires `BETTER_AUTH_SECRET` on the reader and reads `…session_data`.)

**The Convex JWT (source: `plugins/convex/index.ts`)**
- **Signed (JWS), not encrypted (JWE)** → payload is base64url and readable without
  any key. Source says EdDSA standard / RS256 for `customJwt`; **live JWKS on dev
  returns `RS256`** (so this deployment is the customJwt path). Either way: signed,
  payload readable. Verified by `curl …/api/auth/convex/jwks`.
- Default expiry **15 min** (`opts.jwt?.expirationSeconds ?? opts.jwtExpirationSeconds ?? 60*15`).
- Payload builder:
  ```ts
  definePayload: async ({ user, session }) => ({
    ...(opts.jwt?.definePayload
      ? await opts.jwt.definePayload({ user, session })   // OURS — replaces the default
      : omit(user, ["id", "image"])),                     // default user claims
    sessionId: session.id,   // always appended (cannot override)
    iat: ...,                // always appended
  })
  ```
- **⚠ A custom `definePayload` REPLACES the default `omit(user,["id","image"])` user
  claims.** To keep Convex identity's `email`/`name`, our payload must re-include them
  (spread `user` minus `id`/`image`) and *add* the org fields. `sub` (user id) is set
  by the jwt plugin's default `getSubject` — **not** in this payload — so it is
  preserved regardless.
- `getJwtToken(ctx, options)` calls `definePayload(ctx.context.session)`; the convex
  wrapper destructures `{ user, session }` from it, where **`session` is the full
  session row** (Better Auth `getJwtToken` source: `sign.mjs`).

**Type (source: `plugins/convex/index.d.ts`)**
```ts
jwt?: { expirationSeconds?: number;
  definePayload?: (args: { user: User & Record<string, any>;
                           session: Session & Record<string, any>; })
    => Promise<Record<string, any>> | Record<string, any> | undefined }
```
`Session & Record<string, any>` ⇒ `session.activeOrganizationSlug` is accessible
(typed `any`, no cast). The slug **is not** in the JWT today (default payload spreads
*user* fields only) → we add it.

**Deployment env (`convex env list`, dev `brazen-marmot-607`)**
- `BETTER_AUTH_SECRET`, `SITE_URL`, `GOOGLE_*`, `FACEBOOK_*` all set. The Next side
  does **not** need `BETTER_AUTH_SECRET` for the optimistic JWT decode (we don't verify).

**Net implication for implementation**
1. `convex/auth.ts` → `convex({ ..., jwt: { definePayload: ({ user, session }) => ({
   ...userClaimsMinusIdImage, activeOrganizationId, activeOrganizationSlug }) } })`.
2. `proxy.ts` → read `better-auth.convex_jwt`, split on `.`, base64url-decode the
   payload segment, read `activeOrganizationSlug` (optimistic; no verify).
3. The session must carry the slug at mint time — it does (#148 sets it on create,
   #152 clears on access loss).

**Live-confirmed on dev (`curl`):** `GET /api/auth/convex/token` returns **401**
unauthed (exists + session-gated via `sessionMiddleware`); `…/convex/jwks` returns
an **RS256** key (signed → decodable). `definePayload` is **deployed** (`convex dev
--once`, clean) and the builder is **unit-tested** (`convex/jwt.test.ts`, 3 green).

**Live mint — CONFIRMED (2026-06-24).** A throwaway internal action (signup → wait
for default-org trigger → verify that one user → fresh sign-in → `GET
/api/auth/convex/token` → base64url-decode) minted a real JWT on dev whose payload
was:
```
activeOrganizationId:   "jh72t9rs13jetv0264m07vgn4d899z77"   (== the resolved default org)
activeOrganizationSlug: "probe-user-jzl0hb"
payload keys: iat,name,email,emailVerified,createdAt,updatedAt,
              activeOrganizationId,activeOrganizationSlug,sessionId,sub,exp,iss,aud
```
So the slug travels in the token, matches the active org, and the default user
claims (`email`,`name`) + `sub` are preserved — exactly as designed. The probe was
deleted afterward. **Nothing left to confirm.**

⚠ **Found during the probe — `setActive` slug-staleness (must fix, WS1.0a).**
`activeOrganizationSlug` is seeded only on `session.create` (`applyActiveOrgToSession`).
`authClient.organization.setActive` updates `activeOrganizationId` but NOT our custom
slug field → after a workspace switch the JWT slug is stale and the proxy would route
to the OLD workspace. Fix: a `databaseHooks.session.update` hook that re-derives the
slug when `activeOrganizationId` changes (+ refresh the token on switch). The proxy
**ignores JWT `exp`** when decoding the slug (optimistic), so the 15-min expiry never
degrades routing.

---

## 4.6 Bare-path resolution + the known-route registry

A single source of truth for the **workspace-scoped top-level routes** — consumed by
both the proxy (to resolve bare paths) and the sidebar nav. One list, no drift.

```ts
// apps/web/src/lib/workspace-routes.ts (location TBD — after the features/ restructure)
// Top-level segments that live UNDER /[slug]. NOTE: the overview is the index
// (`/[slug]`), NOT a member of this list — and bare `/` is the PUBLIC LANDING, never
// rewritten. So `""` is deliberately absent (including it would hijack the landing).
export const WORKSPACE_ROUTES = [
  "billing",
  "workbooks",
  "documents",
  "sheet",
  "members",
  "settings",
] as const;
// Sidebar nav = the overview (href `/[slug]`) + one item per WORKSPACE_ROUTES entry.
```

**Why a registry is needed:** every scoped URL is `/<slug>/<route>/…`, so a *bare*
path (`/billing/…`) and a *slug-prefixed* path (`/acme/billing`) both have a first
segment. The registry is the discriminator: **seg0 ∈ WORKSPACE_ROUTES ⇒ bare**.

**Proxy algorithm** (`proxy.ts`, for a request to `/<seg0>/<rest>?<query>`):
1. Excluded paths pass untouched: **`/` (the public landing — never rewritten)**,
   `(marketing)`, `(auth)` (`/login`…), `/invite`, `/api`, assets.
2. Decode the active slug from the `convex_jwt` cookie (F-facts). No JWT/unauth → `/login`.
3. `seg0 === activeSlug` → already scoped → **pass** (the `[workspace]` gate validates).
4. `seg0 ∈ WORKSPACE_ROUTES` → **bare path** → `redirect` to
   `/<activeSlug>/<seg0>/<rest>?<query>` (preserve the rest of the path **and** the
   query string — e.g. `/billing/transactions/tr-id?payments=true` →
   `/<slug>/billing/transactions/tr-id?payments=true`).
5. otherwise → `seg0` is treated as **some workspace's slug** → **pass** to the gate
   (§4.7 decides what the gate does). We do NOT 404 at the proxy — seg0 may be a
   *foreign-but-valid* slug for a multi-workspace user, and telling that from garbage
   would cost the lookup we're avoiding.

## 4.7 The ambiguous first segment — best experience (DECIDED)

Step 5 hands `/<seg0>/…` (seg0 ≠ a known route, ≠ active slug) to the `[workspace]`
layout gate. Three real cases, each with the intended UX:

- **Foreign-but-valid slug** (`/other-team/billing`, user *is* a member of `other-team`).
  The mismatch path's `assertWorkspaceAccess` confirms membership → **render normally**,
  then **promote** `other-team` to active *client-side, post-render* (a `setActive`
  mutation in a small client guard — NOT during the GET, avoiding the session-write-on-
  render anti-pattern). So deep-linking into another of your workspaces just works, and
  subsequent bare-path routing follows you there. *(Resolves the old §6 open question.)*
- **Unknown slug / non-member** (`/typo`, `/not-my-team/billing`). `assertWorkspaceAccess`
  throws "forbidden" (unknown ≡ non-member — IDOR-safe, no existence oracle). Best UX:
  the gate calls Next `notFound()` → a friendly **`[workspace]/not-found.tsx`** that says
  "Workspace not found or you don't have access" and offers the **workspace switcher** +
  a button to your active workspace. This beats a silent redirect (no "why am I suddenly
  in /acme?" confusion) and beats a bare 404 (gives a way out), while leaking nothing.
- **Valid slug, missing route** (`/acme/nonsense`, acme valid). No route file → Next's
  own 404 (the same `[workspace]/not-found.tsx`). Consistent.

Net: known bare route → instant redirect into the active workspace (path + query
preserved); another of *your* workspaces → renders + quietly promotes; anything you
can't access or that doesn't exist → one friendly not-found with the switcher, never a
silent surprise and never a data/existence leak.

---

## 5. Workstreams & tasks

### WS0 — Decisions + spike  *(DONE)*
- [x] **T0.1** Decided: JWT-claim routing + reactivity; overview at `/[workspace]` root (§3).
- [x] **T0.2** Spiked via source + CLI + **live mint** (§4.5): JWT-cookie stack
      (`better-auth.convex_jwt`, RS256 signed → readable); `definePayload` carries the
      slug; a real minted token decoded with `activeOrganizationSlug` present. DONE.

### WS1 — Proxy-level slug routing  *(JWT decode)*
- [x] **T1.0** Added `jwt.definePayload` to the convex plugin (`convex/auth.ts` →
      `lib/jwt.ts` `buildConvexJwtPayload`) — includes `activeOrganizationId` +
      `activeOrganizationSlug`, preserves default user claims. Unit-tested
      (`convex/jwt.test.ts`) + live-mint confirmed; deployed to dev. *(Not yet committed.)*
- [x] **T1.0a** **DONE** (derive-on-read; verified `ctx.runQuery` works at mint via a
      throwaway probe; `getActiveOrg` derives too; 122 backend tests green). Detail below.
      **Fix `setActive` slug-staleness** (found in the probe). Three
      mechanisms evaluated; note the **component triggers vs databaseHooks** distinction:
      - ❌ **Better Auth `databaseHooks.session.update`** — wrong tool: *unconfirmed* it
        fires on `setActive`, and `.before` only gets the **partial patch** (issue #4767).
      - ✅ **Component `triggers.session.onUpdate`** (labs.convex.dev/better-auth/features/triggers)
        — RELIABLE: runs **in the same transaction**, fires on *any* session row change
        (incl. the org plugin's setActive), and gives the **full `newDoc` + `oldDoc`**.
        We already use these triggers (member/org/user in `auth.ts`). Caveat: the
        trigger's `ctx.db` is the **app** db — it cannot patch the **component** `session`
        table, so syncing the stored slug needs a component mutation
        (`ctx.runMutation`, like #152's `clearActiveOrgForMember`) + an **idempotent
        recursion guard** (act only when `newDoc.activeOrganizationId !==
        oldDoc.activeOrganizationId`; the slug-only re-fire is then a no-op).
      - ✅✅ **PREFERRED — derive the slug on read; don't store it.** The authoritative
        value is `activeOrganizationId` (org-plugin-maintained, always correct). Have
        `buildConvexJwtPayload` resolve the slug at **mint time** via
        `ctx.runQuery(getOrganizationSlug, { orgId })` (`definePayload` is closed over
        `createAuthOptions(ctx)` and is async), and `getActiveOrg` derive it the same
        way. Then `activeOrganizationSlug` (the #148 stored field + its create-seed) is
        **redundant → drop it**: no sync, no trigger, no recursion, no staleness class.
        The proxy hot path stays free (slug is baked into the JWT once per ~15-min mint).
      - **Decision:** go derive-on-read. **Fallback to the `session.onUpdate` trigger**
        (keeping the stored field) only if `ctx.runQuery` turns out unavailable in the
        `/convex/token` mint context — **verify that first.**
- [x] **T1.0b** **DONE** — `lib/workspace-routes.ts` (`WORKSPACE_ROUTES` = `["dashboard"]`
      today; grows with WS2/WS3). Nav not yet rewired to it (WS5).
- [x] **T1.1** **DONE** — `proxy.ts` decodes the `convex_jwt` slug and rewrites bare known
      routes (path + query preserved); foreign/unknown/no-slug pass through. 8 unit tests.
      Original spec below.
- [ ] **T1.1-spec** Implement the proxy algorithm (§4.6) in `proxy.ts`: decode the
      `convex_jwt` slug (optimistic, no verify); `seg0 ∈ WORKSPACE_ROUTES` → redirect to
      `/<activeSlug>/<seg0>/<rest>?<query>` (preserve path + query); `seg0 === activeSlug`
      or other → pass to the gate; unauth → `/login`, orgless → `/`. Keep security headers.
- [ ] **T1.2** Authed-path matcher (exclude `(auth)`, `(marketing)`, `/invite`, `/api`,
      assets). **Acceptance:** signed-in `/billing/transactions/x?y=1` →
      `/<slug>/billing/transactions/x?y=1` (zero backend calls); `/acme/nonsense` → 404;
      signed-out → `/login`.

### WS2 — Route restructure under `[workspace]`
- [ ] **T2.1** Replace the `(authed)/dashboard` redirect page: bare `/dashboard`
      handled by the proxy (WS1) or, under Option A, kept as a thin resolver.
- [ ] **T2.2** Add scoped routes: `[workspace]/workbooks`, `…/workbooks/[id]`,
      `…/billing`, `…/members`, `…/settings` (stubs wired to existing backend where
      it exists; `Empty` states otherwise).
- [ ] **T2.3** Confirm the `[workspace]/layout` gate reads the slug from the cookie
      on the common path (Option B) and only calls `assertWorkspaceAccess` on
      mismatch (already the shape — swap the source of the slug).

### WS3 — Migrate `/sheet` + `/document` (public → scoped)
- [ ] **T3.1** Move `/sheet` → `[workspace]/sheet/[id]` and `/document` →
      `[workspace]/documents/[id]`; back them with workspace data (or keep
      fixtures behind the gate for now).
- [ ] **T3.2** **Resolve the anonymous-e2e constraint.** The live-compute e2e
      currently hits public `/sheet`. Decide: (a) keep a public **`/demo` sandbox**
      sheet for the anonymous compute test, or (b) make the e2e authenticate. Pick
      (a) if we still want a no-login demo of the wedge. **Acceptance:** e2e green
      without a public top-level `/sheet`.
- [ ] **T3.3** Collapse the two shells: render `/document` inside the `[workspace]`
      sidebar shell; retire `AppShell`/`ShellNav` (or fold their actions into the
      sidebar header). Remove the stale `shell-nav.tsx` comment.

### WS4 — Auth-flow direct landing
- [ ] **T4.1** `login-form`: on success route to the workspace (proxy handles bare
      `/dashboard`, or read slug client-side and push `/<slug>/dashboard`).
- [ ] **T4.2** `social-auth-buttons`: `callbackURL` → `/dashboard` (proxy rewrites)
      — verify OAuth lands in-workspace in one hop.
- [ ] **T4.3** `invite/[token]`: after accept, land in the **invited** workspace's
      slug (the invite knows its workspace), not the generic hop.

### WS5 — Navigation
- [ ] **T5.1** Expand `lib/nav-items.ts` to the full workspace nav (Dashboard,
      Workbooks, Documents, Billing, Members, Settings), all slug-prefixed.
- [ ] **T5.2** Workspace switcher (`workspace-switcher.tsx`): after `setActive`, **force
      a convex token refresh** so the `convex_jwt` cookie re-mints with the new slug —
      otherwise the proxy's bare-path routing lags the switch by up to the JWT expiry
      (~15 min; server reads are already fresh via derive-on-read — see facts F7). The
      switcher's explicit `router.push("/<newSlug>/…")` covers the immediate nav; this
      fixes bare-path navigation in the post-switch window. Nav links + the registry
      (`lib/workspace-routes.ts`) become the single source of truth (replaces the
      `navItems()` hardcoded list).

### WS6 — Icon-rule cleanup (gating, do as surfaces move)
- [ ] **T6.1** Replace `lucide-react` with `@runway/icons` in every migrated file
      (`document/page`, `document/*`, `sheet/*`, `app-shell`, `metric-card`,
      `mode-toggle`, `loader`, `metric-block`). Re-run `swap-icons.mjs` where shadcn
      output is involved. **Acceptance:** `grep -r lucide-react apps/web/src` empty.

### WS7 — Edge cases & polish  *(behavior decided in §4.7)*
- [ ] **T7.1** `[workspace]/not-found.tsx` — friendly "Workspace not found or you don't
      have access" with the workspace switcher + a link to the active workspace. The gate
      calls `notFound()` on `assertWorkspaceAccess` failure (unknown ≡ non-member, no
      leak). Also serves `/[validSlug]/<missing-route>`.
- [ ] **T7.2** Orgless user (no membership yet) → a "preparing workspace" state, not a
      redirect loop.
- [ ] **T7.3** Foreign-but-valid slug: render, then **promote** it to active client-side
      post-render (a `setActive` mutation in a small client guard — not on the GET).

### WS8 — Tests & docs
- [ ] **T8.1** Proxy rewrite tests (bare→scoped; signed-out→login; orgless→/).
- [ ] **T8.2** Gate tests for the cookie-common-path vs DB-mismatch path.
- [ ] **T8.3** Update `CLAUDE.md` (the routing/UI section) + this PRD's outcome +
      the `runway-workspace-routing` memory.

---

## 6. Open questions
*(Resolved: landing surface = workspace root `/[workspace]`, bare `/` stays the public
landing (§3, §4.6); slug transport = JWT claim, not cookieCache (§4); ambiguous first
segment / deep-link promote / not-found UX (§4.7).)*
1. **Public demo** — keep a no-login `/demo` sheet to show the wedge (and host the
   anonymous compute e2e), or gate everything?
2. **Overview content** — the current dashboard page renders a workbook *list*; at the
   workspace root, is that the overview, or do we want a distinct overview + a separate
   `/[workspace]/workbooks`? (Naming decided; content TBD.)

## 7. Sequencing
WS0 (decide+spike) → WS1 (proxy) → WS2 (restructure) → WS4 (auth landing) + WS5
(nav) in parallel → WS3 (sheet/doc migrate, the biggest) → WS6 (icons, alongside
WS3) → WS7 (edges) → WS8 (tests/docs). WS3 is the largest and depends on real
workspace data wiring; the rest is mechanical once WS0/WS1 land.

## 8. Non-goals
Real workbook/sheet data modeling (separate effort), the financing engine, billing
implementation. This PRD is **routing + workspace-scoping + the round-trip-free
slug**, not the features that live at those routes.
``` ```

---

## 9. References
- Convex + Better Auth (Next.js integration): https://labs.convex.dev/better-auth/framework-guides/next
- Better Auth Next.js (proxy / session): https://www.better-auth.com/docs/integrations/next
- Verified mechanics + how to re-check them: [`active-org-routing-facts.md`](./active-org-routing-facts.md)
