import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconWhiteboard1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="whiteboard-1, artboard">
		{variant === "filled" ? (
			<>
				<path
					d="M12.75 2.75C12.75 2.33579 12.4142 2 12 2C11.5858 2 11.25 2.33579 11.25 2.75V4H5.75C3.67893 4 2 5.67893 2 7.75V15.25C2 17.3211 3.67893 19 5.75 19H6.95943L6.28849 21.0128C6.1575 21.4058 6.36987 21.8305 6.76283 21.9615C7.15579 22.0925 7.58053 21.8801 7.71151 21.4872L8.54057 19H11.25V20.25C11.25 20.6642 11.5858 21 12 21C12.4142 21 12.75 20.6642 12.75 20.25V19H15.4594L16.2885 21.4872C16.4195 21.8801 16.8442 22.0925 17.2372 21.9615C17.6301 21.8305 17.8425 21.4058 17.7115 21.0128L17.0406 19H18.25C20.3211 19 22 17.3211 22 15.25V7.75C22 5.67893 20.3211 4 18.25 4H12.75V2.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M16 18.25H18.25C19.9069 18.25 21.25 16.9069 21.25 15.25V7.75C21.25 6.09315 19.9069 4.75 18.25 4.75H12M16 18.25L17 21.25M16 18.25H12M8 18.25H5.75C4.09315 18.25 2.75 16.9069 2.75 15.25V7.75C2.75 6.09315 4.09315 4.75 5.75 4.75H12M8 18.25L7 21.25M8 18.25H12M12 4.75V2.75M12 18.25V20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconWhiteboard1;
