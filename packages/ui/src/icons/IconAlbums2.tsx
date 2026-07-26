import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconAlbums2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="albums-2, cover">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M17.2202 11C19.7317 11 21.5333 13.4206 20.8124 15.8263L20.0633 18.3263C19.5879 19.9131 18.1276 21 16.4711 21H7.53063C5.87413 21 4.41387 19.9131 3.93842 18.3263L3.18933 15.8263C2.46848 13.4206 4.27009 11 6.78155 11H17.2202ZM20.0009 7.75C20.0009 8.16421 19.6651 8.5 19.2509 8.5H4.75087C4.33666 8.5 4.00087 8.16421 4.00087 7.75C4.00087 7.33579 4.33666 7 4.75087 7H19.2509C19.6651 7 20.0009 7.33579 20.0009 7.75ZM19.0009 3.75C19.0009 4.16421 18.6651 4.5 18.2509 4.5H5.75087C5.33666 4.5 5.00087 4.16421 5.00087 3.75C5.00087 3.33579 5.33666 3 5.75087 3H18.2509C18.6651 3 19.0009 3.33579 19.0009 3.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M18.25 3.75H5.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.25 7.75H4.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.78067 11.75H17.2193C19.2285 11.75 20.6698 13.6864 20.0931 15.6111L19.344 18.1111C18.9637 19.3805 17.7954 20.25 16.4702 20.25H7.52975C6.20455 20.25 5.03635 19.3805 4.65598 18.1111L3.9069 15.6111C3.33022 13.6864 4.77151 11.75 6.78067 11.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconAlbums2;
