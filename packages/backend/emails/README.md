# Email

Transactional email for `@runway/backend`, built on the
[`@convex-dev/resend`](https://www.convex.dev/components/resend) component and
[React Email](https://react.email/).

## What's wired up

| Email | Trigger | Template (style) |
| --- | --- | --- |
| Email verification | Better Auth `sendVerificationEmail` (sent on sign-up; verification is **enforced**) | `verificationEmail.tsx` (Barebone) |
| Password reset | Better Auth `sendResetPassword` | `passwordResetEmail.tsx` (Barebone) |
| Magic link | Better Auth `magicLink` plugin `sendMagicLink` | `magicLinkEmail.tsx` (Barebone) |
| Welcome | Better Auth `afterEmailVerification` | `welcomeEmail.tsx` (Matte) |
| Workspace invite | `invites.create` (schedules the sender) | `workspaceInviteEmail.tsx` (Matte) |
| Generic transactional | Your own app code (see below) | `transactionalEmail.tsx` (Matte) |

Senders live in [`convex/sendEmails.ts`](../convex/sendEmails.ts) as internal
actions. Magic-link and workspace-invite exist for the auth/organization layer to
call — e.g. the `magicLink` plugin runs
`requireActionCtx(ctx).runAction(internal.sendEmails.sendMagicLink, { to, url })`,
and `invites.create` schedules
`internal.sendEmails.sendWorkspaceInvite({ to, url, workspaceName, inviterName })`.

How it flows:

1. Better Auth callbacks in [`convex/auth.ts`](../convex/auth.ts) call
   `internal.sendEmails.*` via `requireActionCtx(ctx).runAction(...)`.
2. The senders in [`convex/sendEmails.ts`](../convex/sendEmails.ts) run in the
   **Node runtime** (`"use node"`), render a template to HTML + plain text, and
   enqueue it through the shared Resend instance in
   [`convex/resend.ts`](../convex/resend.ts).
3. Resend reports delivery status to the `/resend-webhook` route
   ([`convex/http.ts`](../convex/http.ts)), which dispatches
   `internal.emailEvents.handleEmailEvent` — recorded in the `emailEvents` table.
4. [`convex/crons.ts`](../convex/crons.ts) prunes finalized/abandoned emails hourly.

Templates use **inline styles** (not Tailwind) so they render identically in the
Node action and the preview server, with no build step or external assets.

## Environment variables (Convex deployment)

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | for real sends | Resend API key |
| `RESEND_WEBHOOK_SECRET` | for delivery tracking | Verifies the webhook signature |
| `EMAIL_FROM` | recommended | Sender, e.g. `Runway <noreply@yourdomain.com>`. Falls back to `onboarding@resend.dev` |
| `RESEND_TEST_MODE` | no | `"false"` to send to real addresses. **Defaults to test mode** |
| `SITE_URL` | yes (already used by auth) | Base URL for verification/reset links and the welcome CTA |

Set them with `npx convex env set NAME value` (or the dashboard).

## Sending a transactional email from app code

```ts
// from any mutation/action
await ctx.scheduler.runAfter(0, internal.sendEmails.sendTransactional, {
  to: user.email,
  subject: "Your export is ready",
  heading: "Export ready",
  lines: ["Your data export has finished.", "The link expires in 24 hours."],
  cta: { label: "Download export", url: downloadUrl },
});
```

## Previewing templates locally

```bash
pnpm --filter @runway/backend email   # opens the React Email preview on :3010
```

Each template ships `PreviewProps`, so they render with sample data.

## Setting up the Resend webhook

1. Deploy, then note your site URL: `https://<deployment>.convex.site/resend-webhook`.
2. In the Resend dashboard, create a webhook at that URL with all `email.*`
   events enabled.
3. Copy the signing secret to `RESEND_WEBHOOK_SECRET`.

## Going to production

1. Verify a sending domain in Resend and set `EMAIL_FROM` to an address on it.
2. Set `RESEND_API_KEY`.
3. Set `RESEND_TEST_MODE=false`.
4. Configure the webhook + `RESEND_WEBHOOK_SECRET` (above).
