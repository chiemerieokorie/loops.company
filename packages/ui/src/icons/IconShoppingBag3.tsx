import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconShoppingBag3: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="shopping-bag-3">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M7.75 3C7.55109 3 7.36032 3.07902 7.21967 3.21967C7.07902 3.36032 7 3.55109 7 3.75V7H3.75C3.33579 7 3 7.33579 3 7.75V17.25C3 19.3211 4.67893 21 6.75 21H17.25C19.3211 21 21 19.3211 21 17.25V7.75C21 7.33579 20.6642 7 20.25 7H17V3.75C17 3.33579 16.6642 3 16.25 3H7.75ZM15.5 7V11.25C15.5 11.6642 15.8358 12 16.25 12C16.6642 12 17 11.6642 17 11.25V7H15.5ZM8.5 7V11.25C8.5 11.6642 8.16421 12 7.75 12C7.33579 12 7 11.6642 7 11.25V7H8.5ZM8.5 7H15.5V4.5H8.5V7Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M7.75 11.25V3.75H16.25V11.25M3.75 7.75H20.25V17.25C20.25 18.9069 18.9069 20.25 17.25 20.25H6.75C5.09315 20.25 3.75 18.9069 3.75 17.25V7.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconShoppingBag3;
