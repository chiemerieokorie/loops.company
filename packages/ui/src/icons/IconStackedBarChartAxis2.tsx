import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconStackedBarChartAxis2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="stacked-bar-chart-axis-2">
		{variant === "filled" ? (
			<>
				<path
					d="M3.75 3C4.16421 3 4.5 3.33579 4.5 3.75V17.25C4.5 18.4926 5.50736 19.5 6.75 19.5H20.25C20.6642 19.5 21 19.8358 21 20.25C21 20.6642 20.6642 21 20.25 21H6.75C4.67893 21 3 19.3211 3 17.25V3.75C3 3.33579 3.33579 3 3.75 3Z"
					fill="currentColor"
				/>
				<path
					d="M9.5 9C10.8807 9 12 10.1193 12 11.5V18H7V11.5C7 10.1193 8.11929 9 9.5 9Z"
					fill="currentColor"
				/>
				<path
					d="M15.5 6C16.8807 6 18 7.11929 18 8.5V18H13V8.5C13 7.11929 14.1193 6 15.5 6Z"
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
					d="M7.25 17.75V12.5C7.25 10.9812 8.48122 9.75 10 9.75C11.5188 9.75 12.75 10.9812 12.75 12.5V17.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.75 17.75V9.5C12.75 7.98122 13.9812 6.75 15.5 6.75C17.0188 6.75 18.25 7.98122 18.25 9.5V17.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconStackedBarChartAxis2;
