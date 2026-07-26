import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCalendarTearOff: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="calendar-tear-off, date">
		{variant === "filled" ? (
			<>
				<path
					d="M7.75296 2C8.16718 2 8.50296 2.33579 8.50296 2.75V4.05882H15.503V2.75C15.503 2.33579 15.8387 2 16.253 2C16.6672 2 17.003 2.33579 17.003 2.75V4.05882H17.253C19.1295 4.05882 20.6841 5.43712 20.9596 7.23658L18.148 7.963L14.687 7.46946C14.4536 7.43617 14.2181 7.51458 14.0512 7.68114L13.3694 8.36174L11.2498 7.51542C11.0854 7.44975 10.903 7.44439 10.7349 7.50031L7.86041 8.45677L3.07031 7.09763C3.40261 5.36666 4.92506 4.05882 6.75296 4.05882H7.00296V2.75C7.00296 2.33579 7.33875 2 7.75296 2Z"
					fill="currentColor"
				/>
				<path
					d="M3 8.63773V17.25C3 19.3211 4.67893 21 6.75 21H17.25C19.3211 21 21 19.3211 21 17.25V8.77462L18.3751 9.45279C18.2793 9.47754 18.1796 9.4831 18.0816 9.46913L14.843 9.00729L14.0767 9.77215C13.8647 9.98382 13.547 10.049 13.2688 9.93787L10.9453 9.01016L8.11179 9.95298C7.96895 10.0005 7.8151 10.004 7.67028 9.96286L3 8.63773Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M7.75 4.80882H6.75C5.09315 4.80882 3.75 6.15197 3.75 7.80883V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H17.25C18.9069 20.25 20.25 18.9069 20.25 17.25V7.80882C20.25 6.15197 18.9069 4.80882 17.25 4.80882H16.25M7.75 4.80882H16.25M7.75 4.80882V2.75M16.25 4.80882V2.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.26562 8.21194L7.875 9.24136L10.9688 8.21194L13.5469 9.24136L14.5781 8.21194L18.1875 8.72665L19.7505 8.33659"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCalendarTearOff;
