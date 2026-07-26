import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCup: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="cup, tea, coffee, mug">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3 3.75C3 3.33579 3.33579 3 3.75 3H16.25C16.6642 3 17 3.33579 17 3.75V6H17.5C19.433 6 21 7.567 21 9.5C21 11.433 19.433 13 17.5 13H17V17.25C17 19.3211 15.3211 21 13.25 21H6.75C4.67893 21 3 19.3211 3 17.25V3.75ZM17 11.5H17.5C18.6046 11.5 19.5 10.6046 19.5 9.5C19.5 8.39543 18.6046 7.5 17.5 7.5H17V11.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 3.75H16.25V17.25C16.25 18.9069 14.9069 20.25 13.25 20.25H6.75C5.09315 20.25 3.75 18.9069 3.75 17.25V3.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.25 6.75H17.5C19.0188 6.75 20.25 7.98122 20.25 9.5C20.25 11.0188 19.0188 12.25 17.5 12.25H16.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCup;
