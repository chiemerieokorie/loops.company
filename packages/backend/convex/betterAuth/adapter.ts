import { createApi } from "@convex-dev/better-auth";

import { createAuthOptions } from "../auth";
import schema from "./schema";

// The component's database adapter surface. `createApi` wires our generated schema
// (./schema) + the typed options (createAuthOptions, env-free) into the CRUD
// functions the Better Auth Convex adapter calls. These are component functions —
// never exposed to the internet, even though they are public.
export const {
	create,
	findOne,
	findMany,
	updateOne,
	updateMany,
	deleteOne,
	deleteMany,
} = createApi(schema, createAuthOptions);
