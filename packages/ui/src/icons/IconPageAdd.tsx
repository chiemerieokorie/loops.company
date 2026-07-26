import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPageAdd: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="page-add">
		{variant === "filled" ? (
			<>
				<path
					d="M7.75 2C5.67893 2 4 3.67893 4 5.75V18.25C4 20.3211 5.67893 22 7.75 22H16.128C16.0451 21.7654 16 21.513 16 21.25V20.5H15.25C14.0074 20.5 13 19.4926 13 18.25C13 17.0074 14.0074 16 15.25 16H16V15.25C16 14.0074 17.0074 13 18.25 13C18.9568 13 19.5875 13.3259 20 13.8357V5.75C20 3.67893 18.3211 2 16.25 2H7.75Z"
					fill="currentColor"
				/>
				<path
					d="M19 15.25C19 14.8358 18.6642 14.5 18.25 14.5C17.8358 14.5 17.5 14.8358 17.5 15.25V17.5H15.25C14.8358 17.5 14.5 17.8358 14.5 18.25C14.5 18.6642 14.8358 19 15.25 19H17.5V21.25C17.5 21.6642 17.8358 22 18.25 22C18.6642 22 19 21.6642 19 21.25V19H21.25C21.6642 19 22 18.6642 22 18.25C22 17.8358 21.6642 17.5 21.25 17.5H19V15.25Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M11.25 21.25H7.75C6.09315 21.25 4.75 19.9069 4.75 18.25V5.75C4.75 4.09315 6.09315 2.75 7.75 2.75H16.25C17.9069 2.75 19.25 4.09315 19.25 5.75V12.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.25 15.25V18.25V21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.25 18.25H17.25H20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPageAdd;
