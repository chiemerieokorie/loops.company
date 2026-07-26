import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPackageDelivery: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="package-delivery">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3 3.75C3 3.33579 3.33579 3 3.75 3C5.82107 3 7.5 4.67893 7.5 6.75V13.575C8.96935 13.8733 10.1267 15.0307 10.425 16.5H20.25C20.6642 16.5 21 16.8358 21 17.25C21 17.6642 20.6642 18 20.25 18H10.425C10.0775 19.7117 8.56422 21 6.75 21C4.67893 21 3 19.3211 3 17.25C3 15.4358 4.28832 13.9225 6 13.575V6.75C6 5.50736 4.99264 4.5 3.75 4.5C3.33579 4.5 3 4.16421 3 3.75ZM6.75 15C5.50736 15 4.5 16.0074 4.5 17.25C4.5 18.4926 5.50736 19.5 6.75 19.5C7.99264 19.5 9 18.4926 9 17.25C9 16.0074 7.99264 15 6.75 15Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M10 7.75C10 5.67893 11.6789 4 13.75 4H14.75V8.25C14.75 8.66421 15.0858 9 15.5 9Lnan nanL15.5 9C15.9142 9 16.25 8.66421 16.25 8.25V4H17.25C19.3211 4 21 5.67893 21 7.75V10.25C21 12.3211 19.3211 14 17.25 14H13.75C11.6789 14 10 12.3211 10 10.25V7.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M6.75 14V6.75C6.75 5.09315 5.40685 3.75 3.75 3.75M10 17.25H20.25M15.5 8.25V4.75M15.5 4.75H13.75C12.0931 4.75 10.75 6.09315 10.75 7.75V10.25C10.75 11.9069 12.0931 13.25 13.75 13.25H17.25C18.9069 13.25 20.25 11.9069 20.25 10.25V7.75C20.25 6.09315 18.9069 4.75 17.25 4.75H15.5ZM9.75 17.25C9.75 18.9069 8.40685 20.25 6.75 20.25C5.09315 20.25 3.75 18.9069 3.75 17.25C3.75 15.5931 5.09315 14.25 6.75 14.25C8.40685 14.25 9.75 15.5931 9.75 17.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPackageDelivery;
