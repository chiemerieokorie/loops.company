import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowPathLeft: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="arrow-path-left">
		{variant === "filled" ? (
			<>
				<path
					d="M8.94751 4.3626C9.76105 3.68099 11.0003 4.2594 11.0003 5.32075V7.99954H18.2503C20.3214 7.99954 22.0003 9.67847 22.0003 11.7495V12.2495C22.0003 14.3206 20.3214 15.9995 18.2503 15.9995H11.0003V18.6783C11.0003 19.7397 9.76106 20.3181 8.94751 19.6365L1.89094 13.7242C0.817604 12.8249 0.8176 11.1741 1.89094 10.2749L8.94751 4.3626Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M21.25 12.25V11.75C21.25 10.0931 19.9069 8.75 18.25 8.75H10.25V5.32122C10.25 4.89668 9.75431 4.66531 9.42889 4.93796L2.37232 10.8502C1.65676 11.4497 1.65676 12.5503 2.37232 13.1498L9.42889 19.062C9.75431 19.3347 10.25 19.1033 10.25 18.6788V15.25H18.25C19.9069 15.25 21.25 13.9069 21.25 12.25Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowPathLeft;
