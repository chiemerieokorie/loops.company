import { render } from "@react-email/render";
import type { ReactElement } from "react";
import { MagicLinkEmail, type MagicLinkEmailProps } from "./magicLinkEmail";
import {
	PasswordResetEmail,
	type PasswordResetEmailProps,
} from "./passwordResetEmail";
import {
	TransactionalEmail,
	type TransactionalEmailProps,
} from "./transactionalEmail";
import {
	VerificationEmail,
	type VerificationEmailProps,
} from "./verificationEmail";
import { WelcomeEmail, type WelcomeEmailProps } from "./welcomeEmail";
import {
	WorkspaceInviteEmail,
	type WorkspaceInviteEmailProps,
} from "./workspaceInviteEmail";

export interface RenderedEmail {
	html: string;
	text: string;
}

const renderEmail = async (element: ReactElement): Promise<RenderedEmail> => ({
	html: await render(element),
	text: await render(element, { plainText: true }),
});

export const renderVerificationEmail = (
	props: VerificationEmailProps
): Promise<RenderedEmail> => renderEmail(<VerificationEmail {...props} />);

export const renderPasswordResetEmail = (
	props: PasswordResetEmailProps
): Promise<RenderedEmail> => renderEmail(<PasswordResetEmail {...props} />);

export const renderWelcomeEmail = (
	props: WelcomeEmailProps
): Promise<RenderedEmail> => renderEmail(<WelcomeEmail {...props} />);

export const renderTransactionalEmail = (
	props: TransactionalEmailProps
): Promise<RenderedEmail> => renderEmail(<TransactionalEmail {...props} />);

export const renderMagicLinkEmail = (
	props: MagicLinkEmailProps
): Promise<RenderedEmail> => renderEmail(<MagicLinkEmail {...props} />);

export const renderWorkspaceInviteEmail = (
	props: WorkspaceInviteEmailProps
): Promise<RenderedEmail> => renderEmail(<WorkspaceInviteEmail {...props} />);
