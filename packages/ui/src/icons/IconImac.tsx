import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconImac: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="imac, computer">
		{variant === "filled" ? (
			<>
				<path
					d="M6.75 3C4.12665 3 2 5.12665 2 7.75V12.5H22V7.75C22 5.12665 19.8734 3 17.25 3H6.75Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M6.75 18C4.38185 18 2.41846 16.267 2.05888 14H21.9411C21.5815 16.267 19.6182 18 17.25 18H15V21.25C15 21.6642 14.6642 22 14.25 22H9.75C9.33579 22 9 21.6642 9 21.25V18H6.75ZM10.5 18V20.5H13.5V18H10.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M21.25 13.25H2.75M21.25 13.25V7.75C21.25 5.54086 19.4591 3.75 17.25 3.75H6.75C4.54086 3.75 2.75 5.54086 2.75 7.75V13.25M21.25 13.25C21.25 15.4591 19.4591 17.25 17.25 17.25H6.75C4.54086 17.25 2.75 15.4591 2.75 13.25M9.75 17.25H14.25V21.25H9.75V17.25Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconImac;
