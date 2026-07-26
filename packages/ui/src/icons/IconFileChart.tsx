import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFileChart: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="file-chart, document">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M7.75 2H12V7.25C12 8.76878 13.2312 10 14.75 10H20V18.25C20 20.3211 18.3211 22 16.25 22H7.75C5.67893 22 4 20.3211 4 18.25V5.75C4 3.67893 5.67893 2 7.75 2ZM9.25 16.75C9.25 16.3358 8.91421 16 8.5 16C8.08579 16 7.75 16.3358 7.75 16.75V18.25C7.75 18.6642 8.08579 19 8.5 19C8.91421 19 9.25 18.6642 9.25 18.25V16.75ZM12 13C12.4142 13 12.75 13.3358 12.75 13.75V18.25C12.75 18.6642 12.4142 19 12 19C11.5858 19 11.25 18.6642 11.25 18.25V13.75C11.25 13.3358 11.5858 13 12 13ZM16.25 15.75C16.25 15.3358 15.9142 15 15.5 15C15.0858 15 14.75 15.3358 14.75 15.75V18.25C14.75 18.6642 15.0858 19 15.5 19C15.9142 19 16.25 18.6642 16.25 18.25V15.75Z"
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
					d="M11.9216 2.75H7.75C6.09315 2.75 4.75 4.09315 4.75 5.75V18.25C4.75 19.9069 6.09315 21.25 7.75 21.25H16.25C17.9069 21.25 19.25 19.9069 19.25 18.25V10.0784C19.25 9.54799 19.0393 9.03929 18.6642 8.66421L13.3358 3.33579C12.9607 2.96071 12.452 2.75 11.9216 2.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.75 3.25V7.25C12.75 8.35457 13.6454 9.25 14.75 9.25H18.75"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M8.5 17.25V15.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 17.25V12.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.5 17.25V14.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFileChart;
