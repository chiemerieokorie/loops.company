import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconIntegrations: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="integrations, frames, keyframes, interactions"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M6.34789 5.09057C7.81214 3.62656 10.1862 3.62687 11.6506 5.09057L15.9084 9.34838C17.3726 10.8128 17.3726 13.1867 15.9084 14.6511L11.6506 18.9089C10.1862 20.3731 7.8123 20.3731 6.34789 18.9089L2.09008 14.6511C0.62638 13.1867 0.626069 10.8126 2.09008 9.34838L6.34789 5.09057Z"
					fill="currentColor"
				/>
				<path
					d="M13.4993 4.30639C14.8713 3.70798 16.528 3.96918 17.6506 5.09154L21.9084 9.34935C23.3725 10.8138 23.3726 13.1877 21.9084 14.6521L17.6506 18.9099C16.528 20.032 14.8712 20.2926 13.4993 19.6941C13.9168 19.512 14.309 19.2513 14.6506 18.9099L18.9084 14.6521C20.3726 13.1877 20.3725 10.8138 18.9084 9.34935L14.6506 5.09154C14.3088 4.74979 13.917 4.48859 13.4993 4.30639Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M2.62132 9.87868L6.87868 5.62132C8.05025 4.44975 9.94975 4.44975 11.1213 5.62132L15.3787 9.87868C16.5503 11.0503 16.5503 12.9497 15.3787 14.1213L11.1213 18.3787C9.94975 19.5503 8.05025 19.5503 6.87868 18.3787L2.62132 14.1213C1.44975 12.9497 1.44975 11.0503 2.62132 9.87868Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 6.5L12.8787 5.62132C14.0503 4.44975 15.9497 4.44975 17.1213 5.62132L21.3787 9.87868C22.5503 11.0503 22.5503 12.9497 21.3787 14.1213L17.1213 18.3787C15.9497 19.5503 14.0503 19.5503 12.8787 18.3787L12 17.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconIntegrations;
