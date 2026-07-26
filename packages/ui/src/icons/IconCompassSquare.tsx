import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCompassSquare: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="compass-square, browser, safari, web, internet, navigation"
	>
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3 6.75C3 4.67893 4.67893 3 6.75 3H17.25C19.3211 3 21 4.67893 21 6.75V17.25C21 19.3211 19.3211 21 17.25 21H6.75C4.67893 21 3 19.3211 3 17.25V6.75ZM14.5572 8.36844C15.2104 8.1903 15.8097 8.78965 15.6316 9.44283L14.5122 13.5474C14.3841 14.0171 14.0171 14.384 13.5474 14.5121L9.44286 15.6316C8.78968 15.8097 8.19033 15.2103 8.36847 14.5572L9.48789 10.4526C9.61599 9.98291 9.98294 9.61596 10.4527 9.48786L14.5572 8.36844Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 6.75C3.75 5.09315 5.09315 3.75 6.75 3.75H17.25C18.9069 3.75 20.25 5.09315 20.25 6.75V17.25C20.25 18.9069 18.9069 20.25 17.25 20.25H6.75C5.09315 20.25 3.75 18.9069 3.75 17.25V6.75Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.6558 8.73023L10.5513 9.84965C10.2097 9.94281 9.94281 10.2097 9.84965 10.5513L8.73023 14.6558C8.62843 15.0291 8.97092 15.3716 9.34417 15.2698L13.4487 14.1504C13.7903 14.0572 14.0572 13.7903 14.1504 13.4487L15.2698 9.34417C15.3716 8.97092 15.0291 8.62843 14.6558 8.73023Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCompassSquare;
