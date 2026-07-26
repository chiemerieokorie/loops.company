import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconStorage: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="storage, hdd, ssd">
		{variant === "filled" ? (
			<>
				<path
					d="M16 17C15.4477 17 15 17.4477 15 18C15 18.5523 15.4477 19 16 19C16.5523 19 17 18.5523 17 18C17 17.4477 16.5523 17 16 17Z"
					fill="currentColor"
				/>
				<path
					d="M12 18C12 17.4477 12.4477 17 13 17C13.5523 17 14 17.4477 14 18C14 18.5523 13.5523 19 13 19C12.4477 19 12 18.5523 12 18Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M5 3.20047C4.37941 3.86954 4 4.76546 4 5.75V18.25C4 20.3211 5.67893 22 7.75 22H16.25C18.3211 22 20 20.3211 20 18.25V5.75C20 4.76546 19.6206 3.86954 19 3.20047V3H18.7995C18.1305 2.37941 17.2345 2 16.25 2H7.75C6.76546 2 5.86954 2.37941 5.20047 3H5V3.20047ZM5.5 18.25V17.75C5.5 16.5074 6.50736 15.5 7.75 15.5H16.25C17.4926 15.5 18.5 16.5074 18.5 17.75V18.25C18.5 19.4926 17.4926 20.5 16.25 20.5H7.75C6.50736 20.5 5.5 19.4926 5.5 18.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 18V17.75C4.75 16.0931 6.09315 14.75 7.75 14.75H16.25C17.9069 14.75 19.25 16.0931 19.25 17.75V18M19.25 18V5.75C19.25 4.09315 17.9069 2.75 16.25 2.75H7.75C6.09315 2.75 4.75 4.09315 4.75 5.75V18.25C4.75 19.9069 6.09315 21.25 7.75 21.25H16.25C17.9069 21.25 19.25 19.9069 19.25 18.25V18Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13 17.25C13.4142 17.25 13.75 17.5858 13.75 18C13.75 18.4142 13.4142 18.75 13 18.75C12.5858 18.75 12.25 18.4142 12.25 18C12.25 17.5858 12.5858 17.25 13 17.25ZM16 17.25C16.4142 17.25 16.75 17.5858 16.75 18C16.75 18.4142 16.4142 18.75 16 18.75C15.5858 18.75 15.25 18.4142 15.25 18C15.25 17.5858 15.5858 17.25 16 17.25Z"
					fill="currentColor"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="0.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconStorage;
