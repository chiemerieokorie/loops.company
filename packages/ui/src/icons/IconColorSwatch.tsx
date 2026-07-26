import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconColorSwatch: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="color-swatch, palette, colours">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M5.75 2C3.67893 2 2 3.67893 2 5.75V16.5C2 19.5376 4.46243 22 7.5 22C8.53234 22 9.49824 21.7156 10.3236 21.2208L19.5601 15.8881C21.3537 14.8526 21.9683 12.5591 20.9327 10.7655L19.1827 7.73446C18.8191 7.10458 18.2989 6.61914 17.7 6.30029C17.3812 5.70142 16.8957 5.1813 16.2659 4.81764L13.2348 3.06764C12.6048 2.70393 11.9115 2.54361 11.2334 2.56697C10.6578 2.20774 9.97733 2 9.25 2H5.75ZM18.8101 14.5891L13.0266 17.9282L17.6385 9.94024C17.8481 9.57717 17.99 9.19359 18.0683 8.80417L19.6337 11.5155C20.255 12.5917 19.8863 13.9678 18.8101 14.5891ZM16.3394 9.19024L13 14.9743V5.75C13 5.33069 12.9311 4.92747 12.8041 4.55104L15.5159 6.11668C15.9489 6.3667 16.2661 6.73716 16.4517 7.16177C16.7292 7.79647 16.7109 8.54679 16.3394 9.19024ZM7.5 18.25C8.4665 18.25 9.25 17.4665 9.25 16.5C9.25 15.5335 8.4665 14.75 7.5 14.75C6.5335 14.75 5.75 15.5335 5.75 16.5C5.75 17.4665 6.5335 18.25 7.5 18.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M9.25 2.75H5.75C4.09315 2.75 2.75 4.09315 2.75 5.75V16.5C2.75 19.1234 4.87665 21.25 7.5 21.25C10.1234 21.25 12.25 19.1234 12.25 16.5V5.75C12.25 4.09315 10.9069 2.75 9.25 2.75Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11.6133 18.8751L16.9883 9.56538C17.8167 8.1305 17.3251 6.29573 15.8902 5.4673L12.4948 3.50694C12.3422 3.41888 12.1549 3.41625 12 3.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.875 20.6136L19.1848 15.2386C20.6197 14.4102 21.1113 12.5754 20.2828 11.1406L18.5215 8.08974C18.3108 7.72481 17.9214 7.5 17.5 7.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.25 16.5C9.25 17.4665 8.4665 18.25 7.5 18.25C6.5335 18.25 5.75 17.4665 5.75 16.5C5.75 15.5335 6.5335 14.75 7.5 14.75C8.4665 14.75 9.25 15.5335 9.25 16.5Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconColorSwatch;
