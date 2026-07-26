"use client";

import { Button } from "@runway/ui/components/button";
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyTitle,
} from "@runway/ui/components/empty";

// Error boundary scoped to the authed app. Without this, any render error thrown
// inside the shell (e.g. a Base UI composition mistake in the sidebar, or a
// reactive query that throws on a transient auth gap) unwinds past the shell to
// the ROOT error.tsx and replaces the entire app — a single dropdown bug nuking
// everything. Containing it here keeps the blast radius to the authed content and
// offers an in-place recovery. `reset()` re-renders the segment, which clears a
// transient cause without a full reload.
export default function AuthedError({
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<main className="flex min-h-svh items-center justify-center p-6">
			<Empty>
				<EmptyHeader>
					<EmptyTitle>Something went wrong</EmptyTitle>
					<EmptyDescription>
						This part of the app hit an unexpected error. Try again, or reload
						the page.
					</EmptyDescription>
				</EmptyHeader>
				<EmptyContent>
					<Button onClick={reset} size="sm">
						Try again
					</Button>
				</EmptyContent>
			</Empty>
		</main>
	);
}
