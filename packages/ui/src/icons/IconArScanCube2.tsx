import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArScanCube2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="ar-scan-cube-2">
		{variant === "filled" ? (
			<>
				<path
					d="M4 5C3.44772 5 3 4.55228 3 4C3 3.44772 3.44772 3 4 3C4.55228 3 5 3.44772 5 4C5 4.55228 4.55228 5 4 5Z"
					fill="currentColor"
				/>
				<path
					d="M20 5C19.4477 5 19 4.55228 19 4C19 3.44772 19.4477 3 20 3C20.5523 3 21 3.44772 21 4C21 4.55228 20.5523 5 20 5Z"
					fill="currentColor"
				/>
				<path
					d="M20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20C21 20.5523 20.5523 21 20 21Z"
					fill="currentColor"
				/>
				<path
					d="M4 21C3.44772 21 3 20.5523 3 20C3 19.4477 3.44772 19 4 19C4.55228 19 5 19.4477 5 20C5 20.5523 4.55228 21 4 21Z"
					fill="currentColor"
				/>
				<path
					d="M13.8605 6.19929C12.7076 5.5405 11.2924 5.5405 10.1395 6.19929L7.88948 7.485C7.53065 7.69005 7.214 7.94932 6.94748 8.24915L11.9998 11.1362L17.0524 8.249C16.7859 7.94923 16.4693 7.69002 16.1105 7.485L13.8605 6.19929Z"
					fill="currentColor"
				/>
				<path
					d="M6 10.7409C6 10.3287 6.06766 9.92615 6.19512 9.54685L11.2498 12.4352V18.219C10.8653 18.1405 10.4902 18.001 10.1395 17.8006L7.88948 16.5149C6.72107 15.8472 6 14.6047 6 13.259V10.7409Z"
					fill="currentColor"
				/>
				<path
					d="M13.8605 17.8006C13.5097 18.0011 13.1345 18.1406 12.7498 18.219V12.4352L17.8048 9.54666C17.9323 9.92602 18 10.3286 18 10.7409V13.259C18 14.6047 17.2789 15.8472 16.1105 16.5149L13.8605 17.8006Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M6.75 10.7409C6.75 9.66434 7.32686 8.67031 8.26158 8.13618L10.5116 6.85047C11.4339 6.32344 12.5661 6.32344 13.4884 6.85047L15.7384 8.13618C16.6731 8.67031 17.25 9.66434 17.25 10.7409V13.259C17.25 14.3355 16.6731 15.3296 15.7384 15.8637L13.4884 17.1494C12.5661 17.6765 11.4339 17.6764 10.5116 17.1494L8.26158 15.8637C7.32686 15.3296 6.75 14.3355 6.75 13.259V10.7409Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
				<path
					d="M17.25 9L12 12M12 12L6.75 9M12 12V18"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M4 4.25C4.13807 4.25 4.25 4.13807 4.25 4C4.25 3.86193 4.13807 3.75 4 3.75C3.86193 3.75 3.75 3.86193 3.75 4C3.75 4.13807 3.86193 4.25 4 4.25Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
				<path
					d="M4 3.99999V3.98999"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20 4.25C20.1381 4.25 20.25 4.13807 20.25 4C20.25 3.86193 20.1381 3.75 20 3.75C19.8619 3.75 19.75 3.86193 19.75 4C19.75 4.13807 19.8619 4.25 20 4.25Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
				<path
					d="M20 3.99999V3.98999"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4 20.25C4.13807 20.25 4.25 20.1381 4.25 20C4.25 19.8619 4.13807 19.75 4 19.75C3.86193 19.75 3.75 19.8619 3.75 20C3.75 20.1381 3.86193 20.25 4 20.25Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
				<path
					d="M4 20V19.99"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20 20.25C20.1381 20.25 20.25 20.1381 20.25 20C20.25 19.8619 20.1381 19.75 20 19.75C19.8619 19.75 19.75 19.8619 19.75 20C19.75 20.1381 19.8619 20.25 20 20.25Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
				<path
					d="M20 20V19.99"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArScanCube2;
