import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFolder2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="folder-2">
		{variant === "filled" ? (
			<>
				<path
					d="M2 6.75C2 4.67893 3.67893 3 5.75 3H8.72581C9.70258 3 10.6408 3.38112 11.3409 4.06228L11.6496 4.36263C12.0696 4.77133 12.6326 5 13.2186 5H18.25C20.3211 5 22 6.67893 22 8.75V9.74973C21.3733 9.27896 20.5942 9 19.75 9H4.25C3.4058 9 2.62675 9.27896 2 9.74973V6.75Z"
					fill="currentColor"
				/>
				<path
					d="M2 12.75V16.25C2 18.3211 3.67893 20 5.75 20H18.25C20.3211 20 22 18.3211 22 16.25V12.75C22 11.5074 20.9926 10.5 19.75 10.5H4.25C3.00736 10.5 2 11.5074 2 12.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M8.72581 3.75H5.75C4.09315 3.75 2.75 5.09315 2.75 6.75V16.25C2.75 17.9069 4.09315 19.25 5.75 19.25H18.25C19.9069 19.25 21.25 17.9069 21.25 16.25V8.75C21.25 7.09315 19.9069 5.75 18.25 5.75H13.2186C12.4372 5.75 11.6866 5.4451 11.1266 4.90018L10.8179 4.59982C10.2578 4.0549 9.50723 3.75 8.72581 3.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M21.25 12.75C21.25 11.0931 19.9069 9.75 18.25 9.75H5.75C4.09315 9.75 2.75 11.0931 2.75 12.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFolder2;
