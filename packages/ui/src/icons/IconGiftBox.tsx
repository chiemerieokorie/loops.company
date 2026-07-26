import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconGiftBox: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="gift-box, present">
		{variant === "filled" ? (
			<>
				<path
					d="M2 7.40909C2 5.5263 3.5263 4 5.40909 4H11.25V9H3.59091C2.71227 9 2 8.28773 2 7.40909Z"
					fill="currentColor"
				/>
				<path
					d="M3 10.5H11.25V20H6.75C4.67893 20 3 18.3211 3 16.25V10.5Z"
					fill="currentColor"
				/>
				<path
					d="M12.75 4H18.5909C20.4737 4 22 5.5263 22 7.40909C22 8.28773 21.2877 9 20.4091 9H12.75V4Z"
					fill="currentColor"
				/>
				<path
					d="M12.75 10.5H21V16.25C21 18.3211 19.3211 20 17.25 20H12.75V10.5Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M18.25 4.75H5.75C4.09315 4.75 2.75 6.09315 2.75 7.75V8.25C2.75 8.80228 3.19772 9.25 3.75 9.25H20.25C20.8023 9.25 21.25 8.80228 21.25 8.25V7.75C21.25 6.09315 19.9069 4.75 18.25 4.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20.25 9.25V16.25C20.25 17.9069 18.9069 19.25 17.25 19.25H6.75C5.09315 19.25 3.75 17.9069 3.75 16.25V9.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 4.75V19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconGiftBox;
