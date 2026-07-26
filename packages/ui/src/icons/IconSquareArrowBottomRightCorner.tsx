import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSquareArrowBottomRightCorner: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="square-arrow-bottom-right-corner">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M17.25 3C19.3211 3 21 4.67893 21 6.75V17.25C21 19.3211 19.3211 21 17.25 21H6.75C4.67893 21 3 19.3211 3 17.25V6.75C3 4.67893 4.67893 3 6.75 3H17.25ZM11.5303 10.4697C11.2374 10.1768 10.7626 10.1768 10.4697 10.4697C10.1768 10.7626 10.1768 11.2374 10.4697 11.5303L14.4395 15.5H11.75C11.3358 15.5 11 15.8358 11 16.25C11 16.6642 11.3358 17 11.75 17H16.25C16.6642 17 17 16.6642 17 16.25V11.75C17 11.3358 16.6642 11 16.25 11C15.8358 11 15.5 11.3358 15.5 11.75V14.4395L11.5303 10.4697Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M17.25 3.75H6.75C5.09315 3.75 3.75 5.09315 3.75 6.75V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H17.25C18.9069 20.25 20.25 18.9069 20.25 17.25V6.75C20.25 5.09315 18.9069 3.75 17.25 3.75Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11.75 16.25H16.25V11.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.75 15.75L11 11"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSquareArrowBottomRightCorner;
