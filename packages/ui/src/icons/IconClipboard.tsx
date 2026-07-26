import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconClipboard: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="clipboard, copy, list">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M15.5675 4H16.25C18.3211 4 20 5.67893 20 7.75V18.25C20 20.3211 18.3211 22 16.25 22H7.75C5.67893 22 4 20.3211 4 18.25V7.75C4 5.67893 5.67893 4 7.75 4H8.43252C9.06127 2.81055 10.311 2 11.75 2H12.25C13.689 2 14.9387 2.81055 15.5675 4ZM14.5 5.75C14.5 4.50736 13.4926 3.5 12.25 3.5H11.75C10.5074 3.5 9.5 4.50736 9.5 5.75V6.25C9.5 6.38807 9.61193 6.5 9.75 6.5H14.25C14.3881 6.5 14.5 6.38807 14.5 6.25V5.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M15.25 4.75H16.25C17.9069 4.75 19.25 6.09315 19.25 7.75V18.25C19.25 19.9069 17.9069 21.25 16.25 21.25H7.75C6.09315 21.25 4.75 19.9069 4.75 18.25V7.75C4.75 6.09315 6.09315 4.75 7.75 4.75H8.75M9.75 7.25H14.25C14.8023 7.25 15.25 6.80228 15.25 6.25V5.75C15.25 4.09315 13.9069 2.75 12.25 2.75H11.75C10.0931 2.75 8.75 4.09315 8.75 5.75V6.25C8.75 6.80228 9.19772 7.25 9.75 7.25Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconClipboard;
