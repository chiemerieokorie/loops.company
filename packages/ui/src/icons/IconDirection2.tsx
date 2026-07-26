import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconDirection2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="direction-2, route">
		{variant === "filled" ? (
			<>
				<path
					d="M12 3C11.5858 3 11.25 3.33579 11.25 3.75V8.25H5.25C3.45507 8.25 2 9.70507 2 11.5C2 13.2949 3.45507 14.75 5.25 14.75H11.25V19.5H7.75C7.33579 19.5 7 19.8358 7 20.25C7 20.6642 7.33579 21 7.75 21H16.25C16.6642 21 17 20.6642 17 20.25C17 19.8358 16.6642 19.5 16.25 19.5H12.75V9.75H18.625C20.489 9.75 22 8.23896 22 6.375C22 4.51104 20.489 3 18.625 3H12Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M12 9V3.75H18.625C20.0747 3.75 21.25 4.92525 21.25 6.375C21.25 7.82475 20.0747 9 18.625 9H12ZM12 9V14M12 9H5.25C3.86929 9 2.75 10.1193 2.75 11.5C2.75 12.8807 3.86929 14 5.25 14H12M12 14V20.25M12 20.25H7.75M12 20.25H16.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconDirection2;
