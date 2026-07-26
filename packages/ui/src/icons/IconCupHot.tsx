import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCupHot: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="cup-hot, coffee, tea, milk, mug">
		{variant === "filled" ? (
			<>
				<path
					d="M7 2C7.41421 2 7.75 2.33579 7.75 2.75V5.25C7.75 5.66421 7.41421 6 7 6C6.58579 6 6.25 5.66421 6.25 5.25V2.75C6.25 2.33579 6.58579 2 7 2Z"
					fill="currentColor"
				/>
				<path
					d="M11 2C11.4142 2 11.75 2.33579 11.75 2.75V5.25C11.75 5.66421 11.4142 6 11 6C10.5858 6 10.25 5.66421 10.25 5.25V2.75C10.25 2.33579 10.5858 2 11 2Z"
					fill="currentColor"
				/>
				<path
					d="M15 2C15.4142 2 15.75 2.33579 15.75 2.75V5.25C15.75 5.66421 15.4142 6 15 6C14.5858 6 14.25 5.66421 14.25 5.25V2.75C14.25 2.33579 14.5858 2 15 2Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M5.75 7C4.7835 7 4 7.7835 4 8.75V18.25C4 20.3211 5.67893 22 7.75 22H14.25C16.3211 22 18 20.3211 18 18.25V16H18.5C20.433 16 22 14.433 22 12.5C22 10.567 20.433 9 18.5 9H18V8.75C18 7.7835 17.2165 7 16.25 7H5.75ZM18 10.5V14.5H18.5C19.6046 14.5 20.5 13.6046 20.5 12.5C20.5 11.3954 19.6046 10.5 18.5 10.5H18Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 8.75C4.75 8.19772 5.19772 7.75 5.75 7.75H16.25C16.8023 7.75 17.25 8.19772 17.25 8.75V18.25C17.25 19.9069 15.9069 21.25 14.25 21.25H7.75C6.09315 21.25 4.75 19.9069 4.75 18.25V8.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.25 9.75H18.5C20.0188 9.75 21.25 10.9812 21.25 12.5C21.25 14.0188 20.0188 15.25 18.5 15.25H17.25V9.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11 5.25V2.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7 5.25V2.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15 5.25V2.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCupHot;
