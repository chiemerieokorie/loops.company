import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPencilLine: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="pencil-line, signature, write">
		{variant === "filled" ? (
			<>
				<path
					d="M20.9001 3.09993C19.4372 1.63701 17.0597 1.63094 15.5944 3.09625L3.09809 15.5925C2.395 16.2956 2 17.2492 2 18.2435V21.25C2 21.6642 2.33579 22 2.75 22H5.75646C6.75079 22 7.70439 21.605 8.40748 20.9019L20.9037 8.40564C22.3691 6.94033 22.363 4.56285 20.9001 3.09993Z"
					fill="currentColor"
				/>
				<path
					d="M12.7461 20.5C12.3319 20.5 11.9961 20.8358 11.9961 21.25C11.9961 21.6642 12.3319 22 12.7461 22H21.2436C21.6578 22 21.9936 21.6642 21.9936 21.25C21.9936 20.8358 21.6578 20.5 21.2436 20.5H12.7461Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 21.2555V18.2482C2.75 17.4525 3.06607 16.6895 3.62868 16.1268L16.1287 3.62684C17.3003 2.45527 19.2034 2.45895 20.375 3.63052C21.5466 4.80209 21.5502 6.70527 20.3787 7.87684L7.87868 20.3768C7.31607 20.9395 6.55301 21.2555 5.75736 21.2555H2.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.75 21.2555H21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPencilLine;
