import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconRoller: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="roller, scooter">
		{variant === "filled" ? (
			<>
				<path
					d="M13.75 4C13.3358 4 13 4.33579 13 4.75C13 5.16421 13.3358 5.5 13.75 5.5C14.7157 5.5 15.5528 6.16843 15.7666 7.11019L17.1633 13.2643C16.1174 13.6969 15.3269 14.6217 15.0805 15.75H8.91946C8.57612 14.1774 7.17556 13 5.5 13C3.567 13 2 14.567 2 16.5C2 18.433 3.567 20 5.5 20C7.17556 20 8.57612 18.8226 8.91946 17.25H15.0805C15.4239 18.8226 16.8244 20 18.5 20C20.433 20 22 18.433 22 16.5C22 14.6146 20.5092 13.0774 18.6421 13.0028L17.2294 6.77821C16.8606 5.1533 15.4162 4 13.75 4Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<circle
					cx="5.5"
					cy="16.5"
					r="2.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="18.5"
					cy="16.5"
					r="2.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18 13.5625L16.498 6.9442C16.2067 5.66086 15.066 4.75 13.75 4.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.5 16.5H15.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconRoller;
