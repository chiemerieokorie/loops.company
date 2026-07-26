import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconAnimationEaseOut: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="animation-ease-out">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M20.9831 3.59095C21.071 3.99574 20.814 4.39511 20.4092 4.48297C15.8382 5.47512 12.3634 7.21036 9.78695 9.78682C7.21048 12.3633 5.47524 15.8381 4.48309 20.4091C4.39523 20.8139 3.99586 21.0708 3.59107 20.983C3.18628 20.8951 2.92936 20.4957 3.01722 20.0909C4.05329 15.3176 5.89589 11.5566 8.72629 8.72616C11.5567 5.89577 15.3177 4.05317 20.0911 3.0171C20.4959 2.92924 20.8952 3.18616 20.9831 3.59095Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M20.25 3.75C10.9057 5.77822 5.77822 10.9057 3.75 20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconAnimationEaseOut;
