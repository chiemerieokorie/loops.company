import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconShield2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="shield-2, safety, privacy">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M10.5354 2.05661C11.4714 1.65952 12.5286 1.65952 13.4646 2.05661L18.7146 4.28388C20.1001 4.8717 21 6.23096 21 7.73606V13C21 17.9705 16.9706 22 12 22C7.02944 22 3 17.9705 3 13V7.73606C3 6.23096 3.89987 4.8717 5.28544 4.28388L10.5354 2.05661Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 7.73608C3.75 6.532 4.4699 5.44459 5.57835 4.97434L10.8284 2.74706C11.5772 2.42939 12.4228 2.42939 13.1716 2.74706L18.4216 4.97434C19.5301 5.44459 20.25 6.532 20.25 7.73608V13C20.25 17.5563 16.5563 21.25 12 21.25C7.44365 21.25 3.75 17.5563 3.75 13V7.73608Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconShield2;
