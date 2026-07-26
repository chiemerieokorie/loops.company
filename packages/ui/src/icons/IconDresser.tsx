import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconDresser: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="dresser, drawer">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3 6.75C3 4.67893 4.67893 3 6.75 3H17.25C19.3211 3 21 4.67893 21 6.75V10.25H3V6.75ZM10 5.75C10 5.33579 10.3358 5 10.75 5H13.25C13.6642 5 14 5.33579 14 5.75C14 6.16421 13.6642 6.5 13.25 6.5H10.75C10.3358 6.5 10 6.16421 10 5.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M3 11.75V15.25C3 17.0642 4.28832 18.5775 6 18.925V21.25C6 21.6642 6.33579 22 6.75 22C7.16421 22 7.5 21.6642 7.5 21.25V19H16.5V21.25C16.5 21.6642 16.8358 22 17.25 22C17.6642 22 18 21.6642 18 21.25V18.925C19.7117 18.5775 21 17.0642 21 15.25V11.75H3ZM10.75 14C10.3358 14 10 14.3358 10 14.75C10 15.1642 10.3358 15.5 10.75 15.5H13.25C13.6642 15.5 14 15.1642 14 14.75C14 14.3358 13.6642 14 13.25 14H10.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 6.75C3.75 5.09315 5.09315 3.75 6.75 3.75H17.25C18.9069 3.75 20.25 5.09315 20.25 6.75V15.25C20.25 16.9069 18.9069 18.25 17.25 18.25H6.75C5.09315 18.25 3.75 16.9069 3.75 15.25V6.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20 11L4 11"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.75 18.5V21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.25 18.5V21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10.75 6.75H13.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10.75 13.75H13.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconDresser;
