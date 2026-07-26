import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconHourglass2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="hourglass-2, time">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M19.25 2C19.6642 2 20 2.33579 20 2.75C20 3.16421 19.6642 3.5 19.25 3.5H19V6C19 9.31371 16.3137 12 13 12L13.3086 12.0078C16.4789 12.1684 19 14.7898 19 18V20.5H19.25C19.6642 20.5 20 20.8358 20 21.25C20 21.6642 19.6642 22 19.25 22H4.75C4.33579 22 4 21.6642 4 21.25C4 20.8358 4.33579 20.5 4.75 20.5H5V18C5 14.7898 7.52111 12.1684 10.6914 12.0078L11 12C7.68629 12 5 9.31371 5 6V3.5H4.75C4.33579 3.5 4 3.16421 4 2.75C4 2.33579 4.33579 2 4.75 2H19.25ZM9.31055 16.6719C8.54026 16.8645 8 17.5575 8 18.3516C8.00026 18.7096 8.29043 18.9997 8.64844 19H15.3516C15.7096 18.9997 15.9997 18.7096 16 18.3516C16 17.5575 15.4597 16.8645 14.6895 16.6719L12 16L9.31055 16.6719Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 2.75H19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.75 21.25H19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.75 3V6.75C5.75 9.39507 7.7061 11.6363 10.2506 12"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.75 21V17.25C5.75 14.6059 7.70475 12.3648 10.248 12"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18.2506 3V6.75C18.2506 9.39507 16.2945 11.6363 13.75 12"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18.248 21V17.25C18.248 14.6059 16.2932 12.3648 13.75 12"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.3511 19H8.64891C8.29053 19 8 18.7095 8 18.3511C8 17.557 8.54041 16.8649 9.31075 16.6723L12 16L14.6893 16.6723C15.4596 16.8649 16 17.557 16 18.3511C16 18.7095 15.7095 19 15.3511 19Z"
					fill="currentColor"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconHourglass2;
