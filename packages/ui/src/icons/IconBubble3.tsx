import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBubble3: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="bubble-3, message, chat">
		{variant === "filled" ? (
			<>
				<path
					d="M12 2C6.47715 2 2 6.47715 2 12C2 13.4157 2.29465 14.7646 2.82668 15.9871C2.92281 16.208 2.93578 16.4267 2.88015 16.6069L2.10456 19.119C1.57614 20.8305 3.16229 22.4432 4.88237 21.9433L7.53617 21.172C7.70954 21.1217 7.91818 21.1344 8.13052 21.2236C9.32175 21.7239 10.6296 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 13.3108 3.02267 14.558 3.51437 15.6878C3.67129 16.0484 3.71278 16.4524 3.59677 16.8281L2.82118 19.3402C2.4689 20.4812 3.52634 21.5564 4.67306 21.2231L7.32685 20.4518C7.68827 20.3468 8.07392 20.3864 8.42094 20.5321C9.52186 20.9945 10.7311 21.25 12 21.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBubble3;
