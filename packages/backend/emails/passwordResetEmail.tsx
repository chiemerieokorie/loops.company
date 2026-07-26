import { Button, Heading, Section, Text } from "@react-email/components";

import { EmailLayout } from "./components/emailLayout";
import {
	APP_NAME,
	buttonStyle,
	faintStyle,
	headingStyle,
	neutralTheme,
	paragraphStyle,
} from "./theme";

export interface PasswordResetEmailProps {
	/** Brand name. Defaults to the app name. */
	companyName?: string;
	/** Optional recipient name for a personal greeting. */
	name?: string;
	/** The Better Auth password-reset URL (contains the token). */
	url: string;
}

export const PasswordResetEmail = ({
	url,
	name,
	companyName = APP_NAME,
}: PasswordResetEmailProps) => {
	const theme = neutralTheme;
	return (
		<EmailLayout
			companyName={companyName}
			previewText="Reset your password"
			theme={theme}
		>
			<Heading as="h1" style={headingStyle(theme)}>
				Reset your password
			</Heading>
			<Text style={paragraphStyle(theme)}>
				{name ? `Hi ${name}, ` : ""}we received a request to reset the password
				for your {companyName} account. Choose a new password using the button
				below.
			</Text>
			<Section style={{ margin: "28px 0 8px" }}>
				<Button href={url} style={buttonStyle(theme)}>
					Reset password
				</Button>
			</Section>
			<Text style={faintStyle(theme)}>
				If you didn&apos;t request this, you can safely ignore this email — your
				password won&apos;t change until you open the link above and create a
				new one.
			</Text>
		</EmailLayout>
	);
};

PasswordResetEmail.PreviewProps = {
	url: "https://example.com/reset?token=preview",
	name: "Alex",
	companyName: APP_NAME,
} satisfies PasswordResetEmailProps;

export default PasswordResetEmail;
