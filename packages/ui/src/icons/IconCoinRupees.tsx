import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCoinRupees: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="coin-rupees, currency, money">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM9.75 7C9.33579 7 9 7.33579 9 7.75C9 8.16421 9.33579 8.5 9.75 8.5H11.75C12.7293 8.5 13.56 9.12657 13.8691 10H7.75C7.33579 10 7 10.3358 7 10.75C7 11.1642 7.33579 11.5 7.75 11.5H13.8691C13.56 12.3734 12.7293 13 11.75 13H9.75C9.41964 13 9.12813 13.2161 9.03223 13.5322C8.93645 13.8485 9.05899 14.1907 9.33398 14.374L13.834 17.374L13.9004 17.4131C14.2363 17.5907 14.6587 17.489 14.874 17.166C15.0894 16.8429 15.0209 16.4136 14.7275 16.1719L14.666 16.126L12.1875 14.4736C13.8033 14.2858 15.1056 13.0717 15.4248 11.5H16.25C16.6642 11.5 17 11.1642 17 10.75C17 10.3358 16.6642 10 16.25 10H15.4248C15.0773 8.28834 13.5642 7 11.75 7H9.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M7.75 10.75L16.25 10.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.75 7.75H11.75C13.4069 7.75 14.75 9.09315 14.75 10.75C14.75 12.4069 13.4069 13.75 11.75 13.75H9.75L14.25 16.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCoinRupees;
