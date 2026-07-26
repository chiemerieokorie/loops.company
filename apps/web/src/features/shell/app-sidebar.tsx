"use client";

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@runway/ui/components/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

import { navItems } from "@/features/shell/nav-items";
import { NavUser } from "@/features/shell/nav-user";
import { WorkspaceSwitcher } from "@/features/shell/workspace-switcher";

export function AppSidebar({
	workspaceSlug,
	...props
}: ComponentProps<typeof Sidebar> & { workspaceSlug: string }) {
	const pathname = usePathname();
	const items = navItems(workspaceSlug);

	return (
		<Sidebar variant="inset" {...props}>
			<SidebarHeader>
				<WorkspaceSwitcher activeSlug={workspaceSlug} />
			</SidebarHeader>

			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.href}>
									<SidebarMenuButton
										isActive={pathname === item.href}
										render={<Link href={item.href} />}
										tooltip={item.label}
									>
										<item.icon />
										<span>{item.label}</span>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>

			<SidebarFooter>
				<NavUser />
			</SidebarFooter>
		</Sidebar>
	);
}
