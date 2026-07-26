import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBooleanGroupUnion2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="boolean-group-union-2">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12 2C9.79086 2 8 3.79086 8 6V8H6C3.79086 8 2 9.79086 2 12V18C2 20.2091 3.79086 22 6 22H12C14.2091 22 16 20.2091 16 18V16H18C20.2091 16 22 14.2091 22 12V6C22 3.79086 20.2091 2 18 2H12ZM13 15.25C13 15.6642 12.6642 16 12.25 16H11.75C9.67893 16 8 14.3211 8 12.25V11.75C8 11.3358 8.33579 11 8.75 11C9.16421 11 9.5 11.3358 9.5 11.75V12.25C9.5 13.4926 10.5074 14.5 11.75 14.5H12.25C12.6642 14.5 13 14.8358 13 15.25ZM11.75 8C11.3358 8 11 8.33579 11 8.75C11 9.16421 11.3358 9.5 11.75 9.5H12.25C13.4926 9.5 14.5 10.5074 14.5 11.75V12.25C14.5 12.6642 14.8358 13 15.25 13C15.6642 13 16 12.6642 16 12.25V11.75C16 9.67893 14.3211 8 12.25 8H11.75Z"
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
					d="M15.25 15.25H18.25C19.9069 15.25 21.25 13.9069 21.25 12.25V5.75C21.25 4.09315 19.9069 2.75 18.25 2.75H11.75C10.0931 2.75 8.75 4.09315 8.75 5.75V8.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11.25 15.25C9.86929 15.25 8.75 14.1307 8.75 12.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.75 8.75C14.1307 8.75 15.25 9.86929 15.25 11.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBooleanGroupUnion2;
