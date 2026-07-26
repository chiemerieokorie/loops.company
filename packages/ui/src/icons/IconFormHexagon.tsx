import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFormHexagon: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="form-hexagon">
		{variant === "filled" ? (
			<>
				<path
					d="M10.123 2.46628C11.2832 1.79656 12.7129 1.79656 13.873 2.46628L19.3164 5.60886C20.4765 6.27866 21.1912 7.51733 21.1914 8.85691V15.1421C21.1914 16.4817 20.4765 17.7202 19.3164 18.3901L13.873 21.5327C12.7128 22.2026 11.2833 22.2026 10.123 21.5327L4.67969 18.3901C3.51955 17.7202 2.80469 16.4817 2.80469 15.1421V8.85691C2.80485 7.51733 3.51956 6.27866 4.67969 5.60886L10.123 2.46628Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M10.5 3.11603C11.4282 2.58013 12.5718 2.58013 13.5 3.11603L18.9437 6.25897C19.872 6.79487 20.4437 7.78525 20.4437 8.85705V15.1429C20.4437 16.2147 19.872 17.2051 18.9437 17.741L13.5 20.884C12.5718 21.4199 11.4282 21.4199 10.5 20.884L5.05625 17.741C4.12805 17.2051 3.55625 16.2147 3.55625 15.1429V8.85705C3.55625 7.78525 4.12805 6.79487 5.05625 6.25897L10.5 3.11603Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFormHexagon;
