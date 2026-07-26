import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowsRepeatCircle: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="arrows-repeat-circle, repost">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M10.2004 0.989665C10.4823 0.686132 10.9568 0.668556 11.2603 0.950408L14.7603 4.20041C14.9132 4.34232 15 4.54145 15 4.75C15 4.95856 14.9132 5.15769 14.7603 5.2996L11.2603 8.5496C10.9568 8.83145 10.4823 8.81388 10.2004 8.51034C9.91855 8.20681 9.93613 7.73226 10.2397 7.45041L12.3401 5.5H10C6.41015 5.5 3.5 8.41015 3.5 12C3.5 13.9592 4.36587 15.7153 5.73836 16.9081C6.051 17.1799 6.08417 17.6536 5.81246 17.9662C5.54074 18.2789 5.06703 18.312 4.75439 18.0403C3.06805 16.5747 2 14.4116 2 12C2 7.58173 5.58172 4 10 4H12.3401L10.2397 2.0496C9.93613 1.76775 9.91855 1.2932 10.2004 0.989665ZM18.1886 6.03453C18.4604 5.72194 18.9341 5.68885 19.2467 5.96062C20.9324 7.42622 22 9.58887 22 12C22 16.4183 18.4183 20 14 20H11.6599L13.7603 21.9504C14.0639 22.2323 14.0814 22.7068 13.7996 23.0103C13.5177 23.3139 13.0432 23.3315 12.7397 23.0496L9.23966 19.7996C9.08684 19.6577 9 19.4586 9 19.25C9 19.0415 9.08684 18.8423 9.23966 18.7004L12.7397 15.4504C13.0432 15.1686 13.5177 15.1861 13.7996 15.4897C14.0814 15.7932 14.0639 16.2677 13.7603 16.5496L11.6599 18.5H14C17.5899 18.5 20.5 15.5899 20.5 12C20.5 10.0412 19.6345 8.28544 18.2625 7.09261C17.9499 6.82084 17.9168 6.34712 18.1886 6.03453Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M10.75 1.5L14.25 4.75L10.75 8"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.25 16L9.75 19.25L13.25 22.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10.75 19.2507H14C18.0041 19.2507 21.25 16.0048 21.25 12.0007C21.25 9.81577 20.2834 7.85656 18.7546 6.52734"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.25 4.75H10C5.99593 4.75 2.75 7.99594 2.75 12C2.75 14.1854 3.71696 16.145 5.24638 17.4742"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowsRepeatCircle;
