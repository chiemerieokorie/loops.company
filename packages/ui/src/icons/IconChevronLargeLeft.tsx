import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconChevronLargeLeft: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="chevron-large-left, chev left, last">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M14.6333 2.10546C14.9893 2.31716 15.1063 2.77739 14.8946 3.13342L10.3063 10.8502C9.88489 11.5589 9.88489 12.4414 10.3063 13.1501L14.8946 20.8668C15.1063 21.2228 14.9893 21.6831 14.6333 21.8948C14.2773 22.1065 13.817 21.9895 13.6053 21.6334L9.01698 13.9167C8.31466 12.7355 8.31465 11.2648 9.01697 10.0836L13.6053 2.36681C13.817 2.01078 14.2773 1.89377 14.6333 2.10546Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M14.25 21.25L9.66163 13.5332C9.09977 12.5883 9.09977 11.4117 9.66162 10.4668L14.25 2.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconChevronLargeLeft;
