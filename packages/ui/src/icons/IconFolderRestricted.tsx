import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFolderRestricted: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="folder-restricted">
		{variant === "filled" ? (
			<>
				<path
					d="M5.75 3C3.67893 3 2 4.67893 2 6.75V10.636C4.62332 8.87958 8.20588 9.15994 10.523 11.477C12.8401 13.7941 13.1204 17.3767 11.364 20H18.25C20.3211 20 22 18.3211 22 16.25V9.75C22 7.67893 20.3211 6 18.25 6H13.0704C12.6524 6 12.2621 5.79112 12.0303 5.44338L11.5146 4.66987C10.8191 3.62663 9.64827 3 8.39445 3H5.75Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M9.46231 12.5377C7.41206 10.4874 4.08794 10.4874 2.03769 12.5377C-0.0125632 14.5879 -0.0125632 17.9121 2.03769 19.9623C4.08794 22.0126 7.41206 22.0126 9.46231 19.9623C11.5126 17.9121 11.5126 14.5879 9.46231 12.5377ZM8.87894 18.3183L3.68172 13.1211C5.13775 12.1564 7.1188 12.3155 8.40165 13.5983C9.6845 14.8812 9.84359 16.8623 8.87894 18.3183ZM2.62106 14.1817L7.81828 19.3789C6.36225 20.3436 4.3812 20.1845 3.09835 18.9017C1.8155 17.6188 1.65641 15.6377 2.62106 14.1817Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M8.93198 13.068C10.6893 14.8254 10.6893 17.6746 8.93198 19.432C7.17462 21.1893 4.32538 21.1893 2.56802 19.432C0.81066 17.6746 0.81066 14.8254 2.56802 13.068C4.32538 11.3107 7.17462 11.3107 8.93198 13.068Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.5 19.25H18.25C19.9069 19.25 21.25 17.9069 21.25 16.25V9.75C21.25 8.09315 19.9069 6.75 18.25 6.75H13.0704C12.4017 6.75 11.7772 6.4158 11.4063 5.8594L10.5937 4.6406C10.2228 4.0842 9.59834 3.75 8.92963 3.75H5.75C4.09315 3.75 2.75 5.09315 2.75 6.75V9.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.93232 19.432L2.56836 13.068"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFolderRestricted;
