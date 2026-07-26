import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBellCheck: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="bell-check, notification alarm, activity, alert"
	>
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3.75023 9.35647C4.1985 5.17264 7.79242 2 12.0002 2C16.208 2 19.802 5.17264 20.2502 9.35648L20.9156 13.0925C21.3248 15.3905 19.5578 17.5 17.2236 17.5H6.77692C4.44283 17.5 2.67583 15.3906 3.08499 13.0926L3.75023 9.35647ZM15.5303 9.28033C15.8232 8.98744 15.8232 8.51256 15.5303 8.21967C15.2374 7.92678 14.7626 7.92678 14.4697 8.21967L11 11.6893L9.53033 10.2197C9.23744 9.92678 8.76256 9.92678 8.46967 10.2197C8.17678 10.5126 8.17678 10.9874 8.46967 11.2803L10.4697 13.2803C10.7626 13.5732 11.2374 13.5732 11.5303 13.2803L15.5303 9.28033Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					d="M12.0002 22C9.94988 22 8.1878 20.7659 7.41624 19H16.5842C15.8126 20.7659 14.0505 22 12.0002 22Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M4.35988 9.38732C4.89728 5.58041 8.15531 2.75 12 2.75C15.8446 2.75 19.1026 5.58042 19.64 9.38732L20.2673 13.8307C20.5222 15.6364 19.1204 17.25 17.2967 17.25H6.70319C4.87955 17.25 3.47773 15.6364 3.73264 13.8307L4.35988 9.38732Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16 17.25C16 19.4591 14.2091 21.25 12 21.25C9.79086 21.25 8 19.4591 8 17.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9 10.75L11 12.75L15 8.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBellCheck;
