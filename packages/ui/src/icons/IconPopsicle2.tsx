import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPopsicle2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="popsicle-2, ice-cream, sweets">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M5.00002 7.75C5.00002 4.02208 8.0221 1 11.75 1H12.25C15.9779 1 19 4.02208 19 7.75V14.25C19 16.3211 17.3211 18 15.25 18H14.5V20.5C14.5 21.8807 13.3807 23 12 23C10.6193 23 9.50002 21.8807 9.50002 20.5V18H8.75002C6.67895 18 5.00002 16.3211 5.00002 14.25V12.7393C4.99999 12.7357 4.99999 12.7322 5.00002 12.7286V7.75ZM6.50002 13.0123V14.25C6.50002 15.4926 7.50738 16.5 8.75002 16.5H15.25C16.4927 16.5 17.5 15.4926 17.5 14.25V11.007C16.943 11.3852 16.2247 11.8119 15.5591 12.0006C14.1539 12.3992 13.0262 12.0121 12.1016 11.6499C12.0234 11.6193 11.9471 11.5891 11.8725 11.5596C11.0275 11.2257 10.3994 10.9775 9.65108 11.0687C8.50104 11.2089 7.37366 12.0267 6.50002 13.0123ZM11 18V20.5C11 21.0523 11.4477 21.5 12 21.5C12.5523 21.5 13 21.0523 13 20.5V18H11Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M5.75 7.75C5.75 4.43629 8.43629 1.75 11.75 1.75H12.25C15.5637 1.75 18.25 4.43629 18.25 7.75V9.5V14.25C18.25 15.9069 16.9069 17.25 15.25 17.25H8.75C7.09315 17.25 5.75 15.9069 5.75 14.25V7.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10.25 17.25H13.75V20.5C13.75 21.4665 12.9665 22.25 12 22.25C11.0335 22.25 10.25 21.4665 10.25 20.5V17.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18.25 9.5C18.25 9.5 16.5845 10.9302 15.3544 11.2791C13.0477 11.9334 11.6478 10.0697 9.56031 10.3242C8.05198 10.5081 6.6922 11.6037 5.75 12.7344"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPopsicle2;
