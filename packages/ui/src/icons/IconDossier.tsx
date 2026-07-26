import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconDossier: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="dossier">
		{variant === "filled" ? (
			<>
				<path
					d="M2 7.75C2 5.67893 3.67893 4 5.75 4H8V9.5H22V16.25C22 18.3211 20.3211 20 18.25 20H5.75C3.67893 20 2 18.3211 2 16.25V7.75Z"
					fill="currentColor"
				/>
				<path d="M9.5 4H15V8H9.5V4Z" fill="currentColor" />
				<path
					d="M16.5 4H18.25C20.3211 4 22 5.67893 22 7.75V8H16.5V4Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M9.25 4.75V8.75H21.25M9.25 4.75H5.75C4.09315 4.75 2.75 6.09315 2.75 7.75V16.25C2.75 17.9069 4.09315 19.25 5.75 19.25H18.25C19.9069 19.25 21.25 17.9069 21.25 16.25V8.75M9.25 4.75H15.25M21.25 8.75V7.75C21.25 6.09315 19.9069 4.75 18.25 4.75H15.25M15.25 4.75V8.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconDossier;
