import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBellOff: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="bell-off, notification off, activity, alert"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M16.4393 17.5L20.7197 21.7803C21.0126 22.0732 21.4874 22.0732 21.7803 21.7803C22.0732 21.4874 22.0732 21.0126 21.7803 20.7197L3.28033 2.21967C2.98744 1.92678 2.51256 1.92678 2.21967 2.21967C1.92678 2.51256 1.92678 2.98744 2.21967 3.28033L4.90678 5.96744C4.29004 6.97157 3.88273 8.11985 3.75023 9.35647L3.08499 13.0926C2.67583 15.3906 4.44283 17.5 6.77692 17.5H16.4393Z"
					fill="currentColor"
				/>
				<path
					d="M20.9156 13.0925C21.1546 14.4348 20.6511 15.7128 19.7258 16.5436L6.91724 3.73511C8.33242 2.64431 10.104 2 12.0002 2C16.208 2 19.802 5.17264 20.2502 9.35648L20.9156 13.0925Z"
					fill="currentColor"
				/>
				<path
					d="M7.41624 19C8.1878 20.7659 9.94988 22 12.0002 22C14.0505 22 15.8126 20.7659 16.5842 19H7.41624Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M16 17.25C16 19.4591 14.2091 21.25 12 21.25C9.79086 21.25 8 19.4591 8 17.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.84246 6C5.16656 6.98803 4.72068 8.15073 4.58578 9.41531L3.72773 13.6549C3.35164 15.5132 4.77216 17.25 6.66811 17.25H16.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20.1167 16L19.4142 9.4153C19.0098 5.62501 15.8118 2.75 12 2.75C10.5347 2.75 9.16008 3.17485 8 3.91323"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M2.75 2.75L21.25 21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBellOff;
