import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconReceiptionBell2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="receiption-bell-2, concierge, assistant"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M14.25 4C14.6642 4 15 4.33579 15 4.75C15 5.16421 14.6642 5.5 14.25 5.5H12.752V6.78027C17.8005 7.15669 21 11.3141 21 16.25C21 16.6642 20.6642 17 20.25 17H12.75V18.5H20.25C20.6642 18.5 21 18.8358 21 19.25C21 19.6642 20.6642 20 20.25 20H3.75C3.33579 20 3 19.6642 3 19.25C3 18.8358 3.33579 18.5 3.75 18.5H11.25V17H3.75C3.33579 17 3 16.6642 3 16.25C3 11.3128 6.20118 7.15485 11.252 6.78027V5.5H9.75C9.33579 5.5 9 5.16421 9 4.75C9 4.33579 9.33579 4 9.75 4H14.25Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 19.25H20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 16.5V18.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 7.5V5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.75 4.75L14.25 4.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 7.5C7 7.5 3.75 11.4175 3.75 16.25H20.25C20.25 11.4175 17 7.5 12 7.5Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconReceiptionBell2;
