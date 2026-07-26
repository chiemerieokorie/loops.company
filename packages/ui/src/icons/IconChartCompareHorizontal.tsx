import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconChartCompareHorizontal: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="chart-compare-horizontal">
		{variant === "filled" ? (
			<>
				<path
					d="M3.75 3C4.16421 3 4.5 3.33579 4.5 3.75V17.25C4.5 18.4926 5.50736 19.5 6.75 19.5H20.25C20.6642 19.5 21 19.8358 21 20.25C21 20.6642 20.6642 21 20.25 21H6.75C4.67893 21 3 19.3211 3 17.25V3.75C3 3.33579 3.33579 3 3.75 3Z"
					fill="currentColor"
				/>
				<path
					d="M10.25 16.5C10.6642 16.5 11 16.8358 11 17.25C11 17.6642 10.6642 18 10.25 18H6.75C6.33579 18 6 17.6642 6 17.25C6 16.8358 6.33579 16.5 6.75 16.5H10.25Z"
					fill="currentColor"
				/>
				<path
					d="M18.25 13.5C18.6642 13.5 19 13.8358 19 14.25C19 14.6642 18.6642 15 18.25 15H6.75C6.33579 15 6 14.6642 6 14.25C6 13.8358 6.33579 13.5 6.75 13.5H18.25Z"
					fill="currentColor"
				/>
				<path
					d="M12.25 8.5C12.6642 8.5 13 8.83579 13 9.25C13 9.66421 12.6642 10 12.25 10H6.75C6.33579 10 6 9.66421 6 9.25C6 8.83579 6.33579 8.5 6.75 8.5H12.25Z"
					fill="currentColor"
				/>
				<path
					d="M15.25 5.5C15.6642 5.5 16 5.83579 16 6.25C16 6.66421 15.6642 7 15.25 7H6.75C6.33579 7 6 6.66421 6 6.25C6 5.83579 6.33579 5.5 6.75 5.5H15.25Z"
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
					d="M6.75 14.25H18.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.75 9.25H12.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.75 17.25H10.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.75 6.25H15.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconChartCompareHorizontal;
