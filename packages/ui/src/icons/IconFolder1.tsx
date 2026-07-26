import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFolder1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="folder-1">
		{variant === "filled" ? (
			<>
				<path
					d="M5.75 3C3.67893 3 2 4.67893 2 6.75V16.25C2 18.3211 3.67893 20 5.75 20H18.25C20.3211 20 22 18.3211 22 16.25V9.75C22 7.67893 20.3211 6 18.25 6H13.0704C12.6524 6 12.2621 5.79112 12.0303 5.44338L11.5146 4.66987C10.8191 3.62663 9.64827 3 8.39445 3H5.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 6.75V16.25C2.75 17.9069 4.09315 19.25 5.75 19.25H18.25C19.9069 19.25 21.25 17.9069 21.25 16.25V9.75C21.25 8.09315 19.9069 6.75 18.25 6.75H13.0704C12.4017 6.75 11.7772 6.4158 11.4063 5.8594L10.8906 5.0859C10.3342 4.2513 9.39751 3.75 8.39445 3.75H5.75C4.09315 3.75 2.75 5.09315 2.75 6.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFolder1;
