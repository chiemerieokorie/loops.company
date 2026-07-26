import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconAddKeyframe: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="add-keyframe, rhombus">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M9.3479 3.09102C10.8124 1.62656 13.1867 1.62656 14.6512 3.09102L20.9086 9.34835C22.373 10.8128 22.373 13.1872 20.9086 14.6517L14.6512 20.909C13.1867 22.3735 10.8124 22.3735 9.34789 20.909L3.09053 14.6517C1.62607 13.1872 1.62607 10.8128 3.09054 9.34835L9.3479 3.09102ZM12.7495 9C12.7495 8.58579 12.4137 8.25 11.9995 8.25C11.5853 8.25 11.2495 8.58579 11.2495 9V11.25H8.99951C8.5853 11.25 8.24951 11.5858 8.24951 12C8.24951 12.4142 8.5853 12.75 8.99951 12.75H11.2495V15C11.2495 15.4142 11.5853 15.75 11.9995 15.75C12.4137 15.75 12.7495 15.4142 12.7495 15V12.75H14.9995C15.4137 12.75 15.7495 12.4142 15.7495 12C15.7495 11.5858 15.4137 11.25 14.9995 11.25H12.7495V9Z"
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
					d="M12 9V15M9 12H15"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconAddKeyframe;
