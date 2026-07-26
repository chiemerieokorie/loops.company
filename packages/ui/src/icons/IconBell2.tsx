import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBell2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="bell-2, notification, activity, alert">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12 2C8.13655 2 4.94782 5.0198 4.75447 8.87114L4.58053 12.3148C4.56437 12.6348 4.48004 12.9476 4.3332 13.2324L3.19525 15.4394C3.06695 15.6882 3 15.9641 3 16.2441C3 17.2138 3.78616 18 4.75593 18H7.30888C7.66846 20.267 9.63185 22 12 22C14.3682 22 16.3315 20.267 16.6911 18H19.2441C20.2138 18 21 17.2138 21 16.2441C21 15.9641 20.9331 15.6882 20.8047 15.4394L19.6668 13.2324C19.52 12.9476 19.4356 12.6348 19.4195 12.3148L19.2455 8.87139C19.0522 5.02005 15.8634 2 12 2ZM12 20.5C10.4632 20.5 9.17555 19.4333 8.83697 18H15.163C14.8245 19.4333 13.5368 20.5 12 20.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M20.25 16.2441C20.25 16.7996 19.7996 17.25 19.2441 17.25H4.75593C4.20037 17.25 3.75 16.7996 3.75 16.2441V16.2441C3.75 16.0837 3.78835 15.9256 3.86186 15.7831L4.9998 13.5761C5.19559 13.1964 5.30802 12.7793 5.32957 12.3526L5.50351 8.90897C5.6766 5.45882 8.53386 2.75 12 2.75C15.4661 2.75 18.3234 5.45882 18.4965 8.90897L18.6704 12.3526C18.692 12.7793 18.8044 13.1964 19.0002 13.5761L20.1381 15.7831C20.2116 15.9256 20.25 16.0837 20.25 16.2441V16.2441Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16 17.25C16 19.4591 14.2091 21.25 12 21.25C9.79086 21.25 8 19.4591 8 17.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBell2;
