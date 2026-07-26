import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconStethoscope: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="stethoscope, check, diagnostics, analyze"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M6 2C6.41421 2 6.75 2.33579 6.75 2.75C6.75 3.16421 6.41421 3.5 6 3.5H4.5V8.5C4.5 10.7091 6.29086 12.5 8.5 12.5C10.7091 12.5 12.5 10.7091 12.5 8.5V3.5H11C10.5858 3.5 10.25 3.16421 10.25 2.75C10.25 2.33579 10.5858 2 11 2H13.25C13.6642 2 14 2.33579 14 2.75V8.5C14 11.2831 11.9326 13.5814 9.25 13.9473V16.375C9.25 18.6532 11.0968 20.5 13.375 20.5C15.6532 20.5 17.5 18.6532 17.5 16.375V13.8926C16.3463 13.5658 15.5 12.5084 15.5 11.25C15.5 9.73122 16.7312 8.5 18.25 8.5C19.7688 8.5 21 9.73122 21 11.25C21 12.5084 20.1537 13.5658 19 13.8926V16.375C19 19.4816 16.4816 22 13.375 22C10.2684 22 7.75 19.4816 7.75 16.375V13.9473C5.06737 13.5814 3 11.2831 3 8.5V2.75C3 2.55109 3.07907 2.36038 3.21973 2.21973C3.36038 2.07907 3.55109 2 3.75 2H6Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M6 2.75H3.75L3.75 8.5C3.75 11.1234 5.87665 13.25 8.5 13.25C11.1234 13.25 13.25 11.1234 13.25 8.5V2.75H11"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.5 13.5V16.375C8.5 19.0674 10.6826 21.25 13.375 21.25C16.0674 21.25 18.25 19.0674 18.25 16.375V13.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="18.25"
					cy="11.25"
					r="2"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconStethoscope;
