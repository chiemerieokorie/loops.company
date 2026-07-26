import {
	ChevronRight,
	CircleHelp,
	Cpu,
	Lock,
	LogOut,
	MessageCircle,
	Plus,
	Settings2,
	Sparkles,
	User,
	Zap,
} from "lucide-react";
import {
	defaultAccounts,
	defaultFeatureItemsShort,
	type FeatureItem,
} from "./data";

export interface FeatureGridSplitDarkMenuAccount {
	name: string;
}

export interface FeatureGridSplitDarkMenuItem {
	description: string;
	icon: "zap" | "cpu" | "lock" | "sparkles";
	title: string;
}

export interface FeatureGridSplitDarkMenuProps {
	accounts?: FeatureGridSplitDarkMenuAccount[];
	ctaHref?: string;
	ctaLabel?: string;
	description?: string;
	items?: FeatureGridSplitDarkMenuItem[];
	subDescription?: string;
	title?: string;
}

function MenuIcon({ icon }: { icon: FeatureItem["icon"] }) {
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

export function FeatureGridSplitDarkMenu({
	title = "Power of LLMs in Your Editor",
	description = "Write code faster with the latest Large Language Models from Gemini, GooglePaLM, and Replit.",
	subDescription = "Lyra is evolving to be more than just the models. It supports an entire ecosystem — from products innovate.",
	ctaLabel = "Learn more",
	ctaHref = "#",
	accounts = defaultAccounts,
	items = defaultFeatureItemsShort,
}: FeatureGridSplitDarkMenuProps) {
	return (
		<section className="overflow-hidden bg-background py-24">
			<div className="mx-auto w-full max-w-5xl px-6">
				<div className="grid items-center gap-12 pb-12 md:grid-cols-2">
					<div>
						<div className="max-w-md">
							<h2 className="text-balance font-semibold text-4xl text-foreground">
								{title}
							</h2>
							<p className="my-6 text-balance text-lg">{description}</p>
							<p className="text-muted-foreground">{subDescription}</p>
							<a
								className="mt-8 inline-flex h-9 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-4 py-2 pr-2 font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50"
								href={ctaHref}
							>
								{ctaLabel}
								<ChevronRight className="lucide size-4 opacity-50" />
							</a>
						</div>
					</div>
					{/* Dark panel with radial gradient + account menu */}
					<div className="relative overflow-hidden rounded-2xl bg-black p-2">
						<div className="mask-r-from-50% absolute inset-0 items-center [background:radial-gradient(150%_115%_at_50%_5%,transparent_25%,var(--color-emerald-500)_60%,var(--color-white)_100%)]" />
						<div className="mask-l-from-35% absolute inset-0 items-center [background:radial-gradient(150%_115%_at_50%_5%,transparent_25%,var(--color-sky-500)_60%,var(--color-white)_100%)]" />
						<div className="relative overflow-hidden rounded-xl border border-white/25 border-dashed bg-white/10 pt-8 shadow-black/20 shadow-lg">
							<div className="absolute inset-0 bg-[radial-gradient(var(--color-white)_1px,transparent_1px)] opacity-5 [background-size:12px_12px]" />
							<div className="absolute inset-0 translate-y-1/2 rounded-full border border-dotted bg-white/15" />
							<div className="flex items-center justify-center">
								<div className="mask-b-from-55% -mx-4 -mt-4 p-4 pb-0">
									<div className="relative w-56 overflow-hidden rounded-t-2xl border border-foreground/10 bg-card p-1 shadow-black/10 shadow-lg *:cursor-pointer *:rounded-xl">
										{accounts.map((account) => (
											<div
												className="flex items-center gap-2 px-2 py-1 hover:bg-muted"
												key={account.name}
											>
												<div className="size-4 overflow-hidden rounded-full bg-muted-foreground/20" />
												<span className="text-foreground text-sm">
													{account.name}
												</span>
											</div>
										))}
										<div className="flex h-7 items-center gap-2 px-2 hover:bg-muted">
											<Plus className="lucide size-4" />
											<span className="text-sm">Add new account</span>
										</div>
										<hr className="mx-2 my-1" />
										<div className="flex h-7 items-center gap-2 px-2 hover:bg-muted">
											<Settings2 className="lucide size-4" />
											<span className="text-sm">Preferences</span>
										</div>
										<hr className="mx-2 my-1" />
										<div className="flex h-7 items-center gap-2 px-2 hover:bg-muted">
											<CircleHelp className="lucide size-4" />
											<span className="text-sm">Help</span>
										</div>
										<div className="flex h-7 items-center gap-2 px-2 hover:bg-muted">
											<MessageCircle className="lucide size-4" />
											<span className="text-sm">Send feedback</span>
										</div>
										<hr className="mx-2 my-1" />
										<div className="flex h-7 items-center gap-2 px-2 hover:bg-muted">
											<User className="lucide size-4" />
											<span className="text-sm">My account</span>
										</div>
										<hr className="mx-2 my-1" />
										<div className="flex h-7 items-center gap-2 px-2 hover:bg-muted">
											<LogOut className="lucide size-4" />
											<span className="text-sm">Sign out</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="relative grid grid-cols-2 gap-x-3 gap-y-6 border-t pt-12 sm:gap-6 lg:grid-cols-4">
					{items.map((item) => (
						<div className="space-y-3" key={item.title}>
							<div className="flex items-center gap-2">
								<MenuIcon icon={item.icon} />
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
