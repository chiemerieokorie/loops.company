import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCreditCard2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="credit-card-2, card, payment">
		{variant === "filled" ? (
			<>
				<path
					d="M5.75 4.00293C3.67893 4.00293 2 5.68186 2 7.75293V9H21.9955L21.9961 7.75293C21.9961 5.68186 20.3172 4.00293 18.2461 4.00293H5.75Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M2 16.2461V10.5H21.9948L21.9922 16.2461C21.9919 18.317 20.3131 19.9961 18.2422 19.9961L5.75 19.9961C3.67893 19.9961 2 18.3172 2 16.2461ZM6.75 12.5C6.33579 12.5 6 12.8358 6 13.25C6 13.6642 6.33579 14 6.75 14H9.75C10.1642 14 10.5 13.6642 10.5 13.25C10.5 12.8358 10.1642 12.5 9.75 12.5H6.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 9.75005V16.2461C2.75 17.903 4.09315 19.2461 5.75 19.2461L18.2422 19.2461C19.899 19.2461 21.2422 17.903 21.2422 16.2461L21.2461 9.75005M2.75 9.75005V7.75293C2.75 6.09608 4.09315 4.75293 5.75 4.75293H18.2461C19.9029 4.75293 21.2461 6.09608 21.2461 7.75293V9.75005M2.75 9.75005H21.2461M6.75 13.25H9.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCreditCard2;
