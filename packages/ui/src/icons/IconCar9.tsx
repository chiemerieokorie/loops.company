import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCar9: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="car-9, van">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M1 15.25V7.75C1 5.67893 2.67893 4 4.75 4H14.4482C15.9945 4.00018 17.3818 4.94955 17.9424 6.39062L18.6475 8.2041L18.6982 8.31738C18.8288 8.57421 19.0453 8.77892 19.3115 8.89551L21.3525 9.78906C22.3531 10.227 22.9998 11.2154 23 12.3076V15.25C23 16.7688 21.7688 18 20.25 18H20.1632C19.6015 19.1825 18.3962 20 17 20C15.6038 20 14.3985 19.1825 13.8368 18H10.1632C9.60145 19.1825 8.3962 20 7 20C5.6038 20 4.39855 19.1825 3.83682 18H3.75C2.23122 18 1 16.7688 1 15.25ZM9 16.5C9 15.3954 8.10457 14.5 7 14.5C5.89543 14.5 5 15.3954 5 16.5C5 17.6046 5.89543 18.5 7 18.5C8.10457 18.5 9 17.6046 9 16.5ZM19 16.5C19 15.3954 18.1046 14.5 17 14.5C15.8954 14.5 15 15.3954 15 16.5C15 17.6046 15.8954 18.5 17 18.5C18.1046 18.5 19 17.6046 19 16.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M4.25 17.25H3.75C2.64543 17.25 1.75 16.3546 1.75 15.25V7.75C1.75 6.09315 3.09315 4.75 4.75 4.75H14.4478C15.685 4.75 16.7954 5.50955 17.2438 6.66266L17.9488 8.47561C18.1416 8.97133 18.5239 9.36984 19.0112 9.58303L21.0516 10.4757C21.7796 10.7942 22.25 11.5134 22.25 12.308V15.25C22.25 16.3546 21.3546 17.25 20.25 17.25H19.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.75 17.25H14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="7"
					cy="16.75"
					r="2.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="17"
					cy="16.75"
					r="2.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCar9;
