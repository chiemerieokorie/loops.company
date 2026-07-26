import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSlice: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="slice, knife">
		{variant === "filled" ? (
			<>
				<path
					d="M6.7804 3.71962C5.65911 2.59834 3.84115 2.59834 2.71987 3.71962C1.59852 4.84098 1.5986 6.65908 2.72005 7.78033L6.93083 11.9904L4.28395 14.5535C4.13971 14.6931 4.05749 14.8848 4.05572 15.0856C4.05394 15.2864 4.13275 15.4795 4.2745 15.6217C7.42319 18.7806 10.1244 20.3147 12.8958 20.8107C15.6402 21.3018 18.3517 20.7519 21.433 19.9774C21.6948 19.9116 21.9011 19.71 21.973 19.4498C22.045 19.1895 21.9714 18.9106 21.7805 18.7197L6.7804 3.71962Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M21.2501 19.25L6.25007 4.24995C5.42168 3.42156 4.07859 3.42156 3.2502 4.24995C2.42176 5.0784 2.42182 6.42159 3.25033 7.24995L8.00013 11.9989L4.80569 15.0923C10.9724 21.2789 15.0835 20.8 21.2501 19.25Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSlice;
