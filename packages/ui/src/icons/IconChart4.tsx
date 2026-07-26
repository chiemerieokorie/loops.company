import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconChart4: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="chart-4, statistics, graph">
		{variant === "filled" ? (
			<>
				<path
					d="M16 5.00098C16 3.89641 16.8954 3.00098 18 3.00098H19C20.1046 3.00098 21 3.89641 21 5.00098V19.001C21 20.1055 20.1046 21.001 19 21.001H18C16.8954 21.001 16 20.1055 16 19.001V5.00098Z"
					fill="currentColor"
				/>
				<path
					d="M11.5 8.50098C10.3954 8.50098 9.5 9.39641 9.5 10.501V19.001C9.5 20.1055 10.3954 21.001 11.5 21.001H12.5C13.6046 21.001 14.5 20.1055 14.5 19.001V10.501C14.5 9.39641 13.6046 8.50098 12.5 8.50098H11.5Z"
					fill="currentColor"
				/>
				<path
					d="M5 14.001C3.89543 14.001 3 14.8964 3 16.001V19.001C3 20.1055 3.89543 21.001 5 21.001H6C7.10457 21.001 8 20.1055 8 19.001V16.001C8 14.8964 7.10457 14.001 6 14.001H5Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M9.25 20.25V14.75H5.25C4.42157 14.75 3.75 15.4216 3.75 16.25V18.75C3.75 19.5784 4.42157 20.25 5.25 20.25H9.25ZM9.25 20.25H14.75M9.25 20.25V10.75C9.25 9.92157 9.92157 9.25 10.75 9.25H14.75V20.25M14.75 20.25H18.75C19.5784 20.25 20.25 19.5784 20.25 18.75V5.25C20.25 4.42157 19.5784 3.75 18.75 3.75H16.25C15.4216 3.75 14.75 4.42157 14.75 5.25V20.25Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconChart4;
