import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconUnarchiv: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="unarchiv, unbox">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M9.85655 2.30892C10.1002 2.64391 10.0261 3.11298 9.69113 3.3566L6.05639 6.00005H17.9436L14.3089 3.3566C13.9739 3.11298 13.8998 2.64391 14.1434 2.30892C14.3871 1.97393 14.8561 1.89987 15.1911 2.1435L20.6911 6.1435C20.8852 6.28463 21 6.5101 21 6.75005V17.2501C21 19.3211 19.3211 21.0001 17.25 21.0001H6.75C4.67893 21.0001 3 19.3211 3 17.2501V6.75005C3 6.5101 3.11481 6.28463 3.30887 6.1435L8.80887 2.1435C9.14386 1.89987 9.61292 1.97393 9.85655 2.30892ZM9 11.2501C9 10.8358 9.33579 10.5001 9.75 10.5001H14.25C14.6642 10.5001 15 10.8358 15 11.2501C15 11.6643 14.6642 12.0001 14.25 12.0001H9.75C9.33579 12.0001 9 11.6643 9 11.2501Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M20.25 6.75H3.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.25 2.75L3.75 6.75V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H17.25C18.9069 20.25 20.25 18.9069 20.25 17.25V6.75L14.75 2.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.75 11.25H14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconUnarchiv;
