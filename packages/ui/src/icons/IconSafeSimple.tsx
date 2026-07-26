import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSafeSimple: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="safe-simple, save">
		{variant === "filled" ? (
			<>
				<path
					d="M12.25 10.25C11.2835 10.25 10.5 11.0335 10.5 12C10.5 12.9665 11.2835 13.75 12.25 13.75C13.2165 13.75 14 12.9665 14 12C14 11.0335 13.2165 10.25 12.25 10.25Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M6.75 3C4.67893 3 3 4.67893 3 6.75V7H2.75C2.33579 7 2 7.33579 2 7.75C2 8.16421 2.33579 8.5 2.75 8.5H3V15.5H2.75C2.33579 15.5 2 15.8358 2 16.25C2 16.6642 2.33579 17 2.75 17H3V17.25C3 19.3211 4.67893 21 6.75 21H17.25C19.3211 21 21 19.3211 21 17.25V6.75C21 4.67893 19.3211 3 17.25 3H6.75ZM10.5439 9.23327C11.0398 8.92684 11.6243 8.75 12.25 8.75C12.8757 8.75 13.4602 8.92684 13.9561 9.23327L15.4697 7.71967C15.7626 7.42678 16.2374 7.42678 16.5303 7.71967C16.8232 8.01256 16.8232 8.48744 16.5303 8.78033L15.0167 10.2939C15.3232 10.7898 15.5 11.3743 15.5 12C15.5 12.6257 15.3232 13.2102 15.0167 13.7061L16.5303 15.2197C16.8232 15.5126 16.8232 15.9874 16.5303 16.2803C16.2374 16.5732 15.7626 16.5732 15.4697 16.2803L13.9561 14.7667C13.4602 15.0732 12.8757 15.25 12.25 15.25C11.6243 15.25 11.0398 15.0732 10.5439 14.7667L9.03033 16.2803C8.73744 16.5732 8.26256 16.5732 7.96967 16.2803C7.67678 15.9874 7.67678 15.5126 7.96967 15.2197L9.48327 13.7061C9.17684 13.2102 9 12.6257 9 12C9 11.3743 9.17684 10.7898 9.48327 10.2939L7.96967 8.78033C7.67678 8.48744 7.67678 8.01256 7.96967 7.71967C8.26256 7.42678 8.73744 7.42678 9.03033 7.71967L10.5439 9.23327Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M17.25 3.75H6.75C5.09315 3.75 3.75 5.09315 3.75 6.75V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H17.25C18.9069 20.25 20.25 18.9069 20.25 17.25V6.75C20.25 5.09315 18.9069 3.75 17.25 3.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M2.75 7.75H4.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M2.75 16.25H4.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="12.25"
					cy="12"
					r="2.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10.1071 9.85714L8.5 8.25M14.3929 9.85714L16 8.25M14.3929 14.1429L16 15.75M10.1071 14.1429L8.5 15.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSafeSimple;
