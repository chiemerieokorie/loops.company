import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconThumbtack: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="thumbtack, pin, location, bookmark ">
		{variant === "filled" ? (
			<>
				<path
					d="M10.25 2C8.17893 2 6.5 3.67893 6.5 5.75V6.99695C6.5 8.72086 5.81518 10.3742 4.5962 11.5931L4.21967 11.9697C4.07902 12.1103 4 12.3011 4 12.5V15.25C4 15.4489 4.07902 15.6397 4.21967 15.7803C4.36032 15.921 4.55109 16 4.75 16H11.25V21.25C11.25 21.6642 11.5858 22 12 22C12.4142 22 12.75 21.6642 12.75 21.25V16H19.25C19.6642 16 20 15.6642 20 15.25V12.5C20 12.3011 19.921 12.1103 19.7803 11.9697L19.4038 11.5931C18.1848 10.3742 17.5 8.72086 17.5 6.99695V5.75C17.5 3.67893 15.8211 2 13.75 2H10.25Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M12 15.25H4.75V12.5L5.12653 12.1235C6.48616 10.7638 7.25 8.91977 7.25 6.99695V5.75C7.25 4.09315 8.59315 2.75 10.25 2.75H13.75C15.4069 2.75 16.75 4.09315 16.75 5.75V6.99695C16.75 8.91977 17.5138 10.7638 18.8735 12.1235L19.25 12.5V15.25H12ZM12 15.25V21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconThumbtack;
