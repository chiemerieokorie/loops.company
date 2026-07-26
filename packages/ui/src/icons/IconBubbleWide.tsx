import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBubbleWide: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="bubble-wide, message, chat">
		{variant === "filled" ? (
			<>
				<path
					d="M5.75 3C3.67893 3 2 4.67893 2 6.75V15.25C2 17.3211 3.67893 19 5.75 19H8.65182C8.71055 19 8.76741 19.0207 8.81242 19.0584L10.8775 20.7894C11.5249 21.3321 12.4676 21.3348 13.1181 20.7959L15.2164 19.0575C15.2613 19.0203 15.3177 19 15.3759 19H18.25C20.3211 19 22 17.3211 22 15.25V6.75C22 4.67893 20.3211 3 18.25 3H5.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 6.75C2.75 5.09315 4.09315 3.75 5.75 3.75H18.25C19.9069 3.75 21.25 5.09315 21.25 6.75V15.25C21.25 16.9069 19.9069 18.25 18.25 18.25H15.3759C15.143 18.25 14.9173 18.3313 14.738 18.4799L12.6397 20.2183C12.2679 20.5263 11.7292 20.5248 11.3593 20.2147L9.29422 18.4836C9.11418 18.3327 8.88675 18.25 8.65182 18.25H5.75C4.09315 18.25 2.75 16.9069 2.75 15.25V6.75Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBubbleWide;
