import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconChanges: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="changes, plus-minus, compare">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M17.25 3C19.3211 3 21 4.67893 21 6.75V17.25C21 19.3211 19.3211 21 17.25 21H6.75C4.67893 21 3 19.3211 3 17.25V6.75C3 4.67893 4.67893 3 6.75 3H17.25ZM9.25 15.25C8.83579 15.25 8.5 15.5858 8.5 16C8.5 16.4142 8.83579 16.75 9.25 16.75H14.75C15.1642 16.75 15.5 16.4142 15.5 16C15.5 15.5858 15.1642 15.25 14.75 15.25H9.25ZM12 7C11.5858 7 11.25 7.33579 11.25 7.75V9.75H9.25C8.83579 9.75 8.5 10.0858 8.5 10.5C8.5 10.9142 8.83579 11.25 9.25 11.25H11.25V13.25C11.25 13.6642 11.5858 14 12 14C12.4142 14 12.75 13.6642 12.75 13.25V11.25H14.75C15.1642 11.25 15.5 10.9142 15.5 10.5C15.5 10.0858 15.1642 9.75 14.75 9.75H12.75V7.75C12.75 7.33579 12.4142 7 12 7Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M9.25 10.5H14.75M12 7.75V13.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.25 16L14.75 16"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20.25 17.25V6.75C20.25 5.09315 18.9069 3.75 17.25 3.75H6.75C5.09315 3.75 3.75 5.09315 3.75 6.75V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H17.25C18.9069 20.25 20.25 18.9069 20.25 17.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconChanges;
