import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPeopleCircle: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="people-circle, user-circle,avatar,profile"
	>
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12 2C6.47656 2 2 6.47717 2 12C2 14.897 3.23047 17.5063 5.19922 19.3326C6.98438 20.9879 9.375 22 12 22C14.625 22 17.0156 20.9879 18.8008 19.3326C20.7695 17.5063 22 14.897 22 12C22 6.47717 17.5234 2 12 2ZM5.97656 17.9968C7.30078 16.174 9.41016 15 12 15C14.5898 15 16.6992 16.174 18.0234 17.9968C16.4844 19.543 14.3555 20.5 12 20.5C9.64453 20.5 7.51562 19.543 5.97656 17.9968ZM12 6.75C10.2031 6.75 8.75 8.20508 8.75 10C8.75 11.7949 10.2031 13.25 12 13.25C13.7969 13.25 15.25 11.7949 15.25 10C15.25 8.20508 13.7969 6.75 12 6.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M15.25 10C15.25 11.7949 13.7949 13.25 12 13.25C10.2051 13.25 8.75 11.7949 8.75 10C8.75 8.20507 10.2051 6.75 12 6.75C13.7949 6.75 15.25 8.20507 15.25 10Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18.143 18.9157C16.8294 16.9968 14.668 15.75 12 15.75C9.33203 15.75 7.17056 16.9968 5.85697 18.9157M18.143 18.9157C20.0491 17.2214 21.25 14.7509 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.7509 3.95086 17.2214 5.85697 18.9157M18.143 18.9157C16.5094 20.3679 14.3577 21.25 12 21.25C9.6423 21.25 7.49061 20.3679 5.85697 18.9157"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPeopleCircle;
