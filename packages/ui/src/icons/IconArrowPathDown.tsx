import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowPathDown: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="arrow-path-down">
		{variant === "filled" ? (
			<>
				<path
					d="M4.36309 15.1384C3.68147 14.3249 4.25989 13.0856 5.32124 13.0856H8.00002V5.83565C8.00002 3.76458 9.67896 2.08565 11.75 2.08565H12.25C14.3211 2.08565 16 3.76458 16 5.83565V13.0856H18.6788C19.7402 13.0856 20.3186 14.3249 19.637 15.1384L13.7247 22.195C12.8254 23.2683 11.1746 23.2683 10.2754 22.195L4.36309 15.1384Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					clipRule="evenodd"
					d="M5.32124 13C4.25989 13 3.68147 14.2392 4.36309 15.0528L10.2754 22.1093C11.1746 23.1827 12.8254 23.1827 13.7247 22.1093L19.637 15.0528C20.3186 14.2392 19.7402 13 18.6788 13L16 13V5.75C16 3.67893 14.3211 2 12.25 2H11.75C9.67896 2 8.00002 3.67893 8.00002 5.75V13H5.32124ZM5.85685 14.5H8.75002C9.16424 14.5 9.50002 14.1642 9.50002 13.75V5.75C9.50002 4.50736 10.5074 3.5 11.75 3.5H12.25C13.4927 3.5 14.5 4.50736 14.5 5.75V13.75C14.5 14.1642 14.8358 14.5 15.25 14.5H18.1432L12.5749 21.146C12.2752 21.5038 11.7249 21.5038 11.4251 21.146L5.85685 14.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowPathDown;
