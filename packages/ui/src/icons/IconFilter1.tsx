import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFilter1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="filter-1, sort">
		{variant === "filled" ? (
			<>
				<path
					d="M6.75 3C4.67724 3 3 4.68583 3 6.7552C3 7.74919 3.39468 8.70535 4.09835 9.40901L8.34099 13.6517C8.76295 14.0736 9 14.6459 9 15.2426V21.25C9 21.4844 9.10956 21.7053 9.29615 21.8471C9.48275 21.9889 9.72491 22.0354 9.95073 21.9726L14.4507 20.7226C14.7753 20.6325 15 20.3369 15 20V15.2426C15 14.6459 15.2371 14.0736 15.659 13.6517L19.9016 9.40901C20.6053 8.70534 21 7.74919 21 6.7552C21 4.68583 19.3228 3 17.25 3H6.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M17.25 3.75H6.75C5.09315 3.75 3.75 5.09835 3.75 6.7552C3.75 7.55085 4.06607 8.31607 4.62868 8.87868L8.87132 13.1213C9.43393 13.6839 9.75 14.447 9.75 15.2426V21.25L14.25 20V15.2426C14.25 14.447 14.5661 13.6839 15.1287 13.1213L19.3713 8.87868C19.9339 8.31607 20.25 7.55085 20.25 6.7552C20.25 5.09835 18.9069 3.75 17.25 3.75Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFilter1;
