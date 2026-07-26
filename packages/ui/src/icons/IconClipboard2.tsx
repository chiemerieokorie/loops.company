import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconClipboard2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="clipboard-2, copy, list">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M16.5675 4H17.25C19.3211 4 21 5.67893 21 7.75V18.25C21 20.3211 19.3211 22 17.25 22H6.75C4.67893 22 3 20.3211 3 18.25V7.75C3 5.67893 4.67893 4 6.75 4H7.43252C8.06127 2.81055 9.31098 2 10.75 2H13.25C14.689 2 15.9387 2.81055 16.5675 4ZM15.5 5.75C15.5 4.50736 14.4926 3.5 13.25 3.5H10.75C9.50736 3.5 8.5 4.50736 8.5 5.75V6.25C8.5 6.38807 8.61193 6.5 8.75 6.5H15.25C15.3881 6.5 15.5 6.38807 15.5 6.25V5.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M16.25 4.75H17.25C18.9069 4.75 20.25 6.09315 20.25 7.75V18.25C20.25 19.9069 18.9069 21.25 17.25 21.25H6.75C5.09315 21.25 3.75 19.9069 3.75 18.25V7.75C3.75 6.09315 5.09315 4.75 6.75 4.75H7.75M8.75 7.25H15.25C15.8023 7.25 16.25 6.80228 16.25 6.25V5.75C16.25 4.09315 14.9069 2.75 13.25 2.75H10.75C9.09315 2.75 7.75 4.09315 7.75 5.75V6.25C7.75 6.80228 8.19772 7.25 8.75 7.25Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconClipboard2;
