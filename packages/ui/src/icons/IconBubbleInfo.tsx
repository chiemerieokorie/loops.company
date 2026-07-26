import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBubbleInfo: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="bubble-info, comment, feedback">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M6.75 3C4.67893 3 3 4.67893 3 6.75V15.25C3 17.3211 4.67893 19 6.75 19H8.65182C8.71055 19 8.76741 19.0207 8.81242 19.0584L10.8775 20.7894C11.5249 21.3321 12.4676 21.3348 13.1181 20.7959L15.2164 19.0575C15.2613 19.0203 15.3177 19 15.3759 19H17.25C19.3211 19 21 17.3211 21 15.25V6.75C21 4.67893 19.3211 3 17.25 3H6.75ZM12 14.75C12.4142 14.75 12.75 14.4142 12.75 14V10.5C12.75 10.0858 12.4142 9.75 12 9.75C11.5858 9.75 11.25 10.0858 11.25 10.5V14C11.25 14.4142 11.5858 14.75 12 14.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M12 14V10.5M9.29422 18.4836L11.3593 20.2147C11.7292 20.5248 12.2679 20.5263 12.6397 20.2183L14.738 18.4799C14.9173 18.3313 15.143 18.25 15.3759 18.25H17.25C18.9069 18.25 20.25 16.9069 20.25 15.25V6.75C20.25 5.09315 18.9069 3.75 17.25 3.75H6.75C5.09315 3.75 3.75 5.09315 3.75 6.75V15.25C3.75 16.9069 5.09315 18.25 6.75 18.25H8.65182C8.88675 18.25 9.11418 18.3327 9.29422 18.4836Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 8H12.01"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="2"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBubbleInfo;
