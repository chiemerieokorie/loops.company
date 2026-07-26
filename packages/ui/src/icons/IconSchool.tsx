import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSchool: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="school, building">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M6 7.75C6 5.67893 7.67893 4 9.75 4H14.25C16.3211 4 18 5.67893 18 7.75V18.5H19V8.07501C20.7117 8.42247 22 9.93578 22 11.75V18.5H22.25C22.6642 18.5 23 18.8358 23 19.25C23 19.6642 22.6642 20 22.25 20H1.75C1.33579 20 1 19.6642 1 19.25C1 18.8358 1.33579 18.5 1.75 18.5H2V11.75C2 9.93578 3.28832 8.42247 5 8.07501V18.5H6V7.75ZM14 18.5V17C14 15.8954 13.1046 15 12 15C10.8954 15 10 15.8954 10 17V18.5H14Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M21.25 19.25V11.75C21.25 10.0931 19.9069 8.75 18.25 8.75H17.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.25 19.25V7.75C17.25 6.09315 15.9069 4.75 14.25 4.75H9.75C8.09315 4.75 6.75 6.09315 6.75 7.75V19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.75 8.75H5.75C4.09315 8.75 2.75 10.0931 2.75 11.75V19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M22.25 19.25H1.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.75 19.25V17C9.75 15.7574 10.7574 14.75 12 14.75C13.2426 14.75 14.25 15.7574 14.25 17V19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSchool;
