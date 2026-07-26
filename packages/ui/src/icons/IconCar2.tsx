import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCar2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="car-2">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M5.59099 5.09835C6.29425 4.39509 7.24808 4 8.24264 4H12.5C13.6803 4 14.7918 4.55573 15.5 5.5L16.9495 7.43269C17.2648 7.85304 17.7172 8.1498 18.2284 8.2715L20.1186 8.72155C21.8078 9.12376 23 10.6331 23 12.3696V15.25C23 16.7688 21.7688 18 20.25 18H20.1632C19.6015 19.1825 18.3962 20 17 20C15.6038 20 14.3985 19.1825 13.8368 18H10.1632C9.60145 19.1825 8.3962 20 7 20C5.59293 20 4.37979 19.1697 3.82381 17.9723C2.23029 17.7636 1 16.4005 1 14.75V11.2426C1 10.2481 1.39509 9.29425 2.09835 8.59099L5.59099 5.09835ZM7 14.5C5.89543 14.5 5 15.3954 5 16.5C5 17.6046 5.89543 18.5 7 18.5C8.10457 18.5 9 17.6046 9 16.5C9 15.3954 8.10457 14.5 7 14.5ZM17 14.5C15.8954 14.5 15 15.3954 15 16.5C15 17.6046 15.8954 18.5 17 18.5C18.1046 18.5 19 17.6046 19 16.5C19 15.3954 18.1046 14.5 17 14.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M19.75 17.25H20.25C21.3546 17.25 22.25 16.3546 22.25 15.25V12.3696C22.25 10.9804 21.2963 9.77292 19.9449 9.45116L18.0547 9.00111C17.3731 8.83884 16.7699 8.44316 16.3495 7.88269L14.9 5.95C14.3334 5.19458 13.4443 4.75 12.5 4.75H8.24264C7.44699 4.75 6.68393 5.06607 6.12132 5.62868L2.62868 9.12132C2.06607 9.68393 1.75 10.447 1.75 11.2426V14.75C1.75 16.1307 2.86929 17.25 4.25 17.25"
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
				<path
					d="M9.75 17.25H14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCar2;
