import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBubbleText6: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="bubble-text-6, message, chat">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M2 8.75C2 5.57436 4.57436 3 7.75 3H16.25C19.4256 3 22 5.57436 22 8.75V15.25C22 18.4256 19.4256 21 16.25 21H2.75C2.33579 21 2 20.6642 2 20.25V8.75ZM8.75 9C8.33579 9 8 9.33579 8 9.75C8 10.1642 8.33579 10.5 8.75 10.5H15.25C15.6642 10.5 16 10.1642 16 9.75C16 9.33579 15.6642 9 15.25 9H8.75ZM8.75 13.5C8.33579 13.5 8 13.8358 8 14.25C8 14.6642 8.33579 15 8.75 15H12.25C12.6642 15 13 14.6642 13 14.25C13 13.8358 12.6642 13.5 12.25 13.5H8.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M15.25 9.75H8.75M12.25 14.25H8.75M2.75 20.25H16.25C19.0114 20.25 21.25 18.0114 21.25 15.25V8.75C21.25 5.98858 19.0114 3.75 16.25 3.75H7.75C4.98858 3.75 2.75 5.98858 2.75 8.75V20.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBubbleText6;
