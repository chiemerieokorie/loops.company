"use client";

import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@runway/ui/components/avatar";
import { cn } from "@runway/ui/lib/utils";

// Brand palette for generated avatars (teal → mint → sand → amber).
const AVATAR_COLORS = ["#00686c", "#32c2b9", "#edecb3", "#fad928", "#ff9915"];

// Deterministically pick a background color from `name` (same name → same color).
function colorFor(name: string): string {
	let hash = 0;
	for (let index = 0; index < name.length; index++) {
		hash = (hash * 31 + name.charCodeAt(index)) | 0;
	}
	return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

// Up to two initials from `name` (falls back to the first character).
function initialsFor(name: string): string {
	const parts = name.trim().split(/\s+/).filter(Boolean);
	if (parts.length === 0) {
		return "?";
	}
	if (parts.length === 1) {
		return parts[0].slice(0, 2).toUpperCase();
	}
	return (parts[0][0] + parts.at(-1)![0]).toUpperCase();
}

// A deterministic avatar that shows the real `image` when present and otherwise
// generates a colored initials tile from `name` (same name → same avatar).
function GeneratedAvatar({
	name,
	image,
	shape,
	size = 32,
	className,
}: {
	name: string;
	image?: string | null;
	shape: "circle" | "square";
	/** Pixel size of the avatar. */
	size?: number;
	className?: string;
}) {
	const rounded = shape === "circle" ? "rounded-full" : "rounded-lg";
	return (
		<Avatar
			className={cn("overflow-hidden", rounded, className)}
			style={{ width: size, height: size }}
		>
			{image ? <AvatarImage alt={name} src={image} /> : null}
			<AvatarFallback
				className={cn("font-medium text-white", rounded)}
				style={{
					backgroundColor: colorFor(name),
					fontSize: Math.max(10, Math.round(size * 0.4)),
				}}
			>
				{initialsFor(name)}
			</AvatarFallback>
		</Avatar>
	);
}

interface AvatarProps {
	className?: string;
	image?: string | null;
	name: string;
	size?: number;
}

// User/profile avatars — circular.
export function ProfileAvatar(props: AvatarProps) {
	return <GeneratedAvatar {...props} shape="circle" />;
}

// Workspace avatars — square (rounded).
export function WorkspaceAvatar(props: AvatarProps) {
	return <GeneratedAvatar {...props} shape="square" />;
}
