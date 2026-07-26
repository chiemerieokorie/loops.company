import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconTeacher: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="teacher">
		{variant === "filled" ? (
			<>
				<path
					d="M12 2C10.067 2 8.5 3.567 8.5 5.5C8.5 7.433 10.067 9 12 9C13.933 9 15.5 7.433 15.5 5.5C15.5 3.567 13.933 2 12 2Z"
					fill="currentColor"
				/>
				<path
					d="M4.5 9.25C4.5 8.83579 4.16421 8.5 3.75 8.5C3.33579 8.5 3 8.83579 3 9.25V11H2.75C2.33579 11 2 11.3358 2 11.75C2 12.1642 2.33579 12.5 2.75 12.5H3V17.25C3 19.3211 4.67893 21 6.75 21H17.25C19.3211 21 21 19.3211 21 17.25V12.5H21.25C21.6642 12.5 22 12.1642 22 11.75C22 11.3358 21.6642 11 21.25 11H15.4641C14.5985 10.0777 13.3663 9.5 12 9.5C10.6337 9.5 9.40154 10.0777 8.53591 11H7V9.25C7 8.83579 6.66421 8.5 6.25 8.5C5.83579 8.5 5.5 8.83579 5.5 9.25V11H4.5V9.25Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M20.25 11.75V17.25C20.25 18.9069 18.9069 20.25 17.25 20.25H6.75C5.09315 20.25 3.75 18.9069 3.75 17.25V11.75M20.25 11.75H21.25M20.25 11.75H6.25M3.75 11.75H2.75M3.75 11.75V9.25M3.75 11.75H6.25M6.25 11.75V9.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9 11.6042C9.73295 10.7738 10.8053 10.25 12 10.25C13.1947 10.25 14.2671 10.7738 15.0001 11.6042"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.75 5.5C14.75 7.01878 13.5188 8.25 12 8.25C10.4812 8.25 9.25 7.01878 9.25 5.5C9.25 3.98122 10.4812 2.75 12 2.75C13.5188 2.75 14.75 3.98122 14.75 5.5Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconTeacher;
