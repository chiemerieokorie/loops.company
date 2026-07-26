import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconWallet3: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="wallet-3">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M6.5 3C4.567 3 3 4.567 3 6.5V17.25C3 19.3211 4.67893 21 6.75 21H17.25C19.3211 21 21 19.3211 21 17.25V11.75C21 9.67893 19.3211 8 17.25 8H17V5.83333C17 4.26853 15.7315 3 14.1667 3H6.5ZM15.5 8V5.83333C15.5 5.09695 14.903 4.5 14.1667 4.5H6.5C5.39543 4.5 4.5 5.39543 4.5 6.5C4.5 7.32843 5.17157 8 6 8H15.5ZM15.5 15.5C16.0523 15.5 16.5 15.0523 16.5 14.5C16.5 13.9477 16.0523 13.5 15.5 13.5C14.9477 13.5 14.5 13.9477 14.5 14.5C14.5 15.0523 14.9477 15.5 15.5 15.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 6.5V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H17.25C18.9069 20.25 20.25 18.9069 20.25 17.25V11.75C20.25 10.0931 18.9069 8.75 17.25 8.75H16.25M3.75 6.5C3.75 7.74264 4.75736 8.75 6 8.75H16.25M3.75 6.5C3.75 4.98122 4.98122 3.75 6.5 3.75H14.1667C15.3173 3.75 16.25 4.68274 16.25 5.83333V8.75"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.5 15.25C15.9142 15.25 16.25 14.9142 16.25 14.5C16.25 14.0858 15.9142 13.75 15.5 13.75C15.0858 13.75 14.75 14.0858 14.75 14.5C14.75 14.9142 15.0858 15.25 15.5 15.25Z"
					fill="currentColor"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="0.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconWallet3;
