import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconTeacherWhiteboard: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="teacher-whiteboard">
		{variant === "filled" ? (
			<>
				<path
					d="M11.25 3.75C11.25 3.33579 10.9142 3 10.5 3C10.0858 3 9.75 3.33579 9.75 3.75V4H1.75C1.33579 4 1 4.33579 1 4.75C1 5.16421 1.33579 5.5 1.75 5.5H2V16.5H1.75C1.33579 16.5 1 16.8358 1 17.25C1 17.6642 1.33579 18 1.75 18H9.25C9.66421 18 10 17.6642 10 17.25C10 16.8358 9.66421 16.5 9.25 16.5H3.5V5.5H17.5V6.25C17.5 6.66421 17.8358 7 18.25 7C18.6642 7 19 6.66421 19 6.25V5.5H19.25C19.6642 5.5 20 5.16421 20 4.75C20 4.33579 19.6642 4 19.25 4H11.25V3.75Z"
					fill="currentColor"
				/>
				<path
					d="M17 9C15.3431 9 14 10.3431 14 12C14 13.6569 15.3431 15 17 15C18.6569 15 20 13.6569 20 12C20 10.3431 18.6569 9 17 9Z"
					fill="currentColor"
				/>
				<path
					d="M17 15.5C15.0916 15.5 13.5197 16.3898 12.6002 17.7731C12.0748 18.5635 12.2055 19.4309 12.6848 20.0483C13.14 20.6347 13.8987 21 14.7071 21H19.2929C20.1013 21 20.86 20.6347 21.3152 20.0483C21.7945 19.4309 21.9252 18.5635 21.3998 17.7731C20.4803 16.3898 18.9084 15.5 17 15.5Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 4.75H10.5M2.75 4.75V17.25M2.75 4.75H1.75M10.5 4.75H18.25M10.5 4.75V3.75M18.25 4.75H19.25M18.25 4.75V6.25M2.75 17.25H1.75M2.75 17.25H9.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17 16.25C15.3372 16.25 14.0023 17.0188 13.2248 18.1883C12.5704 19.1728 13.525 20.25 14.7072 20.25H19.2929C20.4751 20.25 21.4297 19.1728 20.7752 18.1883C19.9978 17.0188 18.6629 16.25 17 16.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.25 12C19.25 13.2426 18.2426 14.25 17 14.25C15.7574 14.25 14.75 13.2426 14.75 12C14.75 10.7574 15.7574 9.75 17 9.75C18.2426 9.75 19.25 10.7574 19.25 12Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconTeacherWhiteboard;
