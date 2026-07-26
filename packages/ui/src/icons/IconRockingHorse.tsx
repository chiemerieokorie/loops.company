import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconRockingHorse: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="rocking-horse, child, kids, toy">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M18.3252 2C18.7412 2.00002 19.124 2.22757 19.3232 2.59277L21.3018 6.21973C21.7026 6.95476 21.5028 7.87265 20.833 8.375C20.3223 8.75791 19.6393 8.81963 19.0684 8.53418L18 8L17 10L19.4355 18.2832C19.895 18.0096 20.3567 17.7131 20.8174 17.3877C21.1557 17.1487 21.6233 17.2291 21.8623 17.5674C22.1013 17.9057 22.0209 18.3733 21.6826 18.6123C18.516 20.8493 15.2766 22 12 22C8.72344 22 5.484 20.8493 2.31738 18.6123C1.97911 18.3733 1.89872 17.9057 2.1377 17.5674C2.3767 17.2291 2.84432 17.1487 3.18262 17.3877C3.64013 17.7109 4.09837 18.0062 4.55469 18.2783L6.625 10H5.75C4.50736 10 3.5 11.0074 3.5 12.25C3.5 12.6642 3.16421 13 2.75 13C2.33579 13 2 12.6642 2 12.25C2 10.1789 3.67893 8.5 5.75 8.5H12L13.6064 5.01953C14.4559 3.17905 16.2981 2 18.3252 2ZM11.2256 15C10.4898 15.0001 9.83252 15.4608 9.58105 16.1523L8.20898 19.9238C9.47898 20.3092 10.7429 20.5 12 20.5C13.2568 20.5 14.5203 20.309 15.79 19.9238L14.4189 16.1523C14.1675 15.4608 13.5102 15.0001 12.7744 15H11.2256Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 12.25C2.75 10.5931 4.09315 9.25 5.75 9.25H11.9932C13.9021 4.25604 14.8022 2.88144 18.4214 2.75924C18.778 2.7472 19.1101 2.94015 19.2889 3.24896L21.3597 6.82589C21.5892 7.22227 21.5201 7.72388 21.1919 8.0434L20.713 8.50975C20.4109 8.8039 19.9567 8.87696 19.5776 8.69239L18.1554 8L17 10L19.5 19"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7 9.5L4.5 19"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.5 20L9.72854 15.3201C9.89437 14.9718 10.2457 14.75 10.6314 14.75H13.3686C13.7543 14.75 14.1056 14.9718 14.2715 15.3201L16.5 20"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M2.75 18C8.88423 22.3333 15.1158 22.3333 21.25 18"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconRockingHorse;
