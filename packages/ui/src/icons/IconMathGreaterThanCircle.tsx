import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconMathGreaterThanCircle: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="math-greater-than-circle, >">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM8.57918 8.41459C8.76442 8.04411 9.21493 7.89394 9.58541 8.07918L16.0854 11.3292C16.3395 11.4562 16.5 11.7159 16.5 12C16.5 12.2841 16.3395 12.5438 16.0854 12.6708L9.58541 15.9208C9.21493 16.1061 8.76442 15.9559 8.57918 15.5854C8.39394 15.2149 8.54411 14.7644 8.91459 14.5792L14.0729 12L8.91459 9.42082C8.54411 9.23558 8.39394 8.78507 8.57918 8.41459Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<circle
					cx="12"
					cy="12"
					r="9.25"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M9.25 8.75L15.75 12L9.25 15.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconMathGreaterThanCircle;
