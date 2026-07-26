import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconEraserSimple: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="eraser-simple, rubber, clean-up">
		{variant === "filled" ? (
			<>
				<path
					d="M11.5979 4.34103C13.0624 2.87656 15.4367 2.87656 16.9012 4.34103L19.6586 7.09839C21.123 8.56285 21.123 10.9372 19.6586 12.4017L14.5602 17.5L6.49955 9.43938L11.5979 4.34103Z"
					fill="currentColor"
				/>
				<path
					d="M5.43889 10.5L4.34054 11.5984C2.87607 13.0629 2.87607 15.4372 4.34054 16.9017L7.0979 19.659C8.56236 21.1235 10.9367 21.1235 12.4012 19.659L13.4995 18.5607L5.43889 10.5Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M6.5 10.5L13.5 17.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.1282 4.87136L4.87087 12.1287C3.69929 13.3003 3.69929 15.1998 4.87087 16.3714L7.62823 19.1287C8.7998 20.3003 10.6993 20.3003 11.8709 19.1287L19.1282 11.8714C20.2998 10.6998 20.2998 8.80029 19.1282 7.62872L16.3709 4.87136C15.1993 3.69978 13.2998 3.69978 12.1282 4.87136Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconEraserSimple;
