import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconWifiWeak: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="wifi-weak, spot, signal, hot spot">
		{variant === "filled" ? (
			<>
				<path
					d="M16.7878 13.9058C13.9969 11.7293 10.0021 11.7293 7.21126 13.9058C6.88464 14.1606 6.41335 14.1023 6.15862 13.7757C5.90389 13.449 5.96218 12.9778 6.2888 12.723C9.62194 10.1236 14.3771 10.1236 17.7103 12.723C18.0369 12.9778 18.0952 13.449 17.8404 13.7757C17.5857 14.1023 17.1144 14.1606 16.7878 13.9058Z"
					fill="currentColor"
				/>
				<path
					d="M11.9991 20C12.5514 20 12.9991 19.5523 12.9991 19C12.9991 18.4477 12.5514 18 11.9991 18C11.4468 18 10.9991 18.4477 10.9991 19C10.9991 19.5523 11.4468 20 11.9991 20Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M6.75 13.3144C9.812 10.9264 14.187 10.9264 17.249 13.3144"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 18.25C12.4142 18.25 12.75 18.5858 12.75 19C12.75 19.4142 12.4142 19.75 12 19.75C11.5858 19.75 11.25 19.4142 11.25 19C11.25 18.5858 11.5858 18.25 12 18.25Z"
					fill="currentColor"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="0.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconWifiWeak;
