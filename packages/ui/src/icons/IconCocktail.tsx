import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCocktail: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="cocktail, drink">
		{variant === "filled" ? (
			<>
				<path
					d="M4.79807 3C2.08418 3 1.01074 6.51412 3.2614 8.0306L11.2506 13.4137V20.5H7.75061C7.3364 20.5 7.00061 20.8358 7.00061 21.25C7.00061 21.6642 7.3364 22 7.75061 22H16.2506C16.6648 22 17.0006 21.6642 17.0006 21.25C17.0006 20.8358 16.6648 20.5 16.2506 20.5H12.7506V13.4137L20.7399 8.03061C22.9905 6.51412 21.9171 3 19.2032 3H4.79807Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M19.2018 3.75H4.79668C2.82294 3.75 2.04226 6.30572 3.6791 7.40862L10.8817 12.2617C11.5572 12.7169 12.4413 12.7169 13.1168 12.2617L20.3194 7.40862C21.9562 6.30573 21.1755 3.75 19.2018 3.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 13.0146V19.2499C12 20.3545 11.1045 21.2499 9.99996 21.2499H7.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 21.25H16.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCocktail;
