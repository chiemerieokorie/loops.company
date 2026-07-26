import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconShoppingBag4: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="shopping-bag-4">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M17 7H17.25C19.3211 7 21 8.67893 21 10.75V17.25C21 19.3211 19.3211 21 17.25 21H6.75C4.67893 21 3 19.3211 3 17.25V10.75C3 8.67893 4.67893 7 6.75 7H7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7ZM12 3.5C10.067 3.5 8.5 5.067 8.5 7H15.5C15.5 5.067 13.933 3.5 12 3.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 10.75C3.75 9.09315 5.09315 7.75 6.75 7.75H17.25C18.9069 7.75 20.25 9.09315 20.25 10.75V17.25C20.25 18.9069 18.9069 20.25 17.25 20.25H6.75C5.09315 20.25 3.75 18.9069 3.75 17.25V10.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.75 7.75V7C7.75 4.65279 9.65279 2.75 12 2.75C14.3472 2.75 16.25 4.65279 16.25 7V7.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconShoppingBag4;
