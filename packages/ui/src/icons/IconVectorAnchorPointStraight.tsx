import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconVectorAnchorPointStraight: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="vector-anchor-point-straight, no-smoothing"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M12 4C14.0711 4 15.75 5.67893 15.75 7.75C15.75 8.58297 15.478 9.35222 15.0186 9.97461L22.3105 17.5176L21.2324 18.5605L13.9043 10.9795C13.346 11.3094 12.6955 11.5 12 11.5C11.3175 11.5 10.6782 11.3166 10.127 10.998L2.76367 18.5605L1.68945 17.5137L9.00195 10.0029C8.52985 9.37568 8.25 8.59553 8.25 7.75C8.25 5.67893 9.92893 4 12 4Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<circle
					cx="12"
					cy="7.75"
					r="3"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M2.75 17.5L10.0526 10"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
				<path
					d="M21.25 17.5L14 10"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconVectorAnchorPointStraight;
