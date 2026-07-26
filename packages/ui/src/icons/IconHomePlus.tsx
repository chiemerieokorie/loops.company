import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconHomePlus: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="home-plus">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M10.0566 4.05077C11.2511 3.32699 12.7489 3.32699 13.9434 4.05077L19.1934 7.23241C20.3146 7.91202 20.9999 9.12832 21 10.4394V17.25C20.9999 19.3209 19.321 21 17.25 21H6.75C4.67902 21 3.00014 19.3209 3 17.25V10.4394C3.00011 9.12832 3.68538 7.91202 4.80664 7.23241L10.0566 4.05077ZM12 9.49999C11.5858 9.49999 11.25 9.83578 11.25 10.25V12.25H9.25C8.83579 12.25 8.5 12.5858 8.5 13C8.50007 13.4141 8.83583 13.75 9.25 13.75H11.25V15.75C11.2501 16.1641 11.5858 16.5 12 16.5C12.4142 16.5 12.7499 16.1641 12.75 15.75V13.75H14.75C15.1642 13.75 15.4999 13.4141 15.5 13C15.5 12.5858 15.1642 12.25 14.75 12.25H12.75V10.25C12.75 9.83578 12.4142 9.49999 12 9.49999Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M5.19509 7.87418C4.29796 8.4179 3.75 9.39074 3.75 10.4398V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H17.25C18.9069 20.25 20.25 18.9069 20.25 17.25V10.4398C20.25 9.39074 19.702 8.4179 18.8049 7.87418L13.5549 4.69237C12.5992 4.11316 11.4008 4.11316 10.4451 4.69237L5.19509 7.87418Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 10.25V15.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.25 13H14.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconHomePlus;
