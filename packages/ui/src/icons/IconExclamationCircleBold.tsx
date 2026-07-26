import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconExclamationCircleBold: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="exclamation-circle-bold, info, warning"
	>
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 14.7998C11.3926 14.7998 10.9006 15.2921 10.9004 15.8994C10.9004 16.5069 11.3925 17 12 17C12.6075 16.9999 13.0996 16.5069 13.0996 15.8994C13.0994 15.2921 12.6073 14.7999 12 14.7998ZM12 7C11.4575 7 11.0271 7.45647 11.0586 7.99805L11.3125 12.3516C11.334 12.7157 11.6352 13 12 13C12.3648 13 12.666 12.7157 12.6875 12.3516L12.9414 7.99805C12.9729 7.45647 12.5425 7 12 7Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<circle
					cx="12"
					cy="12"
					r="9.25"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M11.3121 12.3511L11.0582 7.9983C11.0266 7.45662 11.4574 7 12 7C12.5426 7 12.9734 7.45662 12.9418 7.9983L12.6879 12.3511C12.6666 12.7154 12.365 13 12 13C11.635 13 11.3334 12.7154 11.3121 12.3511Z"
					fill="currentColor"
				/>
				<circle cx="11.9999" cy="15.8998" fill="currentColor" r="1.1" />
			</>
		)}
	</CentralIconBase>
);

export default IconExclamationCircleBold;
