import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCollaborationPointerRight: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="collaboration-pointer-right, cursor, agents"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M2.30433 13.7188C2.4596 13.335 2.89698 13.1497 3.28089 13.3048L7.67542 15.0812C8.24115 15.3098 8.68993 15.7586 8.91859 16.3243L10.695 20.7188C10.8501 21.1028 10.6648 21.5401 10.2809 21.6954C9.89695 21.8505 9.45959 21.6652 9.30433 21.2813L7.52796 16.8858C7.45173 16.6974 7.30231 16.548 7.1139 16.4718L2.71839 14.6954C2.33462 14.5401 2.14918 14.1028 2.30433 13.7188Z"
					fill="currentColor"
				/>
				<path
					d="M17.4713 3.69345C19.219 3.12665 20.8731 4.78075 20.3063 6.52842L16.5075 18.2394C15.8552 20.2496 13.042 20.3327 12.2721 18.3644L10.526 13.8995C10.4498 13.7047 10.295 13.5499 10.1002 13.4737L5.63539 11.7276C3.66728 10.9576 3.75033 8.14463 5.76039 7.49228L17.4713 3.69345Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M10.3739 12.7752L5.90868 11.0286C4.59639 10.5153 4.65197 8.63955 5.99235 8.20483L17.7034 4.40666C18.8685 4.02878 19.9708 5.13113 19.593 6.29625L15.7948 18.0073C15.3601 19.3477 13.4843 19.4032 12.971 18.0909L11.2244 13.6257C11.072 13.236 10.7636 12.9277 10.3739 12.7752Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3 14L7.39513 15.7762C7.77231 15.9286 8.07141 16.2277 8.22383 16.6049L10 21"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCollaborationPointerRight;
