/**
 * Better Auth component schema.
 *
 * The table SHAPES are owned by the generator — regenerate them with:
 *
 *   cd convex/betterAuth && npx @better-auth/cli generate \
 *     --cwd "$PWD" --config auth.ts --output generatedSchema.ts --yes
 *
 * and they land in `./generatedSchema.ts` (never hand-edit table fields). This
 * file imports those generated `tables` and is the place to layer any CUSTOM
 * indexes on top — per the local-install convention:
 * https://labs.convex.dev/better-auth/features/local-install#adding-custom-indexes
 *
 * There are no custom indexes today; the generated indexes suffice.
 */

import { defineSchema } from "convex/server";

import { tables } from "./generatedSchema";

const schema = defineSchema(tables);

export default schema;
