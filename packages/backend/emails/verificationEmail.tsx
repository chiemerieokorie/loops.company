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

export interface VerificationEmailProps {
	/** Brand name. Defaults to the app name. */
	companyName?: string;
	/** Optional recipient name for a personal greeting. */
	name?: string;
	/** The Better Auth verification URL (contains the token). */
	url: string;
}

export const VerificationEmail = ({
	url,
	name,
	companyName = APP_NAME,
}: VerificationEmailProps) => {
	const theme = neutralTheme;
	return (
		<EmailLayout
			companyName={companyName}
			previewText="Confirm your email address"
			theme={theme}
		>
			<Heading as="h1" style={headingStyle(theme)}>
				Confirm your email
			</Heading>
			<Text style={paragraphStyle(theme)}>
				{name ? `Hi ${name}, ` : ""}thanks for signing up for {companyName}.
				Confirm your email address to activate your account.
			</Text>
			<Section style={{ margin: "28px 0 8px" }}>
				<Button href={url} style={buttonStyle(theme)}>
					Confirm email
				</Button>
			</Section>
			<Text style={faintStyle(theme)}>
				If you didn&apos;t create this account, you can safely ignore this
				email.
			</Text>
		</EmailLayout>
	);
};

VerificationEmail.PreviewProps = {
	url: "https://example.com/verify?token=preview",
	name: "Alex",
	companyName: APP_NAME,
} satisfies VerificationEmailProps;

export default VerificationEmail;
