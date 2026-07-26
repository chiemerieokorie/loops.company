import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCalendarSearch: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="calendar-search, date-search">
		{variant === "filled" ? (
			<>
				<path
					d="M7.75 2C8.16421 2 8.5 2.33579 8.5 2.75V4H15.5V2.75C15.5 2.33579 15.8358 2 16.25 2C16.6642 2 17 2.33579 17 2.75V4H17.25C19.3211 4 21 5.67893 21 7.75V11.25C21 11.6642 20.6642 12 20.25 12C19.8358 12 19.5 11.6642 19.5 11.25V10H4.5V17.25C4.5 18.4926 5.50736 19.5 6.75 19.5H11.25C11.6642 19.5 12 19.8358 12 20.25C12 20.6642 11.6642 21 11.25 21H6.75C4.67893 21 3 19.3211 3 17.25V7.75C3 5.67893 4.67893 4 6.75 4H7V2.75C7 2.33579 7.33579 2 7.75 2Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M19.9016 14.591C18.4372 13.1265 16.0628 13.1265 14.5983 14.591C13.1339 16.0554 13.1339 18.4298 14.5983 19.8943C15.8812 21.1771 17.8623 21.3362 19.3183 20.3716L20.7197 21.773C21.0126 22.0659 21.4874 22.0659 21.7803 21.773C22.0732 21.4801 22.0732 21.0052 21.7803 20.7123L20.3789 19.3109C21.3436 17.8549 21.1845 15.8738 19.9016 14.591ZM15.659 18.8336C14.7803 17.9549 14.7803 16.5303 15.659 15.6516C16.5377 14.773 17.9623 14.773 18.841 15.6516C19.7197 16.5303 19.7197 17.9549 18.841 18.8336C17.9623 19.7123 16.5377 19.7123 15.659 18.8336Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M7.75 4.75H6.75C5.09315 4.75 3.75 6.09315 3.75 7.75V9.25H20.25V7.75C20.25 6.09315 18.9069 4.75 17.25 4.75H16.25H7.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.75 4.75V2.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.25 4.75V2.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20.25 9.25V11.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 9.25V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H11.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.3713 19.364C18.1997 20.5356 16.3003 20.5356 15.1287 19.364C13.9571 18.1924 13.9571 16.2929 15.1287 15.1214C16.3003 13.9498 18.1997 13.9498 19.3713 15.1214C20.5429 16.2929 20.5429 18.1924 19.3713 19.364ZM19.3713 19.364L21.25 21.2427"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCalendarSearch;
