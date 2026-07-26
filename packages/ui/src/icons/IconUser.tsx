import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconUser: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="user, people, person, member">
		{variant === "filled" ? (
			<>
				<path
					d="M15.9297 12.1094C18.3289 13.1913 20 15.6018 20 18.4043C19.9998 19.8378 18.8378 20.9998 17.4043 21H6.5957C5.16224 20.9998 4.00024 19.8378 4 18.4043C4 15.6021 5.6706 13.1915 8.06934 12.1094C9.14306 12.979 10.5107 13.5 12 13.5C13.4891 13.5 14.856 12.9787 15.9297 12.1094Z"
					fill="currentColor"
				/>
				<path
					d="M12 2.5C14.6234 2.5 16.75 4.62665 16.75 7.25C16.75 9.87335 14.6234 12 12 12C9.37665 12 7.25 9.87335 7.25 7.25C7.25 4.62665 9.37665 2.5 12 2.5Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M7.5 20.25C5.84315 20.25 4.44049 18.8728 4.9469 17.2952C5.86949 14.4212 8.22053 12.25 12 12.25C15.7765 12.25 17.9842 14.4178 18.8385 17.2885C19.3111 18.8765 17.9069 20.25 16.25 20.25H7.5Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="12"
					cy="7.75"
					r="4.5"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconUser;
