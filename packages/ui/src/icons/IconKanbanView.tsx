import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconKanbanView: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="kanban-view, columns">
		{variant === "filled" ? (
			<>
				<path
					d="M5 4C3.34315 4 2 5.34314 2 7V12.8571C2 14.514 3.34315 15.8571 5 15.8571C6.65685 15.8571 8 14.514 8 12.8571V7C8 5.34315 6.65685 4 5 4Z"
					fill="currentColor"
				/>
				<path
					d="M12 4C10.3431 4 9 5.34315 9 7V17C9 18.6569 10.3431 20 12 20C13.6569 20 15 18.6569 15 17V7C15 5.34315 13.6569 4 12 4Z"
					fill="currentColor"
				/>
				<path
					d="M19 4C17.3431 4 16 5.34314 16 7V10.7857C16 12.4426 17.3431 13.7857 19 13.7857C20.6569 13.7857 22 12.4426 22 10.7857V7C22 5.34315 20.6569 4 19 4Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M9.75 7C9.75 5.75736 10.7574 4.75 12 4.75C13.2426 4.75 14.25 5.75736 14.25 7V17C14.25 18.2426 13.2426 19.25 12 19.25C10.7574 19.25 9.75 18.2426 9.75 17V7Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M2.75 7C2.75 5.75736 3.75736 4.75 5 4.75C6.24264 4.75 7.25 5.75736 7.25 7V12.8571C7.25 14.0998 6.24264 15.1071 5 15.1071C3.75736 15.1071 2.75 14.0998 2.75 12.8571V7Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.75 7C16.75 5.75736 17.7574 4.75 19 4.75C20.2426 4.75 21.25 5.75736 21.25 7V10.7857C21.25 12.0284 20.2426 13.0357 19 13.0357C17.7574 13.0357 16.75 12.0284 16.75 10.7857V7Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconKanbanView;
