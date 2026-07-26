import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPaintBucket: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="paint-bucket, design, color, appearance"
	>
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12 2C15.854 2 19.0407 4.79901 19.8174 8.5H20.25C20.6642 8.5 21 8.83579 21 9.25C21 9.66421 20.6642 10 20.25 10H20V18.25C20 20.3211 18.3211 22 16.25 22H7.75C5.67893 22 4 20.3211 4 18.25V10H3.75C3.33579 10 3 9.66421 3 9.25C3 8.83579 3.33579 8.5 3.75 8.5H4.18262C4.95927 4.79901 8.146 2 12 2ZM12 3.5C9.01009 3.5 6.46522 5.60758 5.7207 8.5H8V13.25C8 13.6642 8.33579 14 8.75 14C9.16421 14 9.5 13.6642 9.5 13.25V8.5H11V11.25C11 11.6642 11.3358 12 11.75 12C12.1642 12 12.5 11.6642 12.5 11.25V8.5H18.2793C17.5348 5.60758 14.9899 3.5 12 3.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M8.75 9.5V14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11.75 10V12.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 9.25H20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.25 18.25V10C19.25 5.99594 16.0041 2.75 12 2.75C7.99594 2.75 4.75 5.99594 4.75 10V18.25C4.75 19.9069 6.09315 21.25 7.75 21.25H16.25C17.9069 21.25 19.25 19.9069 19.25 18.25Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPaintBucket;
