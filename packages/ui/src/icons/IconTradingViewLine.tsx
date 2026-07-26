import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconTradingViewLine: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="trading-view-line">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M22.7116 6.15893C23.0381 6.41388 23.0961 6.8852 22.8411 7.21166L16.7028 15.0716C15.3278 16.8324 12.7278 17.0078 11.1286 15.4477L8.61374 12.9942C7.69127 12.0942 6.20282 12.1514 5.35221 13.1196L2.31344 16.5784C2.04005 16.8896 1.56617 16.9202 1.25499 16.6468C0.943816 16.3734 0.913185 15.8995 1.18658 15.5883L4.22534 12.1296C5.64303 10.516 8.12377 10.4205 9.66123 11.9205L12.1761 14.374C13.1356 15.3101 14.6956 15.2049 15.5206 14.1484L21.6589 6.28841C21.9139 5.96195 22.3852 5.90398 22.7116 6.15893Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M1.75 16.0833L4.78877 12.6246C5.92292 11.3337 7.90751 11.2573 9.13748 12.4573L11.6523 14.9108C12.9317 16.1589 15.0117 16.0186 16.1117 14.61L22.25 6.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconTradingViewLine;
