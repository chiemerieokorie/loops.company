import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCursor3: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="cursor-3, arrow">
		{variant === "filled" ? (
			<>
				<path
					d="M5.75833 2.8366C3.92462 2.10814 2.10814 3.92462 2.8366 5.75833L7.96079 18.6572C8.558 20.1605 10.499 20.5613 11.6428 19.4175L12.7498 18.3105L16.0124 21.573C16.6958 22.2565 17.8038 22.2565 18.4873 21.573L21.573 18.4873C22.2565 17.8038 22.2565 16.6958 21.573 16.0124L18.3105 12.7498L19.4175 11.6428C20.5613 10.499 20.1605 8.558 18.6572 7.96079L5.75833 2.8366Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M18.3803 8.65784L5.48146 3.53364C4.25899 3.048 3.048 4.25899 3.53364 5.48146L8.65784 18.3803C9.05598 19.3825 10.35 19.6497 11.1125 18.8872L12.3963 17.6034C12.5916 17.4081 12.9081 17.4081 13.1034 17.6034L16.5427 21.0427C16.9333 21.4333 17.5664 21.4333 17.957 21.0427L21.0427 17.957C21.4333 17.5664 21.4333 16.9333 21.0427 16.5427L17.6034 13.1034C17.4081 12.9081 17.4081 12.5916 17.6034 12.3963L18.8872 11.1125C19.6497 10.35 19.3825 9.05598 18.3803 8.65784Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCursor3;
