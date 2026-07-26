import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconReadingList: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="reading-list, glasses, steve-jobs">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M6 7C4.36337 7 2.91098 7.78677 1.99972 9H0.75C0.335786 9 0 9.33579 0 9.75C0 10.1642 0.335786 10.5 0.75 10.5H1.22911C1.08024 10.9739 1 11.4779 1 12C1 14.7614 3.23858 17 6 17C8.76142 17 11 14.7614 11 12C11 11.2245 10.823 10.4891 10.5072 9.8332C10.9597 9.61946 11.4654 9.5 12 9.5C12.5346 9.5 13.0403 9.61946 13.4928 9.83321C13.177 10.4891 13 11.2245 13 12C13 14.7614 15.2386 17 18 17C20.7614 17 23 14.7614 23 12C23 11.4779 22.9198 10.9739 22.7709 10.5H23.25C23.6642 10.5 24 10.1642 24 9.75C24 9.33579 23.6642 9 23.25 9H22.0003C21.089 7.78677 19.6366 7 18 7C16.5586 7 15.2599 7.61041 14.3482 8.58476C13.6477 8.21159 12.8479 8 12 8C11.1521 8 10.3523 8.21159 9.65182 8.58476C8.74012 7.61041 7.44138 7 6 7Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M22.25 12C22.25 14.3472 20.3472 16.25 18 16.25C15.6528 16.25 13.75 14.3472 13.75 12C13.75 9.65279 15.6528 7.75 18 7.75C20.3472 7.75 22.25 9.65279 22.25 12Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6 16.25C8.34721 16.25 10.25 14.3472 10.25 12C10.25 9.65279 8.34721 7.75 6 7.75C3.65279 7.75 1.75 9.65279 1.75 12C1.75 14.3472 3.65279 16.25 6 16.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M0.75 9.75H2"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M22 9.75H23.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.0599 9.28239C13.4494 8.94319 12.7466 8.75 11.9987 8.75C11.2508 8.75 10.548 8.94319 9.9375 9.28239"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconReadingList;
