import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFormRhombus: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="form-rhombus">
		{variant === "filled" ? (
			<>
				<path
					d="M10.5003 1.79286C11.18 0.660149 12.8225 0.660238 13.5022 1.79286L19.0852 11.0995C19.4177 11.6537 19.4177 12.3461 19.0852 12.9003L13.5022 22.2069C12.8224 23.3395 11.1799 23.3396 10.5003 22.2069L4.91726 12.9003C4.58486 12.3462 4.58489 11.6536 4.91726 11.0995L10.5003 1.79286Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M5.5587 11.4855L11.1425 2.17915C11.5309 1.53182 12.4691 1.53182 12.8575 2.17916L18.4413 11.4855C18.6313 11.8022 18.6313 12.1978 18.4413 12.5145L12.8575 21.8208C12.4691 22.4682 11.5309 22.4682 11.1425 21.8208L5.5587 12.5145C5.36869 12.1978 5.36869 11.8022 5.5587 11.4855Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFormRhombus;
