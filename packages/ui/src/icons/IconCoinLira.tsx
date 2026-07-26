import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCoinLira: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="coin-lira, currency, money">
		{variant === "filled" ? (
			<>
				<path
					d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM9.75 7C9.33579 7 9 7.33579 9 7.75V11.7861L6.91504 12.8291C6.54469 13.0143 6.39416 13.4646 6.5791 13.835C6.76428 14.2053 7.21455 14.3558 7.58496 14.1709L9 13.4629V15.25C9 16.2165 9.7835 17 10.75 17H12.4473C13.8243 17 15.1102 16.3118 15.874 15.166C16.1038 14.8214 16.0107 14.3557 15.666 14.126C15.3214 13.8962 14.8557 13.9893 14.626 14.334C14.1403 15.0624 13.3228 15.5 12.4473 15.5H10.75C10.6119 15.5 10.5 15.3881 10.5 15.25V12.7129L15.585 10.1709C15.9553 9.98572 16.1058 9.53545 15.9209 9.16504C15.7357 8.79469 15.2854 8.64416 14.915 8.8291L10.5 11.0361V7.75C10.5 7.33579 10.1642 7 9.75 7Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.75 7.75V15.25C9.75 15.8023 10.1977 16.25 10.75 16.25H12.4472C13.5735 16.25 14.6253 15.6871 15.25 14.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.25 13.5L15.25 9.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCoinLira;
