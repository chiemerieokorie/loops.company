import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCar8: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="car-8, mini-van">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M1 15.25V7.75C1 5.67893 2.67893 4 4.75 4H15.0039C16.1494 4 17.2567 4.41435 18.1211 5.16602L21.3672 7.98828L21.5566 8.16211C22.4767 9.05404 22.9999 10.2836 23 11.5723V15.25C23 16.7688 21.7688 18 20.25 18H20.1632C19.6015 19.1825 18.3962 20 17 20C15.6038 20 14.3985 19.1825 13.8368 18H10.1632C9.60145 19.1825 8.3962 20 7 20C5.6038 20 4.39855 19.1825 3.83682 18H3.75C2.23122 18 1 16.7688 1 15.25ZM9 16.5C9 15.3954 8.10457 14.5 7 14.5C5.89543 14.5 5 15.3954 5 16.5C5 17.6046 5.89543 18.5 7 18.5C8.10457 18.5 9 17.6046 9 16.5ZM19 16.5C19 15.3954 18.1046 14.5 17 14.5C15.8954 14.5 15 15.3954 15 16.5C15 17.6046 15.8954 18.5 17 18.5C18.1046 18.5 19 17.6046 19 16.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M4.25 17.25H3.75C2.64543 17.25 1.75 16.3546 1.75 15.25V7.75C1.75 6.09315 3.09315 4.75 4.75 4.75H15.0041C15.9687 4.75 16.9009 5.0986 17.6288 5.73158L20.8747 8.5541C21.7484 9.3138 22.25 10.4148 22.25 11.5725V15.25C22.25 16.3546 21.3546 17.25 20.25 17.25H19.75"
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

export default IconCar8;
