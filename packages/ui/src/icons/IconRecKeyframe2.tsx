import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconRecKeyframe2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="rec-keyframe-2, rhombus">
		{variant === "filled" ? (
			<>
				<path
					d="M9.74951 12C9.74951 10.7574 10.7569 9.75 11.9995 9.75C13.2422 9.75 14.2495 10.7574 14.2495 12C14.2495 13.2426 13.2422 14.25 11.9995 14.25C10.7569 14.25 9.74951 13.2426 9.74951 12Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M9.3479 3.09102C10.8124 1.62656 13.1867 1.62656 14.6512 3.09102L20.9086 9.34835C22.373 10.8128 22.373 13.1872 20.9086 14.6517L14.6512 20.909C13.1867 22.3735 10.8124 22.3735 9.34789 20.909L3.09053 14.6517C1.62607 13.1872 1.62607 10.8128 3.09054 9.34835L9.3479 3.09102ZM11.9995 8.25C9.92844 8.25 8.24951 9.92893 8.24951 12C8.24951 14.0711 9.92844 15.75 11.9995 15.75C14.0706 15.75 15.7495 14.0711 15.7495 12C15.7495 9.92893 14.0706 8.25 11.9995 8.25Z"
					fill="currentColor"
					fillRule="evenodd"
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
				<circle
					cx="12"
					cy="12"
					r="2.75"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconRecKeyframe2;
