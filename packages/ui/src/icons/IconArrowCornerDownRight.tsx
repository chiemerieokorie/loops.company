import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowCornerDownRight: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="arrow-corner-down-right">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3.75 4C4.16421 4 4.5 4.33579 4.5 4.75V12.25C4.5 13.4926 5.50736 14.5 6.75 14.5H18.4393L15.7197 11.7803C15.4268 11.4874 15.4268 11.0126 15.7197 10.7197C16.0126 10.4268 16.4874 10.4268 16.7803 10.7197L20.7803 14.7197C21.0732 15.0126 21.0732 15.4874 20.7803 15.7803L16.7803 19.7803C16.4874 20.0732 16.0126 20.0732 15.7197 19.7803C15.4268 19.4874 15.4268 19.0126 15.7197 18.7197L18.4393 16H6.75C4.67893 16 3 14.3211 3 12.25V4.75C3 4.33579 3.33579 4 3.75 4Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 4.75V12.25C3.75 13.9069 5.09315 15.25 6.75 15.25H19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.25 11.25L20.25 15.25L16.25 19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowCornerDownRight;
