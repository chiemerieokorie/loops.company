import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCircle: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="circle, line, paint">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C12.4142 20.5 12.75 20.8358 12.75 21.25C12.75 21.6642 12.4142 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.9685 19.5935 17.375 16.625 17.375C13.6565 17.375 11.25 14.9685 11.25 12C11.25 11.5858 11.5858 11.25 12 11.25C12.4142 11.25 12.75 11.5858 12.75 12C12.75 14.1401 14.4849 15.875 16.625 15.875C18.7651 15.875 20.5 14.1401 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 14.5543 19.1793 16.625 16.625 16.625C14.0707 16.625 12 14.5543 12 12"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCircle;
