import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconControllerButtonSquare: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="controller-button-square, view, panel">
		{variant === "filled" ? (
			<>
				<path
					d="M14.25 8.5C14.9404 8.5 15.5 9.05964 15.5 9.75V14.25C15.5 14.9404 14.9404 15.5 14.25 15.5H9.75C9.05964 15.5 8.5 14.9404 8.5 14.25V9.75C8.5 9.05964 9.05964 8.5 9.75 8.5H14.25Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM9.75 7C8.23122 7 7 8.23122 7 9.75V14.25C7 15.7688 8.23122 17 9.75 17H14.25C15.7688 17 17 15.7688 17 14.25V9.75C17 8.23122 15.7688 7 14.25 7H9.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<circle
					cx="12"
					cy="12"
					r="9.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<rect
					height="8.5"
					rx="2"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					width="8.5"
					x="7.75"
					y="7.75"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconControllerButtonSquare;
