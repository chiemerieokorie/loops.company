import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconVideo: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="video, camera, movie, play">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M2 7.75C2 5.67893 3.67893 4 5.75 4H12.25C14.3211 4 16 5.67893 16 7.75V8.78691L19.4674 7.05322C20.631 6.47143 22 7.31755 22 8.61847V15.3824C22 16.6833 20.631 17.5294 19.4674 16.9476L16 15.214V16.25C16 18.3211 14.3211 20 12.25 20H5.75C3.67893 20 2 18.3211 2 16.25V7.75ZM16 13.5369L20.1382 15.606C20.3044 15.6891 20.5 15.5682 20.5 15.3824V8.61847C20.5 8.43262 20.3044 8.31175 20.1382 8.39486L16 10.464V13.5369Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 7.75C2.75 6.09315 4.09315 4.75 5.75 4.75H12.25C13.9069 4.75 15.25 6.09315 15.25 7.75V16.25C15.25 17.9069 13.9069 19.25 12.25 19.25H5.75C4.09315 19.25 2.75 17.9069 2.75 16.25V7.75Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.25 10L19.8028 7.72361C20.4677 7.39116 21.25 7.87465 21.25 8.61803V15.382C21.25 16.1253 20.4677 16.6088 19.8028 16.2764L15.25 14V10Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconVideo;
