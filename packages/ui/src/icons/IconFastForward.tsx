import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFastForward: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="fast-forward">
		{variant === "filled" ? (
			<>
				<path
					d="M6.88832 5.34412L12.2424 9.92938V6.6733C12.2424 5.17854 13.9954 4.37182 15.1307 5.34412L21.351 10.6711C22.1665 11.3696 22.1665 12.631 21.351 13.3295L15.1307 18.6565C13.9954 19.6288 12.2424 18.8221 12.2424 17.3273V14.0712L6.88832 18.6565C5.75299 19.6288 4 18.8221 4 17.3273V6.6733C4 5.17854 5.75299 4.37182 6.88832 5.34412Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M12.9924 11.5587V6.67283C12.9924 5.81868 13.9941 5.3577 14.6429 5.9133L20.8631 11.2403C21.3292 11.6394 21.3292 12.3602 20.8631 12.7594L14.6429 18.0864C13.9941 18.642 12.9924 18.181 12.9924 17.3268V12.441M12.9924 11.5587L6.40047 5.9133C5.75171 5.3577 4.75 5.81868 4.75 6.67283V17.3268C4.75 18.181 5.75171 18.642 6.40047 18.0864L12.9924 12.441M12.9924 11.5587V12.441"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFastForward;
