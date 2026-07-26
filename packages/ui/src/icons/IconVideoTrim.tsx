import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconVideoTrim: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="video-trim">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M15.25 2C15.6642 2 16 2.33579 16 2.75V21.25C16 21.6642 15.6642 22 15.25 22C14.8358 22 14.5 21.6642 14.5 21.25V20H5.75C3.67893 20 2 18.3211 2 16.25V7.75C2 5.67893 3.67893 4 5.75 4H14.5V2.75C14.5 2.33579 14.8358 2 15.25 2ZM7.95728 8.90553C7.73081 8.73132 7.42502 8.70093 7.16869 8.82715C6.91235 8.95337 6.75 9.21427 6.75 9.5V14.5C6.75 14.7857 6.91235 15.0466 7.16869 15.1729C7.42502 15.2991 7.73081 15.2687 7.95728 15.0945L11.2073 12.5945C11.3918 12.4525 11.5 12.2329 11.5 12C11.5 11.7671 11.3918 11.5475 11.2073 11.4055L7.95728 8.90553Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					d="M18 4H18.25C20.3211 4 22 5.67893 22 7.75V16.25C22 18.3211 20.3211 20 18.25 20H18V4Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M15.25 2.75V4.75M15.25 4.75V19.25M15.25 4.75H5.75C4.09315 4.75 2.75 6.09315 2.75 7.75V16.25C2.75 17.9069 4.09315 19.25 5.75 19.25H15.25M15.25 19.25V21.25M18.75 19.25C20.1307 19.25 21.25 18.1307 21.25 16.75V7.25C21.25 5.86929 20.1307 4.75 18.75 4.75M8.25 12H9M8.25 12V11.75M8.25 12V12.25M7.5 9.5V14.5L10.75 12L7.5 9.5Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconVideoTrim;
