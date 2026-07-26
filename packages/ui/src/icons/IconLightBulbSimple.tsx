import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconLightBulbSimple: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="light-bulb-simple, idea">
		{variant === "filled" ? (
			<>
				<path
					d="M3.99805 10.0009C3.99805 5.58212 7.58016 2 11.9989 2C16.4177 2 19.9998 5.58212 19.9998 10.0009C19.9998 12.5861 18.7729 14.885 16.8727 16.3465C16.5957 16.5595 16.3043 16.7549 16.0001 16.9308V17H7.99775V16.9308C7.69359 16.7549 7.40216 16.5595 7.12515 16.3465C5.22495 14.885 3.99805 12.5861 3.99805 10.0009Z"
					fill="currentColor"
				/>
				<path
					d="M7.99775 18.5V18.9988C7.99775 21.2086 9.78914 23 11.9989 23C14.2087 23 16.0001 21.2086 16.0001 18.9988V18.5H7.99775Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M11.9992 2.75C7.99462 2.75 4.74829 5.99633 4.74829 10.0009C4.74829 12.3433 5.85907 14.4264 7.58263 15.7519C8.25237 16.267 8.74799 17.017 8.74799 17.862V18.9988C8.74799 20.7944 10.2036 22.25 11.9992 22.25C13.7948 22.25 15.2504 20.7944 15.2504 18.9988V17.862C15.2504 17.017 15.746 16.267 16.4157 15.7519C18.1393 14.4264 19.2501 12.3433 19.2501 10.0009C19.2501 5.99633 16.0037 2.75 11.9992 2.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.74792 17.75H15.2503"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconLightBulbSimple;
