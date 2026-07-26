import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCommits: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="commits">
		{variant === "filled" ? (
			<>
				<path
					d="M12 6C15.0596 6 17.582 8.29041 17.9512 11.25H22.25C22.6642 11.25 23 11.5858 23 12C23 12.4142 22.6642 12.75 22.25 12.75H17.9512C17.582 15.7096 15.0596 18 12 18C8.94039 18 6.41803 15.7096 6.04883 12.75H1.75C1.33579 12.75 1 12.4142 1 12C1 11.5858 1.33579 11.25 1.75 11.25H6.04883C6.41803 8.29041 8.94039 6 12 6Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<circle
					cx="12"
					cy="12"
					r="5.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.5 12H1.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M22.25 12H17.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCommits;
