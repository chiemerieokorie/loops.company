import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconShieldCode: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="shield-code, sandbox">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M10.5352 2.05673C11.4712 1.65964 12.5288 1.65964 13.4648 2.05673L18.7148 4.28427C20.1002 4.87217 21 6.23145 21 7.73642V13.0001C21 17.9706 16.9705 22.0001 12 22.0001C7.02946 22.0001 3.00003 17.9706 3 13.0001V7.73642C3 6.23145 3.89979 4.87217 5.28516 4.28427L10.5352 2.05673ZM10.5303 9.21982C10.2374 8.92692 9.76262 8.92692 9.46973 9.21982L7.21973 11.4698C6.92685 11.7627 6.92684 12.2375 7.21973 12.5304L9.46973 14.7804C9.76262 15.0732 10.2374 15.0732 10.5303 14.7804C10.8232 14.4875 10.8231 14.0127 10.5303 13.7198L8.81055 12.0001L10.5303 10.2804C10.8232 9.98747 10.8231 9.51271 10.5303 9.21982ZM14.5303 9.21982C14.2374 8.92692 13.7626 8.92692 13.4697 9.21982C13.1769 9.51271 13.1768 9.98747 13.4697 10.2804L15.1895 12.0001L13.4697 13.7198C13.1769 14.0127 13.1768 14.4875 13.4697 14.7804C13.7626 15.0732 14.2374 15.0732 14.5303 14.7804L16.7803 12.5304C17.0732 12.2375 17.0731 11.7627 16.7803 11.4698L14.5303 9.21982Z"
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
				<path
					d="M10 9.75L7.75 12L10 14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14 14.25L16.25 12L14 9.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconShieldCode;
