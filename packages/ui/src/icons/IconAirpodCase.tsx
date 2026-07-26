import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconAirpodCase: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="airpod-case, airpods">
		{variant === "filled" ? (
			<>
				<path
					d="M7.25 3C4.90279 3 3 4.90279 3 7.25V9H21V7.25C21 4.90279 19.0972 3 16.75 3H7.25Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M21 10.5H3V16.75C3 19.0972 4.90279 21 7.25 21H16.75C19.0972 21 21 19.0972 21 16.75V10.5ZM12 14.5C12.5523 14.5 13 14.0523 13 13.5C13 12.9477 12.5523 12.5 12 12.5C11.4477 12.5 11 12.9477 11 13.5C11 14.0523 11.4477 14.5 12 14.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M16.75 20.25H7.25C5.317 20.25 3.75 18.683 3.75 16.75V9.75V7.25C3.75 5.317 5.317 3.75 7.25 3.75H16.75C18.683 3.75 20.25 5.317 20.25 7.25V9.75V16.75C20.25 18.683 18.683 20.25 16.75 20.25Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20.25 9.75H3.75"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 12.75C12.4142 12.75 12.75 13.0858 12.75 13.5C12.75 13.9142 12.4142 14.25 12 14.25C11.5858 14.25 11.25 13.9142 11.25 13.5C11.25 13.0858 11.5858 12.75 12 12.75Z"
					fill="currentColor"
					stroke="currentColor"
					strokeWidth="0.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconAirpodCase;
