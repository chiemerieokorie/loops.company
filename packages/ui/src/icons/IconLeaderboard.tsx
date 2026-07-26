import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconLeaderboard: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="leaderboard, winner, stats, graph">
		{variant === "filled" ? (
			<>
				<path
					d="M11 6C9.61929 6 8.5 7.11929 8.5 8.5V18H15.5V8.5C15.5 7.11929 14.3807 6 13 6H11Z"
					fill="currentColor"
				/>
				<path
					d="M3 8.5C1.61929 8.5 0.5 9.61929 0.5 11V16C0.5 17.1046 1.39543 18 2.5 18H7V8.5H3Z"
					fill="currentColor"
				/>
				<path
					d="M17 10V18H21.5C22.6046 18 23.5 17.1046 23.5 16V12.5C23.5 11.1193 22.3807 10 21 10H17Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M8.25 8.75C8.25 7.64543 9.14543 6.75 10.25 6.75H13.75C14.8546 6.75 15.75 7.64543 15.75 8.75V17.25H12H8.25V8.75Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M1.25 11.25C1.25 10.1454 2.14543 9.25 3.25 9.25H8.25V17.25H3.25C2.14543 17.25 1.25 16.3546 1.25 15.25V11.25Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.75 10.75H20.75C21.8546 10.75 22.75 11.6454 22.75 12.75V15.25C22.75 16.3546 21.8546 17.25 20.75 17.25H15.75V10.75Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconLeaderboard;
