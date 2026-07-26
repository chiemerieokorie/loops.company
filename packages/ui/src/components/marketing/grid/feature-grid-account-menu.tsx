import {
	ChevronRight,
	CircleHelp,
	Cpu,
	Ellipsis,
	Lock,
	LogOut,
	MessageCircle,
	Plus,
	Settings,
	Settings2,
	Sparkles,
	User,
	Zap,
} from "lucide-react";
import {
	type AccountMenuItem,
	defaultAccounts,
	defaultFeatureItemsShort,
	type FeatureItem,
} from "./data";

export type { AccountMenuItem };

export interface FeatureGridAccountMenuProps {
	accounts?: AccountMenuItem[];
	ctaLabel?: string;
	description?: string;
	items?: Array<{
		icon: "zap" | "cpu" | "lock" | "sparkles";
		title: string;
		description: string;
	}>;
	title?: string;
}

function ItemIcon({ icon }: { icon: FeatureItem["icon"] }) {
	if (icon === "zap") {
		return <Zap className="lucide size-4 fill-foreground/10 text-foreground" />;
	}
	if (icon === "cpu") {
		return <Cpu className="lucide size-4 fill-foreground/10 text-foreground" />;
	}
	if (icon === "lock") {
		return (
			<Lock className="lucide size-4 fill-foreground/10 text-foreground" />
		);
	}
	return (
		<Sparkles className="lucide size-4 fill-foreground/10 text-foreground" />
	);
}

export function FeatureGridAccountMenu({
	title = "Power of LLMs in Your Editor",
	description = "Write code faster with the latest Large Language Models from Gemini, GooglePaLM, and Replit.",
	ctaLabel = "Learn more",
	accounts = defaultAccounts,
	items = defaultFeatureItemsShort,
}: FeatureGridAccountMenuProps) {
	return (
		<section className="overflow-hidden bg-background py-24">
			<div className="mx-auto w-full max-w-5xl px-6">
				<div className="grid items-center gap-6 pb-12 md:grid-cols-2">
					<div className="flex items-center">
						<div className="flex items-center gap-2 border-y bg-muted/25 py-2 pr-1 text-foreground [mask-image:linear-gradient(to_left,hsla(0,0%,0%,1)15%,transparent_100%)]">
							<span className="text-sm">Oxymor NS</span>
							<span className="mx-4 text-sm">$39</span>
							<button
								className="inline-flex size-9 cursor-pointer items-center justify-center rounded-md bg-secondary text-secondary-foreground text-sm transition-all hover:bg-secondary/80"
								type="button"
							>
								<Ellipsis className="lucide size-4 text-foreground" />
							</button>
						</div>
						<div className="-mx-4 -mt-4 p-4 pb-0 [mask-image:linear-gradient(to_bottom,hsla(0,0%,0%,1)50%,transparent_100%)]">
							<div className="relative w-56 overflow-hidden rounded-2xl bg-illustration p-1 shadow-black/6.5 shadow-xl ring-1 ring-border-illustration *:cursor-pointer *:rounded-xl">
								{accounts.map((account) => (
									<div
										className="flex items-center gap-2 px-2 py-1 hover:bg-foreground/5"
										key={account.name}
									>
										<div className="relative size-4 overflow-hidden rounded-full bg-muted before:absolute before:inset-0 before:rounded-full before:border before:border-foreground/10" />
										<span className="text-foreground text-sm">
											{account.name}
										</span>
									</div>
								))}
								<div className="flex h-7 items-center gap-2 px-2 hover:bg-foreground/5">
									<Plus className="lucide size-4" />
									<span className="text-sm">Add new account</span>
								</div>
								<hr className="mx-2 my-1" />
								<div className="flex h-7 items-center gap-2 px-2 hover:bg-foreground/5">
									<Settings2 className="lucide size-4" />
									<span className="text-sm">Preferences</span>
								</div>
								<hr className="mx-2 my-1" />
								<div className="flex h-7 items-center gap-2 px-2 hover:bg-foreground/5">
									<CircleHelp className="lucide size-4" />
									<span className="text-sm">Help</span>
								</div>
								<div className="flex h-7 items-center gap-2 px-2 hover:bg-foreground/5">
									<MessageCircle className="lucide size-4" />
									<span className="text-sm">Send feedback</span>
								</div>
								<hr className="mx-2 my-1" />
								<div className="flex h-7 items-center gap-2 px-2 hover:bg-foreground/5">
									<User className="lucide size-4" />
									<span className="text-sm">My account</span>
								</div>
								<div className="flex h-7 items-center gap-2 px-2 hover:bg-foreground/5">
									<Settings className="lucide size-4" />
									<span className="text-sm">Settings</span>
								</div>
								<hr className="mx-2 my-1" />
								<div className="flex h-7 items-center gap-2 px-2 hover:bg-foreground/5">
									<LogOut className="lucide size-4" />
									<span className="text-sm">Sign out</span>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="max-w-md">
							<h2 className="text-balance font-semibold text-4xl text-foreground">
								{title}
							</h2>
							<p className="mt-6 text-balance text-lg text-muted-foreground">
								{description}
							</p>
							<button
								className="mt-8 inline-flex h-9 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-4 py-2 pr-2 font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50"
								type="button"
							>
								{ctaLabel}
								<ChevronRight className="lucide size-4 opacity-50" />
							</button>
						</div>
					</div>
				</div>
				<div className="relative grid grid-cols-2 gap-x-3 gap-y-6 border-t pt-12 sm:gap-6 lg:grid-cols-4">
					{items.map((item) => (
						<div className="space-y-3" key={item.title}>
							<div className="flex items-center gap-2">
								<ItemIcon icon={item.icon} />
								<h3 className="font-medium text-sm">{item.title}</h3>
							</div>
							<p className="text-muted-foreground text-sm">
								{item.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
