import { Button, Heading, Link, Section, Text } from "@react-email/components";

import { EmailLayout } from "./components/emailLayout";
import {
	APP_NAME,
	buttonStyle,
	faintStyle,
	headingStyle,
	neutralTheme,
	paragraphStyle,
} from "./theme";

export interface MagicLinkEmailProps {
	/** Brand name. Defaults to the app name. */
	companyName?: string;
	/** Optional recipient name for a personal greeting. */
	name?: string;
	/** The Better Auth magic-link sign-in URL (contains the token). */
	url: string;
}

const rawLinkStyle = {
	color: neutralTheme.text,
	fontSize: "13px",
	textDecoration: "underline",
	wordBreak: "break-all",
} as const;

export const MagicLinkEmail = ({
	url,
	name,
	companyName = APP_NAME,
}: MagicLinkEmailProps) => {
	const theme = neutralTheme;
	return (
		<EmailLayout
			companyName={companyName}
			previewText={`Your ${companyName} sign-in link`}
			theme={theme}
		>
			<Heading as="h1" style={headingStyle(theme)}>
				Sign in to {companyName}
			</Heading>
			<Text style={paragraphStyle(theme)}>
				{name ? `Hi ${name}, ` : ""}click the button below to sign in. No
				password needed — this link signs you straight in.
			</Text>
			<Section style={{ margin: "28px 0 8px" }}>
				<Button href={url} style={buttonStyle(theme)}>
					Sign in
				</Button>
			</Section>
			<Text style={{ ...faintStyle(theme), marginBottom: "4px" }}>
				Or paste this link into your browser:
			</Text>
			<Link href={url} style={rawLinkStyle}>
				{url}
			</Link>
			<Text style={faintStyle(theme)}>
				This link expires soon and can only be used once. If you didn&apos;t
				request it, you can safely ignore this email.
			</Text>
		</EmailLayout>
	);
};

MagicLinkEmail.PreviewProps = {
	url: "https://example.com/api/auth/magic-link/verify?token=preview",
	name: "Alex",
	companyName: APP_NAME,
} satisfies MagicLinkEmailProps;

export default MagicLinkEmail;
