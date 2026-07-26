import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconLayersBehind: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="layers-behind, slides, pages">
		{variant === "filled" ? (
			<>
				<path
					d="M4.75 3C4.33579 3 4 3.33579 4 3.75C4 4.16421 4.33579 4.5 4.75 4.5H19.25C19.6642 4.5 20 4.16421 20 3.75C20 3.33579 19.6642 3 19.25 3H4.75Z"
					fill="currentColor"
				/>
				<path
					d="M5.75 6C3.67893 6 2 7.67893 2 9.75V16.25C2 18.3211 3.67893 20 5.75 20H18.25C20.3211 20 22 18.3211 22 16.25V9.75C22 7.67893 20.3211 6 18.25 6H5.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M5.75 19.25C4.09315 19.25 2.75 17.9069 2.75 16.25V9.75C2.75 8.09315 4.09315 6.75 5.75 6.75H18.25C19.9069 6.75 21.25 8.09315 21.25 9.75V16.25C21.25 17.9069 19.9069 19.25 18.25 19.25H5.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.75 3.75H19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconLayersBehind;
