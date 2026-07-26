import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconWallet1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="wallet-1">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M2 7.75C2 5.67893 3.67893 4 5.75 4H18.25C20.3211 4 22 5.67893 22 7.75V16.25C22 18.3211 20.3211 20 18.25 20H5.75C3.67893 20 2 18.3211 2 16.25V7.75ZM3.62803 7H20.372C20.0631 6.12611 19.2297 5.5 18.25 5.5H5.75C4.77034 5.5 3.93691 6.12611 3.62803 7ZM20.5 8.5H3.5V10H8.75C9.16421 10 9.5 10.3358 9.5 10.75C9.5 11.7165 10.2835 12.5 11.25 12.5H12.75C13.7165 12.5 14.5 11.7165 14.5 10.75C14.5 10.3358 14.8358 10 15.25 10H20.5V8.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 7.75H21.25M2.75 7.75V10.75M2.75 7.75C2.75 6.09315 4.09315 4.75 5.75 4.75H18.25C19.9069 4.75 21.25 6.09315 21.25 7.75M21.25 7.75V10.75M21.25 10.75V16.25C21.25 17.9069 19.9069 19.25 18.25 19.25H5.75C4.09315 19.25 2.75 17.9069 2.75 16.25V10.75M21.25 10.75H15.25C15.25 12.1307 14.1307 13.25 12.75 13.25H11.25C9.86929 13.25 8.75 12.1307 8.75 10.75H2.75"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconWallet1;
