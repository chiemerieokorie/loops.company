import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCar8Ev: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="car-8-ev, mini-van">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M1 7.75V15.25C1 16.7688 2.23122 18 3.75 18H3.83682C4.39855 19.1825 5.6038 20 7 20C8.3962 20 9.60145 19.1825 10.1632 18H13.8368C14.3985 19.1825 15.6038 20 17 20C18.3962 20 19.6015 19.1825 20.1632 18H20.25C21.7688 18 23 16.7688 23 15.25V11.5723C22.9999 10.2836 22.4767 9.05404 21.5566 8.16211L21.3672 7.98828L18.1211 5.16602C17.2567 4.41435 16.1494 4 15.0039 4H4.75C2.67893 4 1 5.67893 1 7.75ZM7 14.5C8.10457 14.5 9 15.3954 9 16.5C9 17.6046 8.10457 18.5 7 18.5C5.89543 18.5 5 17.6046 5 16.5C5 15.3954 5.89543 14.5 7 14.5ZM17 14.5C18.1046 14.5 19 15.3954 19 16.5C19 17.6046 18.1046 18.5 17 18.5C15.8954 18.5 15 17.6046 15 16.5C15 15.3954 15.8954 14.5 17 14.5ZM11.9168 9.99984H13.9935C14.2007 9.99984 14.3179 10.2375 14.1919 10.4019L11.2431 14.2481C11.0869 14.4519 10.7618 14.3159 10.7971 14.0616L11.0835 11.9998H9.00681C8.79957 11.9998 8.68232 11.7622 8.80841 11.5977L11.7571 7.75157C11.9134 7.5478 12.2385 7.68374 12.2032 7.93808L11.9168 9.99984Z"
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
				<path
					d="M13.9949 9.99935H11.9183L12.2046 7.93759C12.24 7.68326 11.9148 7.54731 11.7586 7.75109L8.80987 11.5972C8.68378 11.7617 8.80104 11.9994 9.00827 11.9994H11.0849L10.7986 14.0611C10.7633 14.3155 11.0884 14.4514 11.2446 14.2476L14.1933 10.4015C14.3194 10.237 14.2022 9.99935 13.9949 9.99935Z"
					fill="currentColor"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCar8Ev;
