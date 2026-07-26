import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFridge: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="fridge">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M4 5.75C4 3.67893 5.67893 2 7.75 2H16.25C18.3211 2 20 3.67893 20 5.75V10.25H4V5.75ZM16 6.25C16 5.83579 15.6642 5.5 15.25 5.5C14.8358 5.5 14.5 5.83579 14.5 6.25V7.25C14.5 7.66421 14.8358 8 15.25 8C15.6642 8 16 7.66421 16 7.25V6.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M4 11.75V18.5C4 20.5711 5.67893 22.25 7.75 22.25H16.25C18.3211 22.25 20 20.5711 20 18.5V11.75H4ZM15.25 14C15.6642 14 16 14.3358 16 14.75V15.75C16 16.1642 15.6642 16.5 15.25 16.5C14.8358 16.5 14.5 16.1642 14.5 15.75V14.75C14.5 14.3358 14.8358 14 15.25 14Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 5.75C4.75 4.09315 6.09315 2.75 7.75 2.75H16.25C17.9069 2.75 19.25 4.09315 19.25 5.75V18.5C19.25 20.1569 17.9069 21.5 16.25 21.5H7.75C6.09315 21.5 4.75 20.1569 4.75 18.5V5.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.25 6.75V7.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.25 14.25V15.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19 11H5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFridge;
