import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPause: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="pause">
		{variant === "filled" ? (
			<>
				<path
					d="M7 3C5.34315 3 4 4.34315 4 6V18C4 19.6569 5.34315 21 7 21C8.65685 21 10 19.6569 10 18V6C10 4.34315 8.65685 3 7 3Z"
					fill="currentColor"
				/>
				<path
					d="M17 3C15.3431 3 14 4.34315 14 6V18C14 19.6569 15.3431 21 17 21C18.6569 21 20 19.6569 20 18V6C20 4.34315 18.6569 3 17 3Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 6C4.75 4.75736 5.75736 3.75 7 3.75C8.24264 3.75 9.25 4.75736 9.25 6V18C9.25 19.2426 8.24264 20.25 7 20.25C5.75736 20.25 4.75 19.2426 4.75 18V6Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.75 6C14.75 4.75736 15.7574 3.75 17 3.75C18.2426 3.75 19.25 4.75736 19.25 6V18C19.25 19.2426 18.2426 20.25 17 20.25C15.7574 20.25 14.75 19.2426 14.75 18V6Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPause;
