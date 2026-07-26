import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFileDownload: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="file-download, document">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M7.75 2H12V7.25C12 8.76878 13.2312 10 14.75 10H20V18.25C20 20.3211 18.3211 22 16.25 22H7.75C5.67893 22 4 20.3211 4 18.25V5.75C4 3.67893 5.67893 2 7.75 2ZM15.0303 17.0303L12.5303 19.5303C12.2374 19.8232 11.7626 19.8232 11.4697 19.5303L8.96967 17.0303C8.67678 16.7374 8.67678 16.2626 8.96967 15.9697C9.26256 15.6768 9.73744 15.6768 10.0303 15.9697L11.25 17.1893V12.75C11.25 12.3358 11.5858 12 12 12C12.4142 12 12.75 12.3358 12.75 12.75V17.1893L13.9697 15.9697C14.2626 15.6768 14.7374 15.6768 15.0303 15.9697C15.3232 16.2626 15.3232 16.7374 15.0303 17.0303Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					d="M19.4874 8.42678C19.5112 8.45058 19.5343 8.475 19.5566 8.5H14.75C14.0596 8.5 13.5 7.94036 13.5 7.25V2.44343C13.525 2.46571 13.5494 2.48876 13.5732 2.51256L19.4874 8.42678Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M8.75 21.25H7.75C6.09315 21.25 4.75 19.9069 4.75 18.25V5.75C4.75 4.09315 6.09315 2.75 7.75 2.75H11.9216C12.452 2.75 12.9607 2.96071 13.3358 3.33579L18.6642 8.66421C19.0393 9.03929 19.25 9.54799 19.25 10.0784V18.25C19.25 19.9069 17.9069 21.25 16.25 21.25H15.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.75 3.25V7.25C12.75 8.35457 13.6454 9.25 14.75 9.25H18.75"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 13.75V20L14.5 17.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 20L9.5 17.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFileDownload;
