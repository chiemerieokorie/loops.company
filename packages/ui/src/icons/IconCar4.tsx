import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCar4: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="car-4">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M11.4996 4L6.3078 4C4.46545 4 2.89598 5.33832 2.6049 7.15754L1.40404 14.6629C1.14691 16.27 2.26527 17.7383 3.82188 17.9687C4.37709 19.168 5.59126 20 6.99976 20C8.39595 20 9.60121 19.1825 10.1629 18H13.8366C14.3983 19.1825 15.6036 20 16.9998 20C18.396 20 19.6012 19.1825 20.1629 18H20.2496C21.7684 18 22.9996 16.7688 22.9996 15.25V12.3082C22.9996 10.4658 21.6613 8.89633 19.8421 8.60525L17.3162 8.20111C16.7398 8.10889 16.2219 7.79631 15.8717 7.32937L14.4997 5.5C13.7914 4.55573 12.68 4 11.4996 4ZM6.99976 14.5C5.89519 14.5 4.99976 15.3954 4.99976 16.5C4.99976 17.6046 5.89519 18.5 6.99976 18.5C8.10433 18.5 8.99976 17.6046 8.99976 16.5C8.99976 15.3954 8.10433 14.5 6.99976 14.5ZM14.9998 16.5C14.9998 15.3954 15.8952 14.5 16.9998 14.5C18.1043 14.5 18.9998 15.3954 18.9998 16.5C18.9998 17.6046 18.1043 18.5 16.9998 18.5C15.8952 18.5 14.9998 17.6046 14.9998 16.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M19.7495 17.25H20.2495C21.354 17.25 22.2495 16.3546 22.2495 15.25V12.3082C22.2495 10.8343 21.1788 9.5787 19.7234 9.34584L17.1975 8.94169C16.4291 8.81873 15.7384 8.40196 15.2715 7.77937L13.8995 5.95C13.3329 5.19458 12.4437 4.75 11.4995 4.75L6.30763 4.75C4.83375 4.75 3.57817 5.82066 3.34531 7.27603L2.14445 14.7814C1.93721 16.0766 2.93776 17.25 4.24948 17.25"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.75 17.25H14.25"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="7"
					cy="16.75"
					r="2.5"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="17"
					cy="16.75"
					r="2.5"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCar4;
