import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCurrencyPesos: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="currency-pesos, money">
		{variant === "filled" ? (
			<>
				<path
					d="M20 11H4"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
				/>
				<path
					d="M20 7H4"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
				/>
				<path
					d="M7 21V3H12C15.3137 3 18 5.68629 18 9C18 12.3137 15.3137 15 12 15H7.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
				/>
			</>
		) : (
			<>
				<path
					d="M20.25 10.75H3.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20.25 6.75H3.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.75 21.25V2.75H12.4044C15.7137 2.75 18.3981 5.42937 18.4044 8.73864C18.4107 12.0568 15.7226 14.75 12.4044 14.75H7.29546"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCurrencyPesos;
