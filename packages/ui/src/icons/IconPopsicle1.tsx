import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPopsicle1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="popsicle-1, ice-cream, sweets">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M5 7.75C5 4.02208 8.02208 1 11.75 1H12.25C15.9779 1 19 4.02208 19 7.75V15.25C19 16.7688 17.7688 18 16.25 18H14.5V20.5C14.5 21.8807 13.3807 23 12 23C10.6193 23 9.5 21.8807 9.5 20.5V18H7.75C6.23122 18 5 16.7688 5 15.25V7.75ZM11 18V20.5C11 21.0523 11.4477 21.5 12 21.5C12.5523 21.5 13 21.0523 13 20.5V18H11ZM10.5 6.75C10.5 6.33579 10.1642 6 9.75 6C9.33579 6 9 6.33579 9 6.75V12.75C9 13.1642 9.33579 13.5 9.75 13.5C10.1642 13.5 10.5 13.1642 10.5 12.75V6.75ZM14.25 6C14.6642 6 15 6.33579 15 6.75V12.75C15 13.1642 14.6642 13.5 14.25 13.5C13.8358 13.5 13.5 13.1642 13.5 12.75V6.75C13.5 6.33579 13.8358 6 14.25 6Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M5.75 7.75C5.75 4.43629 8.43629 1.75 11.75 1.75H12.25C15.5637 1.75 18.25 4.43629 18.25 7.75V14.25C18.25 15.9069 16.9069 17.25 15.25 17.25H8.75C7.09315 17.25 5.75 15.9069 5.75 14.25V7.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10.25 17.25H13.75V20.5C13.75 21.4665 12.9665 22.25 12 22.25C11.0335 22.25 10.25 21.4665 10.25 20.5V17.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.75 6.75V12.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.25 6.75V12.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPopsicle1;
