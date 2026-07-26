import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconColorRoll: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="color-roll, paint-roller">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M6 5.75C6 4.23122 7.23122 3 8.75 3H18.25C19.7688 3 21 4.23122 21 5.75V8.25C21 9.76878 19.7688 11 18.25 11H8.75C7.23122 11 6 9.76878 6 8.25V7.75H4.75C4.61193 7.75 4.5 7.86193 4.5 8V10.25C4.5 11.4926 5.50736 12.5 6.75 12.5H12C12.9665 12.5 13.75 13.2835 13.75 14.25V15.3445C15.0439 15.6775 16 16.8521 16 18.25V21.25C16 21.6642 15.6642 22 15.25 22C14.8358 22 14.5 21.6642 14.5 21.25V18.25C14.5 17.4216 13.8284 16.75 13 16.75C12.1716 16.75 11.5 17.4216 11.5 18.25V21.25C11.5 21.6642 11.1642 22 10.75 22C10.3358 22 10 21.6642 10 21.25V18.25C10 16.8521 10.9561 15.6775 12.25 15.3445V14.25C12.25 14.1119 12.1381 14 12 14H6.75C4.67893 14 3 12.3211 3 10.25V8C3 7.0335 3.7835 6.25 4.75 6.25H6V5.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M6.75 5.75C6.75 4.64543 7.64543 3.75 8.75 3.75H18.25C19.3546 3.75 20.25 4.64543 20.25 5.75V8.25C20.25 9.35457 19.3546 10.25 18.25 10.25H8.75C7.64543 10.25 6.75 9.35457 6.75 8.25V7V5.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.75 7H4.75C4.19772 7 3.75 7.44772 3.75 8V11.25C3.75 12.3546 4.64543 13.25 5.75 13.25H12C12.5523 13.25 13 13.6977 13 14.25V15.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.25 21.25V18.25C15.25 17.0074 14.2426 16 13 16C11.7574 16 10.75 17.0074 10.75 18.25V21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconColorRoll;
