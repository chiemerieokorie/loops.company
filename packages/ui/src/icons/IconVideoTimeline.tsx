import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconVideoTimeline: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="video-timeline, edit-video">
		{variant === "filled" ? (
			<>
				<path
					d="M7 17.5C6.3019 17.5 5.69927 17.9088 5.41841 18.5H2.75C2.33579 18.5 2 18.8358 2 19.25C2 19.6642 2.33579 20 2.75 20H5.41841C5.69927 20.5912 6.3019 21 7 21C7.6981 21 8.30073 20.5912 8.58159 20H21.25C21.6642 20 22 19.6642 22 19.25C22 18.8358 21.6642 18.5 21.25 18.5H8.58159C8.30073 17.9088 7.6981 17.5 7 17.5Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M5.75 4C3.67893 4 2 5.67893 2 7.75V12.75C2 14.8211 3.67893 16.5 5.75 16.5H18.25C20.3211 16.5 22 14.8211 22 12.75V7.75C22 5.67893 20.3211 4 18.25 4H5.75ZM18.5 8.75C18.5 9.7165 17.7165 10.5 16.75 10.5C15.7835 10.5 15 9.7165 15 8.75C15 7.7835 15.7835 7 16.75 7C17.7165 7 18.5 7.7835 18.5 8.75ZM9.77239 10.3463L15.5 15H5.75C4.50736 15 3.5 13.9926 3.5 12.75V11.5L5.15767 10.2567C6.53427 9.22429 8.43689 9.26122 9.77239 10.3463Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M21.25 4.75H2.75V15.75H21.25V4.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M2.75 19.25L21.25 19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3 11.75L5.66001 10.1244C6.7594 9.45259 8.16501 9.55775 9.15219 10.3857L15.25 15.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.75 9.25C17.75 10.0784 17.0784 10.75 16.25 10.75C15.4216 10.75 14.75 10.0784 14.75 9.25C14.75 8.42157 15.4216 7.75 16.25 7.75C17.0784 7.75 17.75 8.42157 17.75 9.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="7"
					cy="19.25"
					r="1"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconVideoTimeline;
