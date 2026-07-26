import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBox2AltFill: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="box-2-alt-fill, inbox, archive, tray, shelf"
	>
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3.00001 13.7459L3.00003 6.74999C3.00004 4.67893 4.67897 3 6.75003 3L17.25 3C19.3211 3 21 4.67893 21 6.75V13.7462C21 13.7475 21 13.7487 21 13.75L21 17.25C21 19.0622 19.7146 20.5741 18.0057 20.9238C17.7616 20.9738 17.5089 21 17.25 21H6.75C4.80837 21 3.21139 19.5244 3.01936 17.6334C3.00656 17.5073 3 17.3794 3 17.25M6.75003 4.5L17.25 4.5C18.4926 4.5 19.5 5.50736 19.5 6.75V13L15.9298 13C15.5695 13 15.2601 13.2562 15.1929 13.6102C14.9078 15.1135 13.5858 16.25 12 16.25C10.4142 16.25 9.09221 15.1135 8.80706 13.6102C8.73991 13.2562 8.43051 13 8.0702 13H4.50001L4.50003 6.75C4.50004 5.50736 5.50739 4.5 6.75003 4.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					d="M3 17.25V13.75C3 13.7486 3 13.7473 3.00001 13.7459"
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

export default IconBox2AltFill;
