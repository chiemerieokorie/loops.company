import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCar7: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="car-7, pickup">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M8 5.75C8 4.7835 8.7835 4 9.75 4H14C14.8656 4 15.6807 4.40753 16.2 5.1L18.1645 7.71939C18.3404 7.95383 18.593 8.11904 18.8782 8.18616L20.1089 8.47573C21.8028 8.8743 23 10.3859 23 12.126V15.25C23 16.7688 21.7688 18 20.25 18H20.1632C19.6015 19.1825 18.3962 20 17 20C15.6038 20 14.3985 19.1825 13.8368 18H10.1632C9.60145 19.1825 8.3962 20 7 20C5.6038 20 4.39855 19.1825 3.83682 18H3.75C2.23122 18 1 16.7688 1 15.25V11.75C1 10.2312 2.23122 9 3.75 9H8V5.75ZM7 14.5C5.89543 14.5 5 15.3954 5 16.5C5 17.6046 5.89543 18.5 7 18.5C8.10457 18.5 9 17.6046 9 16.5C9 15.3954 8.10457 14.5 7 14.5ZM17 14.5C15.8954 14.5 15 15.3954 15 16.5C15 17.6046 15.8954 18.5 17 18.5C18.1046 18.5 19 17.6046 19 16.5C19 15.3954 18.1046 14.5 17 14.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M19.75 17.25H20.25C21.3546 17.25 22.25 16.3546 22.25 15.25V12.126C22.25 10.7339 21.2923 9.52465 19.9371 9.20579L18.7065 8.91623C18.25 8.80884 17.8459 8.5445 17.5645 8.16939L15.6 5.55C15.2223 5.04639 14.6295 4.75 14 4.75H9.75C9.19772 4.75 8.75 5.19772 8.75 5.75V9.75H3.75C2.64543 9.75 1.75 10.6454 1.75 11.75V15.25C1.75 16.3546 2.64543 17.25 3.75 17.25H4.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.75 17.25H14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="7"
					cy="16.75"
					r="2.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="17"
					cy="16.75"
					r="2.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCar7;
