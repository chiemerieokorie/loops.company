import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBecepsLeftArm: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="beceps-left-arm, strong, flex, power">
		{variant === "filled" ? (
			<>
				<path
					d="M13.1689 2C9.49998 2 9.99943 7.99944 13.999 7C16.4989 10.9999 14.6318 12 16 15C14.6696 13.8596 13.1988 13.0201 11.6729 13.0312C8.99906 8.00025 1.9974 9.67814 2 14.9502C2.00012 23.7105 16.5908 23.1583 21.668 19.4707C23.3218 10.0703 18.5302 2.00035 13.1689 2Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M11.7577 12.9407C8.91667 7.88889 2.7476 9.87955 2.75 14.775C2.75 18.3511 6.50674 21.25 11.2027 21.25C15.0317 21.25 18.8599 20.4915 20.943 18.9727C22.4728 10.2436 18.0402 2.75 13.081 2.75C8.3846 2.75 10.8707 8.90913 14.3163 6.9125"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.3021 7.60596C15.6842 11.5372 14.2967 11.5372 15.2217 14.3122C13.3799 12.7335 11.5217 12.4622 9.34766 13.7572"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBecepsLeftArm;
