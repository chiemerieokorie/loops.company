import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCarussel: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="carussel, slides">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M5.85352 5C6.17998 3.84575 7.24122 3 8.5 3H15.5C16.7588 3 17.82 3.84575 18.1465 5H19.25C20.7688 5 22 6.23122 22 7.75V16.25C22 17.7688 20.7688 19 19.25 19H18.1465C17.82 20.1543 16.7588 21 15.5 21H8.5C7.24122 21 6.17998 20.1543 5.85352 19H4.75C3.23122 19 2 17.7688 2 16.25V7.75C2 6.23122 3.23122 5 4.75 5H5.85352ZM5.75 6.5H4.75C4.05964 6.5 3.5 7.05964 3.5 7.75V16.25C3.5 16.9404 4.05964 17.5 4.75 17.5H5.75V6.5ZM18.25 17.5H19.25C19.9404 17.5 20.5 16.9404 20.5 16.25V7.75C20.5 7.05964 19.9404 6.5 19.25 6.5H18.25V17.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M14.5 3.75H9.5C7.84315 3.75 6.5 5.09315 6.5 6.75V17.25C6.5 18.9069 7.84315 20.25 9.5 20.25H14.5C16.1569 20.25 17.5 18.9069 17.5 17.25V6.75C17.5 5.09315 16.1569 3.75 14.5 3.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.5 18.25H5.75C4.09315 18.25 2.75 16.9069 2.75 15.25V8.75C2.75 7.09315 4.09315 5.75 5.75 5.75H6.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.5 5.75H18.25C19.9069 5.75 21.25 7.09315 21.25 8.75V15.25C21.25 16.9069 19.9069 18.25 18.25 18.25H17.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCarussel;
