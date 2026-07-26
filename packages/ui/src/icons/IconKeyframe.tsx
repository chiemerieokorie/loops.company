import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconKeyframe: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="keyframe, rhombus">
		{variant === "filled" ? (
			<>
				<path
					d="M14.6512 3.09102C13.1867 1.62656 10.8124 1.62656 9.3479 3.09102L3.09054 9.34835C1.62607 10.8128 1.62607 13.1872 3.09053 14.6517L9.34789 20.909C10.8124 22.3735 13.1867 22.3735 14.6512 20.909L20.9086 14.6517C22.373 13.1872 22.373 10.8128 20.9086 9.34835L14.6512 3.09102Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M14.1209 3.62135C12.9493 2.44978 11.0498 2.44978 9.87823 3.62135L3.62087 9.87868C2.4493 11.0503 2.44929 12.9497 3.62086 14.1213L9.87822 20.3787C11.0498 21.5503 12.9493 21.5503 14.1209 20.3787L20.3782 14.1213C21.5498 12.9497 21.5498 11.0503 20.3782 9.87868L14.1209 3.62135Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconKeyframe;
