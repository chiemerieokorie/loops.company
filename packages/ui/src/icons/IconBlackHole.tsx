import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBlackHole: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="black-hole, galaxy, delete-forever, hide"
	>
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M5.57444 20.9562C4.51461 22.1834 2.5 21.4339 2.5 19.8124V12.0002C2.5 6.75354 6.75329 2.50024 12 2.50024C14.0166 2.50024 15.8878 3.12932 17.4262 4.20144L18.4256 3.04424C19.4854 1.81707 21.5 2.5666 21.5 4.18808V12.0002C21.5 17.2469 17.2467 21.5002 12 21.5002C9.98341 21.5002 8.11216 20.8712 6.57384 19.799L5.57444 20.9562ZM12 15.5002C13.933 15.5002 15.5 13.9332 15.5 12.0002C15.5 10.0672 13.933 8.50024 12 8.50024C10.067 8.50024 8.5 10.0672 8.5 12.0002C8.5 13.9332 10.067 15.5002 12 15.5002Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3.25 19.8124V12.0002C3.25 7.16771 7.16751 3.2502 12 3.2502C14.0999 3.2502 16.0269 3.98989 17.5349 5.22291L18.9932 3.53442C19.5988 2.83318 20.75 3.26148 20.75 4.18804V12.0002C20.75 16.8327 16.8325 20.7502 12 20.7502C9.90015 20.7502 7.97305 20.0105 6.46507 18.7775L5.00682 20.466C4.40121 21.1672 3.25 20.7389 3.25 19.8124Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="12"
					cy="12"
					r="3.75"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBlackHole;
