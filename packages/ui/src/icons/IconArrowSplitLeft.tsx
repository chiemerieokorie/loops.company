import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowSplitLeft: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="arrow-split-left, rules, direction, split"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M9.25 3C9.66421 3 10 3.33579 10 3.75C10 4.16421 9.66421 4.5 9.25 4.5H5.56055L12.3105 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H12.3105L5.56055 19.5H9.25C9.66421 19.5 10 19.8358 10 20.25C10 20.6642 9.66421 21 9.25 21H3.75C3.33579 21 3 20.6642 3 20.25V14.75C3 14.3358 3.33579 14 3.75 14C4.16421 14 4.5 14.3358 4.5 14.75V18.4395L10.9395 12L4.5 5.56055V9.25C4.5 9.66421 4.16421 10 3.75 10C3.33579 10 3 9.66421 3 9.25V3.75C3 3.33579 3.33579 3 3.75 3H9.25Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M9.25 20.25H3.75V14.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 9.25V3.75H9.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 12H20.25M12 12L4.5 19.5M12 12L4.5 4.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowSplitLeft;
