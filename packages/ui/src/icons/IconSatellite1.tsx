import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSatellite1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="satellite-1, radar, feed">
		{variant === "filled" ? (
			<>
				<path
					d="M12 2C11.5858 2 11.25 2.33579 11.25 2.75C11.25 3.16421 11.5858 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 12.4142 20.8358 12.75 21.25 12.75C21.6642 12.75 22 12.4142 22 12C22 6.47715 17.5228 2 12 2Z"
					fill="currentColor"
				/>
				<path
					d="M12 5.25C11.5858 5.25 11.25 5.58579 11.25 6C11.25 6.41421 11.5858 6.75 12 6.75C14.8995 6.75 17.25 9.10051 17.25 12C17.25 12.4142 17.5858 12.75 18 12.75C18.4142 12.75 18.75 12.4142 18.75 12C18.75 8.27208 15.7279 5.25 12 5.25Z"
					fill="currentColor"
				/>
				<path
					d="M7.79774 7.73707C7.02974 6.96907 5.98338 6.59304 4.99923 6.68543C3.99152 6.78004 3.05284 7.37305 2.63503 8.48609C2.22429 9.58028 2 10.7648 2 12C2 17.5228 6.47715 22 12 22C13.2352 22 14.4197 21.7757 15.5139 21.365C16.6269 20.9471 17.22 20.0085 17.3146 19.0008C17.4069 18.0166 17.0309 16.9702 16.2629 16.2022L12.5607 12.5L13.5303 11.5303C13.8232 11.2374 13.8232 10.7626 13.5303 10.4697C13.2374 10.1768 12.7626 10.1768 12.4697 10.4697L11.5 11.4393L7.79774 7.73707Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 12.0002C2.75 17.1089 6.89137 21.2502 12 21.2502C13.1438 21.2502 14.2391 21.0426 15.2503 20.663C16.8856 20.0492 16.9677 17.9679 15.7326 16.7328L7.26741 8.26764C6.03232 7.03255 3.95103 7.11465 3.33719 8.74991C2.9576 9.76111 2.75 10.8564 2.75 12.0002Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 12L13 11"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M21.25 12C21.25 6.89137 17.1086 2.75 12 2.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18 12C18 8.68629 15.3137 6 12 6"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSatellite1;
