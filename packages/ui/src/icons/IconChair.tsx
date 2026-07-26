import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconChair: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="chair, seat">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M5 5.75C5 3.67893 6.67893 2 8.75 2H15.25C17.3211 2 19 3.67893 19 5.75V7.25C19 8.88277 17.9565 10.2718 16.5 10.7866V13H19.25C19.6642 13 20 13.3358 20 13.75C20 14.1642 19.6642 14.5 19.25 14.5H19V21.25C19 21.6642 18.6642 22 18.25 22C17.8358 22 17.5 21.6642 17.5 21.25V18.75H6.5V21.25C6.5 21.6642 6.16421 22 5.75 22C5.33579 22 5 21.6642 5 21.25V14.5H4.75C4.33579 14.5 4 14.1642 4 13.75C4 13.3358 4.33579 13 4.75 13H7.5V10.7866C6.04351 10.2718 5 8.88277 5 7.25V5.75ZM9 11V13H15V11H9ZM17.5 14.5V17.25H6.5V14.5H17.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M5.75 5.75C5.75 4.09315 7.09315 2.75 8.75 2.75H15.25C16.9069 2.75 18.25 4.09315 18.25 5.75V7.25C18.25 8.90685 16.9069 10.25 15.25 10.25H8.75C7.09315 10.25 5.75 8.90685 5.75 7.25V5.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.25 13.75H4.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18 18L6 18"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.25 10.25V13.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.75 14.25V21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.75 10.25V13.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18.25 14.25V21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconChair;
