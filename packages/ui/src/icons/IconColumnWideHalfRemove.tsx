import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconColumnWideHalfRemove: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="column-wide-half-remove">
		{variant === "filled" ? (
			<>
				<path
					d="M5.75 4C3.67893 4 2 5.67893 2 7.75V16.25C2 18.3211 3.67893 20 5.75 20H11C11.4142 20 11.75 19.6642 11.75 19.25C11.75 18.8358 11.4142 18.5 11 18.5H5.75C4.50736 18.5 3.5 17.4926 3.5 16.25V12.75H21.25C21.6642 12.75 22 12.4142 22 12V7.75C22 5.67893 20.3211 4 18.25 4H5.75Z"
					fill="currentColor"
				/>
				<path
					d="M17.2803 16.2197C16.9874 15.9268 16.5126 15.9268 16.2197 16.2197C15.9268 16.5126 15.9268 16.9874 16.2197 17.2803L17.9393 19L16.2197 20.7197C15.9268 21.0126 15.9268 21.4874 16.2197 21.7803C16.5126 22.0732 16.9874 22.0732 17.2803 21.7803L19 20.0607L20.7197 21.7803C21.0126 22.0732 21.4874 22.0732 21.7803 21.7803C22.0732 21.4874 22.0732 21.0126 21.7803 20.7197L20.0607 19L21.7803 17.2803C22.0732 16.9874 22.0732 16.5126 21.7803 16.2197C21.4874 15.9268 21.0126 15.9268 20.7197 16.2197L19 17.9393L17.2803 16.2197Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 12V16.25C2.75 17.9069 4.09315 19.25 5.75 19.25H11M2.75 12V7.75C2.75 6.09315 4.09315 4.75 5.75 4.75H18.25C19.9069 4.75 21.25 6.09315 21.25 7.75V12H2.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.75 16.75L19 19M19 19L21.25 21.25M19 19L16.75 21.25M19 19L21.25 16.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconColumnWideHalfRemove;
