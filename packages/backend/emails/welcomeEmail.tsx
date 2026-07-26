import { Button, Heading, Hr, Section, Text } from "@react-email/components";

import { EmailLayout } from "./components/emailLayout";
import {
	APP_NAME,
	brandTheme,
	buttonStyle,
	headingStyle,
	paragraphStyle,
} from "./theme";

export interface WelcomeEmailProps {
	/** Brand name. Defaults to the app name. */
	companyName?: string;
	/** Optional recipient name for a personal greeting. */
	name?: string;
	/** Optional destination for the primary CTA (e.g. the app dashboard). */
	url?: string;
}

const FIRST_STEPS = [
	{
		title: "Complete your profile",
		description: "Add a photo and a short bio so teammates recognize you.",
	},
	{
		title: "Turn on notifications",
		description: "Choose how you want to hear about updates and activity.",
	},
	{
		title: "Start your first project",
		description: "Jump in with a template or build something from scratch.",
	},
];

export const WelcomeEmail = ({
	name,
	url,
	companyName = APP_NAME,
}: WelcomeEmailProps) => {
	const theme = brandTheme;
	return (
		<EmailLayout
			align="left"
			companyName={companyName}
			previewText={`Welcome to ${companyName}`}
			theme={theme}
		>
			<Heading as="h1" style={headingStyle(theme)}>
				Welcome to {companyName}
			</Heading>
			<Text style={paragraphStyle(theme)}>
				{name ? `Hi ${name}, ` : ""}thanks for signing up. Your account is ready
				— here are a few things to try to get the most out of {companyName}.
			</Text>

			{url ? (
				<Section style={{ margin: "8px 0 24px" }}>
					<Button href={url} style={buttonStyle(theme)}>
						Get started
					</Button>
				</Section>
			) : null}

			<Hr style={{ borderColor: theme.stroke, margin: "8px 0 24px" }} />

			{FIRST_STEPS.map((step) => (
				<Section key={step.title} style={{ marginBottom: "16px" }}>
					<Text
						style={{
							margin: "0 0 2px",
							fontSize: "15px",
							fontWeight: 600,
							color: theme.text,
						}}
					>
						{step.title}
					</Text>
					<Text
						style={{
							margin: 0,
							fontSize: "14px",
							lineHeight: 1.5,
							color: theme.muted,
						}}
					>
						{step.description}
					</Text>
				</Section>
			))}
		</EmailLayout>
	);
};

WelcomeEmail.PreviewProps = {
	name: "Alex",
	url: "https://example.com/app",
	companyName: APP_NAME,
} satisfies WelcomeEmailProps;

export default WelcomeEmail;
