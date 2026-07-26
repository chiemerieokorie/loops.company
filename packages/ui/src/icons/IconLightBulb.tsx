import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconLightBulb: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="light-bulb, idea, light">
		{variant === "filled" ? (
			<>
				<path
					d="M19.9998 9.00089C19.9998 11.249 19.072 13.2807 17.5803 14.7334H6.41753C4.9259 13.2807 3.99805 11.249 3.99805 9.00089C3.99805 4.58212 7.58016 1 11.9989 1C16.4177 1 19.9998 4.58212 19.9998 9.00089Z"
					fill="currentColor"
				/>
				<path
					d="M7.99775 16.75V16.2334H16.0001V16.75C16.0001 17.9926 14.9928 19 13.7501 19H10.2478C9.00511 19 7.99775 17.9926 7.99775 16.75Z"
					fill="currentColor"
				/>
				<path
					d="M9.75 20.5C9.33579 20.5 9 20.8358 9 21.25C9 21.6642 9.33579 22 9.75 22H14.25C14.6642 22 15 21.6642 15 21.25C15 20.8358 14.6642 20.5 14.25 20.5H9.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M8.74799 15.4838V16.75C8.74799 17.5784 9.41957 18.25 10.248 18.25H13.7504C14.5788 18.25 15.2504 17.5784 15.2504 16.75V15.4838M8.74799 15.4838C8.33548 15.2765 7.94548 15.031 7.58263 14.7519C5.85907 13.4264 4.74829 11.3433 4.74829 9.00089C4.74829 4.99633 7.99462 1.75 11.9992 1.75C16.0037 1.75 19.2501 4.99633 19.2501 9.00089C19.2501 11.3433 18.1393 13.4264 16.4157 14.7519C16.0529 15.031 15.6629 15.2765 15.2504 15.4838M8.74799 15.4838H15.2504M9.75006 21.25H14.2501"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconLightBulb;
