import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSlidesWideAdd: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="slides-wide-add">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M5.75 4C3.67893 4 2 5.67893 2 7.75V12.25C2 14.3211 3.67893 16 5.75 16H6V16.25C6 18.3211 7.67893 20 9.75 20H18.25C20.3211 20 22 18.3211 22 16.25V11.75C22 9.67893 20.3211 8 18.25 8H18V7.75C18 5.67893 16.3211 4 14.25 4H5.75ZM6 14.5V11.75C6 9.67893 7.67893 8 9.75 8H16.5V7.75C16.5 6.50736 15.4926 5.5 14.25 5.5H5.75C4.50736 5.5 3.5 6.50736 3.5 7.75V12.25C3.5 13.4926 4.50736 14.5 5.75 14.5H6ZM11.75 14.75C11.3358 14.75 11 14.4142 11 14C11 13.5858 11.3358 13.25 11.75 13.25H13.25V11.75C13.25 11.3358 13.5858 11 14 11C14.4142 11 14.75 11.3358 14.75 11.75V13.25H16.25C16.6642 13.25 17 13.5858 17 14C17 14.4142 16.6642 14.75 16.25 14.75H14.75V16.25C14.75 16.6642 14.4142 17 14 17C13.5858 17 13.25 16.6642 13.25 16.25V14.75H11.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M6.75 15.25H5.75C4.09315 15.25 2.75 13.9069 2.75 12.25V7.75C2.75 6.09315 4.09315 4.75 5.75 4.75H14.25C15.9069 4.75 17.25 6.09315 17.25 7.75V8.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.75 16.25V11.75C6.75 10.0931 8.09315 8.75 9.75 8.75H18.25C19.9069 8.75 21.25 10.0931 21.25 11.75V16.25C21.25 17.9069 19.9069 19.25 18.25 19.25H9.75C8.09315 19.25 6.75 17.9069 6.75 16.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11.75 14H14M14 14H16.25M14 14V11.75M14 14V16.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSlidesWideAdd;
