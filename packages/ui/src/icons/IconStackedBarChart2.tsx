import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconStackedBarChart2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="stacked-bar-chart-2, revenue">
		{variant === "filled" ? (
			<>
				<path
					d="M19.25 4C20.2165 4 21 4.7835 21 5.75V18.5H21.25C21.6642 18.5 22 18.8358 22 19.25C22 19.6642 21.6642 20 21.25 20H2.75C2.33579 20 2 19.6642 2 19.25C2 18.8358 2.33579 18.5 2.75 18.5H3V12.75C3 11.7835 3.7835 11 4.75 11C5.7165 11 6.5 11.7835 6.5 12.75V18.5H7.5V7.75C7.5 6.7835 8.2835 6 9.25 6C10.2165 6 11 6.7835 11 7.75V18.5H13V10.75C13 9.7835 13.7835 9 14.75 9C15.7165 9 16.5 9.7835 16.5 10.75V18.5H17.5V5.75C17.5 4.7835 18.2835 4 19.25 4Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 19.25H21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 19V13.375C3.75 12.4775 4.47754 11.75 5.375 11.75C6.27246 11.75 7 12.4775 7 13.375V19"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7 19V8.375C7 7.47754 7.72754 6.75 8.625 6.75C9.52246 6.75 10.25 7.47754 10.25 8.375V19"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.75 19V11.375C13.75 10.4775 14.4775 9.75 15.375 9.75C16.2725 9.75 17 10.4775 17 11.375V19"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17 19V6.375C17 5.47754 17.7275 4.75 18.625 4.75C19.5225 4.75 20.25 5.47754 20.25 6.375V19"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconStackedBarChart2;
