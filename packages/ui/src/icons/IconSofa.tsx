import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSofa: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="sofa, couch, chill">
		{variant === "filled" ? (
			<>
				<path
					d="M3 10V8C3 5.79086 4.79086 4 7 4H17C19.2091 4 21 5.79086 21 8V10H20C18.6193 10 17.5 11.1193 17.5 12.5H6.5C6.5 11.1193 5.38071 10 4 10H3Z"
					fill="currentColor"
				/>
				<path
					d="M3 11.5C1.89543 11.5 1 12.3954 1 13.5V15C1 16.6569 2.34315 18 4 18V19.25C4 19.6642 4.33579 20 4.75 20C5.16421 20 5.5 19.6642 5.5 19.25V18H18.5V19.25C18.5 19.6642 18.8358 20 19.25 20C19.6642 20 20 19.6642 20 19.25V18C21.6569 18 23 16.6569 23 15V13.5C23 12.3954 22.1046 11.5 21 11.5C19.8954 11.5 19 12.3954 19 13.5V14H5V13.5C5 12.3954 4.10457 11.5 3 11.5Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M1.75 12.75C1.75 11.6454 2.64543 10.75 3.75 10.75C4.85457 10.75 5.75 11.6454 5.75 12.75V13.3214H18.25V12.75C18.25 11.6454 19.1454 10.75 20.25 10.75C21.3546 10.75 22.25 11.6454 22.25 12.75V14.25C22.25 15.9069 20.9069 17.25 19.25 17.25H4.75C3.09315 17.25 1.75 15.9069 1.75 14.25V12.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20.25 10.25V7.75C20.25 6.09315 18.9069 4.75 17.25 4.75H6.75C5.09315 4.75 3.75 6.09315 3.75 7.75V10.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.75 17.25V19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18.25 17.25V19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSofa;
