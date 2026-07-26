import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowDownRight: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="arrow-down-right">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M5.36612 5.36612C5.85427 4.87796 6.64573 4.87796 7.13388 5.36612L16.5 14.7322V9.25C16.5 8.55964 17.0596 8 17.75 8C18.4404 8 19 8.55964 19 9.25V17.75C19 18.4404 18.4404 19 17.75 19H9.25C8.55964 19 8 18.4404 8 17.75C8 17.0596 8.55964 16.5 9.25 16.5H14.7322L5.36612 7.13388C4.87796 6.64573 4.87796 5.85427 5.36612 5.36612Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M18.25 8.75V18.25H8.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6 6L17.6002 17.6002"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowDownRight;
