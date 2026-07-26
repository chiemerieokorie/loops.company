import { redirect } from "next/navigation";

import { getActiveOrg } from "@/lib/workspace-server";

export default async function DashboardRedirectPage() {
	const { activeOrganizationSlug } = await getActiveOrg();
	redirect(activeOrganizationSlug ? `/${activeOrganizationSlug}` : "/");
}
