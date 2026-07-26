import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFiles: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="files, documents">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M17.9372 18.9372C17.6144 20.6801 16.0863 22 14.25 22H7.75C5.67893 22 4 20.3211 4 18.25V8.75C4 6.91365 5.31994 5.38559 7.06282 5.06282C7.38559 3.31994 8.91365 2 10.75 2H14.5V5.75C14.5 7.26878 15.7312 8.5 17.25 8.5H21V15.25C21 17.0863 19.6801 18.6144 17.9372 18.9372ZM7 6.62803C6.12611 6.93691 5.5 7.77034 5.5 8.75V18.25C5.5 19.4926 6.50736 20.5 7.75 20.5H14.25C15.2297 20.5 16.0631 19.8739 16.372 19H10.75C8.67893 19 7 17.3211 7 15.25V6.62803Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					d="M16 2.43934L20.5607 7H17.25C16.5596 7 16 6.44036 16 5.75V2.43934Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M10.75 2.75H14.0074C14.803 2.75 15.5661 3.06607 16.1287 3.62868L19.3713 6.87132C19.9339 7.43393 20.25 8.19699 20.25 8.99264V15.25C20.25 16.9069 18.9069 18.25 17.25 18.25H10.75C9.09315 18.25 7.75 16.9069 7.75 15.25V5.75C7.75 4.09315 9.09315 2.75 10.75 2.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.25 18.25C17.25 19.9069 15.9069 21.25 14.25 21.25H7.75C6.09315 21.25 4.75 19.9069 4.75 18.25V8.75C4.75 7.09315 6.09315 5.75 7.75 5.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.25 2.75V5.75C15.25 6.85457 16.1454 7.75 17.25 7.75H20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFiles;
