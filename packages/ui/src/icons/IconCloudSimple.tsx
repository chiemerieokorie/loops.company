import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCloudSimple: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="cloud-simple">
		{variant === "filled" ? (
			<>
				<path
					d="M8.925 4C4.54081 4 1 7.58909 1 12C1 16.4109 4.54081 20 8.925 20H17.125C20.377 20 23 17.3383 23 14.0714C23 10.8045 20.377 8.14286 17.125 8.14286C16.852 8.14286 16.5829 8.1617 16.3191 8.19826C16.0807 8.23131 15.8574 8.11573 15.7595 7.94784C14.3846 5.58939 11.8407 4 8.925 4Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M17.125 19.25H8.925C4.96236 19.25 1.75 16.0041 1.75 12C1.75 7.99594 4.96236 4.75 8.925 4.75C11.5605 4.75 13.8642 6.18583 15.1116 8.32557C15.3741 8.77588 15.9058 9.01272 16.4221 8.94116C16.6519 8.90931 16.8865 8.89286 17.125 8.89286C19.9555 8.89286 22.25 11.2114 22.25 14.0714C22.25 16.9315 19.9555 19.25 17.125 19.25Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCloudSimple;
