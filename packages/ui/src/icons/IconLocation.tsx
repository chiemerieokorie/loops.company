import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconLocation: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="location, explore, compass">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M18.1963 3.02048C19.8935 2.53554 21.4627 4.10474 20.9778 5.80203L18.1774 15.6034C17.8215 16.8492 16.8477 17.8229 15.6019 18.1789L5.80057 20.9793C4.10328 21.4642 2.53407 19.895 3.01902 18.1977L5.8194 8.39638C6.17534 7.1506 7.14913 6.1768 8.39491 5.82086L18.1963 3.02048ZM9.62341 12C9.62341 10.6883 10.6867 9.625 11.9984 9.625C13.3101 9.625 14.3734 10.6883 14.3734 12C14.3734 13.3117 13.3101 14.375 11.9984 14.375C10.6867 14.375 9.62341 13.3117 9.62341 12Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M15.3989 17.4579C16.3955 17.1732 17.1745 16.3941 17.4593 15.3975L20.2597 5.59617C20.5829 4.46464 19.5368 3.41851 18.4053 3.7418L8.60394 6.54219C7.60732 6.82694 6.82828 7.60597 6.54353 8.6026L3.74315 18.4039C3.41985 19.5355 4.46599 20.5816 5.59751 20.2583L15.3989 17.4579Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.0014 12.0001C14.0014 13.1046 13.106 14.0001 12.0014 14.0001C10.8968 14.0001 10.0014 13.1046 10.0014 12.0001C10.0014 10.8955 10.8968 10.0001 12.0014 10.0001C13.106 10.0001 14.0014 10.8955 14.0014 12.0001Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconLocation;
