import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPostcard2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="postcard-2, address">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M2 7.75C2 5.67893 3.67893 4 5.75 4H18.25C20.3211 4 22 5.67893 22 7.75V16.25C22 18.3211 20.3211 20 18.25 20H5.75C3.67893 20 2 18.3211 2 16.25V7.75ZM13.75 9C12.7835 9 12 9.7835 12 10.75V13.25C12 14.2165 12.7835 15 13.75 15H16.25C17.2165 15 18 14.2165 18 13.25V10.75C18 9.7835 17.2165 9 16.25 9H13.75ZM6.75 9.25C6.33579 9.25 6 9.58579 6 10C6 10.4142 6.33579 10.75 6.75 10.75H9.25C9.66421 10.75 10 10.4142 10 10C10 9.58579 9.66421 9.25 9.25 9.25H6.75ZM6.75 13.25C6.33579 13.25 6 13.5858 6 14C6 14.4142 6.33579 14.75 6.75 14.75H9.25C9.66421 14.75 10 14.4142 10 14C10 13.5858 9.66421 13.25 9.25 13.25H6.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M6.75 10.25H9.25M6.75 13.75H9.25M16.25 14.25H13.75C13.1977 14.25 12.75 13.8023 12.75 13.25V10.75C12.75 10.1977 13.1977 9.75 13.75 9.75H16.25C16.8023 9.75 17.25 10.1977 17.25 10.75V13.25C17.25 13.8023 16.8023 14.25 16.25 14.25ZM5.75 19.25H18.25C19.9069 19.25 21.25 17.9069 21.25 16.25V7.75C21.25 6.09315 19.9069 4.75 18.25 4.75H5.75C4.09315 4.75 2.75 6.09315 2.75 7.75V16.25C2.75 17.9069 4.09315 19.25 5.75 19.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPostcard2;
