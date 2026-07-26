import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconVideos: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="videos,video-playlist">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M4 3.75C4 3.33579 4.33579 3 4.75 3H19.25C19.6642 3 20 3.33579 20 3.75C20 4.16421 19.6642 4.5 19.25 4.5H4.75C4.33579 4.5 4 4.16421 4 3.75ZM2 9.25C2 7.17893 3.67893 5.5 5.75 5.5H18.25C20.3211 5.5 22 7.17893 22 9.25V17.25C22 19.3211 20.3211 21 18.25 21H5.75C3.67893 21 2 19.3211 2 17.25V9.25ZM10.4187 10.0771C10.675 9.95093 10.9808 9.98132 11.2073 10.1555L14.4573 12.6555C14.6418 12.7975 14.75 13.0171 14.75 13.25C14.75 13.4829 14.6418 13.7025 14.4573 13.8445L11.2073 16.3445C10.9808 16.5187 10.675 16.5491 10.4187 16.4229C10.1623 16.2966 10 16.0357 10 15.75V10.75C10 10.4643 10.1623 10.2034 10.4187 10.0771Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 3.75H19.25M11.5 13.25H12.25M11.5 13.25V13M11.5 13.25V13.5M10.75 10.75V15.75L14 13.25L10.75 10.75ZM5.75 20.25H18.25C19.9069 20.25 21.25 18.9069 21.25 17.25V9.25C21.25 7.59315 19.9069 6.25 18.25 6.25H5.75C4.09315 6.25 2.75 7.59315 2.75 9.25V17.25C2.75 18.9069 4.09315 20.25 5.75 20.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconVideos;
