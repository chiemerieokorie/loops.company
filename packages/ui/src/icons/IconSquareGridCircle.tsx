import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSquareGridCircle: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="square-grid-circle, layout, grid, list, category, categories"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M3 5.75C3 4.23122 4.23122 3 5.75 3H8.25C9.76878 3 11 4.23122 11 5.75V8.25C11 9.76878 9.76878 11 8.25 11H5.75C4.23122 11 3 9.76878 3 8.25V5.75Z"
					fill="currentColor"
				/>
				<path
					d="M3 15.75C3 14.2312 4.23122 13 5.75 13H8.25C9.76878 13 11 14.2312 11 15.75V18.25C11 19.7688 9.76878 21 8.25 21H5.75C4.23122 21 3 19.7688 3 18.25V15.75Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M17 13C14.7909 13 13 14.7909 13 17C13 19.2091 14.7909 21 17 21C19.2091 21 21 19.2091 21 17C21 14.7909 19.2091 13 17 13ZM14.5 17C14.5 15.6193 15.6193 14.5 17 14.5C18.3807 14.5 19.5 15.6193 19.5 17C19.5 18.3807 18.3807 19.5 17 19.5C15.6193 19.5 14.5 18.3807 14.5 17Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					d="M15.75 3C14.2312 3 13 4.23122 13 5.75V8.25C13 9.76878 14.2312 11 15.75 11H18.25C19.7688 11 21 9.76878 21 8.25V5.75C21 4.23122 19.7688 3 18.25 3H15.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 5.75C3.75 4.64543 4.64543 3.75 5.75 3.75H8.25C9.35457 3.75 10.25 4.64543 10.25 5.75V8.25C10.25 9.35457 9.35457 10.25 8.25 10.25H5.75C4.64543 10.25 3.75 9.35457 3.75 8.25V5.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 15.75C3.75 14.6454 4.64543 13.75 5.75 13.75H8.25C9.35457 13.75 10.25 14.6454 10.25 15.75V18.25C10.25 19.3546 9.35457 20.25 8.25 20.25H5.75C4.64543 20.25 3.75 19.3546 3.75 18.25V15.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.75 17C13.75 15.2051 15.2051 13.75 17 13.75C18.7949 13.75 20.25 15.2051 20.25 17C20.25 18.7949 18.7949 20.25 17 20.25C15.2051 20.25 13.75 18.7949 13.75 17Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.75 5.75C13.75 4.64543 14.6454 3.75 15.75 3.75H18.25C19.3546 3.75 20.25 4.64543 20.25 5.75V8.25C20.25 9.35457 19.3546 10.25 18.25 10.25H15.75C14.6454 10.25 13.75 9.35457 13.75 8.25V5.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSquareGridCircle;
