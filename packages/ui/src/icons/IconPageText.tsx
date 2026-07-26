import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPageText: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="page-text">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M4 5.75C4 3.67893 5.67893 2 7.75 2H16.25C18.3211 2 20 3.67893 20 5.75V18.25C20 20.3211 18.3211 22 16.25 22H7.75C5.67893 22 4 20.3211 4 18.25V5.75ZM8.75 6C8.33579 6 8 6.33579 8 6.75C8 7.16421 8.33579 7.5 8.75 7.5H15.25C15.6642 7.5 16 7.16421 16 6.75C16 6.33579 15.6642 6 15.25 6H8.75ZM8.75 10C8.33579 10 8 10.3358 8 10.75C8 11.1642 8.33579 11.5 8.75 11.5H15.25C15.6642 11.5 16 11.1642 16 10.75C16 10.3358 15.6642 10 15.25 10H8.75ZM8.75 14C8.33579 14 8 14.3358 8 14.75C8 15.1642 8.33579 15.5 8.75 15.5H11.25C11.6642 15.5 12 15.1642 12 14.75C12 14.3358 11.6642 14 11.25 14H8.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 5.75C4.75 4.09315 6.09315 2.75 7.75 2.75H16.25C17.9069 2.75 19.25 4.09315 19.25 5.75V18.25C19.25 19.9069 17.9069 21.25 16.25 21.25H7.75C6.09315 21.25 4.75 19.9069 4.75 18.25V5.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.75 6.75H15.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.75 10.75H15.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.75 14.75H11.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPageText;
