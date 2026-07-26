import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCodeInsert: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="code-insert">
		{variant === "filled" ? (
			<>
				<path
					d="M16.2454 1.75C16.6596 1.75 16.9954 2.08579 16.9954 2.5V4H18.2454C20.3165 4 21.9954 5.67893 21.9954 7.75V16.25C21.9954 18.3211 20.3165 20 18.2454 20H16.9954V21.5C16.9954 21.9142 16.6596 22.25 16.2454 22.25C15.8312 22.25 15.4954 21.9142 15.4954 21.5V2.5C15.4954 2.08579 15.8312 1.75 16.2454 1.75Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M2 7.75C2 5.67893 3.67893 4 5.75 4H14V20H5.75C3.67893 20 2 18.3211 2 16.25V7.75ZM8.03033 8.96967C7.73744 8.67678 7.26256 8.67678 6.96967 8.96967C6.67678 9.26256 6.67678 9.73744 6.96967 10.0303L8.93934 12L6.96967 13.9697C6.67678 14.2626 6.67678 14.7374 6.96967 15.0303C7.26256 15.3232 7.73744 15.3232 8.03033 15.0303L10.5303 12.5303C10.8232 12.2374 10.8232 11.7626 10.5303 11.4697L8.03033 8.96967Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M13.25 4.75H5.75C4.09315 4.75 2.75 6.09315 2.75 7.75V16.25C2.75 17.9069 4.09315 19.25 5.75 19.25H13.25M16.2454 4.75H18.2454C19.9022 4.75 21.2454 6.09315 21.2454 7.75V16.25C21.2454 17.9069 19.9022 19.25 18.2454 19.25H16.2454M16.2454 4.75V2.5M16.2454 4.75V19.25M16.2454 19.25V21.5M8.5 9.5L11 12L8.5 14.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCodeInsert;
