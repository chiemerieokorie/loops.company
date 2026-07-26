import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPlugin1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="plugin-1, power, adapter">
		{variant === "filled" ? (
			<>
				<path
					d="M9.5 2.75C9.5 2.33579 9.16421 2 8.75 2C8.33579 2 8 2.33579 8 2.75V5.5H7.75C5.67893 5.5 4 7.17893 4 9.25V14.25C4 16.8734 6.12665 19 8.75 19H11.25V21.25C11.25 21.6642 11.5858 22 12 22C12.4142 22 12.75 21.6642 12.75 21.25V19H15.25C17.8734 19 20 16.8734 20 14.25V9.25C20 7.17893 18.3211 5.5 16.25 5.5H16V2.75C16 2.33579 15.6642 2 15.25 2C14.8358 2 14.5 2.33579 14.5 2.75V5.5H9.5V2.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M19.25 14.25V9.25C19.25 7.59315 17.9069 6.25 16.25 6.25H7.75C6.09315 6.25 4.75 7.59315 4.75 9.25V14.25C4.75 16.4591 6.54086 18.25 8.75 18.25H15.25C17.4591 18.25 19.25 16.4591 19.25 14.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 18.25V21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.25 6.25V2.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.75 6.25V2.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPlugin1;
