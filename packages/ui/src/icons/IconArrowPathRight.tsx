import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowPathRight: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="arrow-path-right">
		{variant === "filled" ? (
			<>
				<path
					d="M15.0528 4.36309C14.2392 3.68147 13 4.25989 13 5.32124V8.00002H5.75C3.67893 8.00002 2 9.67896 2 11.75V12.25C2 14.3211 3.67893 16 5.75 16H13V18.6788C13 19.7402 14.2392 20.3186 15.0528 19.637L22.1093 13.7247C23.1827 12.8254 23.1827 11.1746 22.1093 10.2754L15.0528 4.36309Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 12.2501V11.7501C2.75 10.0932 4.09315 8.75005 5.75 8.75005H13.75V5.32127C13.75 4.89673 14.2457 4.66536 14.5711 4.93801L21.6277 10.8503C22.3432 11.4498 22.3432 12.5503 21.6277 13.1498L14.5711 19.0621C14.2457 19.3347 13.75 19.1034 13.75 18.6788V15.2501H5.75C4.09315 15.2501 2.75 13.9069 2.75 12.2501Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowPathRight;
