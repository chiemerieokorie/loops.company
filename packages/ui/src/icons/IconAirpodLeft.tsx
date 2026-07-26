import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconAirpodLeft: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="airpod-left">
		{variant === "filled" ? (
			<>
				<path
					d="M9 3C10.1856 3 11.2748 3.41303 12.1318 4.10254C12.7647 4.61178 12.9999 5.43867 13 6.25098V9.74902C12.9999 10.5613 12.7647 11.3882 12.1318 11.8975C11.2748 12.587 10.1856 13 9 13C8.65756 13 8.32308 12.966 8 12.9004V19C8 20.1046 7.10457 21 6 21C4.89543 21 4 20.1046 4 19V8C4 5.23858 6.23858 3 9 3Z"
					fill="currentColor"
				/>
				<path
					d="M15.75 13C16.1642 13 16.5 13.3358 16.5 13.75V19.5H19.25C19.6642 19.5 20 19.8358 20 20.25C20 20.6642 19.6642 21 19.25 21H15.75C15.3358 21 15 20.6642 15 20.25V13.75C15 13.3358 15.3358 13 15.75 13Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M15.75 13.75V20.25H19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.75 12.8984V18.75C7.75 19.5784 7.07843 20.25 6.25 20.25C5.42157 20.25 4.75 19.5784 4.75 18.75V8.5C4.75 5.87669 6.90855 3.75007 9.57129 3.75C9.98844 3.75 10.3932 3.80218 10.7793 3.90029C11.7566 4.14864 12.25 5.15665 12.25 6.16504V10.8342C12.25 11.8425 11.7569 12.8504 10.7798 13.0993C10.3936 13.1976 9.98866 13.25 9.57129 13.25C8.92672 13.25 8.31201 13.1246 7.75 12.8984ZM7.75 12.8984V11.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconAirpodLeft;
