import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconMacintosh: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="macintosh, mac">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M4 5.75C4 3.67893 5.67893 2 7.75 2H16.25C18.3211 2 20 3.67893 20 5.75V15.25C20 16.2345 19.6206 17.1305 19 17.7995V20.25C19 21.2165 18.2165 22 17.25 22H6.75C5.7835 22 5 21.2165 5 20.25V17.7995C4.37941 17.1305 4 16.2345 4 15.25V5.75ZM7.75 3.5C6.50736 3.5 5.5 4.50736 5.5 5.75V15.25C5.5 16.4926 6.50736 17.5 7.75 17.5H16.25C17.4926 17.5 18.5 16.4926 18.5 15.25V5.75C18.5 4.50736 17.4926 3.5 16.25 3.5H7.75ZM7 5.75C7 5.33579 7.33579 5 7.75 5H16.25C16.6642 5 17 5.33579 17 5.75V12.25C17 12.6642 16.6642 13 16.25 13H7.75C7.33579 13 7 12.6642 7 12.25V5.75ZM13 15.25C13 14.8358 13.3358 14.5 13.75 14.5H16.25C16.6642 14.5 17 14.8358 17 15.25C17 15.6642 16.6642 16 16.25 16H13.75C13.3358 16 13 15.6642 13 15.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M13.75 15.25H16.25M5.75 17.5V20.25C5.75 20.8023 6.19772 21.25 6.75 21.25H17.25C17.8023 21.25 18.25 20.8023 18.25 20.25V17.5M7.75 5.75H16.25V12.25H7.75V5.75ZM4.75 15.25V5.75C4.75 4.09315 6.09315 2.75 7.75 2.75H16.25C17.9069 2.75 19.25 4.09315 19.25 5.75V15.25C19.25 16.9069 17.9069 18.25 16.25 18.25H7.75C6.09315 18.25 4.75 16.9069 4.75 15.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconMacintosh;
