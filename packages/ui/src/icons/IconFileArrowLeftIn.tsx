import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFileArrowLeftIn: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="file-arrow-left-in, document-arrow-left-in, incoming"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M7.71973 15.4697C8.01262 15.1768 8.48738 15.1768 8.78027 15.4697L11.7803 18.4697C12.0732 18.7626 12.0732 19.2374 11.7803 19.5303L8.78027 22.5303C8.48738 22.8232 8.01262 22.8232 7.71973 22.5303C7.42683 22.2374 7.42683 21.7626 7.71973 21.4697L9.43945 19.75H3.75C3.33579 19.75 3 19.4142 3 19C3 18.5858 3.33579 18.25 3.75 18.25H9.43945L7.71973 16.5303C7.42683 16.2374 7.42683 15.7626 7.71973 15.4697Z"
					fill="currentColor"
				/>
				<path
					d="M12 7.25C12 8.76878 13.2312 10 14.75 10H20V18.25C20 20.3211 18.3211 22 16.25 22H11.4316L12.8408 20.5908C13.7195 19.7121 13.7195 18.2879 12.8408 17.4092L9.84082 14.4092C8.96214 13.5305 7.53786 13.5305 6.65918 14.4092C6.02588 15.0425 5.85127 15.9584 6.13086 16.75H4V5.75C4 3.67893 5.67893 2 7.75 2H12V7.25Z"
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
					d="M3.75 19H10"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.25 16L11.25 19L8.25 22"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFileArrowLeftIn;
