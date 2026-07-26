import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconChevronTriangleUpSmall: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="chevron-triangle-up-small, dropdown, caret"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M9.8007 13.7501C8.74816 13.7501 8.16683 12.5287 8.83056 11.7118L11.0301 9.00473C11.5303 8.38905 12.4701 8.38905 12.9704 9.00473L15.1699 11.7118C15.8336 12.5287 15.2523 13.7501 14.1997 13.7501H9.8007Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M14.5873 12.1848C14.8528 12.5115 14.6203 13.0001 14.1993 13.0001H9.80026C9.37924 13.0001 9.14671 12.5115 9.4122 12.1848L11.6117 9.47767C11.8118 9.2314 12.1877 9.2314 12.3878 9.47767L14.5873 12.1848Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconChevronTriangleUpSmall;
