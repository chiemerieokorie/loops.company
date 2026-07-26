import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconShareOs: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="share-os">
		{variant === "filled" ? (
			<>
				<path
					d="M12 1C12.2063 1 12.4036 1.08502 12.5453 1.23503L16.7953 5.73503C17.0797 6.03617 17.0661 6.51085 16.765 6.79526C16.4638 7.07967 15.9891 7.06611 15.7047 6.76497L12.75 3.63642V13.25C12.75 13.6642 12.4142 14 12 14C11.5858 14 11.25 13.6642 11.25 13.25V3.63642L8.29526 6.76497C8.01085 7.06611 7.53617 7.07967 7.23503 6.79526C6.93389 6.51085 6.92033 6.03617 7.20474 5.73503L11.4547 1.23503C11.5964 1.08502 11.7937 1 12 1Z"
					fill="currentColor"
				/>
				<path
					d="M4 12.75C4 10.6789 5.67893 9 7.75 9H9.75V13.25C9.75 14.4926 10.7574 15.5 12 15.5C13.2426 15.5 14.25 14.4926 14.25 13.25V9H16.25C18.3211 9 20 10.6789 20 12.75V17.25C20 19.3211 18.3211 21 16.25 21H7.75C5.67893 21 4 19.3211 4 17.25V12.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M7.75 6.25L12 1.75L16.25 6.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 2.75V13.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.25 9.75C17.9069 9.75 19.25 11.0931 19.25 12.75V17.25C19.25 18.9069 17.9069 20.25 16.25 20.25H7.75C6.09315 20.25 4.75 18.9069 4.75 17.25V12.75C4.75 11.0931 6.09315 9.75 7.75 9.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconShareOs;
