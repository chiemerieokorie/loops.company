import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSquareArrowOutTopLeft: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="square-arrow-out-top-left, undock, box, arrow"
	>
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M5.56066 4.5H10.25C10.6642 4.5 11 4.16421 11 3.75C11 3.33579 10.6642 3 10.25 3H4.75C3.7835 3 3 3.7835 3 4.75V10.25C3 10.6642 3.33579 11 3.75 11C4.16421 11 4.5 10.6642 4.5 10.25V5.56066L9.71967 10.7803C10.0126 11.0732 10.4874 11.0732 10.7803 10.7803C11.0732 10.4874 11.0732 10.0126 10.7803 9.71967L5.56066 4.5ZM13 6.75C13 6.33579 13.3358 6 13.75 6H18.25C20.3211 6 22 7.67893 22 9.75V18.25C22 20.3211 20.3211 22 18.25 22H9.75C7.67893 22 6 20.3211 6 18.25V13.75C6 13.3358 6.33579 13 6.75 13C7.16421 13 7.5 13.3358 7.5 13.75V18.25C7.5 19.4926 8.50736 20.5 9.75 20.5H18.25C19.4926 20.5 20.5 19.4926 20.5 18.25V9.75C20.5 8.50736 19.4926 7.5 18.25 7.5H13.75C13.3358 7.5 13 7.16421 13 6.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M6.75 13.75V18.25C6.75 19.9069 8.09315 21.25 9.75 21.25H18.25C19.9069 21.25 21.25 19.9069 21.25 18.25V9.75C21.25 8.09315 19.9069 6.75 18.25 6.75H13.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.75 4.75L10 10"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 10.25V4.75C3.75 4.19772 4.19772 3.75 4.75 3.75H10.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSquareArrowOutTopLeft;
