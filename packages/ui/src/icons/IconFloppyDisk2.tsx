import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFloppyDisk2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="floppy-disk-2, save">
		{variant === "filled" ? (
			<>
				<path
					d="M9.5 14.25C9.5 12.8693 10.6193 11.75 12 11.75C13.3807 11.75 14.5 12.8693 14.5 14.25C14.5 15.6307 13.3807 16.75 12 16.75C10.6193 16.75 9.5 15.6307 9.5 14.25Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M6.75 3H8V7.25C8 8.2165 8.7835 9 9.75 9H14.25C15.2165 9 16 8.2165 16 7.25V3H16.0074C17.0019 3 17.9557 3.39509 18.659 4.09835L19.9016 5.34099C20.6049 6.04425 21 6.99808 21 7.99264V17.25C21 19.3211 19.3211 21 17.25 21H6.75C4.67893 21 3 19.3211 3 17.25V6.75C3 4.67893 4.67893 3 6.75 3ZM12 10.25C9.79086 10.25 8 12.0409 8 14.25C8 16.4591 9.79086 18.25 12 18.25C14.2091 18.25 16 16.4591 16 14.25C16 12.0409 14.2091 10.25 12 10.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					d="M9.5 3H14.5V7.25C14.5 7.38807 14.3881 7.5 14.25 7.5H9.75C9.61193 7.5 9.5 7.38807 9.5 7.25V3Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 6.75C3.75 5.09315 5.09315 3.75 6.75 3.75H16.0074C16.803 3.75 17.5661 4.06607 18.1287 4.62868L19.3713 5.87132C19.9339 6.43393 20.25 7.19699 20.25 7.99264V17.25C20.25 18.9069 18.9069 20.25 17.25 20.25H6.75C5.09315 20.25 3.75 18.9069 3.75 17.25V6.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.25 14.25C15.25 16.0449 13.7949 17.5 12 17.5C10.2051 17.5 8.75 16.0449 8.75 14.25C8.75 12.4551 10.2051 11 12 11C13.7949 11 15.25 12.4551 15.25 14.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.75 4V7.25C8.75 7.80228 9.19772 8.25 9.75 8.25H14.25C14.8023 8.25 15.25 7.80228 15.25 7.25V4"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFloppyDisk2;
