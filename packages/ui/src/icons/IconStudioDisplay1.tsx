import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconStudioDisplay1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="studio-display, xdr, imac">
		{variant === "filled" ? (
			<>
				<path
					d="M9 17H15V20.25C15 20.6642 14.6642 21 14.25 21H9.75C9.33579 21 9 20.6642 9 20.25V17Z"
					fill="currentColor"
				/>
				<rect
					fill="currentColor"
					height="13"
					rx="2.75"
					width="20"
					x="2"
					y="3"
				/>
			</>
		) : (
			<>
				<path
					d="M19.25 3.75H4.75C3.64543 3.75 2.75 4.64543 2.75 5.75V13.25C2.75 14.3546 3.64543 15.25 4.75 15.25H19.25C20.3546 15.25 21.25 14.3546 21.25 13.25V5.75C21.25 4.64543 20.3546 3.75 19.25 3.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.25 15.75V20.25H14.75V15.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconStudioDisplay1;
