import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCarTaxi: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="car-taxi, uber">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M14.25 2.25C14.6642 2.25 15 2.58579 15 3V4H15.4121C16.6538 4 17.8145 4.61486 18.5127 5.6416L21.1367 9.5H22.25C22.6641 9.50012 23 9.83586 23 10.25C23 10.6641 22.6641 10.9999 22.25 11H22V18.25C22 19.2165 21.2165 20 20.25 20H18.75C17.7835 20 17 19.2165 17 18.25V18H7V18.25C7 19.2165 6.2165 20 5.25 20H3.75C2.7835 20 2 19.2165 2 18.25V11H1.75C1.33579 11 1 10.6642 1 10.25C1 9.83579 1.33579 9.5 1.75 9.5H2.86328L5.4873 5.6416C6.18549 4.61485 7.34625 4 8.58789 4H9V3C9 2.58579 9.33579 2.25 9.75 2.25H14.25ZM5.75 12.5C5.33579 12.5 5 12.8358 5 13.25C5 13.6642 5.33579 14 5.75 14H7.25C7.66421 14 8 13.6642 8 13.25C8 12.8358 7.66421 12.5 7.25 12.5H5.75ZM16.75 12.5C16.3358 12.5 16 12.8358 16 13.25C16 13.6642 16.3358 14 16.75 14H18.25C18.6642 14 19 13.6642 19 13.25C19 12.8358 18.6642 12.5 18.25 12.5H16.75Z"
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
				<path
					d="M9.75 4.5V3.25L14.25 3.25V4.5"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCarTaxi;
