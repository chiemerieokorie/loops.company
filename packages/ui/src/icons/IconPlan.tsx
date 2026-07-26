import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPlan: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="plan, process, connect, path">
		{variant === "filled" ? (
			<>
				<path
					d="M17.5 3C19.433 3 21 4.567 21 6.5C21 8.433 19.433 10 17.5 10C15.8246 10 14.4255 8.82244 14.082 7.25H8.81348C7.77942 7.25 7.42521 8.6275 8.33105 9.12598L16.3916 13.5596C18.6569 14.8055 17.7719 18.25 15.1865 18.25H9.91797C9.57452 19.8224 8.17545 21 6.5 21C4.567 21 3 19.433 3 17.5C3 15.567 4.567 14 6.5 14C8.17545 14 9.57452 15.1776 9.91797 16.75H15.1865C16.2206 16.75 16.5748 15.3725 15.6689 14.874L7.6084 10.4404C5.34308 9.1945 6.22813 5.75 8.81348 5.75H14.082C14.4255 4.17756 15.8246 3 17.5 3Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M14.5 6.5H8.81314C7.00339 6.5 6.38405 8.91123 7.96978 9.78338L16.0302 14.2166C17.616 15.0888 16.9966 17.5 15.1869 17.5H9.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.5 3.75C19.0188 3.75 20.25 4.98122 20.25 6.5C20.25 8.01878 19.0188 9.25 17.5 9.25C15.9812 9.25 14.75 8.01878 14.75 6.5C14.75 4.98122 15.9812 3.75 17.5 3.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.5 14.75C8.01878 14.75 9.25 15.9812 9.25 17.5C9.25 19.0188 8.01878 20.25 6.5 20.25C4.98122 20.25 3.75 19.0188 3.75 17.5C3.75 15.9812 4.98122 14.75 6.5 14.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPlan;
