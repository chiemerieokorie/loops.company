import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCreditCard1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="credit-card-1, card, payment">
		{variant === "filled" ? (
			<>
				<path
					d="M2 7.75293C2 5.68186 3.67893 4.00293 5.75 4.00293H18.2461C20.3172 4.00293 21.9961 5.68186 21.9961 7.75293L21.9955 9H2V7.75293Z"
					fill="currentColor"
				/>
				<path
					d="M2 10.5V16.2461C2 18.3172 3.67893 19.9961 5.75 19.9961L18.2422 19.9961C20.3131 19.9961 21.9919 18.317 21.9922 16.2461L21.9948 10.5H2Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 9.75005V16.2461C2.75 17.903 4.09315 19.2461 5.75 19.2461L18.2422 19.2461C19.899 19.2461 21.2422 17.903 21.2422 16.2461L21.2461 9.75005M2.75 9.75005V7.75293C2.75 6.09608 4.09315 4.75293 5.75 4.75293H18.2461C19.9029 4.75293 21.2461 6.09608 21.2461 7.75293V9.75005M2.75 9.75005H21.2461"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCreditCard1;
