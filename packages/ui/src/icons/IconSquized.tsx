import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSquized: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="squized,centered,aligned">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12 3C12.4142 3 12.75 3.33579 12.75 3.75V20.25C12.75 20.6642 12.4142 21 12 21C11.5858 21 11.25 20.6642 11.25 20.25V3.75C11.25 3.33579 11.5858 3 12 3ZM4.46967 8.46967C4.76256 8.17678 5.23744 8.17678 5.53033 8.46967L8.53033 11.4697C8.82322 11.7626 8.82322 12.2374 8.53033 12.5303L5.53033 15.5303C5.23744 15.8232 4.76256 15.8232 4.46967 15.5303C4.17678 15.2374 4.17678 14.7626 4.46967 14.4697L6.18934 12.75H1.75C1.33579 12.75 1 12.4142 1 12C1 11.5858 1.33579 11.25 1.75 11.25H6.18934L4.46967 9.53033C4.17678 9.23744 4.17678 8.76256 4.46967 8.46967ZM19.5303 8.46967C19.8232 8.76256 19.8232 9.23744 19.5303 9.53033L17.8107 11.25H22.25C22.6642 11.25 23 11.5858 23 12C23 12.4142 22.6642 12.75 22.25 12.75H17.8107L19.5303 14.4697C19.8232 14.7626 19.8232 15.2374 19.5303 15.5303C19.2374 15.8232 18.7626 15.8232 18.4697 15.5303L15.4697 12.5303C15.1768 12.2374 15.1768 11.7626 15.4697 11.4697L18.4697 8.46967C18.7626 8.17678 19.2374 8.17678 19.5303 8.46967Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M12 3.75V20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5 9L8 12L5 15"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19 9L16 12L19 15"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.5 12H1.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M22.25 12H16.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSquized;
