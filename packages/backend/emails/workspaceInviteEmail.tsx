import { Button, Heading, Link, Section, Text } from "@react-email/components";

import { EmailLayout } from "./components/emailLayout";
import {
	APP_NAME,
	brandTheme,
	buttonStyle,
	faintStyle,
	headingStyle,
	paragraphStyle,
} from "./theme";

export interface WorkspaceInviteEmailProps {
	/** Brand name. Defaults to the app name. */
	companyName?: string;
	/** Optional name of the person who sent the invite. */
	inviterName?: string;
	/** The invite-accept URL (contains the token). */
	url: string;
	/** Name of the workspace the recipient is invited to. */
	workspaceName: string;
}

const rawLinkStyle = {
	color: brandTheme.text,
	fontSize: "13px",
	textDecoration: "underline",
	wordBreak: "break-all",
} as const;

export const WorkspaceInviteEmail = ({
	url,
	workspaceName,
	inviterName,
	companyName = APP_NAME,
}: WorkspaceInviteEmailProps) => {
	const theme = brandTheme;
	const intro = inviterName
		? `${inviterName} invited you`
		: "You've been invited";
	return (
		<EmailLayout
			align="left"
			companyName={companyName}
			previewText={`Join ${workspaceName} on ${companyName}`}
			theme={theme}
		>
			<Heading as="h1" style={headingStyle(theme)}>
				Join {workspaceName}
			</Heading>
			<Text style={paragraphStyle(theme)}>
				{intro} to collaborate in the {workspaceName} workspace on {companyName}
				. Accept the invitation to start working together.
			</Text>
			<Section style={{ margin: "8px 0 24px" }}>
				<Button href={url} style={buttonStyle(theme)}>
					Accept invitation
				</Button>
			</Section>
			<Text style={{ ...faintStyle(theme), marginTop: 0, marginBottom: "4px" }}>
				Or paste this link into your browser:
			</Text>
			<Link href={url} style={rawLinkStyle}>
				{url}
			</Link>
			<Text style={faintStyle(theme)}>
				If you weren&apos;t expecting this invitation, you can safely ignore
				this email.
			</Text>
		</EmailLayout>
	);
};

WorkspaceInviteEmail.PreviewProps = {
	url: "https://example.com/invite/preview-token",
	workspaceName: "Acme Inc",
	inviterName: "Jordan Rivera",
	companyName: APP_NAME,
} satisfies WorkspaceInviteEmailProps;

export default WorkspaceInviteEmail;
