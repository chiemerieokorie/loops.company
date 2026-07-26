import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconChevronLargeRight: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="chevron-large-right, chev right, next">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M9.36681 2.10546C9.72284 1.89377 10.1831 2.01078 10.3948 2.36681L14.9831 10.0836C15.6854 11.2647 15.6854 12.7355 14.9831 13.9166L10.3948 21.6334C10.1831 21.9895 9.72284 22.1065 9.36681 21.8948C9.01078 21.6831 8.89377 21.2228 9.10546 20.8668L13.6938 13.15C14.1152 12.4413 14.1152 11.5589 13.6938 10.8502L9.10546 3.13342C8.89377 2.77739 9.01078 2.31716 9.36681 2.10546Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M9.75 2.75L14.3383 10.4668C14.9002 11.4117 14.9002 12.5883 14.3384 13.5332L9.75 21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconChevronLargeRight;
