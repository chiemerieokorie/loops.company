import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconReference: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="reference, books, study, library, knowledge"
	>
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M17.25 2C18.7688 2 20 3.23122 20 4.75V21.25C20 21.6642 19.6642 22 19.25 22H6.25C5.00736 22 4 20.9926 4 19.75V5.75C4 3.67893 5.67893 2 7.75 2H17.25ZM6.25 19C5.83579 19 5.5 19.3358 5.5 19.75C5.5 20.1642 5.83579 20.5 6.25 20.5H18.5V19H6.25ZM6.25 16C5.83579 16 5.5 16.3358 5.5 16.75C5.5 17.1642 5.83579 17.5 6.25 17.5H18.5V16H6.25ZM8.75 6C8.33579 6 8 6.33579 8 6.75C8 7.16421 8.33579 7.5 8.75 7.5H15.25C15.6642 7.5 16 7.16421 16 6.75C16 6.33579 15.6642 6 15.25 6H8.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M8.75 6.75H15.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.25 16V4.75C19.25 3.64543 18.3546 2.75 17.25 2.75H7.75C6.09315 2.75 4.75 4.09315 4.75 5.75V19.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.25 15.25H6.25C5.42157 15.25 4.75 15.9216 4.75 16.75C4.75 17.5784 5.42157 18.25 6.25 18.25H19.25V15.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.25 18.25H6.25C5.42157 18.25 4.75 18.9216 4.75 19.75C4.75 20.5784 5.42157 21.25 6.25 21.25H19.25V18.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconReference;
