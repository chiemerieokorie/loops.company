import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCryptoWallet: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="crypto-wallet">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M6.5 3C4.567 3 3 4.567 3 6.5V12.6032L4.86629 11.5145C5.56686 11.1058 6.43314 11.1058 7.13371 11.5145L10.3837 13.4103C11.0749 13.8136 11.5 14.5536 11.5 15.3538V21H17.25C19.3211 21 21 19.3211 21 17.25V11.75C21 9.67893 19.3211 8 17.25 8H17V5.83333C17 4.26853 15.7315 3 14.1667 3H6.5ZM15.5 8V5.83333C15.5 5.09695 14.903 4.5 14.1667 4.5H6.5C5.39543 4.5 4.5 5.39543 4.5 6.5C4.5 7.32843 5.17157 8 6 8H15.5ZM15.5 15.5C16.0523 15.5 16.5 15.0523 16.5 14.5C16.5 13.9477 16.0523 13.5 15.5 13.5C14.9477 13.5 14.5 13.9477 14.5 14.5C14.5 15.0523 14.9477 15.5 15.5 15.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M5.6221 12.8105C5.85562 12.6743 6.14438 12.6743 6.3779 12.8105L9.6279 14.7063C9.85832 14.8407 10 15.0874 10 15.3541V19.1458C10 19.4126 9.85832 19.6592 9.6279 19.7936L6.3779 21.6895C6.14438 21.8257 5.85562 21.8257 5.6221 21.6895L2.3721 19.7936C2.14168 19.6592 2 19.4126 2 19.1458V15.3541C2 15.0874 2.14168 14.8407 2.3721 14.7063L5.6221 12.8105ZM3.5 15.7849V18.715L6 20.1734L8.5 18.715V15.7849L6 14.3266L3.5 15.7849Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 6.5V6.5C3.75 4.98122 4.98122 3.75 6.5 3.75H14.1667C15.3173 3.75 16.25 4.68274 16.25 5.83333V8.75M3.75 6.5V6.5C3.75 7.74264 4.75736 8.75 6 8.75H16.25M3.75 6.5V11.25M16.25 8.75H17.25C18.9069 8.75 20.25 10.0931 20.25 11.75V17.25C20.25 18.9069 18.9069 20.25 17.25 20.25H12.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6 13.4583L9.25 15.3541V19.1458L6 21.0416L2.75 19.1458V15.3541L6 13.4583Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.5 14.5V14.49M15.75 14.5C15.75 14.6381 15.6381 14.75 15.5 14.75C15.3619 14.75 15.25 14.6381 15.25 14.5C15.25 14.3619 15.3619 14.25 15.5 14.25C15.6381 14.25 15.75 14.3619 15.75 14.5Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCryptoWallet;
