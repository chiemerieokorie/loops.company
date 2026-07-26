import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCar1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="car-1">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M8.67639 4C7.37416 4 6.16516 4.67558 5.48267 5.78463L4.73561 6.9986C4.55101 7.29857 4.29857 7.55101 3.9986 7.73561L2.78463 8.48267C1.67558 9.16516 1 10.3742 1 11.6764V14.75C1 16.4005 2.23029 17.7636 3.82381 17.9723C4.37979 19.1697 5.59293 20 7 20C8.3962 20 9.60145 19.1825 10.1632 18H13.8368C14.3985 19.1825 15.6038 20 17 20C18.4232 20 19.648 19.1505 20.195 17.931C21.7951 17.6086 23 16.195 23 14.5V12.4825C23 10.682 21.7204 9.13563 19.9517 8.79874L18.3309 8.49003C17.7581 8.38092 17.25 8.05369 16.9138 7.57731L15.5092 5.58744C14.8065 4.59199 13.664 4 12.4455 4H8.67639ZM9 16.5C9 17.6046 8.10457 18.5 7 18.5C5.89543 18.5 5 17.6046 5 16.5C5 15.3954 5.89543 14.5 7 14.5C8.10457 14.5 9 15.3954 9 16.5ZM17 18.5C18.1046 18.5 19 17.6046 19 16.5C19 15.3954 18.1046 14.5 17 14.5C15.8954 14.5 15 15.3954 15 16.5C15 17.6046 15.8954 18.5 17 18.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M19.75 17.25V17.25C21.1307 17.25 22.25 16.1307 22.25 14.75V12.4825C22.25 11.0421 21.2263 9.80501 19.8113 9.53549L18.1906 9.22678C17.4269 9.08131 16.7494 8.645 16.301 8.00982L14.8964 6.01995C14.3343 5.2236 13.4203 4.75 12.4455 4.75H8.67639C7.6346 4.75 6.66741 5.29047 6.12141 6.17771L5.37436 7.39167C5.12823 7.79163 4.79163 8.12823 4.39167 8.37436L3.17771 9.12141C2.29046 9.66741 1.75 10.6346 1.75 11.6764V14.75C1.75 16.1307 2.86929 17.25 4.25 17.25V17.25"
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
					d="M9.75 17.25H14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCar1;
