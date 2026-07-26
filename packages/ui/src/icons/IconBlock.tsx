import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBlock: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="block, workspace">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M20 19.5V6.75C20 4.67893 18.3211 3 16.25 3H7.75C5.67893 3 4 4.67893 4 6.75V19.5H2.75C2.33579 19.5 2 19.8358 2 20.25C2 20.6642 2.33579 21 2.75 21H21.25C21.6642 21 22 20.6642 22 20.25C22 19.8358 21.6642 19.5 21.25 19.5H20ZM8 7.75C8 7.33579 8.33579 7 8.75 7H10.25C10.6642 7 11 7.33579 11 7.75C11 8.16421 10.6642 8.5 10.25 8.5H8.75C8.33579 8.5 8 8.16421 8 7.75ZM13 7.75C13 7.33579 13.3358 7 13.75 7H15.25C15.6642 7 16 7.33579 16 7.75C16 8.16421 15.6642 8.5 15.25 8.5H13.75C13.3358 8.5 13 8.16421 13 7.75ZM8 11.75C8 11.3358 8.33579 11 8.75 11H10.25C10.6642 11 11 11.3358 11 11.75C11 12.1642 10.6642 12.5 10.25 12.5H8.75C8.33579 12.5 8 12.1642 8 11.75ZM13 11.75C13 11.3358 13.3358 11 13.75 11H15.25C15.6642 11 16 11.3358 16 11.75C16 12.1642 15.6642 12.5 15.25 12.5H13.75C13.3358 12.5 13 12.1642 13 11.75ZM8 15.75C8 15.3358 8.33579 15 8.75 15H10.25C10.6642 15 11 15.3358 11 15.75C11 16.1642 10.6642 16.5 10.25 16.5H8.75C8.33579 16.5 8 16.1642 8 15.75ZM13 15.75C13 15.3358 13.3358 15 13.75 15H15.25C15.6642 15 16 15.3358 16 15.75C16 16.1642 15.6642 16.5 15.25 16.5H13.75C13.3358 16.5 13 16.1642 13 15.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M8.75 7.75H10.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.75 7.75H15.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.75 11.75H10.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.75 11.75H15.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.75 15.75H10.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.75 15.75H15.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M21.25 20.25H2.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.75 20.25V6.75C4.75 5.09315 6.09315 3.75 7.75 3.75H16.25C17.9069 3.75 19.25 5.09315 19.25 6.75V20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBlock;
