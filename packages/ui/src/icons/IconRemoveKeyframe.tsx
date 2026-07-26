import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconRemoveKeyframe: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="remove-keyframe, rhombus">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M9.3479 3.09102C10.8124 1.62656 13.1867 1.62656 14.6512 3.09102L20.9086 9.34835C22.373 10.8128 22.373 13.1872 20.9086 14.6517L14.6512 20.909C13.1867 22.3735 10.8124 22.3735 9.34789 20.909L3.09053 14.6517C1.62607 13.1872 1.62607 10.8128 3.09054 9.34835L9.3479 3.09102ZM9.74951 11.25C9.3353 11.25 8.99951 11.5858 8.99951 12C8.99951 12.4142 9.3353 12.75 9.74951 12.75H14.2495C14.6637 12.75 14.9995 12.4142 14.9995 12C14.9995 11.5858 14.6637 11.25 14.2495 11.25H9.74951Z"
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
				<path
					d="M9.75 12H14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconRemoveKeyframe;
