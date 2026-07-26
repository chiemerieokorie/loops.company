import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBooleanGroupIntersect: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="boolean-group-intersect">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M8 5.75C8 3.67893 9.67893 2 11.75 2H18.25C20.3211 2 22 3.67893 22 5.75V12.25C22 14.3211 20.3211 16 18.25 16H16V18.25C16 20.3211 14.3211 22 12.25 22H5.75C3.67893 22 2 20.3211 2 18.25V11.75C2 9.67893 3.67893 8 5.75 8H8V5.75ZM16 14.5V11.75C16 9.67893 14.3211 8 12.25 8H9.5V5.75C9.5 4.50736 10.5074 3.5 11.75 3.5H18.25C19.4926 3.5 20.5 4.50736 20.5 5.75V12.25C20.5 13.4926 19.4926 14.5 18.25 14.5H16ZM8 9.5H5.75C4.50736 9.5 3.5 10.5074 3.5 11.75V18.25C3.5 19.4926 4.50736 20.5 5.75 20.5H12.25C13.4926 20.5 14.5 19.4926 14.5 18.25V16H11.75C9.67893 16 8 14.3211 8 12.25V9.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M8.75 5.5C8.75 3.98122 9.98122 2.75 11.5 2.75H18.25C19.9069 2.75 21.25 4.09315 21.25 5.75V12.5C21.25 14.0188 20.0188 15.25 18.5 15.25M8.75 8.75V12.25C8.75 13.9069 10.0931 15.25 11.75 15.25H15.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.25 15.25V11.75C15.25 10.0931 13.9069 8.75 12.25 8.75H8.75M5.5 8.75C3.98122 8.75 2.75 9.98122 2.75 11.5V18.25C2.75 19.9069 4.09315 21.25 5.75 21.25H12.5C14.0188 21.25 15.25 20.0188 15.25 18.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBooleanGroupIntersect;
