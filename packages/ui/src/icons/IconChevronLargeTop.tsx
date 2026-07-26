import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconChevronLargeTop: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="chevron-large-top, chev top, up">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M13.15 10.3063C12.4413 9.88489 11.5589 9.88489 10.8502 10.3063L3.13342 14.8946C2.77739 15.1063 2.31716 14.9893 2.10546 14.6333C1.89377 14.2773 2.01078 13.817 2.36681 13.6053L10.0836 9.01697C11.2648 8.31465 12.7355 8.31465 13.9166 9.01697L21.6334 13.6053C21.9895 13.817 22.1065 14.2773 21.8948 14.6333C21.6831 14.9893 21.2228 15.1063 20.8668 14.8946L13.15 10.3063Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 14.25L10.4668 9.66163C11.4117 9.09977 12.5883 9.09977 13.5332 9.66163L21.25 14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconChevronLargeTop;
