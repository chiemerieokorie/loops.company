import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowBottomTop: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="arrow-bottom-top, sort 2, switch vertical"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M17.2499 21C16.8399 21 16.4999 20.66 16.4999 20.25V5.06L13.7799 7.78C13.4899 8.07 13.0099 8.07 12.7199 7.78C12.4299 7.49 12.4299 7.01 12.7199 6.72L15.6599 3.78C16.5399 2.9 17.9599 2.9 18.8399 3.78L21.7799 6.72C22.0699 7.01 22.0699 7.49 21.7799 7.78C21.4899 8.07 21.0099 8.07 20.7199 7.78L17.9999 5.06V20.25C17.9999 20.66 17.6599 21 17.2499 21ZM7.74994 20.88C7.14994 20.88 6.57994 20.65 6.15994 20.22L3.21994 17.28C2.92994 16.99 2.92994 16.51 3.21994 16.22C3.50994 15.93 3.98994 15.93 4.27994 16.22L6.99994 18.94V3.75C6.99994 3.34 7.33994 3 7.74994 3C8.15994 3 8.49994 3.34 8.49994 3.75V18.94L11.2199 16.22C11.5099 15.93 11.9899 15.93 12.2799 16.22C12.5699 16.51 12.5699 16.99 12.2799 17.28L9.33994 20.22C8.91994 20.64 8.34994 20.88 7.74994 20.88Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M3.25 7.25L6.18934 4.31066C6.77513 3.72487 7.72487 3.72487 8.31066 4.31066L11.25 7.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.75 16.7502L15.6893 19.6896C16.2751 20.2754 17.2249 20.2754 17.8107 19.6896L20.75 16.7502"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.25 5V20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.75 3.75V19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowBottomTop;
