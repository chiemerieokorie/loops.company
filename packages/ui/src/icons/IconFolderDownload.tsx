import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFolderDownload: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="folder-download">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M2 6.75C2 4.67893 3.67893 3 5.75 3H8.39445C9.64827 3 10.8191 3.62663 11.5146 4.66987L12.0303 5.44338C12.2621 5.79112 12.6524 6 13.0704 6H18.25C20.3211 6 22 7.67893 22 9.75V16.25C22 18.3211 20.3211 20 18.25 20H5.75C3.67893 20 2 18.3211 2 16.25V6.75ZM15.0303 16.0303L12.5303 18.5303C12.2374 18.8232 11.7626 18.8232 11.4697 18.5303L8.96967 16.0303C8.67678 15.7374 8.67678 15.2626 8.96967 14.9697C9.26256 14.6768 9.73744 14.6768 10.0303 14.9697L11.25 16.1893V11.75C11.25 11.3358 11.5858 11 12 11C12.4142 11 12.75 11.3358 12.75 11.75V16.1893L13.9697 14.9697C14.2626 14.6768 14.7374 14.6768 15.0303 14.9697C15.3232 15.2626 15.3232 15.7374 15.0303 16.0303Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M7.375 19.25H5.75C4.09315 19.25 2.75 17.9069 2.75 16.25V6.75C2.75 5.09315 4.09315 3.75 5.75 3.75H8.39445C9.39751 3.75 10.3342 4.2513 10.8906 5.0859L11.4063 5.8594C11.7772 6.4158 12.4017 6.75 13.0704 6.75H18.25C19.9069 6.75 21.25 8.09315 21.25 9.75V16.25C21.25 17.9069 19.9069 19.25 18.25 19.25H16.625"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 11.75V18"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.5 15.5L12 18L14.5 15.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFolderDownload;
