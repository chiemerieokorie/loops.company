import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconToast: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="toast, breakfest">
		{variant === "filled" ? (
			<>
				<path
					d="M12 3C9.34018 3 6.89523 3.6103 5.08906 4.63542C3.30507 5.64796 2 7.16238 2 9C2 10.4383 2.80469 11.683 4 12.6342V17.25C4 19.3211 5.67893 21 7.75 21H16.25C18.3211 21 20 19.3211 20 17.25V12.6342C21.1953 11.683 22 10.4383 22 9C22 7.16238 20.6949 5.64796 18.9109 4.63542C17.1048 3.6103 14.6598 3 12 3Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M19.25 12.2608C20.5021 11.3651 21.25 10.2321 21.25 9C21.25 6.10051 17.1086 3.75 12 3.75C6.89137 3.75 2.75 6.10051 2.75 9C2.75 10.2321 3.49786 11.3651 4.75 12.2608V17.25C4.75 18.9069 6.09315 20.25 7.75 20.25H16.25C17.9069 20.25 19.25 18.9069 19.25 17.25V12.2608Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconToast;
