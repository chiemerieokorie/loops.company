import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconThumbsDown: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="thumbs-down, thumb, hand, no, contra">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M18.0022 4.5V12.5H20.2502C20.3882 12.5 20.5002 12.3881 20.5002 12.25V4.75C20.5002 4.61193 20.3882 4.5 20.2502 4.5H18.0022ZM17.5809 14H20.2502C21.2167 14 22.0002 13.2165 22.0002 12.25V4.75C22.0002 3.7835 21.2167 3 20.2502 3H6.58575C4.733 3 3.15858 4.35403 2.87996 6.1859L2.04344 11.6859C1.69829 13.9552 3.45391 16 5.74923 16H10.1134L9.67296 18.8264C9.41317 20.4935 10.7016 22 12.3891 22C13.0399 22 13.6483 21.6378 13.9504 21.0511L17.5809 14Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M17.2521 13.25H20.25C20.8023 13.25 21.25 12.8023 21.25 12.25V4.75C21.25 4.19772 20.8023 3.75 20.25 3.75H17.2521M17.2521 3.75V13L13.2835 20.7078C13.112 21.0407 12.7635 21.25 12.389 21.25V21.25C11.1622 21.25 10.2249 20.1546 10.4139 18.9419L10.9892 15.25H5.74908C3.91335 15.25 2.50859 13.6144 2.78476 11.7987L3.62128 6.29867C3.84421 4.83298 5.1038 3.75 6.5856 3.75H17.2521Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconThumbsDown;
