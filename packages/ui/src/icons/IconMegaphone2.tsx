import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconMegaphone2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="megaphone-2, loud, speak, promote, feedback"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M12.5 18.0185V19.5C12.5 20.8807 11.3807 22 10 22C8.61931 22 7.50003 20.8807 7.5 19.5V16.5H10.0693L12.5 18.0185Z"
					fill="currentColor"
				/>
				<path
					d="M16.2051 3.43455C17.2041 2.81016 18.4998 3.52806 18.5 4.70603V17.2939C18.4998 18.4719 17.2041 19.1897 16.2051 18.5654L10.5 15V6.99998L16.2051 3.43455Z"
					fill="currentColor"
				/>
				<path
					d="M9 15H5.5C3.29088 15 1.50003 13.2091 1.5 11C1.5 8.79084 3.29086 6.99998 5.5 6.99998H9V15Z"
					fill="currentColor"
				/>
				<path
					d="M20 8.99998C21.3807 8.99998 22.5 10.1193 22.5 11.5C22.5 12.8807 21.3807 14 20 14V8.99998Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M10 7.75H6C3.92893 7.75 2.25 9.42893 2.25 11.5C2.25 13.5711 3.92893 15.25 6 15.25H10"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18.25 8.75H19C20.5188 8.75 21.75 9.98122 21.75 11.5C21.75 13.0188 20.5188 14.25 19 14.25H18.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.751 3.86309L10 7.75023V15.2502L16.7511 19.137C17.4177 19.5208 18.25 19.0396 18.25 18.2704V4.7297C18.25 3.96043 17.4177 3.47924 16.751 3.86309Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11.5 16.25V19.375C11.5 20.4105 10.6605 21.25 9.625 21.25C8.58947 21.25 7.75 20.4105 7.75 19.375V15.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconMegaphone2;
