import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconWardrobe: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="wardrobe">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M11.25 2H7.75C5.67893 2 4 3.67893 4 5.75V16.25C4 17.689 4.81055 18.9387 6 19.5675V21.25C6 21.6642 6.33579 22 6.75 22C7.16421 22 7.5 21.6642 7.5 21.25V19.9918C7.58263 19.9972 7.66599 20 7.75 20H11.25V2ZM9.5 9.75C9.5 9.33579 9.16421 9 8.75 9C8.33579 9 8 9.33579 8 9.75V12.25C8 12.6642 8.33579 13 8.75 13C9.16421 13 9.5 12.6642 9.5 12.25V9.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M18 19.5675C19.1895 18.9387 20 17.689 20 16.25V5.75C20 3.67893 18.3211 2 16.25 2H12.75V20H16.25C16.334 20 16.4174 19.9972 16.5 19.9918V21.25C16.5 21.6642 16.8358 22 17.25 22C17.6642 22 18 21.6642 18 21.25V19.5675ZM15.25 9C15.6642 9 16 9.33579 16 9.75V12.25C16 12.6642 15.6642 13 15.25 13C14.8358 13 14.5 12.6642 14.5 12.25V9.75C14.5 9.33579 14.8358 9 15.25 9Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 5.75C4.75 4.09315 6.09315 2.75 7.75 2.75H16.25C17.9069 2.75 19.25 4.09315 19.25 5.75V16.25C19.25 17.9069 17.9069 19.25 16.25 19.25H7.75C6.09315 19.25 4.75 17.9069 4.75 16.25V5.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.75 19.25V21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.25 19.25V21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 3V19"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.75 9.75V12.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.25 9.75V12.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconWardrobe;
