import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconRedirectArrow: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="redirect-arrow">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M7.875 3C10.5674 3 12.75 5.18261 12.75 7.875V11.25H18.4395L16.2197 9.03027C15.9268 8.73738 15.9268 8.26262 16.2197 7.96973C16.5126 7.67683 16.9874 7.67683 17.2803 7.96973L20.7803 11.4697C21.0732 11.7626 21.0732 12.2374 20.7803 12.5303L17.2803 16.0303C16.9874 16.3232 16.5126 16.3232 16.2197 16.0303C15.9268 15.7374 15.9268 15.2626 16.2197 14.9697L18.4395 12.75H12.75V20.25C12.75 20.6642 12.4142 21 12 21C11.5858 21 11.25 20.6642 11.25 20.25V12.75H7.875C5.18261 12.75 3 10.5674 3 7.875C3 5.18261 5.18261 3 7.875 3ZM7.875 4.5C6.01104 4.5 4.5 6.01104 4.5 7.875C4.5 9.73896 6.01104 11.25 7.875 11.25H11.25V7.875C11.25 6.01104 9.73896 4.5 7.875 4.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M12 20.25V7.875C12 5.59683 10.1532 3.75 7.875 3.75C5.59683 3.75 3.75 5.59683 3.75 7.875C3.75 10.1532 5.59683 12 7.875 12H20"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.75 8.5L20.25 12L16.75 15.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconRedirectArrow;
