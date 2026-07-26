import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBubblePlus: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="bubble-plus, comment, feedback">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3 6.75C3 4.67893 4.67893 3 6.75 3H17.25C19.3211 3 21 4.67893 21 6.75V15.25C21 17.3211 19.3211 19 17.25 19H15.3759C15.3177 19 15.2613 19.0203 15.2164 19.0575L13.1181 20.7959C12.4676 21.3348 11.5249 21.3321 10.8775 20.7894L8.81242 19.0584C8.76741 19.0207 8.71055 19 8.65182 19H6.75C4.67893 19 3 17.3211 3 15.25V6.75ZM12.75 7.75C12.75 7.33578 12.4142 7 12 7C11.5858 7 11.25 7.33578 11.25 7.75L11.25 10.25H8.75C8.33579 10.25 8 10.5858 8 11C8 11.4142 8.33579 11.75 8.75 11.75H11.25V14.25C11.25 14.6642 11.5858 15 12 15C12.4142 15 12.75 14.6642 12.75 14.25V11.75H15.25C15.6642 11.75 16 11.4142 16 11C16 10.5858 15.6642 10.25 15.25 10.25H12.75L12.75 7.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M12 7.75L12 11M12 11V14.25M12 11H8.75M12 11H15.25M9.29422 18.4836L11.3593 20.2147C11.7292 20.5248 12.2679 20.5263 12.6397 20.2183L14.738 18.4799C14.9173 18.3313 15.143 18.25 15.3759 18.25H17.25C18.9069 18.25 20.25 16.9069 20.25 15.25V6.75C20.25 5.09315 18.9069 3.75 17.25 3.75H6.75C5.09315 3.75 3.75 5.09315 3.75 6.75V15.25C3.75 16.9069 5.09315 18.25 6.75 18.25H8.65182C8.88675 18.25 9.11418 18.3327 9.29422 18.4836Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBubblePlus;
