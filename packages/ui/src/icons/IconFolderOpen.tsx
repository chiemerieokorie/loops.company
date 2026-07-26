import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFolderOpen: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="folder-open">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M5.75 3C3.67893 3 2 4.67893 2 6.75V17.677C2 18.96 3.04005 20 4.32301 20H18.0047C19.2247 20 20.2988 19.1963 20.643 18.026L22.3436 12.2438C22.6408 11.2335 21.9874 10.2215 21 10.0317V8.75C21 7.23122 19.7688 6 18.25 6H13.0704C12.6524 6 12.2621 5.79112 12.0303 5.44338L11.5146 4.66987C10.8191 3.62663 9.64827 3 8.39445 3H5.75ZM19.5 10V8.75C19.5 8.05964 18.9404 7.5 18.25 7.5H13.0704C12.1509 7.5 11.2923 7.04047 10.7822 6.27543L10.2666 5.50192C9.84926 4.87598 9.14674 4.5 8.39445 4.5H5.75C4.50736 4.5 3.5 5.50736 3.5 6.75V17.677C3.5 18.1315 3.86848 18.5 4.32301 18.5C4.68811 18.5 5.00956 18.2595 5.11258 17.9092L6.85822 11.974C7.20244 10.8037 8.27655 10 9.49648 10H19.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M5.75 3.75H8.39445C9.39751 3.75 10.3342 4.2513 10.8906 5.0859L11.4063 5.8594C11.7772 6.4158 12.4017 6.75 13.0704 6.75H18.25C19.3546 6.75 20.25 7.64543 20.25 8.75V10.75H20.6635C21.3311 10.75 21.8113 11.3917 21.6229 12.0322L19.9223 17.8143C19.6719 18.6655 18.8907 19.25 18.0035 19.25H4.32301C3.45426 19.25 2.75 18.5457 2.75 17.677V6.75C2.75 5.09315 4.09315 3.75 5.75 3.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20.2493 10.75H9.49573C8.60851 10.75 7.82734 11.3345 7.577 12.1857L5.83136 18.1208C5.63446 18.7903 5.02007 19.25 4.32227 19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFolderOpen;
