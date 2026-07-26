import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArmchair: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="armchair, seat, chill">
		{variant === "filled" ? (
			<>
				<path
					d="M5 6.75V11H5.5C6.88071 11 8 12.1193 8 13.5H16C16 12.1193 17.1193 11 18.5 11H19V6.75C19 4.67893 17.3211 3 15.25 3H8.75C6.67893 3 5 4.67893 5 6.75Z"
					fill="currentColor"
				/>
				<path
					d="M3 14.25C3 13.2835 3.7835 12.5 4.75 12.5C5.7165 12.5 6.5 13.2835 6.5 14.25V15H17.5V14.25C17.5 13.2835 18.2835 12.5 19.25 12.5C20.2165 12.5 21 13.2835 21 14.25V15.25C21 16.689 20.1895 17.9387 19 18.5675V20.25C19 20.6642 18.6642 21 18.25 21C17.8358 21 17.5 20.6642 17.5 20.25V18.9918C17.4174 18.9972 17.334 19 17.25 19H6.75C6.66599 19 6.58263 18.9972 6.5 18.9918V20.25C6.5 20.6642 6.16421 21 5.75 21C5.33579 21 5 20.6642 5 20.25V18.5675C3.81055 17.9387 3 16.689 3 15.25V14.25Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 13.75C3.75 12.6454 4.64543 11.75 5.75 11.75C6.85457 11.75 7.75 12.6454 7.75 13.75V14.3214H16.25V13.75C16.25 12.6454 17.1454 11.75 18.25 11.75C19.3546 11.75 20.25 12.6454 20.25 13.75V15.25C20.25 16.9069 18.9069 18.25 17.25 18.25H6.75C5.09315 18.25 3.75 16.9069 3.75 15.25V13.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18.25 11.25V6.75C18.25 5.09315 16.9069 3.75 15.25 3.75H8.75C7.09315 3.75 5.75 5.09315 5.75 6.75V11.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.75 18.25V20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18.25 18.25V20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArmchair;
