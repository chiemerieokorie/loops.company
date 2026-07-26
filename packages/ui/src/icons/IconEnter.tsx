import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconEnter: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="enter, return, keyboard, submit, confirm"
	>
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M17.25 3C19.3211 3 21 4.67893 21 6.75V17.25C21 19.3211 19.3211 21 17.25 21H6.75C4.67893 21 3 19.3211 3 17.25V12.75C3 10.6789 4.67893 9 6.75 9H7.75C8.44036 9 9 8.44036 9 7.75V6.75C9 4.67893 10.6789 3 12.75 3H17.25ZM15 9.25C14.5858 9.25 14.25 9.58579 14.25 10V13C14.25 13.6904 13.6904 14.25 13 14.25H11V13.2002C10.9998 12.7979 10.5484 12.5603 10.2168 12.7881L7.59961 14.5879C7.31063 14.7866 7.31063 15.2134 7.59961 15.4121L10.2168 17.2119C10.5484 17.4397 10.9998 17.2021 11 16.7998V15.75H13C14.5188 15.75 15.75 14.5188 15.75 13V10C15.75 9.58579 15.4142 9.25 15 9.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M17.25 3.75C18.9069 3.75 20.25 5.09315 20.25 6.75V10.75V17.25C20.25 18.9069 18.9069 20.25 17.25 20.25H10.75H6.75C5.09315 20.25 3.75 18.9069 3.75 17.25L3.75 12.75C3.75 11.0931 5.09315 9.75 6.75 9.75H7.75C8.85457 9.75 9.75 8.85457 9.75 7.75V6.75C9.75 5.09315 11.0931 3.75 12.75 3.75L17.25 3.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15 10V13C15 14.1046 14.1046 15 13 15H10.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10.2167 12.7885L7.5993 14.588C7.31032 14.7867 7.31032 15.2133 7.5993 15.412L10.2167 17.2115C10.5485 17.4396 11 17.2021 11 16.7995V15V13.2005C11 12.7979 10.5485 12.5604 10.2167 12.7885Z"
					fill="currentColor"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconEnter;
