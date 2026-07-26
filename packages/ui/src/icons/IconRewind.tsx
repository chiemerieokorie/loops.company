import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconRewind: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="rewind">
		{variant === "filled" ? (
			<>
				<path
					d="M17.0743 18.6565L11.7202 14.0712V17.3273C11.7202 18.8221 9.96723 19.6288 8.8319 18.6565L2.61168 13.3295C1.79611 12.631 1.79611 11.3696 2.61168 10.6711L8.8319 5.34412C9.96723 4.37182 11.7202 5.17854 11.7202 6.6733V9.92938L17.0743 5.34412C18.2096 4.37182 19.9626 5.17853 19.9626 6.6733V17.3273C19.9626 18.8221 18.2097 19.6288 17.0743 18.6565Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M11.0093 12.441V17.3268C11.0093 18.181 10.0076 18.642 9.35881 18.0864L3.1386 12.7594C2.67255 12.3602 2.67255 11.6394 3.1386 11.2403L9.35881 5.91329C10.0076 5.3577 11.0093 5.81868 11.0093 6.67283V11.5587M11.0093 12.441L17.6012 18.0864C18.25 18.642 19.2517 18.181 19.2517 17.3268V6.67283C19.2517 5.81868 18.25 5.3577 17.6012 5.9133L11.0093 11.5587M11.0093 12.441V11.5587"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconRewind;
