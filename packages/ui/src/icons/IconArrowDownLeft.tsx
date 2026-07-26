import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowDownLeft: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="arrow-down-left">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M18.6339 5.36612C18.1457 4.87796 17.3543 4.87796 16.8661 5.36612L7.5 14.7322V9.25C7.5 8.55964 6.94036 8 6.25 8C5.55964 8 5 8.55964 5 9.25V17.75C5 18.4404 5.55964 19 6.25 19H14.75C15.4404 19 16 18.4404 16 17.75C16 17.0596 15.4404 16.5 14.75 16.5H9.26777L18.6339 7.13388C19.122 6.64573 19.122 5.85427 18.6339 5.36612Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M5.75 8.75V18.25H15.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18.0001 6L6.3999 17.6002"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowDownLeft;
