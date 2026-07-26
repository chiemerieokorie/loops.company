import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconInfoSimple: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="info-simple, tooltip, information">
		{variant === "filled" ? (
			<>
				<path
					d="M11 9.5C11.9665 9.5 12.75 10.2835 12.75 11.25V18.5H14.25C14.6642 18.5 15 18.8358 15 19.25C15 19.6642 14.6642 20 14.25 20H9.75C9.33579 20 9 19.6642 9 19.25C9 18.8358 9.33579 18.5 9.75 18.5H11.25V11.25C11.25 11.1119 11.1381 11 11 11H9.75C9.33579 11 9 10.6642 9 10.25C9 9.83579 9.33579 9.5 9.75 9.5H11Z"
					fill="currentColor"
				/>
				<path
					d="M12 4C12.8284 4 13.5 4.67157 13.5 5.5C13.5 6.32843 12.8284 7 12 7C11.1716 7 10.5 6.32843 10.5 5.5C10.5 4.67157 11.1716 4 12 4Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<circle cx="12" cy="5.5" fill="currentColor" r="1.5" />
				<path
					d="M9.75 10.25H11C11.5523 10.25 12 10.6977 12 11.25V19.25M12 19.25H9.75M12 19.25H14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconInfoSimple;
