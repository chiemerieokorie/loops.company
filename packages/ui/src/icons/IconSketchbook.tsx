import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSketchbook: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="sketchbook">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3.5 6.25C3.5 4.17893 5.17893 2.5 7.25 2.5H16.75C18.8211 2.5 20.5 4.17893 20.5 6.25V17.75C20.5 19.8211 18.8211 21.5 16.75 21.5H7.25C5.17893 21.5 3.5 19.8211 3.5 17.75V6.25ZM8 7.75C8 7.33579 8.33579 7 8.75 7H15.25C15.6642 7 16 7.33579 16 7.75C16 8.16421 15.6642 8.5 15.25 8.5H8.75C8.33579 8.5 8 8.16421 8 7.75ZM8 11.75C8 11.3358 8.33579 11 8.75 11H12.25C12.6642 11 13 11.3358 13 11.75C13 12.1642 12.6642 12.5 12.25 12.5H8.75C8.33579 12.5 8 12.1642 8 11.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M19.75 17.75V6.25C19.75 4.59315 18.4069 3.25 16.75 3.25H7.25C5.59315 3.25 4.25 4.59315 4.25 6.25V17.75C4.25 19.4069 5.59315 20.75 7.25 20.75H16.75C18.4069 20.75 19.75 19.4069 19.75 17.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.75 7.75H15.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.75 11.75H12.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSketchbook;
