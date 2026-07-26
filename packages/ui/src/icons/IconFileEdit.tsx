import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFileEdit: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="file-edit, document, cloud, sync">
		{variant === "filled" ? (
			<>
				<path
					d="M7.75073 2H12.0007V7.25C12.0007 8.76878 13.2319 10 14.7507 10H20.0007V18.25C20.0007 20.3211 18.3218 22 16.2507 22H7.75073C7.72604 22 7.70141 21.9998 7.67684 21.9993L8.33513 21.341C8.75709 20.919 8.99414 20.3467 8.99414 19.75V13.2566C8.99414 11.1855 7.31521 9.50659 5.24414 9.50659C4.80831 9.50659 4.38984 9.58094 4.00073 9.71765V5.75C4.00073 3.67893 5.67966 2 7.75073 2Z"
					fill="currentColor"
				/>
				<path
					d="M19.4882 8.42678C19.512 8.45058 19.535 8.475 19.5573 8.5H14.7507C14.0604 8.5 13.5007 7.94036 13.5007 7.25V2.44343C13.5257 2.46571 13.5502 2.48876 13.574 2.51256L19.4882 8.42678Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M2.99414 13.2566C2.99414 12.0139 4.0015 11.0066 5.24414 11.0066C6.48678 11.0066 7.49414 12.014 7.49414 13.2566V19.75C7.49414 19.9489 7.41512 20.1397 7.27447 20.2803L5.77447 21.7803C5.63382 21.921 5.44305 22 5.24414 22C5.04523 22 4.85446 21.921 4.71381 21.7803L3.21381 20.2803C3.07316 20.1397 2.99414 19.9489 2.99414 19.75L2.99414 13.2566Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 8.75V5.75C4.75 4.09315 6.09315 2.75 7.75 2.75H11.9216C12.452 2.75 12.9607 2.96071 13.3358 3.33579L18.6642 8.66421C19.0393 9.03929 19.25 9.54799 19.25 10.0784V18.25C19.25 19.9069 17.9069 21.25 16.25 21.25H9.75"
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
					d="M5.24414 21.2502L3.74414 19.7502L3.74414 13.2568C3.74414 12.4284 4.41571 11.7568 5.24414 11.7568C6.07257 11.7568 6.74414 12.4284 6.74414 13.2568L6.74414 19.7502L5.24414 21.2502Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFileEdit;
