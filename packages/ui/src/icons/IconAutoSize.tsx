import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconAutoSize: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="auto-size, automatic-size, page">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M7.75 2C5.67893 2 4 3.67893 4 5.75V18.25C4 20.3211 5.67893 22 7.75 22H16.25C18.3211 22 20 20.3211 20 18.25V5.75C20 3.67893 18.3211 2 16.25 2H7.75ZM5.5 5.75C5.5 4.50736 6.50736 3.5 7.75 3.5H16.25C17.4926 3.5 18.5 4.50736 18.5 5.75V18.25C18.5 19.4926 17.4926 20.5 16.25 20.5H13V14.75C13 12.6789 11.3211 11 9.25 11H5.5V5.75ZM11.5 20.3229V20.5H11.3229C11.3856 20.4447 11.4447 20.3856 11.5 20.3229ZM5.67709 12.5H5.5V12.6771C5.55529 12.6144 5.61444 12.5553 5.67709 12.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 11.75H9.25C10.9069 11.75 12.25 13.0931 12.25 14.75V21.25M4.75 11.75V18.25C4.75 19.9069 6.09315 21.25 7.75 21.25H12.25M4.75 11.75V5.75C4.75 4.09315 6.09315 2.75 7.75 2.75H16.25C17.9069 2.75 19.25 4.09315 19.25 5.75V18.25C19.25 19.9069 17.9069 21.25 16.25 21.25H12.25"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconAutoSize;
