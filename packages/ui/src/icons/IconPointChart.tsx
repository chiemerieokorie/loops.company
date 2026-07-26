import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPointChart: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="point-chart, dots">
		{variant === "filled" ? (
			<>
				<path
					d="M3.75 3C4.16421 3 4.5 3.33579 4.5 3.75V17.25C4.5 18.4926 5.50736 19.5 6.75 19.5H20.25C20.6642 19.5 21 19.8358 21 20.25C21 20.6642 20.6642 21 20.25 21H6.75C4.67893 21 3 19.3211 3 17.25V3.75C3 3.33579 3.33579 3 3.75 3Z"
					fill="currentColor"
				/>
				<path
					d="M8.25 14.5C8.25 13.8096 8.80964 13.25 9.5 13.25C10.1904 13.25 10.75 13.8096 10.75 14.5C10.75 15.1904 10.1904 15.75 9.5 15.75C8.80964 15.75 8.25 15.1904 8.25 14.5Z"
					fill="currentColor"
				/>
				<path
					d="M11.5 7.25C10.8096 7.25 10.25 7.80964 10.25 8.5C10.25 9.19036 10.8096 9.75 11.5 9.75C12.1904 9.75 12.75 9.19036 12.75 8.5C12.75 7.80964 12.1904 7.25 11.5 7.25Z"
					fill="currentColor"
				/>
				<path
					d="M15.25 11.5C15.25 10.8096 15.8096 10.25 16.5 10.25C17.1904 10.25 17.75 10.8096 17.75 11.5C17.75 12.1904 17.1904 12.75 16.5 12.75C15.8096 12.75 15.25 12.1904 15.25 11.5Z"
					fill="currentColor"
				/>
				<path
					d="M18.5 4.25C17.8096 4.25 17.25 4.80964 17.25 5.5C17.25 6.19036 17.8096 6.75 18.5 6.75C19.1904 6.75 19.75 6.19036 19.75 5.5C19.75 4.80964 19.1904 4.25 18.5 4.25Z"
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
					d="M9.5 14.5H9.51M10 14.5C10 14.7761 9.77614 15 9.5 15C9.22386 15 9 14.7761 9 14.5C9 14.2239 9.22386 14 9.5 14C9.77614 14 10 14.2239 10 14.5Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11.5 8.5H11.51M12 8.5C12 8.77614 11.7761 9 11.5 9C11.2239 9 11 8.77614 11 8.5C11 8.22386 11.2239 8 11.5 8C11.7761 8 12 8.22386 12 8.5Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.5 11.5H16.51M17 11.5C17 11.7761 16.7761 12 16.5 12C16.2239 12 16 11.7761 16 11.5C16 11.2239 16.2239 11 16.5 11C16.7761 11 17 11.2239 17 11.5Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18.5 5.5H18.51M19 5.5C19 5.77614 18.7761 6 18.5 6C18.2239 6 18 5.77614 18 5.5C18 5.22386 18.2239 5 18.5 5C18.7761 5 19 5.22386 19 5.5Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPointChart;
