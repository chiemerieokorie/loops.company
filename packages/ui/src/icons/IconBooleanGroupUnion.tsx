import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBooleanGroupUnion: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="boolean-group-union">
		{variant === "filled" ? (
			<>
				<path
					d="M11.75 2C9.67893 2 8 3.67893 8 5.75V8H5.75C3.67893 8 2 9.67893 2 11.75V18.25C2 20.3211 3.67893 22 5.75 22H12.25C14.3211 22 16 20.3211 16 18.25V16H18.25C20.3211 16 22 14.3211 22 12.25V5.75C22 3.67893 20.3211 2 18.25 2H11.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M18.25 2.75H11.75C10.0931 2.75 8.75 4.09315 8.75 5.75V8.75H5.75C4.09315 8.75 2.75 10.0931 2.75 11.75V18.25C2.75 19.9069 4.09315 21.25 5.75 21.25H12.25C13.9069 21.25 15.25 19.9069 15.25 18.25V15.25H18.25C19.9069 15.25 21.25 13.9069 21.25 12.25V5.75C21.25 4.09315 19.9069 2.75 18.25 2.75Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBooleanGroupUnion;
