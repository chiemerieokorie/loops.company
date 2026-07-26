import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFloppyDisk1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="floppy-disk-1, save">
		{variant === "filled" ? (
			<>
				<path
					d="M7 3H6.75C4.67893 3 3 4.67893 3 6.75V17.25C3 19.3211 4.67893 21 6.75 21H7V12.75C7 12.3358 7.33579 12 7.75 12H16.25C16.6642 12 17 12.3358 17 12.75V21H17.25C19.3211 21 21 19.3211 21 17.25V7.99264C21 6.99808 20.6049 6.04425 19.9016 5.34099L18.659 4.09835C18.195 3.63434 17.6219 3.30448 17 3.13375V8.25C17 8.66421 16.6642 9 16.25 9H7.75C7.33579 9 7 8.66421 7 8.25V3Z"
					fill="currentColor"
				/>
				<path d="M15.5 3H8.5V7.5H15.5V3Z" fill="currentColor" />
				<path d="M15.5 21V13.5H8.5V21H15.5Z" fill="currentColor" />
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
					d="M7.75 19.25V13.75C7.75 13.1977 8.19772 12.75 8.75 12.75H15.25C15.8023 12.75 16.25 13.1977 16.25 13.75V19.25C16.25 19.8023 15.8023 20.25 15.25 20.25H8.75C8.19772 20.25 7.75 19.8023 7.75 19.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.75 3.75V7.25C7.75 7.80228 8.19772 8.25 8.75 8.25H15.25C15.8023 8.25 16.25 7.80228 16.25 7.25V3.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFloppyDisk1;
