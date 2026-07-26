import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBubble2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="bubble-2, message, chat">
		{variant === "filled" ? (
			<>
				<path
					d="M18.252 3C20.323 3 22.002 4.67893 22.002 6.75V15.25C22.002 17.3211 20.323 19 18.252 19H12.1946L7.36339 21.6572C7.13105 21.785 6.84849 21.7806 6.62023 21.6456C6.39198 21.5106 6.25195 21.2652 6.25195 21V19H5.75195C3.68089 19 2.00195 17.3211 2.00195 15.25V6.75C2.00195 4.67893 3.68089 3 5.75195 3H18.252Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M5.75195 3.75H18.252C19.9088 3.75 21.252 5.09315 21.252 6.75V15.25C21.252 16.9069 19.9088 18.25 18.252 18.25H12.002L7.00195 21V18.25H5.75195C4.0951 18.25 2.75195 16.9069 2.75195 15.25V6.75C2.75195 5.09315 4.0951 3.75 5.75195 3.75Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBubble2;
