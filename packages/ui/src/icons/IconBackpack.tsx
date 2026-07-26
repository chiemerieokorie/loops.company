import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBackpack: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="backpack,travel">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M8.53544 4H6.75C4.67893 4 3 5.67893 3 7.75V8.25C3 9.23454 3.37941 10.1305 4 10.7995V18.25C4 20.3211 5.67893 22 7.75 22H16.25C18.3211 22 20 20.3211 20 18.25V10.7995C20.6206 10.1305 21 9.23454 21 8.25V7.75C21 5.67893 19.3211 4 17.25 4H15.4646C15.2219 2.30385 13.7632 1 12 1C10.2368 1 8.77806 2.30385 8.53544 4ZM10.063 4H13.937C13.715 3.13739 12.9319 2.5 12 2.5C11.0681 2.5 10.285 3.13739 10.063 4ZM14.5 12V13.25C14.5 13.6642 14.8358 14 15.25 14C15.6642 14 16 13.6642 16 13.25V12H17.25C17.6883 12 18.109 11.9248 18.5 11.7866V18.25C18.5 19.4926 17.4926 20.5 16.25 20.5H7.75C6.50736 20.5 5.5 19.4926 5.5 18.25V11.7866C5.89097 11.9248 6.31171 12 6.75 12H8V13.25C8 13.6642 8.33579 14 8.75 14C9.16421 14 9.5 13.6642 9.5 13.25V12H14.5ZM9 17.25C9 16.8358 9.33579 16.5 9.75 16.5H14.25C14.6642 16.5 15 16.8358 15 17.25C15 17.6642 14.6642 18 14.25 18H9.75C9.33579 18 9 17.6642 9 17.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M20.25 7.75C20.25 6.09315 18.9069 4.75 17.25 4.75H6.75C5.09315 4.75 3.75 6.09315 3.75 7.75V8.25C3.75 9.90685 5.09315 11.25 6.75 11.25H17.25C18.9069 11.25 20.25 9.90685 20.25 8.25V7.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.75 10.5V18.25C4.75 19.9069 6.09315 21.25 7.75 21.25H16.25C17.9069 21.25 19.25 19.9069 19.25 18.25V10.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.25 4.75V4.5C9.25 2.98122 10.4812 1.75 12 1.75C13.5188 1.75 14.75 2.98122 14.75 4.5V4.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.75 11.25V13.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.25 11.25V13.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.75 17.25H14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBackpack;
