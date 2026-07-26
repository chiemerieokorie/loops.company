import { IconLoader } from "@runway/ui/icons";
import { cn } from "@runway/ui/lib/utils";

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
	return (
		<IconLoader
			aria-label="Loading"
			className={cn("size-4 animate-spin", className)}
			data-slot="spinner"
			role="status"
			{...props}
		/>
	);
}

export { Spinner };
