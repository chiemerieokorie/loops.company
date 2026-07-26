import {
	Brain,
	Ellipsis,
	Flag,
	LassoSelect,
	MessageSquare,
	Paperclip,
	Plus,
} from "lucide-react";
import Image from "next/image";
import type { ExpandableColumnsFeature } from "./expandable-columns";

const EmailIllustration = () => (
	<div
		aria-hidden="true"
		className="mask-radial-[100%_100%] mask-radial-from-75% mask-radial-at-top-left relative min-w-xs pt-1 pl-6"
	>
		<div className="rounded-2xl bg-card p-6 pt-2 pb-16 shadow-black/10 shadow-xl ring-1 ring-border-illustration">
			<div className="divide-y border-b text-xs *:flex *:h-10 *:items-center *:py-2">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-1">
						<span className="text-foreground/50">To:</span>
						<div className="flex cursor-pointer gap-1 rounded-full bg-illustration p-0.5 pr-2.5 shadow-black/[0.065] shadow-md ring-1 ring-border-illustration">
							<div className="relative size-4 overflow-hidden rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-foreground/20">
								<Image
									alt="Shadcn"
									decoding="async"
									height={20}
									loading="lazy"
									src="https://avatars.githubusercontent.com/u/124599?v=4"
									unoptimized
									width={20}
								/>
							</div>
							<span className="font-medium text-xs">Shadcn</span>
						</div>
					</div>
					<div className="flex size-6 rounded-full border bg-foreground/10">
						<Plus className="m-auto size-3.5" strokeWidth={3} />
					</div>
				</div>
				<div className="flex gap-1">
					<span className="text-foreground/50">Cc:</span>
				</div>
				<div className="flex gap-1">
					<span className="text-foreground/50">Subject:</span>
				</div>
				<div className="flex gap-1">
					<span className="text-foreground/50">From:</span>
				</div>
			</div>
			<div className="mt-6 space-y-2 text-muted-foreground text-sm/6">
				<p>
					Web applications with{" "}
					<span className="rounded bg-linear-to-r from-primary to-emerald-500 bg-clip-text px-0.5 text-transparent">
						React and TypeScript
					</span>{" "}
					using best practices.
				</p>
				<p className="mt-3">Sent from my iPhone</p>
			</div>
		</div>
	</div>
);

const KanbanIllustration = () => (
	<div
		aria-hidden="true"
		className="mask-radial-[100%_100%] mask-radial-from-75% mask-radial-at-top-left pt-1 pl-6"
	>
		<div className="min-w-xs rounded-2xl bg-card/50 p-2 shadow-black/[0.065] shadow-xl ring-1 ring-border-illustration">
			<div className="mb-2 flex items-center justify-between px-2 pt-1">
				<div className="flex items-center gap-2">
					<div className="size-2 rounded-full bg-amber-500" />
					<span className="font-semibold text-sm">In Progress</span>
				</div>
				<Ellipsis className="size-4 text-muted-foreground" />
			</div>
			<div className="space-y-2 *:rounded-xl">
				{[
					{
						title: "API Integration",
						priority: "high",
						comments: 4,
						attachments: 2,
					},
					{
						title: "User Testing",
						priority: "medium",
						comments: 2,
						attachments: 0,
					},
					{
						title: "Documentation",
						priority: "none",
						comments: 0,
						attachments: 1,
					},
				].map((task) => (
					<div
						className="bg-illustration p-3 ring-1 ring-border-illustration"
						key={task.title}
					>
						<div className="mb-2 flex items-start justify-between">
							<div className="font-medium text-sm">{task.title}</div>
							<Flag
								className={`size-3.5 ${task.priority === "high" ? "fill-red-500 text-red-500" : task.priority === "medium" ? "fill-amber-500 text-amber-500" : "text-muted-foreground"}`}
							/>
						</div>
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-2 text-[10px] text-muted-foreground">
								{task.comments > 0 && (
									<span className="flex items-center gap-0.5">
										<MessageSquare className="size-3" />
										{task.comments}
									</span>
								)}
								{task.attachments > 0 && (
									<span className="flex items-center gap-0.5">
										<Paperclip className="size-3" />
										{task.attachments}
									</span>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	</div>
);

export const defaultExpandableColumnsFeatures: ExpandableColumnsFeature[] = [
	{
		id: "email",
		icon: <LassoSelect className="size-4" />,
		title: "Smart email composition",
		description:
			"with AI-powered suggestions, templates, and seamless collaboration for faster communication.",
		illustration: <EmailIllustration />,
	},
	{
		id: "kanban",
		icon: <Brain className="size-4" />,
		title: "Visual task management",
		description:
			"Organize projects with drag-and-drop boards, priority flags, and real-time collaboration.",
		illustration: <KanbanIllustration />,
	},
];
