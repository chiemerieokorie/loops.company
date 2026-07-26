import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconTextSelect: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="text-select, lollipops">
		{variant === "filled" ? (
			<>
				<path
					d="M4.25 2C2.59315 2 1.25 3.34315 1.25 5C1.25 6.39788 2.20608 7.57245 3.5 7.90549V15.75C3.5 17.8211 5.17893 19.5 7.25 19.5H13.25C13.6642 19.5 14 19.1642 14 18.75C14 18.3358 13.6642 18 13.25 18H7.25C6.00736 18 5 16.9926 5 15.75V7.90549C6.29392 7.57245 7.25 6.39788 7.25 5C7.25 3.34315 5.90685 2 4.25 2Z"
					fill="currentColor"
				/>
				<path
					d="M10.75 4.5C10.3358 4.5 10 4.83579 10 5.25C10 5.66421 10.3358 6 10.75 6H16.75C17.9926 6 19 7.00736 19 8.25V16.0945C17.7061 16.4275 16.75 17.6021 16.75 19C16.75 20.6569 18.0931 22 19.75 22C21.4069 22 22.75 20.6569 22.75 19C22.75 17.6021 21.7939 16.4275 20.5 16.0945V8.25C20.5 6.17893 18.8211 4.5 16.75 4.5H10.75Z"
					fill="currentColor"
				/>
				<path
					d="M9.25 9.5C8.83579 9.5 8.5 9.83579 8.5 10.25C8.5 10.6642 8.83579 11 9.25 11H14.75C15.1642 11 15.5 10.6642 15.5 10.25C15.5 9.83579 15.1642 9.5 14.75 9.5H9.25Z"
					fill="currentColor"
				/>
				<path
					d="M9.25 13C8.83579 13 8.5 13.3358 8.5 13.75C8.5 14.1642 8.83579 14.5 9.25 14.5H12.75C13.1642 14.5 13.5 14.1642 13.5 13.75C13.5 13.3358 13.1642 13 12.75 13H9.25Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M4.25 7.25V15.75C4.25 17.4069 5.59315 18.75 7.25 18.75H13.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.75 16.75V8.25C19.75 6.59315 18.4069 5.25 16.75 5.25H10.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="4.25"
					cy="5"
					r="2.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="19.75"
					cy="19"
					r="2.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.25 10.25H14.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.25 13.75H12.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconTextSelect;
