import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconYen: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="yen, currency, money, coin">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM9.06443 7.50612C8.79167 7.19439 8.31785 7.16281 8.00612 7.43557C7.69439 7.70833 7.66281 8.18215 7.93557 8.49388L11.2222 12.25H9.75C9.33579 12.25 9 12.5858 9 13C9 13.4142 9.33579 13.75 9.75 13.75H11.25V17.25C11.25 17.6642 11.5858 18 12 18C12.4142 18 12.75 17.6642 12.75 17.25V13.75H14.25C14.6642 13.75 15 13.4142 15 13C15 12.5858 14.6642 12.25 14.25 12.25H12.7778L16.0644 8.49388C16.3372 8.18215 16.3056 7.70833 15.9939 7.43557C15.6822 7.16281 15.2083 7.19439 14.9356 7.50612L12 10.8611L9.06443 7.50612Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M8.5 8L12 12M12 12L15.5 8M12 12V13M12 13V17.25M12 13H9.75M12 13H14.25M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconYen;
