import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconAspectRatio169: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="aspect-ratio-16-9, landscape">
		{variant === "filled" ? (
			<>
				<path
					d="M5.75 5C3.12665 5 1 7.12665 1 9.75V14.25C1 16.8734 3.12665 19 5.75 19H18.25C20.8734 19 23 16.8734 23 14.25V9.75C23 7.12665 20.8734 5 18.25 5H5.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M1.75 8.75C1.75 7.09315 3.09315 5.75 4.75 5.75H19.25C20.9069 5.75 22.25 7.09315 22.25 8.75V15.25C22.25 16.9069 20.9069 18.25 19.25 18.25H4.75C3.09315 18.25 1.75 16.9069 1.75 15.25V8.75Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconAspectRatio169;
