import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBezierAdd: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="bezier-add, vector, nodes">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M5.25 3C4.00736 3 3 4.00736 3 5.25V6.75C3 7.99264 4.00736 9 5.25 9V15C4.00736 15 3 16.0074 3 17.25V18.75C3 19.9926 4.00736 21 5.25 21H6.5C7.74264 21 8.75 19.9926 8.75 18.75H15C15 19.9926 16.0074 21 17.25 21H18.75C19.9926 21 21 19.9926 21 18.75V17.25C21 16.0074 19.9926 15 18.75 15V9C19.9926 9 21 7.99264 21 6.75V5.25C21 4.00736 19.9926 3 18.75 3H17.25C16.0074 3 15 4.00736 15 5.25H9C9 4.00736 7.99264 3 6.75 3H5.25ZM6.75 9C7.99264 9 9 7.99264 9 6.75H15C15 7.99264 16.0074 9 17.25 9V15C16.0074 15 15 16.0074 15 17.25H8.75C8.75 16.0919 7.87499 15.1381 6.75 15.0137V9Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					d="M12.75 9.75C12.75 9.33579 12.4142 9 12 9C11.5858 9 11.25 9.33579 11.25 9.75V11.25H9.75C9.33579 11.25 9 11.5858 9 12C9 12.4142 9.33579 12.75 9.75 12.75H11.25V14.25C11.25 14.6642 11.5858 15 12 15C12.4142 15 12.75 14.6642 12.75 14.25V12.75H14.25C14.6642 12.75 15 12.4142 15 12C15 11.5858 14.6642 11.25 14.25 11.25H12.75V9.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 5.25C3.75 4.42157 4.42157 3.75 5.25 3.75H6.75C7.57843 3.75 8.25 4.42157 8.25 5.25V6.75C8.25 7.57843 7.57843 8.25 6.75 8.25H5.25C4.42157 8.25 3.75 7.57843 3.75 6.75V5.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.75 5.25C15.75 4.42157 16.4216 3.75 17.25 3.75H18.75C19.5784 3.75 20.25 4.42157 20.25 5.25V6.75C20.25 7.57843 19.5784 8.25 18.75 8.25H18H17.25C16.4216 8.25 15.75 7.57843 15.75 6.75V6V5.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 17.25C3.75 16.4216 4.42157 15.75 5.25 15.75H6.5C7.32843 15.75 8 16.4216 8 17.25V18.75C8 19.5784 7.32843 20.25 6.5 20.25H5.25C4.42157 20.25 3.75 19.5784 3.75 18.75V17.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.75 17.25C15.75 16.4216 16.4216 15.75 17.25 15.75H18.75C19.5784 15.75 20.25 16.4216 20.25 17.25V18.75C20.25 19.5784 19.5784 20.25 18.75 20.25H17.25C16.4216 20.25 15.75 19.5784 15.75 18.75V17.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.75 6H8.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6 8.25V15.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8 18H15.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18 15.75V8.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 9.75V12V14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.25 12H12H9.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBezierAdd;
