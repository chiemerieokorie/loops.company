import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconInputForm: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="input-form, text-area, prompt, rename">
		{variant === "filled" ? (
			<>
				<path
					d="M9 21H7.5V3H9V21ZM6 18H5.75C3.67893 18 2 16.3211 2 14.25V9.75C2 7.67893 3.67893 6 5.75 6H6V18ZM18.25 6C20.3211 6 22 7.67893 22 9.75V14.25C22 16.3211 20.3211 18 18.25 18H10.5V6H18.25Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M11.75 6.75H18.25C19.9069 6.75 21.25 8.09315 21.25 9.75V14.25C21.25 15.9069 19.9069 17.25 18.25 17.25H11.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.75 6.75C4.09315 6.75 2.75 8.09315 2.75 9.75V14.25C2.75 15.9069 4.09315 17.25 5.75 17.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.75 3.75V20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconInputForm;
