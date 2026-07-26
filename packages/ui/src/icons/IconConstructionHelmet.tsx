import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconConstructionHelmet: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="construction-helmet, work, wip">
		{variant === "filled" ? (
			<>
				<path
					d="M14 4.75C14 3.7835 13.2165 3 12.25 3H11.75C10.7835 3 10 3.7835 10 4.75V14.5H14V4.75Z"
					fill="currentColor"
				/>
				<path
					d="M3 12.5C3 8.77087 5.26806 5.57145 8.5 4.20593V14.5H3V12.5Z"
					fill="currentColor"
				/>
				<path
					d="M21 14.5V12.5C21 8.77087 18.7319 5.57145 15.5 4.20593V14.5H21Z"
					fill="currentColor"
				/>
				<path
					d="M2 17.25C2 16.5596 2.55964 16 3.25 16H20.75C21.4404 16 22 16.5596 22 17.25V18.75C22 19.4404 21.4404 20 20.75 20H3.25C2.55964 20 2 19.4404 2 18.75V17.25Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M9.75 14.75V4.75C9.75 4.19771 10.1977 3.75 10.75 3.75H13.25C13.8023 3.75 14.25 4.19772 14.25 4.75V14.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M2.75 15.75C2.75 15.1977 3.19772 14.75 3.75 14.75H20.25C20.8023 14.75 21.25 15.1977 21.25 15.75V18.25C21.25 18.8023 20.8023 19.25 20.25 19.25H3.75C3.19772 19.25 2.75 18.8023 2.75 18.25V15.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.5 14.75V12.75C3.5 8.83519 6.14653 5.53852 9.74805 4.55151M20.5 14.75V12.75C20.5 8.83519 17.8535 5.53852 14.252 4.55151"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconConstructionHelmet;
