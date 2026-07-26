import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArScanCube1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="ar-scan-cube-1">
		{variant === "filled" ? (
			<>
				<path
					d="M6.75 19.5C5.50736 19.5 4.5 18.4926 4.5 17.25V15.75C4.5 15.3358 4.16421 15 3.75 15C3.33579 15 3 15.3358 3 15.75V17.25C3 19.3211 4.67893 21 6.75 21H8.25C8.66421 21 9 20.6642 9 20.25C9 19.8358 8.66421 19.5 8.25 19.5H6.75Z"
					fill="currentColor"
				/>
				<path
					d="M3 8.25C3 8.66421 3.33579 9 3.75 9C4.16421 9 4.5 8.66421 4.5 8.25V6.75C4.5 5.50736 5.50736 4.5 6.75 4.5H8.25C8.66421 4.5 9 4.16421 9 3.75C9 3.33579 8.66421 3 8.25 3H6.75C4.67893 3 3 4.67893 3 6.75V8.25Z"
					fill="currentColor"
				/>
				<path
					d="M15.75 19.5C15.3358 19.5 15 19.8358 15 20.25C15 20.6642 15.3358 21 15.75 21H17.25C19.3211 21 21 19.3211 21 17.25V15.75C21 15.3358 20.6642 15 20.25 15C19.8358 15 19.5 15.3358 19.5 15.75V17.25C19.5 18.4926 18.4926 19.5 17.25 19.5H15.75Z"
					fill="currentColor"
				/>
				<path
					d="M15.75 3C15.3358 3 15 3.33579 15 3.75C15 4.16421 15.3358 4.5 15.75 4.5H17.25C18.4926 4.5 19.5 5.50736 19.5 6.75V8.25C19.5 8.66421 19.8358 9 20.25 9C20.6642 9 21 8.66421 21 8.25V6.75C21 4.67893 19.3211 3 17.25 3H15.75Z"
					fill="currentColor"
				/>
				<path
					d="M12.845 7.38724C12.3214 7.08804 11.6786 7.08804 11.155 7.38724L8.40501 8.95867C8.36961 8.9789 8.33511 9.00029 8.30155 9.02279L12 11.1362L15.6985 9.02279C15.6649 9.00029 15.6304 8.9789 15.595 8.95867L12.845 7.38724Z"
					fill="currentColor"
				/>
				<path
					d="M7.54688 10.4374C7.54688 10.3985 7.5482 10.3599 7.55082 10.3214L11.25 12.4352V16.663C11.2179 16.6473 11.1863 16.6305 11.155 16.6126L8.40501 15.0412C7.87436 14.738 7.54688 14.1736 7.54688 13.5625V10.4374Z"
					fill="currentColor"
				/>
				<path
					d="M12.845 16.6126C12.8137 16.6305 12.7821 16.6473 12.75 16.663V12.4352L16.4492 10.3214C16.4518 10.3599 16.4531 10.3985 16.4531 10.4374V13.5625C16.4531 14.1736 16.1256 14.738 15.595 15.0412L12.845 16.6126Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M8.25 20.25H6.75C5.09315 20.25 3.75 18.9069 3.75 17.25V15.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.75 20.25H17.25C18.9069 20.25 20.25 18.9069 20.25 17.25V15.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 8.25V6.75C3.75 5.09315 5.09315 3.75 6.75 3.75H8.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.75 3.75H17.25C18.9069 3.75 20.25 5.09315 20.25 6.75V8.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.25772 9.28121L11.0077 8.28121C11.6226 7.92986 12.3774 7.92986 12.9923 8.28121L14.7423 9.28121C15.3654 9.6373 15.75 10.3 15.75 11.0177V12.9821C15.75 13.6998 15.3654 14.3625 14.7423 14.7186L12.9923 15.7186C12.3774 16.07 11.6226 16.07 11.0077 15.7186L9.25772 14.7186C8.63457 14.3625 8.25 13.6998 8.25 12.9821V11.0177C8.25 10.3 8.63457 9.6373 9.25772 9.28121Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.25 10.3571L12 11.9999M12 11.9999L8.75 10.3571M12 11.9999V15.2856"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArScanCube1;
