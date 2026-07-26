import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCamera4: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="camera-4">
		{variant === "filled" ? (
			<>
				<path
					d="M14 9.5C12.6193 9.5 11.5 10.6193 11.5 12C11.5 13.3807 12.6193 14.5 14 14.5C15.3807 14.5 16.5 13.3807 16.5 12C16.5 10.6193 15.3807 9.5 14 9.5Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M5.95993 3C5.44907 3 4.9637 3.22323 4.63124 3.61112L3.86058 4.51022C2.74909 5.15966 2 6.36681 2 7.75V16.25C2 18.3211 3.67893 20 5.75 20H18.25C20.3211 20 22 18.3211 22 16.25V7.75C22 5.67893 20.3211 4 18.25 4H9.70209L9.36876 3.61111C9.03629 3.22323 8.55093 3 8.04006 3H5.95993ZM10 12C10 9.79086 11.7909 8 14 8C16.2091 8 18 9.79086 18 12C18 14.2091 16.2091 16 14 16C11.7909 16 10 14.2091 10 12ZM7 10C7.55228 10 8 9.55228 8 9C8 8.44772 7.55228 8 7 8C6.44772 8 6 8.44772 6 9C6 9.55228 6.44772 10 7 10Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M7.93431 3.75H6.41987C5.83602 3.75 5.28132 4.00513 4.90136 4.44842L4.34316 5.09964C3.39533 5.60381 2.75 6.60154 2.75 7.75V16.25C2.75 17.9069 4.09315 19.25 5.75 19.25H18.25C19.9069 19.25 21.25 17.9069 21.25 16.25V7.75C21.25 6.09315 19.9069 4.75 18.25 4.75H10.3485C9.80522 4.75 9.28417 4.53417 8.9 4.15C8.64388 3.89388 8.29652 3.75 7.93431 3.75Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.25 12C17.25 13.7949 15.7949 15.25 14 15.25C12.2051 15.25 10.75 13.7949 10.75 12C10.75 10.2051 12.2051 8.75 14 8.75C15.7949 8.75 17.25 10.2051 17.25 12Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7 9V8.99M7.25 9C7.25 9.13807 7.13807 9.25 7 9.25C6.86193 9.25 6.75 9.13807 6.75 9C6.75 8.86193 6.86193 8.75 7 8.75C7.13807 8.75 7.25 8.86193 7.25 9Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCamera4;
