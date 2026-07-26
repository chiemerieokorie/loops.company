import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBubbleAlert: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="bubble-alert, comment, feedback">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M6.75 3C4.67893 3 3 4.67893 3 6.75V15.25C3 17.3211 4.67893 19 6.75 19H8.65182C8.71055 19 8.76741 19.0207 8.81242 19.0584L10.8775 20.7894C11.5249 21.3321 12.4676 21.3348 13.1181 20.7959L15.2164 19.0575C15.2613 19.0203 15.3177 19 15.3759 19H17.25C19.3211 19 21 17.3211 21 15.25V6.75C21 4.67893 19.3211 3 17.25 3H6.75ZM12 7C12.4142 7 12.75 7.33579 12.75 7.75V11.25C12.75 11.6642 12.4142 12 12 12C11.5858 12 11.25 11.6642 11.25 11.25V7.75C11.25 7.33579 11.5858 7 12 7ZM12 14.75C12.5523 14.75 13 14.3023 13 13.75C13 13.1977 12.5523 12.75 12 12.75C11.4477 12.75 11 13.1977 11 13.75C11 14.3023 11.4477 14.75 12 14.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M12 7.75V11.25M9.29422 18.4836L11.3593 20.2147C11.7292 20.5248 12.2679 20.5263 12.6397 20.2183L14.738 18.4799C14.9173 18.3313 15.143 18.25 15.3759 18.25H17.25C18.9069 18.25 20.25 16.9069 20.25 15.25V6.75C20.25 5.09315 18.9069 3.75 17.25 3.75H6.75C5.09315 3.75 3.75 5.09315 3.75 6.75V15.25C3.75 16.9069 5.09315 18.25 6.75 18.25H8.65182C8.88675 18.25 9.11418 18.3327 9.29422 18.4836Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 13.75H12.01"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="2"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBubbleAlert;
