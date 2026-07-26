import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconDeskLamp: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="desk-lamp, light, study">
		{variant === "filled" ? (
			<>
				<path
					d="M15.4035 3C17.6588 3 19.9125 4.31593 20.5471 6.6377C20.6895 7.15899 20.8048 7.69039 20.883 8.23535C21.1132 9.8398 19.7514 10.9998 18.3244 11H17.9973V16.25C17.9973 16.6642 17.6615 17 17.2473 17C16.8331 16.9999 16.4973 16.6641 16.4973 16.25V11H12.7473V19.5H16.2473C16.6615 19.5 16.9973 19.8358 16.9973 20.25C16.9973 20.6642 16.6615 21 16.2473 21H7.74727C7.33315 20.9999 6.99727 20.6641 6.99727 20.25C6.99727 19.8359 7.33315 19.5001 7.74727 19.5H11.2473V11H5.67012C4.2432 10.9998 2.88126 9.83979 3.11152 8.23535C3.18976 7.69034 3.30496 7.15902 3.44746 6.6377C4.08207 4.31602 6.33582 3.0001 8.59102 3H15.4035Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M15.4063 3.75H8.59381C6.59776 3.75 4.70007 4.90999 4.17377 6.83541C4.0383 7.33101 3.9299 7.83163 3.85666 8.34189C3.70461 9.40117 4.60293 10.25 5.67307 10.25H18.3268C19.397 10.25 20.2954 9.40109 20.1433 8.34176C20.07 7.83156 19.9617 7.33098 19.8262 6.83543C19.3 4.91 17.4023 3.75 15.4063 3.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 10.5V20"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.75 20.25H16.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.25 10.75V16.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconDeskLamp;
