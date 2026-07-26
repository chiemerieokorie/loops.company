import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconUserEdit: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="user-edit, people, person, member">
		{variant === "filled" ? (
			<>
				<path
					d="M8.06934 12.1094C9.14306 12.979 10.5107 13.5 12 13.5C13.0877 13.5 14.1093 13.2202 15 12.7314V13.7148L13.0381 15.6768C12.0537 16.6612 11.5001 17.9974 11.5 19.3896V20.25C11.5 20.5133 11.5477 20.7652 11.6309 21H6.5957C5.16224 20.9998 4.00024 19.8378 4 18.4043C4 15.6021 5.6706 13.1915 8.06934 12.1094Z"
					fill="currentColor"
				/>
				<path
					d="M17.168 13.668C18.0417 12.7943 19.4583 12.7943 20.332 13.668C21.2058 14.5417 21.2058 15.9583 20.332 16.832L17.2627 19.9014C16.5594 20.6046 15.6049 21 14.6104 21H13.75C13.3358 21 13 20.6642 13 20.25V19.3896C13 18.3951 13.3954 17.4406 14.0986 16.7373L17.168 13.668Z"
					fill="currentColor"
				/>
				<path
					d="M12 2.5C14.6234 2.5 16.75 4.62665 16.75 7.25C16.75 9.87335 14.6234 12 12 12C9.37665 12 7.25 9.87335 7.25 7.25C7.25 4.62665 9.37665 2.5 12 2.5Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<circle
					cx="12"
					cy="7.75"
					r="4.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.0018 12.25C8.22236 12.25 5.87133 14.4212 4.94874 17.2952C4.44232 18.8728 5.84498 20.25 7.50184 20.25H10.252"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.75 20.25V18.826C13.75 18.0303 14.0661 17.2673 14.6287 16.7047L17.75 13.5833C18.4864 12.847 19.6803 12.847 20.4167 13.5833C21.153 14.3197 21.153 15.5136 20.4167 16.25L17.2953 19.3713C16.7327 19.9339 15.9697 20.25 15.174 20.25H13.75Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconUserEdit;
