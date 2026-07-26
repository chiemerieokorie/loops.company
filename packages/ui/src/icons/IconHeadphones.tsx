import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconHeadphones: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="headphones, support">
		{variant === "filled" ? (
			<>
				<path
					d="M4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12V13H19.25C17.1789 13 15.5 14.6789 15.5 16.75V18.25C15.5 19.7688 16.7312 21 18.25 21C19.7688 21 21 19.7688 21 18.25V12C21 7.282 17.3696 3.41192 12.75 3.03081V3H12C7.02944 3 3 7.02944 3 12V18.25C3 19.7688 4.23122 21 5.75 21C7.26878 21 8.5 19.7688 8.5 18.25V16.75C8.5 14.6789 6.82107 13 4.75 13H4.5V12Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 13.75V12C3.75 7.44365 7.44365 3.75 12 3.75C16.5563 3.75 20.25 7.44365 20.25 12V13.75M3.75 13.75V18.25C3.75 19.3546 4.64543 20.25 5.75 20.25C6.85457 20.25 7.75 19.3546 7.75 18.25V16.75C7.75 15.0931 6.40685 13.75 4.75 13.75H3.75ZM20.25 13.75V18.25C20.25 19.3546 19.3546 20.25 18.25 20.25C17.1454 20.25 16.25 19.3546 16.25 18.25V16.75C16.25 15.0931 17.5931 13.75 19.25 13.75H20.25Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconHeadphones;
