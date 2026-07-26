import { defineComponent } from "convex/server";

// Locally-installed Better Auth component (labs.convex.dev/better-auth local
// install). Defining the component here signals to Convex that convex/betterAuth is
// a component, which lets us own the generated schema (./schema) and use plugins —
// like `organization` — beyond the default-supported set.
const component = defineComponent("betterAuth");

export default component;
