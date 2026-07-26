import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFoodBell: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="food-bell, serving-bell, glosche, serve"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M12.7492 4.75C12.7492 4.33579 12.4134 4 11.9992 4C11.585 4 11.2492 4.33579 11.2492 4.75V5.08931C6.76889 5.41013 2.4905 8.61031 2.03801 14.6898C1.96225 15.7077 2.79376 16.5 3.74923 16.5H20.2492C21.2047 16.5 22.0362 15.7077 21.9604 14.6898C21.508 8.61025 17.2295 5.41008 12.7492 5.0893V4.75Z"
					fill="currentColor"
				/>
				<path
					d="M2.75 17.5C2.33579 17.5 2 17.8358 2 18.25C2 18.6642 2.33579 19 2.75 19H9.16841C9.44927 19.5912 10.0519 20 10.75 20H13.25C13.9481 20 14.5507 19.5912 14.8316 19H21.25C21.6642 19 22 18.6642 22 18.25C22 17.8358 21.6642 17.5 21.25 17.5H2.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M13.25 19.25H10.75C9.88244 19.25 10.4533 18.25 11.3209 18.25H12.6791C13.5467 18.25 14.1176 19.25 13.25 19.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M2.75 18.25H9.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.25 18.25H21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20.2491 15.75H3.74908C3.19679 15.75 2.7448 15.2963 2.78579 14.7455C3.67228 2.83483 20.3259 2.83483 21.2124 14.7455C21.2534 15.2963 20.8014 15.75 20.2491 15.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 4.75V5.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFoodBell;
