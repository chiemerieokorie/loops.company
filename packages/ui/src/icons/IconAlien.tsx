import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconAlien: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="alien">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3 10.9605C3 6.00838 7.03283 2 12 2C16.9672 2 21 6.00838 21 10.9605C21 14.2861 19.3361 17.2778 17.4617 19.4097C16.5195 20.4814 15.5035 21.3601 14.5738 21.9769C14.1091 22.2853 13.6556 22.5351 13.2345 22.71C12.8235 22.8809 12.397 23 12 23C11.603 23 11.1765 22.8809 10.7655 22.71C10.3444 22.5351 9.8909 22.2853 9.42618 21.9769C8.4965 21.3601 7.48053 20.4814 6.53831 19.4097C4.6639 17.2778 3 14.2861 3 10.9605ZM7.38195 9.92737C10.156 9.83264 10.8406 11.2375 10.9727 13.1176C11.008 13.6207 10.622 14.0554 10.118 14.0726C7.34396 14.1673 6.65931 12.7624 6.52727 10.8824C6.49194 10.3793 6.87792 9.94458 7.38195 9.92737ZM16.618 9.92737C13.844 9.83264 13.1593 11.2376 13.0273 13.1176C12.9919 13.6207 13.3779 14.0554 13.882 14.0726C16.656 14.1673 17.3406 12.7624 17.4727 10.8824C17.508 10.3793 17.122 9.94458 16.618 9.92737Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M20.25 10.9605C20.25 17.1184 14.0625 22.25 12 22.25C9.9375 22.25 3.75 17.1184 3.75 10.9605C3.75 6.42598 7.44365 2.75 12 2.75C16.5563 2.75 20.25 6.42598 20.25 10.9605Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.25 10.7964C10.0742 10.7965 10.25 11.7025 10.25 13.1964C7.67245 13.1964 7.25 12.2964 7.25 10.7964Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8 11.4979L9.5 12.4949"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.75 10.7964C13.9258 10.7965 13.75 11.7025 13.75 13.1964C16.3275 13.1964 16.75 12.2964 16.75 10.7964Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16 11.4979L14.5 12.4949"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconAlien;
