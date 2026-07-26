import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBooks: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="books, library">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M14.2324 8.35396C13.966 7.4249 14.5031 6.45579 15.4322 6.18939L16.8741 5.77593C17.8032 5.50953 18.7723 6.04672 19.0387 6.97577L22.2085 18.0303C22.4749 18.9593 21.9377 19.9285 21.0087 20.1949L19.5668 20.6083C18.6377 20.8747 17.6686 20.3375 17.4022 19.4085L14.2324 8.35396Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M8.75 3C7.7835 3 7 3.7835 7 4.75V19.25C7 20.2165 7.7835 21 8.75 21H12.25C13.2165 21 14 20.2165 14 19.25V4.75C14 3.7835 13.2165 3 12.25 3H8.75ZM8.5 7.75C8.5 7.33579 8.83579 7 9.25 7H11.75C12.1642 7 12.5 7.33579 12.5 7.75C12.5 8.16421 12.1642 8.5 11.75 8.5H9.25C8.83579 8.5 8.5 8.16421 8.5 7.75ZM12.5 16.25C12.5 15.8358 12.1642 15.5 11.75 15.5H9.25C8.83579 15.5 8.5 15.8358 8.5 16.25C8.5 16.6642 8.83579 17 9.25 17H11.75C12.1642 17 12.5 16.6642 12.5 16.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					d="M3.75 5C2.7835 5 2 5.7835 2 6.75V19.25C2 20.2165 2.7835 21 3.75 21H4.25C5.2165 21 6 20.2165 6 19.25V6.75C6 5.7835 5.2165 5 4.25 5H3.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 6.75C2.75 6.19772 3.19772 5.75 3.75 5.75H5.75C6.30228 5.75 6.75 6.19772 6.75 6.75V19.25C6.75 19.8023 6.30228 20.25 5.75 20.25H3.75C3.19772 20.25 2.75 19.8023 2.75 19.25V6.75Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.257 8.46569C14.114 7.93222 14.4306 7.38388 14.9641 7.24094L17.3789 6.59389C17.9124 6.45095 18.4607 6.76753 18.6036 7.301L21.5801 18.4091C21.723 18.9426 21.4064 19.4909 20.873 19.6339L18.4581 20.2809C17.9247 20.4239 17.3763 20.1073 17.2334 19.5738L14.257 8.46569Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.75 4.75C6.75 4.19772 7.19772 3.75 7.75 3.75H12.25C12.8023 3.75 13.25 4.19772 13.25 4.75V19.25C13.25 19.8023 12.8023 20.25 12.25 20.25H7.75C7.19772 20.25 6.75 19.8023 6.75 19.25V4.75Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.75 7.875H13.25"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.75 16.125H13.25"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBooks;
