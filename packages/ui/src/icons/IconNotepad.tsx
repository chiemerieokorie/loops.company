import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconNotepad: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="notepad,notes">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M7.75 1.5C8.16421 1.5 8.5 1.83579 8.5 2.25V2.52778H11.25V2.25C11.25 1.83579 11.5858 1.5 12 1.5C12.4142 1.5 12.75 1.83579 12.75 2.25V2.52778H15.5V2.25C15.5 1.83579 15.8358 1.5 16.25 1.5C16.6642 1.5 17 1.83579 17 2.25V2.53598C18.9545 2.66463 20.5 4.29072 20.5 6.27778V17.75C20.5 19.8211 18.8211 21.5 16.75 21.5H7.25C5.17893 21.5 3.5 19.8211 3.5 17.75V6.27778C3.5 4.29072 5.04549 2.66463 7 2.53598V2.25C7 1.83579 7.33579 1.5 7.75 1.5ZM8 9.75C8 9.33579 8.33579 9 8.75 9H15.25C15.6642 9 16 9.33579 16 9.75C16 10.1642 15.6642 10.5 15.25 10.5H8.75C8.33579 10.5 8 10.1642 8 9.75ZM8 13.75C8 13.3358 8.33579 13 8.75 13H13.25C13.6642 13 14 13.3358 14 13.75C14 14.1642 13.6642 14.5 13.25 14.5H8.75C8.33579 14.5 8 14.1642 8 13.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M7.75 3.27734H7.25C5.59315 3.27734 4.25 4.62049 4.25 6.27734V17.7496C4.25 19.4064 5.59315 20.7496 7.25 20.7496H16.75C18.4069 20.7496 19.75 19.4064 19.75 17.7496V6.27734C19.75 4.62049 18.4069 3.27734 16.75 3.27734H16.25H12H7.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.75 9.75H15.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.75 13.75H13.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 4.25V3.27778V2.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.25 4.25V3.27778V2.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.75 4.25V3.27778V2.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconNotepad;
