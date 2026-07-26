import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconMapEditFlat: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="map-edit-flat, route, plan">
		{variant === "filled" ? (
			<>
				<path
					d="M7 3C7.41421 3 7.75 3.33579 7.75 3.75V6H11.75C12.1642 6 12.5 6.33579 12.5 6.75C12.5 7.16421 12.1642 7.5 11.75 7.5H7.75V15.25C7.75 15.6642 7.41421 16 7 16H5.25C4.2835 16 3.5 16.7835 3.5 17.75C3.5 18.7165 4.2835 19.5 5.25 19.5H17.25C18.4926 19.5 19.5 18.4926 19.5 17.25V12.75C19.5 12.3358 19.8358 12 20.25 12C20.6642 12 21 12.3358 21 12.75V17.25C21 19.3211 19.3211 21 17.25 21H5.25C3.45507 21 2 19.5449 2 17.75V6.25C2 4.45507 3.45507 3 5.25 3H7Z"
					fill="currentColor"
				/>
				<path
					d="M16.9697 5.63672C17.9069 4.69952 19.426 4.69958 20.3633 5.63672C21.3005 6.57394 21.3005 8.09305 20.3633 9.03027L16.6133 12.7803C16.4726 12.9209 16.2819 13 16.083 13H13.75C13.3358 13 13 12.6642 13 12.25V9.91699C13 9.71812 13.0791 9.52736 13.2197 9.38672L16.9697 5.63672Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M13.75 12.2502V9.91684L17.5 6.16684C18.1443 5.52251 19.189 5.52251 19.8333 6.16684C20.4777 6.81118 20.4777 7.85584 19.8333 8.50018L16.0833 12.2502H13.75Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.25 3.75H7V15.25H5.25C3.86929 15.25 2.75 16.3693 2.75 17.75V6.25C2.75 4.86929 3.86929 3.75 5.25 3.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20.25 12.75V17.25C20.25 18.9069 18.9069 20.25 17.25 20.25H5.25C3.86929 20.25 2.75 19.1307 2.75 17.75C2.75 16.3693 3.86929 15.25 5.25 15.25H7"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11.75 6.75H7"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconMapEditFlat;
