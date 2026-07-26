import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPeopleCopy: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="people-copy, members">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M5.75 2C3.67893 2 2 3.67893 2 5.75V14.25C2 16.3211 3.67893 18 5.75 18H6V18.6737C6 20.5108 7.48922 22 9.32626 22H18.6737C20.5108 22 22 20.5108 22 18.6737V9.75C22 7.67893 20.3211 6 18.25 6H18V5.75C18 3.67893 16.3211 2 14.25 2H5.75ZM9.75 6H16.5V5.75C16.5 4.50736 15.4926 3.5 14.25 3.5H5.75C4.50736 3.5 3.5 4.50736 3.5 5.75V14.25C3.5 15.4926 4.50736 16.5 5.75 16.5H6V9.75C6 7.67893 7.67893 6 9.75 6ZM14 16.5C11.9345 16.5 10.1422 17.8616 9.24946 19.8556C9.1103 20.1665 9.35066 20.5 9.69122 20.5H18.3088C18.6493 20.5 18.8897 20.1665 18.7505 19.8556C17.8578 17.8616 16.0655 16.5 14 16.5ZM14 15C15.3807 15 16.5 13.8807 16.5 12.5C16.5 11.1193 15.3807 10 14 10C12.6193 10 11.5 11.1193 11.5 12.5C11.5 13.8807 12.6193 15 14 15Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M17.25 6.75V5.75C17.25 4.09315 15.9069 2.75 14.25 2.75H5.75C4.09315 2.75 2.75 4.09315 2.75 5.75V14.25C2.75 15.9069 4.09315 17.25 5.75 17.25H6.75"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18.6737 21.25H9.32626M18.6737 21.25C18.2129 18.9642 16.2954 17.25 14 17.25C11.7046 17.25 9.78713 18.9642 9.32626 21.25M18.6737 21.25C20.0966 21.25 21.25 20.0966 21.25 18.6737V9.75C21.25 8.09315 19.9069 6.75 18.25 6.75H9.75C8.09315 6.75 6.75 8.09315 6.75 9.75V18.6737C6.75 20.0966 7.90343 21.25 9.32626 21.25"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.25 12.5C16.25 13.7426 15.2426 14.75 14 14.75C12.7574 14.75 11.75 13.7426 11.75 12.5C11.75 11.2574 12.7574 10.25 14 10.25C15.2426 10.25 16.25 11.2574 16.25 12.5Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPeopleCopy;
