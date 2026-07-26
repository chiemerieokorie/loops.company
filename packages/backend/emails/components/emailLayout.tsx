import {
	Body,
	Container,
	Head,
	Html,
	Preview,
	Section,
	Text,
} from "@react-email/components";
import type { ReactNode } from "react";

import { APP_NAME, type EmailTheme, fontFamily } from "../theme";

interface EmailLayoutProps {
	/** Content alignment. Auth emails are centered; brand emails left-aligned. */
	align?: "left" | "center";
	children: ReactNode;
	/** Brand name shown in the header/footer. Defaults to the app name. */
	companyName?: string;
	/** Inbox preview snippet shown before the email is opened. */
	previewText: string;
	/** Color palette for this email. */
	theme: EmailTheme;
}

/**
 * Shared chrome for every transactional email: outer page background, a bordered
 * white card with a wordmark header, the per-email body, and a fine-print footer.
 */
export const EmailLayout = ({
	previewText,
	theme,
	companyName = APP_NAME,
	align = "center",
	children,
}: EmailLayoutProps) => (
	<Html lang="en">
		<Head />
		<Preview>{previewText}</Preview>
		<Body
			style={{
				margin: 0,
				backgroundColor: theme.page,
				color: theme.text,
				fontFamily,
			}}
		>
			<Container
				style={{ margin: "0 auto", maxWidth: "600px", padding: "32px 12px" }}
			>
				<Section
					style={{
						backgroundColor: theme.card,
						border: `1px solid ${theme.stroke}`,
						borderRadius: "12px",
						overflow: "hidden",
					}}
				>
					<Section
						style={{
							padding: "20px 28px",
							borderBottom: `1px solid ${theme.stroke}`,
						}}
					>
						<Text
							style={{
								margin: 0,
								fontSize: "15px",
								fontWeight: 600,
								color: theme.text,
							}}
						>
							{companyName}
						</Text>
					</Section>
					<Section style={{ padding: "40px 28px", textAlign: align }}>
						{children}
					</Section>
				</Section>
				<Text
					style={{
						margin: "20px 0 0",
						textAlign: "center",
						fontSize: "12px",
						lineHeight: 1.5,
						color: theme.faint,
					}}
				>
					You received this email because you have an account with {companyName}
					.
				</Text>
			</Container>
		</Body>
	</Html>
);
