import { createAccessControl } from "better-auth/plugins/access";
import {
	adminAc,
	defaultStatements,
	memberAc,
	ownerAc,
} from "better-auth/plugins/organization/access";

// The organization access-control surface (Better Auth org plugin). This module is
// PURE (no Convex/Node deps) so it can be shared by the Convex server config AND
// both auth clients — the org plugin requires the same `ac` instance + roles on the
// server (`organization({ ac, roles })`) and the client
// (`organizationClient({ ac, roles })`). Apps import it as
// `@runway/backend/convex/lib/permissions`; the server as `./lib/permissions`.

// App-level resources beyond the org-management defaults. This starter ships one
// generic `project` resource as an example — rename/extend it for your domain. It
// is NOT enforced by the access helpers (those gate on the projected
// `memberships.role`); it gives roles an app-relevant permission vocabulary and is
// the seam for `authClient.organization.checkRolePermission(...)` checks.
const APP_STATEMENT = {
	project: ["create", "update", "delete"],
} as const;

// `defaultStatements` carries the org plugin's built-in resources (organization /
// member / invitation, plus the `ac` resource dynamic access control would use).
export const statement = {
	...defaultStatements,
	...APP_STATEMENT,
} as const;

export const ac = createAccessControl(statement);

// The three built-in roles, re-created on our `ac` so they include the app
// resources. We merge the org plugin's default role statements so owner/admin keep
// their full org-management permissions.
export const owner = ac.newRole({
	...ownerAc.statements,
	...APP_STATEMENT,
});

export const admin = ac.newRole({
	...adminAc.statements,
	...APP_STATEMENT,
});

export const member = ac.newRole({
	...memberAc.statements,
	// Members are read-only on app resources by default.
	project: [],
});

export const roles = { owner, admin, member };
