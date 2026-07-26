import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBooleanGroupExclude: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="boolean-group-exclude">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M16 16H18C20.2091 16 22 14.2091 22 12V6C22 3.79086 20.2091 2 18 2H12C9.79086 2 8 3.79086 8 6V8H6C3.79086 8 2 9.79086 2 12V18C2 20.2091 3.79086 22 6 22H12C14.2091 22 16 20.2091 16 18V16ZM8 8H12C14.2091 8 16 9.79086 16 12V16H12C9.79086 16 8 14.2091 8 12V8Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M8.75 5.75C8.75 4.09315 10.0931 2.75 11.75 2.75H18.25C19.9069 2.75 21.25 4.09315 21.25 5.75V12.25C21.25 13.9069 19.9069 15.25 18.25 15.25H11.75C10.0931 15.25 8.75 13.9069 8.75 12.25V5.75Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M2.75 11.75C2.75 10.0931 4.09315 8.75 5.75 8.75H12.25C13.9069 8.75 15.25 10.0931 15.25 11.75V18.25C15.25 19.9069 13.9069 21.25 12.25 21.25H5.75C4.09315 21.25 2.75 19.9069 2.75 18.25V11.75Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBooleanGroupExclude;
