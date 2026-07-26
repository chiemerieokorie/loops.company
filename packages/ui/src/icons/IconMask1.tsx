import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconMask1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="mask, medical-mask, covid">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M11.0029 3.24707C11.6553 3.06718 12.3447 3.06718 12.9971 3.24707L17.2471 4.41992C18.6985 4.82032 19.7493 6.04272 19.959 7.5H20C21.6565 7.5 22.9995 8.84359 23 10.5C23 12.1569 21.6569 13.5 20 13.5V14.8672C19.9999 16.3061 19.1757 17.6184 17.8799 18.2441L13.6299 20.2959C12.6001 20.7929 11.3999 20.7929 10.3701 20.2959L6.12012 18.2441C4.82435 17.6184 4.00008 16.3061 4 14.8672V13.5C2.34315 13.5 1 12.1569 1 10.5C1.00053 8.84359 2.34347 7.5 4 7.5H4.04102C4.25074 6.04272 5.30149 4.82032 6.75293 4.41992L11.0029 3.24707ZM9 13C8.58597 13 8.2503 13.336 8.25 13.75C8.25 14.1642 8.58579 14.5 9 14.5H15C15.4142 14.5 15.75 14.1642 15.75 13.75C15.7497 13.336 15.414 13 15 13H9ZM4 9C3.1719 9 2.50053 9.67202 2.5 10.5C2.5 11.3284 3.17157 12 4 12V9ZM20 12C20.8284 12 21.5 11.3284 21.5 10.5C21.4995 9.67202 20.8281 9 20 9V12ZM9 9C8.58597 9 8.2503 9.33604 8.25 9.75C8.25 10.1642 8.58579 10.5 9 10.5H15C15.4142 10.5 15.75 10.1642 15.75 9.75C15.7497 9.33604 15.414 9 15 9H9Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 14.867V8.03447C4.75 6.68487 5.6512 5.50139 6.95221 5.14249L11.2022 3.97008C11.7243 3.82605 12.2757 3.82605 12.7978 3.97008L17.0478 5.14249C18.3488 5.50139 19.25 6.68487 19.25 8.03447V14.867C19.25 16.0183 18.5911 17.0681 17.5542 17.5686L13.3042 19.6204C12.4802 20.0182 11.5198 20.0182 10.6958 19.6204L6.44575 17.5686C5.40891 17.0681 4.75 16.0183 4.75 14.867Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9 9.75H15"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9 13.75H15"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.75 8.25H20C21.2426 8.25 22.25 9.25736 22.25 10.5C22.25 11.7426 21.2426 12.75 20 12.75H19.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.25 8.25H4C2.75736 8.25 1.75 9.25736 1.75 10.5C1.75 11.7426 2.75736 12.75 4 12.75H4.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconMask1;
