import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconParagraph: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="paragraph">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M7.75 4.5C5.817 4.5 4.25 6.067 4.25 8C4.25 9.933 5.817 11.5 7.75 11.5H9V4.5H7.75ZM10.5 4.5V20.1725C10.5 20.5868 10.1642 20.9225 9.75 20.9225C9.33579 20.9225 9 20.5868 9 20.1725V13H7.75C4.98858 13 2.75 10.7614 2.75 8C2.75 5.23858 4.98858 3 7.75 3H20.25C20.6642 3 21 3.33579 21 3.75C21 4.16421 20.6642 4.5 20.25 4.5H16V20.25C16 20.6642 15.6642 21 15.25 21C14.8358 21 14.5 20.6642 14.5 20.25V4.5H10.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M20.25 3.75H15.25M9.75 12.25H7.75C5.40279 12.25 3.5 10.3472 3.5 8C3.5 5.65279 5.40279 3.75 7.75 3.75H9.75M9.75 12.25V20.1725M9.75 12.25V3.75M9.75 3.75H15.25M15.25 3.75V20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconParagraph;
