import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowSplitDown: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="arrow-split-down, branch">
		{variant === "filled" ? (
			<>
				<path
					d="M5.46967 17.4697C5.76257 17.1769 6.23733 17.1768 6.53022 17.4697C6.82307 17.7626 6.82307 18.2374 6.53022 18.5303L5.28022 19.7803C4.98733 20.0732 4.51257 20.0731 4.21967 19.7803C3.92678 19.4874 3.92678 19.0126 4.21967 18.7197L5.46967 17.4697Z"
					fill="currentColor"
				/>
				<path
					d="M11.9999 3C12.4141 3.00003 12.7499 3.33581 12.7499 3.75V10.7578C12.7501 11.3544 12.9873 11.9268 13.4091 12.3486L18.4999 17.4395V13.75C18.4999 13.3358 18.8357 13 19.2499 13C19.6641 13 19.9999 13.3358 19.9999 13.75V19.25C19.9999 19.6642 19.6641 20 19.2499 20H13.7499C13.3357 20 12.9999 19.6642 12.9999 19.25C12.9999 18.8358 13.3357 18.5 13.7499 18.5H17.4394L12.3486 13.4092C11.6454 12.706 11.2501 11.7522 11.2499 10.7578V3.75C11.2499 3.33579 11.5857 3 11.9999 3Z"
					fill="currentColor"
				/>
				<path
					d="M8.96967 13.9697C9.26257 13.6769 9.73733 13.6768 10.0302 13.9697C10.3231 14.2626 10.3231 14.7374 10.0302 15.0303L8.78022 16.2803C8.48733 16.5732 8.01257 16.5731 7.71967 16.2803C7.42678 15.9874 7.42678 15.5126 7.71967 15.2197L8.96967 13.9697Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M12 3.75V10.7574C12 11.553 12.3161 12.3161 12.8787 12.8787L19 19"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.25 13.75V19.25H13.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.75 19.25L6 18"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.25 15.75L9.5 14.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowSplitDown;
