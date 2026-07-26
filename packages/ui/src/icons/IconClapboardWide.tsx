import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconClapboardWide: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="clapboard-wide, movie, film">
		{variant === "filled" ? (
			<>
				<path
					d="M22 16.25C22 18.3211 20.3211 20 18.25 20H5.75C3.67893 20 2 18.3211 2 16.25V10.5H22V16.25Z"
					fill="currentColor"
				/>
				<path
					d="M6.75098 9H2V7.75C2 5.67893 3.67893 4 5.75 4H8.41797L6.75098 9Z"
					fill="currentColor"
				/>
				<path d="M14 9H8.33301L10 4H15.667L14 9Z" fill="currentColor" />
				<path
					d="M22 9H15.582L17.249 4H18.25C20.3211 4 22 5.67893 22 7.75V9Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M18.25 4.75H5.75C4.09315 4.75 2.75 6.09315 2.75 7.75V16.25C2.75 17.9069 4.09315 19.25 5.75 19.25H18.25C19.9069 19.25 21.25 17.9069 21.25 16.25V7.75C21.25 6.09315 19.9069 4.75 18.25 4.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3 9.75H21"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.75 9.75L9.75 4.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.25 9.75L16.25 4.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconClapboardWide;
