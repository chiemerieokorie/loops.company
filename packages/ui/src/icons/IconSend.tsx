import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSend: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="send, email, paper-plane, arrow">
		{variant === "filled" ? (
			<>
				<path
					d="M20.9551 5.83601C21.4524 4.13074 19.8703 2.54864 18.1651 3.04601L2.49118 7.61756C0.248252 8.27174 0.365216 11.4881 2.64974 11.9776L9.89474 13.5301C10.1835 13.592 10.4091 13.8176 10.4709 14.1063L12.0234 21.3513C12.513 23.6358 15.7293 23.7528 16.3835 21.5099L20.9551 5.83601Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M12.7568 21.1941C13.0831 22.7171 15.2274 22.7951 15.6635 21.2998L20.235 5.6259C20.5666 4.48906 19.5119 3.43432 18.375 3.7659L2.70115 8.33745C1.20587 8.77357 1.28384 10.9178 2.80686 11.2442L10.0519 12.7967C10.6294 12.9204 11.0805 13.3715 11.2043 13.9491L12.7568 21.1941Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSend;
