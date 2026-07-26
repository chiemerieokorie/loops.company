import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconShieldSearch: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="shield-search, safety, privacy, security, scan"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M11 8.50009C12.3807 8.50009 13.5 9.61938 13.5 11.0001C13.5 12.3808 12.3807 13.5001 11 13.5001C9.6193 13.5001 8.50002 12.3808 8.5 11.0001C8.5 9.61938 9.61929 8.50009 11 8.50009Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M10.5352 2.05673C11.4712 1.65964 12.5288 1.65964 13.4648 2.05673L18.7148 4.28427C20.1002 4.87217 21 6.23145 21 7.73642V13.0001C21 17.9706 16.9705 22.0001 12 22.0001C7.02946 22.0001 3.00003 17.9706 3 13.0001V7.73642C3 6.23145 3.89979 4.87217 5.28516 4.28427L10.5352 2.05673ZM11 7.00009C8.79086 7.00009 7 8.79095 7 11.0001C7.00002 13.2092 8.79087 15.0001 11 15.0001C11.8334 15.0001 12.6064 14.7438 13.2471 14.3077L14.9697 16.0304C15.2626 16.3232 15.7374 16.3232 16.0303 16.0304C16.3232 15.7375 16.3231 15.2627 16.0303 14.9698L14.3076 13.2472C14.7437 12.6065 15 11.8335 15 11.0001C15 8.79095 13.2091 7.00009 11 7.00009Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 7.73608C3.75 6.532 4.4699 5.44459 5.57835 4.97434L10.8284 2.74706C11.5772 2.42939 12.4228 2.42939 13.1716 2.74706L18.4216 4.97434C19.5301 5.44459 20.25 6.532 20.25 7.73608V13C20.25 17.5563 16.5563 21.25 12 21.25C7.44365 21.25 3.75 17.5563 3.75 13V7.73608Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="11"
					cy="11"
					r="3.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.5 13.5L15.5 15.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconShieldSearch;
