import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconIcon: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="icon">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M13.25 2C15.3211 2 17 3.67893 17 5.75V6H18.25C20.3211 6 22 7.67893 22 9.75V17.25C22 19.3211 20.3211 21 18.25 21H5.75C3.67893 21 2 19.3211 2 17.25V9.75C2 7.67893 3.67893 6 5.75 6H7V5.75C7 3.67893 8.67893 2 10.75 2H13.25ZM12 10.5C11.5858 10.5 11.25 10.8358 11.25 11.25V12.75H9.75C9.33579 12.75 9 13.0858 9 13.5C9 13.9142 9.33579 14.25 9.75 14.25H11.25V15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75V14.25H14.25C14.6642 14.25 15 13.9142 15 13.5C15 13.0858 14.6642 12.75 14.25 12.75H12.75V11.25C12.75 10.8358 12.4142 10.5 12 10.5ZM10.75 3.5C9.50736 3.5 8.5 4.50736 8.5 5.75V6H15.5V5.75C15.5 4.50736 14.4926 3.5 13.25 3.5H10.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M18.25 6.75H5.75C4.09315 6.75 2.75 8.09315 2.75 9.75V17.25C2.75 18.9069 4.09315 20.25 5.75 20.25H18.25C19.9069 20.25 21.25 18.9069 21.25 17.25V9.75C21.25 8.09315 19.9069 6.75 18.25 6.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.75 6.5V5.75C7.75 4.09315 9.09315 2.75 10.75 2.75H13.25C14.9069 2.75 16.25 4.09315 16.25 5.75V6.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.75 13.5H14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 11.25V15.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconIcon;
