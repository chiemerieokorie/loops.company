import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconExpandSimple2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="expand-simple-2">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M5.75 12C5.33579 12 5 11.6642 5 11.25V7.75C5 6.23122 6.23122 5 7.75 5H11.25C11.6642 5 12 5.33579 12 5.75C12 6.16421 11.6642 6.5 11.25 6.5H7.75C7.05964 6.5 6.5 7.05964 6.5 7.75V11.25C6.5 11.6642 6.16421 12 5.75 12ZM12 18.25C12 17.8358 12.3358 17.5 12.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V12.75C17.5 12.3358 17.8358 12 18.25 12C18.6642 12 19 12.3358 19 12.75V16.25C19 17.7688 17.7688 19 16.25 19H12.75C12.3358 19 12 18.6642 12 18.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M12.75 18.25H16.25C17.3546 18.25 18.25 17.3546 18.25 16.25V12.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.75 11.25V7.75C5.75 6.64543 6.64543 5.75 7.75 5.75H11.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconExpandSimple2;
