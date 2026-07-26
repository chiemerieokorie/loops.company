import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconWallet5: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="wallet-5">
		{variant === "filled" ? (
			<>
				<path
					d="M18.25 4C20.3211 4 22 5.67893 22 7.75V8.5H17.25C15.7312 8.5 14.5 9.73122 14.5 11.25V12.75C14.5 14.2688 15.7312 15.5 17.25 15.5H22V16.25C22 18.3211 20.3211 20 18.25 20H5.75C3.67893 20 2 18.3211 2 16.25V7.75C2 5.67893 3.67893 4 5.75 4H18.25Z"
					fill="currentColor"
				/>
				<path
					d="M16 11.25C16 10.5596 16.5596 10 17.25 10H21.75C22.4404 10 23 10.5596 23 11.25V12.75C23 13.4404 22.4404 14 21.75 14H17.25C16.5596 14 16 13.4404 16 12.75V11.25Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M21.25 9.5V7.75C21.25 6.09315 19.9069 4.75 18.25 4.75H5.75C4.09315 4.75 2.75 6.09315 2.75 7.75V16.25C2.75 17.9069 4.09315 19.25 5.75 19.25H18.25C19.9069 19.25 21.25 17.9069 21.25 16.25V14.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M21.25 9.75H15.75C15.1977 9.75 14.75 10.1977 14.75 10.75V13.25C14.75 13.8023 15.1977 14.25 15.75 14.25H21.25C21.8023 14.25 22.25 13.8023 22.25 13.25V10.75C22.25 10.1977 21.8023 9.75 21.25 9.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconWallet5;
