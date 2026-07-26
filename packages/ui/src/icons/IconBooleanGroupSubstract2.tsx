import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBooleanGroupSubstract2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="boolean-group-substract-2">
		{variant === "filled" ? (
			<>
				<path
					d="M9.5 5C9.5 4.17157 10.1716 3.5 11 3.5C11.4142 3.5 11.75 3.16421 11.75 2.75C11.75 2.33579 11.4142 2 11 2C9.34315 2 8 3.34315 8 5C8 5.41421 8.33579 5.75 8.75 5.75C9.16421 5.75 9.5 5.41421 9.5 5Z"
					fill="currentColor"
				/>
				<path
					d="M14 2C13.5858 2 13.25 2.33579 13.25 2.75C13.25 3.16421 13.5858 3.5 14 3.5H16C16.4142 3.5 16.75 3.16421 16.75 2.75C16.75 2.33579 16.4142 2 16 2H14Z"
					fill="currentColor"
				/>
				<path
					d="M19 2C18.5858 2 18.25 2.33579 18.25 2.75C18.25 3.16421 18.5858 3.5 19 3.5C19.8284 3.5 20.5 4.17157 20.5 5C20.5 5.41421 20.8358 5.75 21.25 5.75C21.6642 5.75 22 5.41421 22 5C22 3.34315 20.6569 2 19 2Z"
					fill="currentColor"
				/>
				<path
					d="M22 8C22 7.58579 21.6642 7.25 21.25 7.25C20.8358 7.25 20.5 7.58579 20.5 8V10C20.5 10.4142 20.8358 10.75 21.25 10.75C21.6642 10.75 22 10.4142 22 10V8Z"
					fill="currentColor"
				/>
				<path
					d="M9.5 8.75C9.5 8.33579 9.16421 8 8.75 8H5.75C3.67893 8 2 9.67893 2 11.75V18.25C2 20.3211 3.67893 22 5.75 22H12.25C14.3211 22 16 20.3211 16 18.25V15.25C16 14.8358 15.6642 14.5 15.25 14.5H11.75C10.5074 14.5 9.5 13.4926 9.5 12.25V8.75Z"
					fill="currentColor"
				/>
				<path
					d="M22 13C22 12.5858 21.6642 12.25 21.25 12.25C20.8358 12.25 20.5 12.5858 20.5 13C20.5 13.8284 19.8284 14.5 19 14.5C18.5858 14.5 18.25 14.8358 18.25 15.25C18.25 15.6642 18.5858 16 19 16C20.6569 16 22 14.6569 22 13Z"
					fill="currentColor"
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
					d="M8.75 8.75V10V13C8.75 14.2426 9.75736 15.25 11 15.25H14H15.25M8.75 5C8.75 3.75736 9.75736 2.75 11 2.75M19 2.75C20.2426 2.75 21.25 3.75736 21.25 5M14 2.75H16M21.25 8V10M21.25 13C21.25 14.2426 20.2426 15.25 19 15.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBooleanGroupSubstract2;
