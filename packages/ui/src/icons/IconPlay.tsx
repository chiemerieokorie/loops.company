import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPlay: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="play, go">
		{variant === "filled" ? (
			<>
				<path
					d="M10.7998 2.6507C8.30554 1.02248 5 2.81218 5 5.79087V18.209C5 21.1877 8.30553 22.9774 10.7998 21.3492L20.3116 15.1401C22.5785 13.6603 22.5785 10.3395 20.3116 8.85977L10.7998 2.6507Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M19.9016 9.48786L10.3899 3.2788C8.39443 1.97623 5.75 3.40798 5.75 5.79094V18.2091C5.75 20.592 8.39442 22.0238 10.3899 20.7212L19.9016 14.5121C21.7151 13.3283 21.7151 10.6717 19.9016 9.48786Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPlay;
