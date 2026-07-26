import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconAnimationEaseIn: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="animation-ease-in">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M20.4092 3.0171C20.814 3.10496 21.071 3.50433 20.9831 3.90912C19.947 8.68244 18.1044 12.4435 15.274 15.2739C12.4436 18.1043 8.68257 19.9469 3.90924 20.983C3.50445 21.0708 3.10508 20.8139 3.01722 20.4091C2.92936 20.0043 3.18628 19.605 3.59107 19.5171C8.16208 18.5249 11.6369 16.7897 14.2134 14.2132C16.7898 11.6368 18.5251 8.16196 19.5172 3.59095C19.6051 3.18616 20.0045 2.92924 20.4092 3.0171Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 20.25C13.0943 18.2218 18.2218 13.0943 20.25 3.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconAnimationEaseIn;
