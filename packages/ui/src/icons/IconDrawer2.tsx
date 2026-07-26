import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconDrawer2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="drawer-2">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3 6.75C3 4.67893 4.67893 3 6.75 3H17.25C19.3211 3 21 4.67893 21 6.75V15.25C21 17.0642 19.7117 18.5775 18 18.925V21.25C18 21.6642 17.6642 22 17.25 22C16.8358 22 16.5 21.6642 16.5 21.25V19H7.5V21.25C7.5 21.6642 7.16421 22 6.75 22C6.33579 22 6 21.6642 6 21.25V18.925C4.28832 18.5775 3 17.0642 3 15.25V6.75ZM4.5 11.75V15.25C4.5 16.4926 5.50736 17.5 6.75 17.5H11.25V11.75H4.5ZM11.25 10.25H4.5V6.75C4.5 5.50736 5.50736 4.5 6.75 4.5H11.25V10.25ZM14.75 9C15.1642 9 15.5 9.33579 15.5 9.75V12.25C15.5 12.6642 15.1642 13 14.75 13C14.3358 13 14 12.6642 14 12.25V9.75C14 9.33579 14.3358 9 14.75 9Z"
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
					d="M12 11L3.75 11"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 3.75V18.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.75 18.25V21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.25 18.25V21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.75 9.75L14.75 12.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconDrawer2;
