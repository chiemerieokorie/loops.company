import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconWrite1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="write-1, fountain-pen">
		{variant === "filled" ? (
			<>
				<path
					d="M12 4.93846L19.0607 11.9991L19.7322 11.3276C21.2943 9.76547 21.2943 7.23281 19.7322 5.67072L18.3284 4.26691C16.7663 2.70481 14.2336 2.70481 12.6715 4.26691L12 4.93846Z"
					fill="currentColor"
				/>
				<path
					d="M18.3033 13.3621L10.6378 5.69659L7.9464 6.6753C6.64435 7.14877 5.68002 8.26231 5.39745 9.61865L3.3125 19.6264L8.26632 14.674C8.08526 14.3279 7.98287 13.9342 7.98287 13.5166C7.98287 12.1359 9.10216 11.0166 10.4829 11.0166C11.8636 11.0166 12.9829 12.1359 12.9829 13.5166C12.9829 14.8973 11.8636 16.0166 10.4829 16.0166C10.066 16.0166 9.67302 15.9146 9.32744 15.7342L4.3726 20.6876L14.3813 18.6025C15.7376 18.3199 16.8512 17.3556 17.3246 16.0535L18.3033 13.3621Z"
					fill="currentColor"
				/>
				<path
					d="M9.48242 13.5166C9.48242 12.9643 9.93014 12.5166 10.4824 12.5166C11.0347 12.5166 11.4824 12.9643 11.4824 13.5166C11.4824 14.0689 11.0347 14.5166 10.4824 14.5166C9.93014 14.5166 9.48242 14.0689 9.48242 13.5166Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M4 20L10.19 13.8086"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.3787 6.37868L17.6213 4.62132C16.4497 3.44975 14.5503 3.44975 13.3787 4.62132L12 6L18 12L19.3787 10.6213C20.5503 9.44975 20.5503 7.55026 19.3787 6.37868Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.5712 15.9292L18 12L12 6L8.07081 7.42879C7.09427 7.7839 6.37103 8.61905 6.1591 9.63631L4 20L14.3637 17.8409C15.3809 17.629 16.2161 16.9057 16.5712 15.9292Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.2324 12.5166C13.2324 13.4831 12.4489 14.2666 11.4824 14.2666C10.5159 14.2666 9.73242 13.4831 9.73242 12.5166C9.73242 11.5501 10.5159 10.7666 11.4824 10.7666C12.4489 10.7666 13.2324 11.5501 13.2324 12.5166Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconWrite1;
