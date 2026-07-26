import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconNotes: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="notes">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3.5 6.25C3.5 4.17893 5.17893 2.5 7.25 2.5H16.75C18.8211 2.5 20.5 4.17893 20.5 6.25V17.75C20.5 19.8211 18.8211 21.5 16.75 21.5H7.25C5.17893 21.5 3.5 19.8211 3.5 17.75V16.5H3.25C2.83579 16.5 2.5 16.1642 2.5 15.75C2.5 15.3358 2.83579 15 3.25 15H3.5V12.75H3.25C2.83579 12.75 2.5 12.4142 2.5 12C2.5 11.5858 2.83579 11.25 3.25 11.25H3.5V9H3.25C2.83579 9 2.5 8.66421 2.5 8.25C2.5 7.83579 2.83579 7.5 3.25 7.5H3.5V6.25ZM9 8.25C9 7.83579 9.33579 7.5 9.75 7.5H14.25C14.6642 7.5 15 7.83579 15 8.25C15 8.66421 14.6642 9 14.25 9H9.75C9.33579 9 9 8.66421 9 8.25ZM9 12C9 11.5858 9.33579 11.25 9.75 11.25H12.25C12.6642 11.25 13 11.5858 13 12C13 12.4142 12.6642 12.75 12.25 12.75H9.75C9.33579 12.75 9 12.4142 9 12Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3.25 12H5.25M9.75 12H12.25M9.75 8.25H14.25M3.25 8.25H5.25M3.25 15.75H5.25M7.25 20.75H16.75C18.4069 20.75 19.75 19.4069 19.75 17.75V6.25C19.75 4.59315 18.4069 3.25 16.75 3.25H7.25C5.59315 3.25 4.25 4.59315 4.25 6.25V17.75C4.25 19.4069 5.59315 20.75 7.25 20.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconNotes;
