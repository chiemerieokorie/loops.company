import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconKeyboard: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="keyboard, midi, keys, piano">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M6.75 3C4.67893 3 3 4.67893 3 6.75V18.25C3 20.3211 4.67893 22 6.75 22H17.25C19.3211 22 21 20.3211 21 18.25V6.75C21 4.67893 19.3211 3 17.25 3H6.75ZM6.5 4.51373C5.37501 4.63809 4.5 5.59186 4.5 6.75V18.25C4.5 19.4926 5.50736 20.5 6.75 20.5H8V13.5H7.25C6.83579 13.5 6.5 13.1642 6.5 12.75V4.51373ZM9.5 20.5H14.5V13.5H13.75C13.3358 13.5 13 13.1642 13 12.75V4.5H11V12.75C11 13.1642 10.6642 13.5 10.25 13.5H9.5V20.5ZM17.5 4.51373V12.75C17.5 13.1642 17.1642 13.5 16.75 13.5H16V20.5H17.25C18.4926 20.5 19.5 19.4926 19.5 18.25V6.75C19.5 5.59186 18.625 4.63809 17.5 4.51373Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M8.75 13V21M15.25 13V21M7.25 3.75V12.75H10.25V3.75H7.25ZM13.75 3.75V12.75H16.75V3.75H13.75ZM6.75 21.25H17.25C18.9069 21.25 20.25 19.9069 20.25 18.25V6.75C20.25 5.09315 18.9069 3.75 17.25 3.75H6.75C5.09315 3.75 3.75 5.09315 3.75 6.75V18.25C3.75 19.9069 5.09315 21.25 6.75 21.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconKeyboard;
