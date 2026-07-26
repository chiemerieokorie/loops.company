import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconDrink: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="drink, cup, straw, mug">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M16.4126 2.48218C16.8169 2.39232 17.0719 1.99169 16.982 1.58734C16.8922 1.18299 16.4915 0.928043 16.0872 1.0179L13.1533 1.66987C11.8951 1.94947 10.9999 3.06546 10.9999 4.35438V6.00005H6.81648C5.80565 6.00005 5.00503 6.85398 5.07011 7.86271L5.39231 12.8568L5.39268 12.8627L5.82035 19.4915C5.9397 21.3414 7.38644 22.8064 9.19609 22.9823C9.31673 22.994 9.43899 23 9.56257 23H14.4372C16.1674 23 17.6374 21.8246 18.0632 20.2088C18.124 19.9779 18.1635 19.7381 18.1794 19.4915L18.9297 7.86272C18.9947 6.85398 18.1941 6.00005 17.1833 6.00005H12.4999V4.35438C12.4999 3.76851 12.9068 3.26124 13.4787 3.13415L16.4126 2.48218ZM6.77564 11L6.567 7.76614C6.5577 7.62204 6.67208 7.50005 6.81648 7.50005H17.1833C17.3277 7.50005 17.4421 7.62204 17.4328 7.76614L17.2241 11H6.77564Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M14.4372 22.25H9.56254C7.98067 22.25 6.67061 21.0217 6.56877 19.4431L6.07243 11.75L5.81852 7.81438C5.78134 7.23796 6.23883 6.75 6.81645 6.75H17.1833C17.7609 6.75 18.2184 7.23797 18.1812 7.81438L17.9273 11.75L17.4309 19.4431C17.3291 21.0217 16.019 22.25 14.4372 22.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.07227 11.75H17.9271"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11.75 6.75V4.35434C11.75 3.41695 12.4011 2.60532 13.3161 2.40197L16.25 1.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconDrink;
