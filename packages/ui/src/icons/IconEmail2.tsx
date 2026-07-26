import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconEmail2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="email-2, envelope">
		{variant === "filled" ? (
			<>
				<path
					d="M2.10938 6.84473L10.988 11.3122C11.6242 11.6324 12.3745 11.6324 13.0107 11.3122L21.8894 6.84472C21.4844 5.211 20.0083 4 18.2494 4H5.74937C3.99044 4 2.51435 5.211 2.10938 6.84473Z"
					fill="currentColor"
				/>
				<path
					d="M22 8.46857L13.6855 12.6522C12.6252 13.1857 11.3748 13.1857 10.3144 12.6522L2 8.46857V16.25C2 18.3211 3.67893 20 5.75 20H18.25C20.3211 20 22 18.3211 22 16.25V8.46857Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M21.25 7.75H20.5V16.25H21.25H22V7.75H21.25ZM5.75 4.75V5.5H18.25V4.75V4H5.75V4.75ZM2.75 16.25H3.5V7.75H2.75H2V16.25H2.75ZM18.25 19.25V18.5H5.75V19.25V20H18.25V19.25ZM2.75 16.25H2C2 18.3211 3.67893 20 5.75 20V19.25V18.5C4.50736 18.5 3.5 17.4926 3.5 16.25H2.75ZM5.75 4.75V4C3.67893 4 2 5.67893 2 7.75H2.75H3.5C3.5 6.50736 4.50736 5.5 5.75 5.5V4.75ZM21.25 16.25H20.5C20.5 17.4926 19.4926 18.5 18.25 18.5V19.25V20C20.3211 20 22 18.3211 22 16.25H21.25ZM21.25 7.75H22C22 5.67893 20.3211 4 18.25 4V4.75V5.5C19.4926 5.5 20.5 6.50736 20.5 7.75H21.25Z"
					fill="currentColor"
				/>
				<path
					d="M21.25 8L13.3499 11.9806C12.5008 12.4084 11.4992 12.4084 10.6501 11.9805L2.75 8"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconEmail2;
