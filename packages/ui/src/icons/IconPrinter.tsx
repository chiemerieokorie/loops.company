import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPrinter: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="printer, print">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M8.75 2C7.23122 2 6 3.23122 6 4.75V6H5.75C3.67893 6 2 7.67893 2 9.75V15.25C2 16.7688 3.23122 18 4.75 18H6V19.25C6 20.7688 7.23122 22 8.75 22H15.25C16.7688 22 18 20.7688 18 19.25V18H19.25C20.7688 18 22 16.7688 22 15.25V9.75C22 7.67893 20.3211 6 18.25 6H18V4.75C18 3.23122 16.7688 2 15.25 2H8.75ZM16.5 6V4.75C16.5 4.05964 15.9404 3.5 15.25 3.5H8.75C8.05964 3.5 7.5 4.05964 7.5 4.75V6H16.5ZM16.5 14.5H7.5V19.25C7.5 19.9404 8.05964 20.5 8.75 20.5H15.25C15.9404 20.5 16.5 19.9404 16.5 19.25V14.5ZM6 10.75C6 10.3358 6.33579 10 6.75 10H9.25C9.66421 10 10 10.3358 10 10.75C10 11.1642 9.66421 11.5 9.25 11.5H6.75C6.33579 11.5 6 11.1642 6 10.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M15.25 2.75H8.75C7.64543 2.75 6.75 3.64543 6.75 4.75V6.75H17.25V4.75C17.25 3.64543 16.3546 2.75 15.25 2.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.75 21.25H15.25C16.3546 21.25 17.25 20.3546 17.25 19.25V13.75H6.75V19.25C6.75 20.3546 7.64543 21.25 8.75 21.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18.25 6.75H5.75C4.09315 6.75 2.75 8.09315 2.75 9.75V15.25C2.75 16.3546 3.64543 17.25 4.75 17.25H6.75V13.75H17.25V17.25H19.25C20.3546 17.25 21.25 16.3546 21.25 15.25V9.75C21.25 8.09315 19.9069 6.75 18.25 6.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.25 10.75H6.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPrinter;
