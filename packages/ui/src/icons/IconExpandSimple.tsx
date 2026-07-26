import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconExpandSimple: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="expand-simple">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12 5.75C12 5.33579 12.3358 5 12.75 5H16.25C17.7688 5 19 6.23122 19 7.75V11.25C19 11.6642 18.6642 12 18.25 12C17.8358 12 17.5 11.6642 17.5 11.25V7.75C17.5 7.05964 16.9404 6.5 16.25 6.5H12.75C12.3358 6.5 12 6.16421 12 5.75ZM5.75 12C6.16421 12 6.5 12.3358 6.5 12.75V16.25C6.5 16.9404 7.05964 17.5 7.75 17.5H11.25C11.6642 17.5 12 17.8358 12 18.25C12 18.6642 11.6642 19 11.25 19H7.75C6.23122 19 5 17.7688 5 16.25V12.75C5 12.3358 5.33579 12 5.75 12Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M5.75 12.75V16.25C5.75 17.3546 6.64543 18.25 7.75 18.25H11.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.75 5.75H16.25C17.3546 5.75 18.25 6.64543 18.25 7.75V11.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconExpandSimple;
