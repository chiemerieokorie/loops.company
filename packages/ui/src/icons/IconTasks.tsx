import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconTasks: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="tasks, lists, todos">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3 6.75C3 4.67893 4.67893 3 6.75 3H17.25C19.3211 3 21 4.67893 21 6.75V17.25C21 19.3211 19.3211 21 17.25 21H6.75C4.67893 21 3 19.3211 3 17.25V6.75ZM11 9.5C11 9.08579 11.3358 8.75 11.75 8.75H16.25C16.6642 8.75 17 9.08579 17 9.5C17 9.91421 16.6642 10.25 16.25 10.25H11.75C11.3358 10.25 11 9.91421 11 9.5ZM11.75 13.75C11.3358 13.75 11 14.0858 11 14.5C11 14.9142 11.3358 15.25 11.75 15.25H16.25C16.6642 15.25 17 14.9142 17 14.5C17 14.0858 16.6642 13.75 16.25 13.75H11.75ZM9 14.5C9 15.0523 8.55228 15.5 8 15.5C7.44772 15.5 7 15.0523 7 14.5C7 13.9477 7.44772 13.5 8 13.5C8.55228 13.5 9 13.9477 9 14.5ZM8 10.5C8.55228 10.5 9 10.0523 9 9.5C9 8.94772 8.55228 8.5 8 8.5C7.44772 8.5 7 8.94772 7 9.5C7 10.0523 7.44772 10.5 8 10.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M17.25 3.75H6.75C5.09315 3.75 3.75 5.09315 3.75 6.75V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H17.25C18.9069 20.25 20.25 18.9069 20.25 17.25V6.75C20.25 5.09315 18.9069 3.75 17.25 3.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11.75 9.5L16.25 9.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11.75 14.5L16.25 14.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle cx="8" cy="14.5" fill="currentColor" r="1" />
				<circle cx="8" cy="9.5" fill="currentColor" r="1" />
			</>
		)}
	</CentralIconBase>
);

export default IconTasks;
