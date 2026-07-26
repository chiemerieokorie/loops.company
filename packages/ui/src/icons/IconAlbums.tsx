import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconAlbums: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="albums, cover">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M11 6.78077C11 4.26932 13.4206 2.46771 15.8263 3.18856L18.3263 3.93764C19.9131 4.4131 21 5.87336 21 7.52986V16.4703C21 18.1268 19.9131 19.5871 18.3263 20.0626L15.8263 20.8116C13.4206 21.5325 11 19.7309 11 17.2194V6.78077ZM7.75 4.0001C8.16421 4.0001 8.5 4.33589 8.5 4.7501V19.2501C8.5 19.6643 8.16421 20.0001 7.75 20.0001C7.33579 20.0001 7 19.6643 7 19.2501V4.7501C7 4.33589 7.33579 4.0001 7.75 4.0001ZM3.75 5.0001C4.16421 5.0001 4.5 5.33589 4.5 5.7501V18.2501C4.5 18.6643 4.16421 19.0001 3.75 19.0001C3.33579 19.0001 3 18.6643 3 18.2501V5.7501C3 5.33589 3.33579 5.0001 3.75 5.0001Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 5.75V18.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.75 4.75V19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11.75 17.2193V6.78067C11.75 4.77151 13.6864 3.33022 15.6111 3.9069L18.1111 4.65598C19.3805 5.03635 20.25 6.20455 20.25 7.52975V16.4702C20.25 17.7954 19.3805 18.9637 18.1111 19.344L15.6111 20.0931C13.6864 20.6698 11.75 19.2285 11.75 17.2193Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconAlbums;
