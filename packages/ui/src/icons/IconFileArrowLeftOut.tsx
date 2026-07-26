import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFileArrowLeftOut: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="file-arrow-left-out, document-arrow-left-out, outgoing"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M6.21967 15.4697C6.51257 15.1769 6.98733 15.1768 7.28022 15.4697C7.57307 15.7626 7.57307 16.2374 7.28022 16.5303L5.56049 18.25H11.2499C11.6641 18.25 11.9999 18.5858 11.9999 19C11.9999 19.4142 11.6641 19.75 11.2499 19.75H5.56049L7.28022 21.4697C7.57307 21.7626 7.57307 22.2374 7.28022 22.5303C6.98733 22.8232 6.51257 22.8231 6.21967 22.5303L3.21967 19.5303C2.92678 19.2374 2.92678 18.7626 3.21967 18.4697L6.21967 15.4697Z"
					fill="currentColor"
				/>
				<path
					d="M11.9999 7.25C11.9999 8.76878 13.2312 10 14.7499 10H19.9999V18.25C19.9999 20.321 18.321 22 16.2499 22H13.4999V19C13.4999 17.7574 12.4926 16.75 11.2499 16.75H8.86908C9.14872 15.9584 8.97401 15.0425 8.34076 14.4092C7.46209 13.5305 6.0378 13.5305 5.15912 14.4092L3.99994 15.5684V5.75C3.99994 3.67893 5.67888 2 7.74994 2H11.9999V7.25Z"
					fill="currentColor"
				/>
				<path
					d="M13.5732 2.5127L19.4872 8.42676C19.511 8.45055 19.5343 8.47501 19.5566 8.5H14.7499C14.0596 8.5 13.4999 7.94036 13.4999 7.25V2.44336C13.5249 2.46563 13.5494 2.4889 13.5732 2.5127Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M14.75 21.25H16.25C17.9069 21.25 19.25 19.9069 19.25 18.25V10.4926C19.25 9.69699 18.9339 8.93393 18.3713 8.37132L13.6287 3.62868C13.0661 3.06607 12.303 2.75 11.5074 2.75H7.75C6.09315 2.75 4.75 4.09315 4.75 5.75V13"
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
					d="M5 19H11.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.75 16L3.75 19L6.75 22"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFileArrowLeftOut;
