import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFileBend: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="file-bend, document">
		{variant === "filled" ? (
			<>
				<path
					d="M12 2H7.75C5.67893 2 4 3.67893 4 5.75V18.25C4 20.3211 5.67893 22 7.75 22H16.25C18.3211 22 20 20.3211 20 18.25V10H14.75C13.2312 10 12 8.76878 12 7.25V2Z"
					fill="currentColor"
				/>
				<path
					d="M19.5566 8.49993C19.5343 8.47493 19.5112 8.45051 19.4874 8.4267L13.5732 2.51249C13.5494 2.48868 13.525 2.46564 13.5 2.44336V7.24993C13.5 7.94028 14.0596 8.49993 14.75 8.49993H19.5566Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M11.9216 2.75H7.75C6.09315 2.75 4.75 4.09315 4.75 5.75V18.25C4.75 19.9069 6.09315 21.25 7.75 21.25H16.25C17.9069 21.25 19.25 19.9069 19.25 18.25V10.0784C19.25 9.54799 19.0393 9.03929 18.6642 8.66421L13.3358 3.33579C12.9607 2.96071 12.452 2.75 11.9216 2.75Z"
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
			</>
		)}
	</CentralIconBase>
);

export default IconFileBend;
