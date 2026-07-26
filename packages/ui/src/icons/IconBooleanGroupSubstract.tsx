import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBooleanGroupSubstract: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="boolean-group-substract">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M11.75 2C9.67893 2 8 3.67893 8 5.75V8H5.75C3.67893 8 2 9.67893 2 11.75V18.25C2 20.3211 3.67893 22 5.75 22H12.25C14.3211 22 16 20.3211 16 18.25V16H18.25C20.3211 16 22 14.3211 22 12.25V5.75C22 3.67893 20.3211 2 18.25 2H11.75ZM18.25 14.5C19.4926 14.5 20.5 13.4926 20.5 12.25V5.75C20.5 4.50736 19.4926 3.5 18.25 3.5H11.75C10.5074 3.5 9.5 4.50736 9.5 5.75V12.25C9.5 13.4926 10.5074 14.5 11.75 14.5H18.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M8.75 8.75H5.75C4.09315 8.75 2.75 10.0931 2.75 11.75V18.25C2.75 19.9069 4.09315 21.25 5.75 21.25H12.25C13.9069 21.25 15.25 19.9069 15.25 18.25V15.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.75 5.75C8.75 4.09315 10.0931 2.75 11.75 2.75H18.25C19.9069 2.75 21.25 4.09315 21.25 5.75V12.25C21.25 13.9069 19.9069 15.25 18.25 15.25H11.75C10.0931 15.25 8.75 13.9069 8.75 12.25V5.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBooleanGroupSubstract;
