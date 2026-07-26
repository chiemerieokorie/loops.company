import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconToque: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="toque, chefs-cap, cook">
		{variant === "filled" ? (
			<>
				<path
					d="M19 18.25C19 20.3211 17.3211 22 15.25 22H8.75C6.67893 22 5 20.3211 5 18.25V18H19V18.25Z"
					fill="currentColor"
				/>
				<path
					d="M12 2C14.222 2 16.1603 3.20843 17.1963 4.99902L17.1992 5.00391C19.8682 5.10857 22 7.30535 22 10C22 12.0503 20.7659 13.8124 19 14.584V16.5H5V14.584C3.2341 13.8124 2 12.0503 2 10C2 7.30541 4.13187 5.10867 6.80078 5.00391C7.83767 3.20843 9.7776 2 12 2Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M6.85938 7.88889C6.85938 5.05076 9.16013 2.75 11.9983 2.75C13.9004 2.75 15.5611 3.78343 16.4497 5.31944"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.86111 14.0557C4.59061 14.0557 2.75 12.2151 2.75 9.94461C2.75 7.6741 4.59061 5.8335 6.86111 5.8335"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.1389 14.0557C19.4094 14.0557 21.25 12.2151 21.25 9.94455C21.25 7.67405 19.4094 5.83344 17.1389 5.83344C16.0963 5.83344 15.1443 6.22157 14.4196 6.86122"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18.25 14.0557V18.2501C18.25 19.907 16.9069 21.2501 15.25 21.2501H8.75C7.09315 21.2501 5.75 19.907 5.75 18.2501V14.0557"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.83203 17.1387H18.1654"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconToque;
