import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSuitcaseWork: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="suitcase-work,workspace">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M10.75 3.5C9.50736 3.5 8.5 4.50736 8.5 5.75V6H15.5V5.75C15.5 4.50736 14.4926 3.5 13.25 3.5H10.75ZM17 6V5.75C17 3.67893 15.3211 2 13.25 2H10.75C8.67893 2 7 3.67893 7 5.75V6H5.75C3.67893 6 2 7.67893 2 9.75V17.25C2 19.3211 3.67893 21 5.75 21H18.25C20.3211 21 22 19.3211 22 17.25V9.75C22 7.67893 20.3211 6 18.25 6H17Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M21.25 17.25V9.75C21.25 8.09315 19.9069 6.75 18.25 6.75H5.75C4.09315 6.75 2.75 8.09315 2.75 9.75V17.25C2.75 18.9069 4.09315 20.25 5.75 20.25H18.25C19.9069 20.25 21.25 18.9069 21.25 17.25Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.75 6.75V5.75C7.75 4.09315 9.09315 2.75 10.75 2.75H13.25C14.9069 2.75 16.25 4.09315 16.25 5.75V6.75"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSuitcaseWork;
