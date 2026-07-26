import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFileArrowRightIn: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="file-arrow-right-in, document-arrow-right-in, incoming"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M15.2197 15.4697C15.5126 15.1768 15.9874 15.1768 16.2803 15.4697C16.5732 15.7626 16.5732 16.2374 16.2803 16.5303L14.5605 18.25H20.25C20.6642 18.25 21 18.5858 21 19C21 19.4142 20.6642 19.75 20.25 19.75H14.5605L16.2803 21.4697C16.5732 21.7626 16.5732 22.2374 16.2803 22.5303C15.9874 22.8232 15.5126 22.8232 15.2197 22.5303L12.2197 19.5303C11.9268 19.2374 11.9268 18.7626 12.2197 18.4697L15.2197 15.4697Z"
					fill="currentColor"
				/>
				<path
					d="M12 7.25C12 8.76878 13.2312 10 14.75 10H20V16.75H17.8691C18.1488 15.9585 17.974 15.0425 17.3408 14.4092C16.4621 13.5305 15.0379 13.5305 14.1592 14.4092L11.1592 17.4092C10.2805 18.2879 10.2805 19.7121 11.1592 20.5908L12.5684 22H7.75C5.67893 22 4 20.3211 4 18.25V5.75C4 3.67893 5.67893 2 7.75 2H12V7.25Z"
					fill="currentColor"
				/>
				<path
					d="M13.5732 2.5127L19.4873 8.42676C19.5111 8.45056 19.5344 8.475 19.5566 8.5H14.75C14.0596 8.5 13.5 7.94036 13.5 7.25V2.44336C13.525 2.46564 13.5494 2.48889 13.5732 2.5127Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M19.25 13.25V10.4926C19.25 9.69699 18.9339 8.93393 18.3713 8.37132L13.6287 3.62868C13.0661 3.06607 12.303 2.75 11.5074 2.75H7.75C6.09315 2.75 4.75 4.09315 4.75 5.75V18.25C4.75 19.9069 6.09315 21.25 7.75 21.25H9.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.75 3.25439V7.24982C12.75 8.35439 13.6454 9.24982 14.75 9.24982H18.7501"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14 19H20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.75 16L12.75 19L15.75 22"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFileArrowRightIn;
