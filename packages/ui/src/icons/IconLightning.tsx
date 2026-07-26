import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconLightning: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="lightning, zap, flash, thunder">
		{variant === "filled" ? (
			<>
				<path
					d="M9.32916 2C8.70285 2 8.12428 2.33472 7.81208 2.87768L3.21208 10.8777C2.54125 12.0443 3.38339 13.5 4.72916 13.5H7.67252C7.83072 13.5 7.94915 13.6451 7.91745 13.8001L6.68268 19.8386C6.33503 21.5388 8.40755 22.6537 9.63464 21.4267L20.5739 10.4874C21.6763 9.385 20.8955 7.5 19.3364 7.5H16.8687C16.6828 7.5 16.562 7.30442 16.6451 7.1382L17.9479 4.53262C18.5296 3.36905 17.6835 2 16.3826 2H9.32916Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M3.86114 11.2515L8.46114 3.25153C8.63954 2.94127 8.97015 2.75 9.32805 2.75H16.3815C17.1249 2.75 17.6084 3.53231 17.2759 4.19721L15.9731 6.80279C15.6407 7.46769 16.1242 8.25 16.8676 8.25H19.3353C20.2262 8.25 20.6724 9.32714 20.0424 9.95711L9.1032 20.8963C8.402 21.5975 7.2177 20.9604 7.41636 19.9889L8.65113 13.9503C8.77791 13.3304 8.30421 12.75 7.67141 12.75H4.72805C3.95903 12.75 3.47781 11.9182 3.86114 11.2515Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconLightning;
