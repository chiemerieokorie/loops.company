import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCarFrontView: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="car-front-view">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M5.48692 5.64134C6.18511 4.61459 7.34625 4 8.58789 4H15.4121C16.6538 4 17.8149 4.61459 18.5131 5.64134L21.137 9.5H22.2498C22.664 9.5 22.9998 9.83579 22.9998 10.25C22.9998 10.6642 22.664 11 22.2498 11H22V18.25C22 19.2165 21.2165 20 20.25 20H18.75C17.7835 20 17 19.2165 17 18.25V18H7V18.25C7 19.2165 6.2165 20 5.25 20H3.75C2.7835 20 2 19.2165 2 18.25V11H1.75C1.33579 11 1 10.6642 1 10.25C1 9.83579 1.33579 9.5 1.75 9.5H2.86303L5.48692 5.64134ZM8 13.25C8 13.6642 7.66421 14 7.25 14H5.75C5.33579 14 5 13.6642 5 13.25C5 12.8358 5.33579 12.5 5.75 12.5H7.25C7.66421 12.5 8 12.8358 8 13.25ZM19 13.25C19 13.6642 18.6642 14 18.25 14H16.75C16.3358 14 16 13.6642 16 13.25C16 12.8358 16.3358 12.5 16.75 12.5H18.25C18.6642 12.5 19 12.8358 19 13.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3.5 19.25C3.08579 19.25 2.75 18.9142 2.75 18.5V11.9234C2.75 11.3217 2.9309 10.734 3.26922 10.2364L6.10711 6.06307C6.66566 5.24167 7.59458 4.75 8.58789 4.75H15.4121C16.4054 4.75 17.3343 5.24167 17.8929 6.06307L20.7308 10.2364C21.0691 10.734 21.25 11.3217 21.25 11.9234V18.5C21.25 18.9142 20.9142 19.25 20.5 19.25H18C17.5858 19.25 17.25 18.9142 17.25 18.5V17.1786H6.75V18.5C6.75 18.9142 6.41421 19.25 6 19.25H3.5Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M1.75 10.25H3"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M21 10.25H22.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.75 13.25H7.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.75 13.25H18.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCarFrontView;
