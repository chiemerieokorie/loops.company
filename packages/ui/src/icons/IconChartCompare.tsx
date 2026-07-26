import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconChartCompare: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="chart-compare">
		{variant === "filled" ? (
			<>
				<path
					d="M3.75 3C4.16421 3 4.5 3.33579 4.5 3.75V17.25C4.5 18.4926 5.50736 19.5 6.75 19.5H20.25C20.6642 19.5 21 19.8358 21 20.25C21 20.6642 20.6642 21 20.25 21H6.75C4.67893 21 3 19.3211 3 17.25V3.75C3 3.33579 3.33579 3 3.75 3Z"
					fill="currentColor"
				/>
				<path
					d="M7.75 11C8.16421 11 8.5 11.3358 8.5 11.75V17.5C8.5 17.9142 8.16421 18.25 7.75 18.25C7.33579 18.25 7 17.9142 7 17.5V11.75C7 11.3358 7.33579 11 7.75 11Z"
					fill="currentColor"
				/>
				<path
					d="M10.75 7C11.1642 7 11.5 7.33579 11.5 7.75V17.5C11.5 17.9142 11.1642 18.25 10.75 18.25C10.3358 18.25 10 17.9142 10 17.5V7.75C10 7.33579 10.3358 7 10.75 7Z"
					fill="currentColor"
				/>
				<path
					d="M15.75 9C16.1642 9 16.5 9.33579 16.5 9.75V17.5C16.5 17.9142 16.1642 18.25 15.75 18.25C15.3358 18.25 15 17.9142 15 17.5V9.75C15 9.33579 15.3358 9 15.75 9Z"
					fill="currentColor"
				/>
				<path
					d="M18.75 5C19.1642 5 19.5 5.33579 19.5 5.75V17.5C19.5 17.9142 19.1642 18.25 18.75 18.25C18.3358 18.25 18 17.9142 18 17.5V5.75C18 5.33579 18.3358 5 18.75 5Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 3.75V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.75 17.5V11.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10.75 17.5V7.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18.75 17.5V5.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.75 17.5V9.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconChartCompare;
