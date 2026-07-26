import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconStandingGlobe: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="standing-globe, travel, language">
		{variant === "filled" ? (
			<>
				<path
					d="M7.38477 2.71387L6.87109 3.26074C5.40017 4.8267 4.50012 6.93264 4.5 9.25C4.50026 14.0823 8.41767 18 13.25 18C15.8032 18 18.1006 16.9076 19.7012 15.1621L20.208 14.6094L21.3135 15.623L20.8066 16.1758C19.0389 18.1036 16.5402 19.3513 13.75 19.4854V20.5H17V22H9V20.5H12.25V19.4492C7.05862 18.9465 3.00025 14.5732 3 9.25C3.00012 6.53594 4.05632 4.06646 5.77832 2.2334L6.29199 1.68555L7.38477 2.71387Z"
					fill="currentColor"
				/>
				<path
					d="M13.25 2C17.2541 2 20.5 5.24594 20.5 9.25C20.5 13.2541 17.2541 16.5 13.25 16.5C9.24594 16.5 6 13.2541 6 9.25C6 5.24594 9.24594 2 13.25 2Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M9.75 21.25H16.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13 21V19"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="13.25"
					cy="9.25"
					r="6.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.32494 2.74658C4.72815 4.44624 3.75 6.73387 3.75 9.24997C3.75 14.4967 8.00329 18.75 13.25 18.75C16.0222 18.75 18.5171 17.5625 20.2538 15.6685"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconStandingGlobe;
