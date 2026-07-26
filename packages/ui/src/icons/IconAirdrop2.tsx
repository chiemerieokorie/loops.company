import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconAirdrop2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="airdrop-2, free, drop, parachute">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3.00002 11C3.00002 10.935 3.00071 10.8702 3.00208 10.8055C2.99821 10.7535 2.99973 10.7011 3.00673 10.6491C3.19105 5.84119 7.14695 2 12 2C16.8531 2 20.809 5.84119 20.9933 10.6491C21.0003 10.7011 21.0018 10.7535 20.998 10.8055C20.9993 10.8702 21 10.935 21 11C21 11.2122 20.9101 11.4145 20.7525 11.5568C20.6068 11.6883 20.4158 11.757 20.2209 11.7494L14.9301 16.147C16.1317 16.5384 17 17.6678 17 19C17 20.6569 15.6569 22 14 22H10C8.34317 22 7.00002 20.6569 7.00002 19C7.00002 17.6678 7.86836 16.5384 9.06991 16.147L3.77913 11.7494C3.5842 11.757 3.39324 11.6883 3.2475 11.5568C3.08995 11.4145 3.00002 11.2122 3.00002 11ZM17.2775 11.4899C17.5675 11.5125 17.8452 11.535 18.1059 11.5569L12.7603 16H12.75V11.2427C14.1939 11.273 15.8735 11.3808 17.2775 11.4899ZM11.25 11.2427V16H11.2398L5.89411 11.5569C6.1548 11.535 6.4325 11.5125 6.72258 11.4899C8.12658 11.3808 9.80616 11.273 11.25 11.2427Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M14 21.25H10C8.75736 21.25 7.75 20.2426 7.75 19C7.75 17.7574 8.75736 16.75 10 16.75H14C15.2426 16.75 16.25 17.7574 16.25 19C16.25 20.2426 15.2426 21.25 14 21.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 10.75L10.9688 16.75M13.0312 16.75L20.25 10.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 10.75V16.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 2.75C7.44365 2.75 3.75 6.44365 3.75 11C3.75 11 8.77189 10.4844 12 10.4844C15.2281 10.4844 20.25 11 20.25 11C20.25 6.44365 16.5563 2.75 12 2.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconAirdrop2;
