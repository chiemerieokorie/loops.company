import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPageTextPieChart: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="page-text-pie-chart">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M4 5.75C4 3.67893 5.67893 2 7.75 2H16.25C18.3211 2 20 3.67893 20 5.75V11.2322C19.1025 10.7644 18.0821 10.5 17 10.5C13.4101 10.5 10.5 13.4101 10.5 17C10.5 19.0104 11.4127 20.8077 12.8464 22H7.75C5.67893 22 4 20.3211 4 18.25V5.75ZM7 5.75C7 5.33579 7.33579 5 7.75 5H14.25C14.6642 5 15 5.33579 15 5.75C15 6.16421 14.6642 6.5 14.25 6.5H7.75C7.33579 6.5 7 6.16421 7 5.75ZM7 9.75C7 9.33579 7.33579 9 7.75 9H10.25C10.6642 9 11 9.33579 11 9.75C11 10.1642 10.6642 10.5 10.25 10.5H7.75C7.33579 10.5 7 10.1642 7 9.75Z"
					fill="currentColor"
					fillRule="evenodd"
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
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10.25 21.25H7.75C6.09315 21.25 4.75 19.9069 4.75 18.25V5.75C4.75 4.09315 6.09315 2.75 7.75 2.75H16.25C17.9069 2.75 19.25 4.09315 19.25 5.75V9.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17 12.75V17L20.0052 20.0052"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.75 6.75H15.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.75 10.75H11.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPageTextPieChart;
