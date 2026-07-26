import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSlidesTallAdd: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="slides-tall-add">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M4 5.75C4 3.67893 5.67893 2 7.75 2H12.25C14.3211 2 16 3.67893 16 5.75V6H16.25C18.3211 6 20 7.67893 20 9.75V18.25C20 20.3211 18.3211 22 16.25 22H11.75C9.67893 22 8 20.3211 8 18.25V18H7.75C5.67893 18 4 16.3211 4 14.25V5.75ZM14.5 6H11.75C9.67893 6 8 7.67893 8 9.75V16.5H7.75C6.50736 16.5 5.5 15.4926 5.5 14.25V5.75C5.5 4.50736 6.50736 3.5 7.75 3.5H12.25C13.4926 3.5 14.5 4.50736 14.5 5.75V6ZM14.75 11.75C14.75 11.3358 14.4142 11 14 11C13.5858 11 13.25 11.3358 13.25 11.75V13.25H11.75C11.3358 13.25 11 13.5858 11 14C11 14.4142 11.3358 14.75 11.75 14.75H13.25V16.25C13.25 16.6642 13.5858 17 14 17C14.4142 17 14.75 16.6642 14.75 16.25V14.75H16.25C16.6642 14.75 17 14.4142 17 14C17 13.5858 16.6642 13.25 16.25 13.25H14.75V11.75Z"
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
					d="M14 11.75V14M14 14V16.25M14 14H11.75M14 14H16.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.25 6.75H11.75C10.0931 6.75 8.75 8.09315 8.75 9.75V18.25C8.75 19.9069 10.0931 21.25 11.75 21.25H16.25C17.9069 21.25 19.25 19.9069 19.25 18.25V9.75C19.25 8.09315 17.9069 6.75 16.25 6.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSlidesTallAdd;
