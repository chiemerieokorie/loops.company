import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCoinRand: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="coin-rand, currency, money">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM14.75 7.5C14.3358 7.5 14 7.83581 14 8.25V13.459L9.85449 7.80664C9.6627 7.54515 9.3248 7.43622 9.0166 7.53711C8.74679 7.62545 8.55375 7.857 8.50977 8.13086L8.5 8.25V11.25H7.75C7.33579 11.25 7 11.5858 7 12C7 12.4142 7.33579 12.75 7.75 12.75H8.5V15.75C8.5 16.1642 8.83579 16.5 9.25 16.5C9.66421 16.5 10 16.1642 10 15.75V10.54L14.1455 16.1934C14.3373 16.4549 14.6752 16.5638 14.9834 16.4629C15.2916 16.362 15.5 16.0743 15.5 15.75V12.75H16.25C16.6642 12.75 17 12.4142 17 12C17 11.5858 16.6642 11.25 16.25 11.25H15.5V8.25C15.5 7.83581 15.1642 7.5 14.75 7.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M9.25 15.7501V8.25L14.75 15.75V8.25005"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9 12H7.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.25 12H15"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCoinRand;
