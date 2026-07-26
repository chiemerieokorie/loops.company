import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBooleanGroupIntersect3: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="boolean-group-intersect-3">
		{variant === "filled" ? (
			<>
				<path
					d="M11.5 8.75C11.5 8.33579 11.8358 8 12.25 8C14.3211 8 16 9.67893 16 11.75C16 12.1642 15.6642 12.5 15.25 12.5C14.8358 12.5 14.5 12.1642 14.5 11.75C14.5 10.5074 13.4926 9.5 12.25 9.5C11.8358 9.5 11.5 9.16421 11.5 8.75Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M8 5.75C8 3.67893 9.67893 2 11.75 2H18.25C20.3211 2 22 3.67893 22 5.75V12.25C22 14.3211 20.3211 16 18.25 16H16V18.25C16 20.3211 14.3211 22 12.25 22H5.75C3.67893 22 2 20.3211 2 18.25V11.75C2 9.67893 3.67893 8 5.75 8H8V5.75ZM9.5 12.25C9.5 13.4926 10.5074 14.5 11.75 14.5H18.25C19.4926 14.5 20.5 13.4926 20.5 12.25V5.75C20.5 4.50736 19.4926 3.5 18.25 3.5H11.75C10.5074 3.5 9.5 4.50736 9.5 5.75V12.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M8.75 5.75C8.75 4.09315 10.0931 2.75 11.75 2.75H18.25C19.9069 2.75 21.25 4.09315 21.25 5.75V12.25C21.25 13.9069 19.9069 15.25 18.25 15.25H11.75C10.0931 15.25 8.75 13.9069 8.75 12.25V5.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.25 8.75C13.9069 8.75 15.25 10.0931 15.25 11.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.75 8.75H5.75C4.09315 8.75 2.75 10.0931 2.75 11.75V18.25C2.75 19.9069 4.09315 21.25 5.75 21.25H12.25C13.9069 21.25 15.25 19.9069 15.25 18.25V15.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBooleanGroupIntersect3;
