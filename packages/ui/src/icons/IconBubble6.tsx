import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBubble6: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="bubble-6, message, chat">
		{variant === "filled" ? (
			<>
				<path
					d="M7.75 3C4.57436 3 2 5.57436 2 8.75V20.25C2 20.6642 2.33579 21 2.75 21H16.25C19.4256 21 22 18.4256 22 15.25V8.75C22 5.57436 19.4256 3 16.25 3H7.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 8.75C2.75 5.98858 4.98858 3.75 7.75 3.75H16.25C19.0114 3.75 21.25 5.98858 21.25 8.75V15.25C21.25 18.0114 19.0114 20.25 16.25 20.25H2.75V8.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBubble6;
