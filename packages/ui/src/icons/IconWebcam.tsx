import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconWebcam: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="webcam, camera, view">
		{variant === "filled" ? (
			<>
				<path
					d="M12 7.5C10.6193 7.5 9.5 8.61929 9.5 10C9.5 11.3807 10.6193 12.5 12 12.5C13.3807 12.5 14.5 11.3807 14.5 10C14.5 8.61929 13.3807 7.5 12 7.5Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M12 2C7.58172 2 4 5.58172 4 10C4 14.1654 7.18341 17.5872 11.25 17.9653V20.5H6.75C6.33579 20.5 6 20.8358 6 21.25C6 21.6642 6.33579 22 6.75 22H17.25C17.6642 22 18 21.6642 18 21.25C18 20.8358 17.6642 20.5 17.25 20.5H12.75V17.9653C16.8166 17.5872 20 14.1654 20 10C20 5.58172 16.4183 2 12 2ZM8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M6.75 21.25H17.25M12 17.25V21M12 17.25C16.0041 17.25 19.25 14.0041 19.25 10C19.25 5.99594 16.0041 2.75 12 2.75C7.99594 2.75 4.75 5.99594 4.75 10C4.75 14.0041 7.99594 17.25 12 17.25ZM15.25 10C15.25 11.7949 13.7949 13.25 12 13.25C10.2051 13.25 8.75 11.7949 8.75 10C8.75 8.20507 10.2051 6.75 12 6.75C13.7949 6.75 15.25 8.20507 15.25 10Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconWebcam;
