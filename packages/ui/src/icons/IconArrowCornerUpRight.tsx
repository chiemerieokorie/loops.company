import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowCornerUpRight: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="arrow-corner-up-right">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3.75 20C4.16421 20 4.5 19.6642 4.5 19.25V11.75C4.5 10.5074 5.50736 9.5 6.75 9.5H18.4393L15.7197 12.2197C15.4268 12.5126 15.4268 12.9874 15.7197 13.2803C16.0126 13.5732 16.4874 13.5732 16.7803 13.2803L20.7803 9.28033C21.0732 8.98744 21.0732 8.51256 20.7803 8.21967L16.7803 4.21967C16.4874 3.92678 16.0126 3.92678 15.7197 4.21967C15.4268 4.51256 15.4268 4.98744 15.7197 5.28033L18.4393 8H6.75C4.67893 8 3 9.67893 3 11.75V19.25C3 19.6642 3.33579 20 3.75 20Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 19.25V11.75C3.75 10.0931 5.09315 8.75 6.75 8.75H19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.25 12.75L20.25 8.75L16.25 4.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowCornerUpRight;
