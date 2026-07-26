import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconKeyhole2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="keyhole-2, lock, unlock">
		{variant === "filled" ? (
			<>
				<path
					d="M12 2C15.866 2 19 5.13401 19 9C19 11.5125 17.675 13.7129 15.6895 14.9473L16.834 18.3809C17.4272 20.1613 16.1022 21.9997 14.2256 22H9.77441C7.89776 21.9997 6.57284 20.1613 7.16602 18.3809L8.30957 14.9473C6.32437 13.7129 5 11.5122 5 9C5 5.13401 8.13401 2 12 2Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M5.75 9C5.75 11.452 7.16205 13.5743 9.21736 14.5979L7.87748 18.6175C7.4458 19.9126 8.40974 21.25 9.77485 21.25H14.2251C15.5903 21.25 16.5542 19.9126 16.1225 18.6175L14.7826 14.5979C16.8379 13.5743 18.25 11.452 18.25 9C18.25 5.54822 15.4518 2.75 12 2.75C8.54822 2.75 5.75 5.54822 5.75 9Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconKeyhole2;
