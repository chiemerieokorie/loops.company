import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBubbleText: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="bubble-text, comment, feedback">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3 6.75C3 4.67893 4.67893 3 6.75 3H17.25C19.3211 3 21 4.67893 21 6.75V15.25C21 17.3211 19.3211 19 17.25 19H15.3759C15.3177 19 15.2613 19.0203 15.2164 19.0575L13.1181 20.7959C12.4676 21.3348 11.5249 21.3321 10.8775 20.7894L8.81242 19.0584C8.76741 19.0207 8.71055 19 8.65182 19H6.75C4.67893 19 3 17.3211 3 15.25V6.75ZM8.75 8.25C8.33579 8.25 8 8.58579 8 9C8 9.41421 8.33579 9.75 8.75 9.75H15.25C15.6642 9.75 16 9.41421 16 9C16 8.58579 15.6642 8.25 15.25 8.25H8.75ZM8.75 12.25C8.33579 12.25 8 12.5858 8 13C8 13.4142 8.33579 13.75 8.75 13.75H15.25C15.6642 13.75 16 13.4142 16 13C16 12.5858 15.6642 12.25 15.25 12.25H8.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M15.25 9H8.75M15.25 13H8.75M9.29422 18.4836L11.3593 20.2147C11.7292 20.5248 12.2679 20.5263 12.6397 20.2183L14.738 18.4799C14.9173 18.3313 15.143 18.25 15.3759 18.25H17.25C18.9069 18.25 20.25 16.9069 20.25 15.25V6.75C20.25 5.09315 18.9069 3.75 17.25 3.75H6.75C5.09315 3.75 3.75 5.09315 3.75 6.75V15.25C3.75 16.9069 5.09315 18.25 6.75 18.25H8.65182C8.88675 18.25 9.11418 18.3327 9.29422 18.4836Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBubbleText;
