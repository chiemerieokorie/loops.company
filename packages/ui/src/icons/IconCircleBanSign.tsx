import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCircleBanSign: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="circle-ban-sign, circle, block, ads">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12 2C14.7612 2 17.2625 3.11989 19.0713 4.92871C20.8801 6.73753 22 9.23878 22 12C22 17.5228 17.5228 22 12 22C9.23878 22 6.73753 20.8801 4.92871 19.0713C3.11989 17.2625 2 14.7612 2 12C2 6.47715 6.47715 2 12 2ZM6.54297 18.5166C8.01997 19.7548 9.92228 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 9.92228 19.7548 8.01997 18.5166 6.54297L6.54297 18.5166ZM12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 14.0772 4.24473 15.9792 5.48242 17.4561L17.4561 5.48242C15.9792 4.24473 14.0772 3.5 12 3.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C9.44568 21.25 7.13318 20.2147 5.45926 18.5407C3.78534 16.8668 2.75 14.5543 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C14.5543 2.75 16.8668 3.78534 18.5407 5.45926C20.2147 7.13318 21.25 9.44568 21.25 12Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
				<path
					d="M18 6L6 18"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCircleBanSign;
