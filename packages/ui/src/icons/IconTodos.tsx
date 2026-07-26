import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconTodos: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="todos,check,things, task">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M17.25 3C19.3211 3 21 4.67893 21 6.75V18C21 19.6569 19.6569 21 18 21H15.5C15.2239 21 15 20.7761 15 20.5C15 20.2239 14.7761 20 14.5 20H9.5C9.22386 20 9 20.2239 9 20.5C9 20.7761 8.77614 21 8.5 21H6C4.34315 21 3 19.6569 3 18V6.75C3 4.67893 4.67893 3 6.75 3H17.25ZM15.7558 9.61807C15.9922 9.27798 15.9082 8.81059 15.5681 8.57414C15.228 8.3377 14.7607 8.42172 14.5242 8.76181L11.0972 13.691L9.49578 12.2802C9.18498 12.0064 8.71105 12.0364 8.43724 12.3472C8.16343 12.658 8.19341 13.1319 8.50422 13.4057L10.7369 15.3727C10.8974 15.5141 11.1106 15.5802 11.3229 15.5545C11.5352 15.5288 11.7264 15.4137 11.8485 15.2381L15.7558 9.61807Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M15.75 20.25H17.25C18.9069 20.25 20.25 18.9069 20.25 17.25V6.75C20.25 5.09315 18.9069 3.75 17.25 3.75H6.75C5.09315 3.75 3.75 5.09315 3.75 6.75V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H8.25M9 13.0929L11.2327 15.0599L15.14 9.43994"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconTodos;
