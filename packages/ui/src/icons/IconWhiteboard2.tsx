import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconWhiteboard2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="whiteboard-2">
		{variant === "filled" ? (
			<>
				<path
					d="M12.7502 3.25C12.7502 2.83579 12.4144 2.5 12.0002 2.5C11.586 2.5 11.2502 2.83579 11.2502 3.25V4H2.75C2.33579 4 2 4.33579 2 4.75C2 5.16421 2.33579 5.5 2.75 5.5H3V18.5H2.75C2.33579 18.5 2 18.8358 2 19.25C2 19.6642 2.33579 20 2.75 20H21.25C21.6642 20 22 19.6642 22 19.25C22 18.8358 21.6642 18.5 21.25 18.5H21V5.5H21.25C21.6642 5.5 22 5.16421 22 4.75C22 4.33579 21.6642 4 21.25 4H12.7502V3.25Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M20.25 4.75V19.25M20.25 4.75H12.0002M20.25 4.75H21.25M20.25 19.25H3.75M20.25 19.25H2.75H3.75M20.25 19.25H21.25M3.75 19.25V4.75M3.75 4.75H12.0002M3.75 4.75H2.75M12.0002 4.75V3.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconWhiteboard2;
