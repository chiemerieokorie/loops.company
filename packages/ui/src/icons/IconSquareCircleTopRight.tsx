import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSquareCircleTopRight: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="square-circle-top-right, notifications, badge"
	>
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M13.3889 3C11.9985 5.13231 12.2392 8.01739 14.1109 9.88909C15.9826 11.7608 18.8677 12.0015 21 10.6111V17.25C21 19.3211 19.3211 21 17.25 21H6.75C4.67893 21 3 19.3211 3 17.25V6.75C3 4.67893 4.67893 3 6.75 3H13.3889Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M19.7678 4.23223C18.7915 3.25592 17.2085 3.25592 16.2322 4.23223C15.2559 5.20854 15.2559 6.79146 16.2322 7.76777C17.2085 8.74408 18.7915 8.74408 19.7678 7.76777C20.7441 6.79146 20.7441 5.20854 19.7678 4.23223ZM20.8284 3.17157C19.2663 1.60948 16.7337 1.60948 15.1716 3.17157C13.6095 4.73367 13.6095 7.26633 15.1716 8.82843C16.7337 10.3905 19.2663 10.3905 20.8284 8.82843C22.3905 7.26633 22.3905 4.73367 20.8284 3.17157Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M11.75 3.75H6.75C5.09315 3.75 3.75 5.09315 3.75 6.75V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H17.25C18.9069 20.25 20.25 18.9069 20.25 17.25V12.25M20.2981 3.7019C21.5673 4.97111 21.5673 7.02889 20.2981 8.2981C19.0289 9.5673 16.9711 9.5673 15.7019 8.2981C14.4327 7.02889 14.4327 4.97111 15.7019 3.7019C16.9711 2.4327 19.0289 2.4327 20.2981 3.7019Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSquareCircleTopRight;
