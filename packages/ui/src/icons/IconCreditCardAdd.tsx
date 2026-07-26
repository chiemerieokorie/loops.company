import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCreditCardAdd: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="credit-card-add, card, payment">
		{variant === "filled" ? (
			<>
				<path
					d="M2 7.75293C2 5.68186 3.67893 4.00293 5.75 4.00293H18.2461C20.3172 4.00293 21.9961 5.68186 21.9961 7.75293L21.9955 9H2V7.75293Z"
					fill="currentColor"
				/>
				<path
					d="M2 10.5V16.2461C2 18.3172 3.67893 19.9961 5.75 19.9961L14.0001 19.9961L14 17.25C14 16.0074 15.0074 15 16.25 15H17V14.25C17 13.0074 18.0074 12 19.25 12L21.9941 12L21.9948 10.5H2Z"
					fill="currentColor"
				/>
				<path
					d="M20 14.25C20 13.8358 19.6642 13.5 19.25 13.5C18.8358 13.5 18.5 13.8358 18.5 14.25V16.5H16.25C15.8358 16.5 15.5 16.8358 15.5 17.25C15.5 17.6642 15.8358 18 16.25 18H18.5V20.25C18.5 20.6642 18.8358 21 19.25 21C19.6642 21 20 20.6642 20 20.25V18H22.25C22.6642 18 23 17.6642 23 17.25C23 16.8358 22.6642 16.5 22.25 16.5H20V14.25Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 9.75005V15.2461C2.75 17.4553 4.54086 19.2461 6.75 19.2461H13.4961M2.75 9.75005V8.75293C2.75 6.54379 4.54086 4.75293 6.75 4.75293H17.2538C19.4584 4.75293 21.2463 6.53671 21.2462 8.74131L21.2461 9.75005M2.75 9.75005H21.2461M21.2461 9.75005V11.2481M19.25 14.25V17.25M19.25 17.25V20.25M19.25 17.25H16.25M19.25 17.25H22.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCreditCardAdd;
