// `import.meta.glob` is a Vite/vitest feature (how convex-test discovers the
// function modules) that TypeScript doesn't model by default. Declare it so the
// codegen typecheck is clean.
interface ImportMeta {
	glob(pattern: string): Record<string, () => Promise<unknown>>;
}
