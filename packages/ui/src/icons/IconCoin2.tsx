import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCoin2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="coin-2, credits">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.9393 9.06066L9.06066 10.9393C8.47487 11.5251 8.47487 12.4749 9.06066 13.0607L10.9393 14.9393C11.5251 15.5251 12.4749 15.5251 13.0607 14.9393L14.9393 13.0607C15.5251 12.4749 15.5251 11.5251 14.9393 10.9393L13.0607 9.06066C12.4749 8.47487 11.5251 8.47487 10.9393 9.06066Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.70696 11.2927L11.2927 8.70696C11.6833 8.31643 12.3164 8.31643 12.707 8.70696L15.2927 11.2927C15.6833 11.6833 15.6833 12.3164 15.2927 12.707L12.707 15.2927C12.3164 15.6833 11.6833 15.6833 11.2927 15.2927L8.70696 12.707C8.31643 12.3164 8.31643 11.6833 8.70696 11.2927Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCoin2;
