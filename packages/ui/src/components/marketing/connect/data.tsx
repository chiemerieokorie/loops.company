import {
	GeminiLogo,
	GooglePaLMLogo,
	LinearLogo,
	MistralLogo,
	OpenAILogo,
	ReplitLogo,
} from "./integration-logos";
import type { Integration } from "./types";

export const defaultBorderedGridIntegrations: Integration[] = [
	{
		name: "Google Gemini",
		description:
			"AI-powered assistant that understands context across your workflow.",
		icon: <GeminiLogo />,
		href: "#",
	},
	{
		name: "Replit",
		description:
			"Collaborative browser-based IDE for building and sharing code.",
		icon: <ReplitLogo />,
		href: "#",
	},
	{
		name: "Mistral AI",
		description:
			"Open-weight language models for enterprise and developer use.",
		icon: <MistralLogo />,
		href: "#",
	},
	{
		name: "OpenGPT",
		description:
			"Large language model integration for intelligent workflow automation.",
		icon: <OpenAILogo />,
		href: "#",
	},
	{
		name: "Google PaLM",
		description: "Pathways Language Model for reasoning and generation tasks.",
		icon: <GooglePaLMLogo />,
		href: "#",
	},
];

export const defaultGridIntegrations: Integration[] = [
	{
		name: "Google Gemini",
		description:
			"AI-powered assistant that understands context across your workflow.",
		icon: <GeminiLogo />,
		href: "#",
	},
	{
		name: "Replit",
		description:
			"Collaborative browser-based IDE for building and sharing code.",
		icon: <ReplitLogo />,
		href: "#",
	},
	{
		name: "Mistral AI",
		description:
			"Open-weight language models for enterprise and developer use.",
		icon: <MistralLogo />,
		href: "#",
	},
	{
		name: "OpenGPT",
		description:
			"Large language model integration for intelligent workflow automation.",
		icon: <OpenAILogo />,
		href: "#",
	},
	{
		name: "Google PaLM",
		description: "Pathways Language Model for reasoning and generation tasks.",
		icon: <GooglePaLMLogo />,
		href: "#",
	},
	{
		name: "Linear",
		description: "The issue tracker built for high-performance teams.",
		icon: <LinearLogo />,
		href: "#",
	},
];
