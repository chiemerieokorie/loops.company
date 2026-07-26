"use client";

import { api } from "@runway/backend/convex/_generated/api";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@runway/ui/components/dropdown-menu";
import { SidebarMenu, SidebarMenuItem } from "@runway/ui/components/sidebar";
import { IconChevronTopSmall } from "@runway/ui/icons";
import { useQuery } from "convex/react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

import { ProfileAvatar } from "@/features/shared/generated-avatar";
import { authClient } from "@/lib/auth-client";

export function NavUser() {
	const router = useRouter();
	// `getCurrentUser` is a non-throwing `publicQuery` (returns null when signed out),
	// so it needs no skip-guard — it can't throw during the boot window.
	const user = useQuery(api.auth.getCurrentUser);
	const { theme, setTheme } = useTheme();
	const label = user?.name ?? user?.email ?? "Account";

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					{/* Compact, static trigger (not a full-width SidebarMenuButton) — no
					    hover/active surface; the click target hugs the avatar + name. */}
					<DropdownMenuTrigger className="flex w-fit max-w-full items-center gap-2 p-1 text-left outline-hidden focus-visible:ring-2 focus-visible:ring-sidebar-ring">
						<ProfileAvatar
							className="rounded-full"
							image={user?.image}
							name={label}
							size={28}
						/>
						<span className="truncate font-medium text-sm">{label}</span>
						<IconChevronTopSmall className="size-4 shrink-0 text-muted-foreground" />
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end" className="min-w-56" side="right">
						<DropdownMenuGroup>
							<DropdownMenuLabel className="p-0 font-normal">
								<div className="flex items-center gap-2 px-1 py-1.5 text-left">
									<ProfileAvatar
										className="rounded-full"
										image={user?.image}
										name={label}
										size={32}
									/>
									<div className="grid flex-1 leading-tight">
										<span className="truncate font-medium text-sm">
											{label}
										</span>
										{user?.email ? (
											<span className="truncate text-muted-foreground text-xs">
												{user.email}
											</span>
										) : null}
									</div>
								</div>
							</DropdownMenuLabel>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuRadioGroup
							onValueChange={setTheme}
							value={theme ?? "system"}
						>
							<DropdownMenuLabel className="font-normal text-muted-foreground text-xs">
								Theme
							</DropdownMenuLabel>
							<DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value="system">
								System
							</DropdownMenuRadioItem>
						</DropdownMenuRadioGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem
							onClick={() =>
								authClient.signOut({
									fetchOptions: { onSuccess: () => router.push("/login") },
								})
							}
							variant="destructive"
						>
							Sign out
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}
