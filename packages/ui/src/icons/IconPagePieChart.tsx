import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPagePieChart: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="page-pie-chart">
		{variant === "filled" ? (
			<>
				<path
					d="M7.75 2C5.67893 2 4 3.67893 4 5.75V18.25C4 20.3211 5.67893 22 7.75 22H12.8464C11.4127 20.8077 10.5 19.0104 10.5 17C10.5 13.4101 13.4101 10.5 17 10.5C18.0821 10.5 19.1025 10.7644 20 11.2322V5.75C20 3.67893 18.3211 2 16.25 2H7.75Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M17 12C14.2386 12 12 14.2386 12 17C12 19.7614 14.2386 22 17 22C18.3805 22 19.6315 21.4395 20.5355 20.5355C21.4395 19.6315 22 18.3805 22 17C22 14.2386 19.7614 12 17 12ZM13.5 17C13.5 15.3244 14.6774 13.9239 16.25 13.5805V17C16.25 17.1989 16.329 17.3897 16.4697 17.5303L18.8875 19.9481C18.3428 20.2977 17.6954 20.5 17 20.5C15.067 20.5 13.5 18.933 13.5 17ZM17.75 16.6893V13.5805C19.3226 13.9239 20.5 15.3244 20.5 17C20.5 17.6954 20.2977 18.3428 19.9481 18.8875L17.75 16.6893Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M21.25 17C21.25 18.1736 20.7743 19.2361 20.0052 20.0052C19.2361 20.7743 18.1736 21.25 17 21.25C14.6528 21.25 12.75 19.3472 12.75 17C12.75 14.6528 14.6528 12.75 17 12.75C19.3472 12.75 21.25 14.6528 21.25 17Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10.25 21.25H7.75C6.09315 21.25 4.75 19.9069 4.75 18.25V5.75C4.75 4.09315 6.09315 2.75 7.75 2.75H16.25C17.9069 2.75 19.25 4.09315 19.25 5.75V9.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17 12.75V17L20.0052 20.0052"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPagePieChart;
