import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconOwlFace: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="owl-face, learning, reading, research">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M17.375 6.84961C19.7819 6.84961 21.8562 8.94177 21.9922 11.7109C21.9949 11.807 22 11.9033 22 12C22 17.5228 17.5228 22 12 22C6.47748 22 2.00053 17.5234 2 12.001V11.9932C2.00006 11.8988 2.00417 11.8047 2.00684 11.7109C2.14282 8.94179 4.21813 6.85059 6.625 6.85059C9.03724 6.85059 11.1165 8.95114 11.2441 11.7295L11.25 12.001V14.25C11.25 14.6642 11.5858 15 12 15C12.4142 15 12.75 14.6642 12.75 14.25V11.9932C12.7535 9.08511 14.887 6.84961 17.375 6.84961ZM6.5 10.75C5.80964 10.75 5.25 11.3096 5.25 12C5.25 12.6904 5.80964 13.25 6.5 13.25C7.19036 13.25 7.75 12.6904 7.75 12C7.75 11.3096 7.19036 10.75 6.5 10.75ZM17.5 10.75C16.8096 10.75 16.25 11.3096 16.25 12C16.25 12.6904 16.8096 13.25 17.5 13.25C18.1904 13.25 18.75 12.6904 18.75 12C18.75 11.3096 18.1904 10.75 17.5 10.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					d="M12 2C15.2627 2 18.16 3.56287 19.9854 5.98047C19.1982 5.57761 18.3154 5.34961 17.375 5.34961C15.0226 5.34961 13.0293 6.76875 12 8.81543C10.9707 6.76879 8.97741 5.35059 6.625 5.35059C5.68426 5.35059 4.80105 5.57738 4.01367 5.98047C5.83896 3.5626 8.73708 2 12 2Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M12 12.0004C12 9.45988 9.92932 7.40039 7.375 7.40039C4.82068 7.40039 2.75 9.45988 2.75 12.0004"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M21.25 12.0004C21.25 9.45988 19.1793 7.40039 16.625 7.40039C14.0707 7.40039 12 9.45988 12 12.0004"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<circle cx="7.5" cy="12" fill="currentColor" r="1.25" />
				<circle cx="16.5" cy="12" fill="currentColor" r="1.25" />
				<path
					d="M12 12V14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="12"
					cy="12"
					r="9.25"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconOwlFace;
