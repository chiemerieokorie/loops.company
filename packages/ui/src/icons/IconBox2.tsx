import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBox2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="box-2, inbox, archive, tray, shelf">
		{variant === "filled" ? (
			<>
				<path
					d="M6.75003 3L17.25 3C19.3211 3 21 4.67893 21 6.75V17.25C21 19.3211 19.3211 21 17.25 21H6.75C4.67893 21 2.99999 19.3211 3 17.25L3.00001 13.5H7.49191C8.12002 15.3883 9.90032 16.75 12 16.75C14.0997 16.75 15.88 15.3883 16.5081 13.5L21 13.5L21 12L15.9298 12C15.5695 12 15.2601 12.2562 15.1929 12.6102C14.9078 14.1135 13.5858 15.25 12 15.25C10.4142 15.25 9.0922 14.1135 8.80704 12.6102C8.73989 12.2562 8.4305 12 8.07018 12H3.00002L3.00003 6.74999C3.00004 4.67893 4.67897 3 6.75003 3Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 12.75H8.0702C8.42126 14.6006 10.0472 16 12 16C13.9528 16 15.5787 14.6006 15.9298 12.75L20.25 12.75M17.25 20.25H6.75001C5.09315 20.25 3.75 18.9068 3.75001 17.25L3.75004 6.74999C3.75005 5.09314 5.09319 3.75 6.75004 3.75L17.25 3.75C18.9069 3.75 20.25 5.09315 20.25 6.75V17.25C20.25 18.9069 18.9069 20.25 17.25 20.25Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBox2;
