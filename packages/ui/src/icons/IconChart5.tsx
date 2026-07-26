import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconChart5: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="chart-5, statistics, graph">
		{variant === "filled" ? (
			<>
				<path
					d="M11.5 3.00098C10.3954 3.00098 9.5 3.89641 9.5 5.00098V19.001C9.5 20.1055 10.3954 21.001 11.5 21.001H12.5C13.6046 21.001 14.5 20.1055 14.5 19.001V5.00098C14.5 3.89641 13.6046 3.00098 12.5 3.00098H11.5Z"
					fill="currentColor"
				/>
				<path
					d="M5 13.001C3.89543 13.001 3 13.8964 3 15.001V19.001C3 20.1055 3.89543 21.001 5 21.001H6C7.10457 21.001 8 20.1055 8 19.001V15.001C8 13.8964 7.10457 13.001 6 13.001H5Z"
					fill="currentColor"
				/>
				<path
					d="M16 10.001C16 8.89641 16.8954 8.00098 18 8.00098H19C20.1046 8.00098 21 8.89641 21 10.001V19.001C21 20.1055 20.1046 21.001 19 21.001H18C16.8954 21.001 16 20.1055 16 19.001V10.001Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M9.25 20.25V13.75H5.25C4.42157 13.75 3.75 14.4216 3.75 15.25V18.75C3.75 19.5784 4.42157 20.25 5.25 20.25H9.25ZM9.25 20.25H14.75M9.25 20.25V5.25C9.25 4.42157 9.92157 3.75 10.75 3.75H13.25C14.0784 3.75 14.75 4.42157 14.75 5.25V20.25M14.75 20.25H18.75C19.5784 20.25 20.25 19.5784 20.25 18.75V10.25C20.25 9.42157 19.5784 8.75 18.75 8.75H14.75V20.25Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconChart5;
