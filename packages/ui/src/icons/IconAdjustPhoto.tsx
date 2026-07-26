import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconAdjustPhoto: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="adjust-photo, tuning, settings">
		{variant === "filled" ? (
			<>
				<g clipPath="url(#clip0_11449_32865)">
					<path
						d="M2.2 12C2.2 12.6075 1.70751 13.1 1.1 13.1C0.492487 13.1 0 12.6075 0 12C0 11.3925 0.492487 10.9 1.1 10.9C1.70751 10.9 2.2 11.3925 2.2 12Z"
						fill="currentColor"
					/>
					<path
						d="M24 12C24 12.6075 23.5075 13.1 22.9 13.1C22.2925 13.1 21.8 12.6075 21.8 12C21.8 11.3925 22.2925 10.9 22.9 10.9C23.5075 10.9 24 11.3925 24 12Z"
						fill="currentColor"
					/>
					<path
						d="M18.9297 18.9297C19.3593 18.5002 20.0558 18.5002 20.4853 18.9297C20.9149 19.3593 20.9149 20.0558 20.4853 20.4854C20.0558 20.9149 19.3593 20.9149 18.9297 20.4854C18.5001 20.0558 18.5001 19.3593 18.9297 18.9297Z"
						fill="currentColor"
					/>
					<path
						d="M3.51479 3.51479C3.94437 3.08521 4.64085 3.08521 5.07043 3.51479C5.5 3.94436 5.5 4.64084 5.07043 5.07042C4.64085 5.5 3.94437 5.5 3.51479 5.07042C3.08522 4.64084 3.08522 3.94436 3.51479 3.51479Z"
						fill="currentColor"
					/>
					<path
						d="M18.9297 5.07044C18.5002 4.64086 18.5002 3.94438 18.9297 3.5148C19.3593 3.08522 20.0558 3.08522 20.4854 3.5148C20.9149 3.94438 20.9149 4.64086 20.4854 5.07044C20.0558 5.50001 19.3593 5.50001 18.9297 5.07044Z"
						fill="currentColor"
					/>
					<path
						d="M3.51479 20.4853C3.08521 20.0558 3.08521 19.3593 3.51479 18.9297C3.94436 18.5001 4.64084 18.5001 5.07042 18.9297C5.5 19.3593 5.5 20.0558 5.07042 20.4853C4.64084 20.9149 3.94436 20.9149 3.51479 20.4853Z"
						fill="currentColor"
					/>
					<path
						d="M13.0999 1.1C13.0999 1.70751 12.6074 2.2 11.9999 2.2C11.3924 2.2 10.8999 1.70751 10.8999 1.1C10.8999 0.492487 11.3924 0 11.9999 0C12.6074 0 13.0999 0.492487 13.0999 1.1Z"
						fill="currentColor"
					/>
					<path
						d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C10.0609 20 8.28299 19.3101 6.89824 18.1624L12.5303 12.5303C12.8232 12.2374 12.8232 11.7626 12.5303 11.4697C12.2374 11.1768 11.7626 11.1768 11.4697 11.4697L5.83758 17.1018C4.68988 15.717 4 13.9391 4 12Z"
						fill="currentColor"
					/>
				</g>
				<defs>
					<clipPath id="clip0_11449_32865">
						<rect fill="white" height="24" width="24" />
					</clipPath>
				</defs>
			</>
		) : (
			<>
				<path
					d="M19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.5 16.5L12 12"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 1.1001V1.1101"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="2.2"
				/>
				<path
					d="M1.10156 12V12.01"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="2.2"
				/>
				<path
					d="M22.8984 12V12.01"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="2.2"
				/>
				<path
					d="M19.6992 4.30005V4.31005M19.6992 4.30005V4.31005"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="2.2"
				/>
				<path
					d="M4.30078 4.30005V4.31005"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="2.2"
				/>
				<path
					d="M19.6992 19.7V19.71M19.6992 19.7V19.71"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="2.2"
				/>
				<path
					d="M4.30078 19.7V19.71"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="2.2"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconAdjustPhoto;
