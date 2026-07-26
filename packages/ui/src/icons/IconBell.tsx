import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBell: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="bell, notification, activity, alert">
		{variant === "filled" ? (
			<>
				<path
					d="M12 2C7.79218 2 4.19826 5.17264 3.74999 9.35647L3.08474 13.0926C2.67558 15.3906 4.44259 17.5 6.77668 17.5H17.2234C19.5575 17.5 21.3245 15.3905 20.9153 13.0925L20.25 9.35648C19.8017 5.17264 16.2077 2 12 2Z"
					fill="currentColor"
				/>
				<path
					d="M16.5839 19H7.416C8.18756 20.7659 9.94964 22 12 22C14.0503 22 15.8124 20.7659 16.5839 19Z"
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
			</>
		)}
	</CentralIconBase>
);

export default IconBell;
