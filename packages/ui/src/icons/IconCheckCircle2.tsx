import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCheckCircle2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="check-circle-2, done, confirm, save, success"
	>
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM15.667 8.12695C15.3228 7.89661 14.8574 7.98889 14.627 8.33301L10.4482 14.5723L8.28125 12.3945C7.98911 12.1009 7.51434 12.0995 7.2207 12.3916C6.92733 12.6838 6.9267 13.1586 7.21875 13.4521L10.0312 16.2793C10.1897 16.4384 10.4112 16.5177 10.6348 16.4961C10.8584 16.4744 11.0605 16.3537 11.1855 16.167L15.873 9.16699C16.1034 8.82283 16.0111 8.35739 15.667 8.12695Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<circle
					cx="12"
					cy="12"
					r="9.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.75 12.9231L10.5625 15.75L15.25 8.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCheckCircle2;
