import { Button, Heading, Section, Text } from "@react-email/components";

import { EmailLayout } from "./components/emailLayout";
import {
	APP_NAME,
	brandTheme,
	buttonStyle,
	headingStyle,
	paragraphStyle,
} from "./theme";

export interface TransactionalEmailProps {
	/** Brand name. Defaults to the app name. */
	companyName?: string;
	/** Optional call-to-action button. */
	cta?: {
		label: string;
		url: string;
	};
	/** Main heading. */
	heading: string;
	/** One or more body paragraphs. */
	lines: string[];
	/** Inbox preview snippet. Defaults to the heading. */
	previewText?: string;
}

/**
 * Flexible template for arbitrary app-triggered emails (notifications,
 * receipts, status updates, ...). Provide a heading, body paragraphs, and an
 * optional CTA.
 */
export const TransactionalEmail = ({
	heading,
	lines,
	cta,
	previewText,
	companyName = APP_NAME,
}: TransactionalEmailProps) => {
	const theme = brandTheme;
	return (
		<EmailLayout
			align="left"
			companyName={companyName}
			previewText={previewText ?? heading}
			theme={theme}
		>
			<Heading as="h1" style={headingStyle(theme)}>
				{heading}
			</Heading>
			{lines.map((line) => (
				<Text key={line} style={paragraphStyle(theme)}>
					{line}
				</Text>
			))}
			{cta ? (
				<Section style={{ margin: "28px 0 8px" }}>
					<Button href={cta.url} style={buttonStyle(theme)}>
						{cta.label}
					</Button>
				</Section>
			) : null}
		</EmailLayout>
	);
};

TransactionalEmail.PreviewProps = {
	heading: "Your export is ready",
	lines: [
		"The data export you requested has finished processing.",
		"Use the button below to download it. The link expires in 24 hours.",
	],
	cta: { label: "Download export", url: "https://example.com/download" },
	companyName: APP_NAME,
} satisfies TransactionalEmailProps;

export default TransactionalEmail;
