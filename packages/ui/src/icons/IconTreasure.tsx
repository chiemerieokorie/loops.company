import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconTreasure: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="treasure, chest">
		{variant === "filled" ? (
			<>
				<path
					d="M19.25 20H17.5V11.5H22V17.25C22 18.7688 20.7688 20 19.25 20Z"
					fill="currentColor"
				/>
				<path
					d="M22 10H17.5V4L18.2505 4C20.3216 4 22 5.67893 22 7.75001V10Z"
					fill="currentColor"
				/>
				<path
					d="M16 10V4L8 4V10H11.25V9.75004C11.25 9.33583 11.5858 9.00004 12 9.00004C12.4142 9.00004 12.75 9.33583 12.75 9.75004V10H16Z"
					fill="currentColor"
				/>
				<path
					d="M11.25 11.5V11.75C11.25 12.1643 11.5858 12.5 12 12.5C12.4142 12.5 12.75 12.1643 12.75 11.75V11.5H16V20H8V11.5H11.25Z"
					fill="currentColor"
				/>
				<path
					d="M6.5 4V10H2V7.75004C2 5.67894 3.67543 3.99999 5.74653 4L6.5 4Z"
					fill="currentColor"
				/>
				<path
					d="M6.5 11.5V20H4.75C3.23122 20 2 18.7688 2 17.25V11.5H6.5Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M3 10.75H21"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.75 4.75V19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.25 4.75V19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 9.75V11.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M2.75 8.25C2.75 6.317 4.317 4.75 6.25 4.75H17.75C19.683 4.75 21.25 6.317 21.25 8.25V17.25C21.25 18.3546 20.3546 19.25 19.25 19.25H4.75C3.64543 19.25 2.75 18.3546 2.75 17.25V8.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconTreasure;
