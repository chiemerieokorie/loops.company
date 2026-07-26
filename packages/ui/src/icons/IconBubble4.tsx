import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBubble4: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="bubble-4, message, chat">
		{variant === "filled" ? (
			<>
				<path
					d="M17.252 3C19.323 3 21.002 4.67893 21.002 6.75V16.25C21.002 18.3211 19.323 20 17.252 20H8.03875C7.99189 20 7.94598 20.0132 7.90625 20.038L4.14945 22.386C3.91825 22.5305 3.62684 22.5382 3.38838 22.406C3.14991 22.2738 3.00195 22.0226 3.00195 21.75V6.75C3.00195 4.67893 4.68089 3 6.75195 3H17.252Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M20.252 6.75C20.252 5.09315 18.9088 3.75 17.252 3.75H6.75195C5.0951 3.75 3.75195 5.09315 3.75195 6.75V21.75L7.50875 19.402C7.66768 19.3027 7.85133 19.25 8.03875 19.25H17.252C18.9088 19.25 20.252 17.9069 20.252 16.25V6.75Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBubble4;
