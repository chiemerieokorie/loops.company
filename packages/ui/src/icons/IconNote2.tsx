import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconNote2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="note-2">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3 6.75C3 4.67893 4.67893 3 6.75 3H17.25C19.3211 3 21 4.67893 21 6.75V13.3355C21 14.33 20.6049 15.2839 19.9017 15.9871L15.9871 19.9017C15.2839 20.6049 14.33 21 13.3355 21H6.75C4.67893 21 3 19.3211 3 17.25V6.75ZM19.5 11C19.5 12.1046 18.6046 13 17.5 13H16.75C14.6789 13 13 14.6789 13 16.75V17.5C13 18.6046 12.1046 19.5 11 19.5H6.75C5.50736 19.5 4.5 18.4926 4.5 17.25V6.75C4.5 5.50736 5.50736 4.5 6.75 4.5H17.25C18.4926 4.5 19.5 5.50736 19.5 6.75V11Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M17.25 3.75H6.75C5.09315 3.75 3.75 5.09315 3.75 6.75V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H13.3355C14.1311 20.25 14.8942 19.9339 15.4568 19.3713L19.3713 15.4568C19.9339 14.8942 20.25 14.1311 20.25 13.3355V6.75C20.25 5.09315 18.9069 3.75 17.25 3.75Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11 20.25C12.5188 20.25 13.75 19.0188 13.75 17.5V16.75C13.75 15.0931 15.0931 13.75 16.75 13.75H17.5C19.0188 13.75 20.25 12.5188 20.25 11"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconNote2;
