import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconDirectorChair: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="director-chair, chair">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M20 11V5.75C20 3.67893 18.3211 2 16.25 2H7.75C5.67893 2 4 3.67893 4 5.75V11H2.75C2.33579 11 2 11.3358 2 11.75C2 12.1642 2.33579 12.5 2.75 12.5H4.52633L10.6315 16.5L4.33907 20.6226C3.99259 20.8496 3.89574 21.3145 4.12274 21.661C4.34974 22.0075 4.81463 22.1043 5.1611 21.8773L12.0001 17.3966L18.8391 21.8773C19.1855 22.1043 19.6504 22.0075 19.8774 21.661C20.1044 21.3145 20.0076 20.8496 19.6611 20.6226L13.3686 16.5L19.4738 12.5H21.25C21.6642 12.5 22 12.1642 22 11.75C22 11.3358 21.6642 11 21.25 11H20ZM16.7367 12.5H7.26343L12.0001 15.6033L16.7367 12.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M19.25 11.75H4.75V5.75C4.75 4.09315 6.09315 2.75 7.75 2.75H16.25C17.9069 2.75 19.25 4.09315 19.25 5.75V11.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M2.75 11.75H4.75L12 16.5L19.25 21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M21.25 11.75H19.25L12 16.5L4.75 21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconDirectorChair;
