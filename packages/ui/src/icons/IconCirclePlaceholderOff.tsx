import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCirclePlaceholderOff: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="circle-placeholder-off">
		{variant === "filled" ? (
			<>
				<path
					d="M20.4816 17.2999C21.4438 15.7634 22 13.9466 22 12C22 6.47715 17.5229 2 12 2C10.0534 2 8.23663 2.55623 6.70007 3.51842L20.4816 17.2999Z"
					fill="currentColor"
				/>
				<path
					d="M4.41828 5.47894L2.96967 4.03033C2.67678 3.73744 2.67678 3.26256 2.96967 2.96967C3.26256 2.67678 3.73744 2.67678 4.03033 2.96967L5.97731 4.91665C5.98144 4.9206 5.98554 4.9246 5.98959 4.92865L19.0711 18.0101C19.0751 18.0142 19.0792 18.0183 19.0831 18.0225L21.0303 19.9697C21.3232 20.2626 21.3232 20.7374 21.0303 21.0303C20.7374 21.3232 20.2626 21.3232 19.9697 21.0303L18.5208 19.5814C16.7704 21.088 14.4911 21.9997 12 21.9997C6.47715 21.9997 2 17.5226 2 11.9997C2 9.50861 2.91169 7.22927 4.41828 5.47894Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M7.93227 3.69009C9.15988 3.08804 10.5405 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 13.4595 20.912 14.8401 20.3099 16.0677M3.5 3.5L20.5 20.5M12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 9.44568 3.78534 7.13318 5.45926 5.45926L18.5407 18.5407C16.8668 20.2147 14.5543 21.25 12 21.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCirclePlaceholderOff;
