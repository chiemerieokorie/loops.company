import { Button } from "@runway/ui/components/button";
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyTitle,
} from "@runway/ui/components/empty";
import Link from "next/link";

// Friendly boundary for an unknown / inaccessible workspace slug. The gate calls
// `notFound()` when `assertWorkspaceAccess` fails — unknown slug and non-member are
// indistinguishable here (no existence leak). "Go to your workspace" targets
// `/dashboard`, which the proxy resolves to the user's active `/[slug]`.
export default function WorkspaceNotFound() {
	return (
		<main
			aria-label="Workspace not found"
			className="flex min-h-svh items-center justify-center p-6"
		>
			<Empty>
				<EmptyHeader>
					<EmptyTitle>Workspace not found</EmptyTitle>
					<EmptyDescription>
						This workspace doesn&apos;t exist, or you don&apos;t have access to
						it.
					</EmptyDescription>
				</EmptyHeader>
				<EmptyContent>
					<Button render={<Link href="/dashboard" />} size="sm">
						Go to your workspace
					</Button>
				</EmptyContent>
			</Empty>
		</main>
	);
}
