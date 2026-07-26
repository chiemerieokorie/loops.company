import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconVolumeDown: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="volume-down">
		{variant === "filled" ? (
			<>
				<path
					d="M10.1568 3.46416C11.3026 2.54749 13 3.36329 13 4.83068V19.1694C13 20.6368 11.3026 21.4526 10.1568 20.5359L6.07931 17.274C5.85767 17.0967 5.58228 17.0001 5.29844 17.0001H3.75C2.23122 17.0001 1 15.7688 1 14.2501V9.75005C1 8.23127 2.23122 7.00005 3.75 7.00005H5.29844C5.58228 7.00005 5.85767 6.90345 6.07931 6.72614L10.1568 3.46416Z"
					fill="currentColor"
				/>
				<path
					d="M15.75 11.25C15.3358 11.25 15 11.5858 15 12C15 12.4142 15.3358 12.75 15.75 12.75H22.25C22.6642 12.75 23 12.4142 23 12C23 11.5858 22.6642 11.25 22.25 11.25H15.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M22.25 12H15.75M3.75 7.74999H5.29844C5.75258 7.74999 6.1932 7.59543 6.54783 7.31173L10.6253 4.04974C11.2801 3.52593 12.25 3.99211 12.25 4.83061V19.1694C12.25 20.0079 11.2801 20.474 10.6253 19.9502L6.54783 16.6883C6.1932 16.4045 5.75258 16.25 5.29844 16.25H3.75C2.64543 16.25 1.75 15.3546 1.75 14.25V9.74999C1.75 8.64542 2.64543 7.74999 3.75 7.74999Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconVolumeDown;
