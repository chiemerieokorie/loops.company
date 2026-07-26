import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBowling: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="bowling">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.3 9.6001C14.1284 9.6001 14.8 8.92852 14.8 8.1001C14.8 7.27167 14.1284 6.6001 13.3 6.6001C12.4716 6.6001 11.8 7.27167 11.8 8.1001C11.8 8.92852 12.4716 9.6001 13.3 9.6001ZM18.2 11.5C18.2 12.3284 17.5284 13 16.7 13C15.8716 13 15.2 12.3284 15.2 11.5C15.2 10.6716 15.8716 10 16.7 10C17.5284 10 18.2 10.6716 18.2 11.5ZM12.15 14.2002C12.9784 14.2002 13.65 13.5286 13.65 12.7002C13.65 11.8718 12.9784 11.2002 12.15 11.2002C11.3216 11.2002 10.65 11.8718 10.65 12.7002C10.65 13.5286 11.3216 14.2002 12.15 14.2002Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M14.8984 8.25C14.8984 9.07843 14.2269 9.75 13.3984 9.75C12.57 9.75 11.8984 9.07843 11.8984 8.25C11.8984 7.42157 12.57 6.75 13.3984 6.75C14.2269 6.75 14.8984 7.42157 14.8984 8.25Z"
					fill="currentColor"
				/>
				<circle cx="16.5" cy="11.5" fill="currentColor" r="1.5" />
				<circle cx="12.25" cy="12.5" fill="currentColor" r="1.5" />
				<circle
					cx="12"
					cy="12"
					r="9.25"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBowling;
