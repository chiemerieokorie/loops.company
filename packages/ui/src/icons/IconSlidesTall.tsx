import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSlidesTall: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="slides-tall">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M7.75 2C5.67893 2 4 3.67893 4 5.75V14.25C4 16.3211 5.67893 18 7.75 18H8V18.25C8 20.3211 9.67893 22 11.75 22H16.25C18.3211 22 20 20.3211 20 18.25V9.75C20 7.67893 18.3211 6 16.25 6H16V5.75C16 3.67893 14.3211 2 12.25 2H7.75ZM11.75 6H14.5V5.75C14.5 4.50736 13.4926 3.5 12.25 3.5H7.75C6.50736 3.5 5.5 4.50736 5.5 5.75V14.25C5.5 15.4926 6.50736 16.5 7.75 16.5H8V9.75C8 7.67893 9.67893 6 11.75 6Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M15.25 6.75V5.75C15.25 4.09315 13.9069 2.75 12.25 2.75H7.75C6.09315 2.75 4.75 4.09315 4.75 5.75V14.25C4.75 15.9069 6.09315 17.25 7.75 17.25H8.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.25 9.75C19.25 8.09315 17.9069 6.75 16.25 6.75H11.75C10.0931 6.75 8.75 8.09315 8.75 9.75V18.25C8.75 19.9069 10.0931 21.25 11.75 21.25H16.25C17.9069 21.25 19.25 19.9069 19.25 18.25V9.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSlidesTall;
