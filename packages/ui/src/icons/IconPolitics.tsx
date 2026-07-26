import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPolitics: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="politics, speaker, press-conference, speech"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M18.9473 17.5176C18.8069 19.4797 17.1741 20.9998 15.207 21H8.79297C6.82588 20.9998 5.19308 19.4797 5.05273 17.5176L4.69434 12.5H19.3057L18.9473 17.5176Z"
					fill="currentColor"
				/>
				<path
					d="M15.25 1.25C16.2165 1.25 17 2.0335 17 3C17 3.08568 16.9914 3.16957 16.9795 3.25195L18.2207 4.0791C18.7075 4.40366 19 4.95005 19 5.53516V7H19.75C20.4404 7 21 7.55964 21 8.25C21 9.76878 19.7688 11 18.25 11H5.75C4.23122 11 3 9.76878 3 8.25C3 7.55964 3.55964 7 4.25 7H5V5.53516C5.00001 4.95005 5.29246 4.40366 5.7793 4.0791L7.01953 3.25195C7.00765 3.16961 7 3.08563 7 3C7 2.0335 7.7835 1.25 8.75 1.25C9.7165 1.25 10.5 2.0335 10.5 3C10.5 3.9665 9.7165 4.75 8.75 4.75C8.42114 4.75 8.11439 4.65776 7.85156 4.5L6.61133 5.32715C6.54179 5.37351 6.50001 5.45158 6.5 5.53516V7H17.5V5.53516C17.5 5.45158 17.4582 5.37351 17.3887 5.32715L16.1475 4.5C15.8848 4.6575 15.5786 4.75 15.25 4.75C14.2835 4.75 13.5 3.9665 13.5 3C13.5 2.0335 14.2835 1.25 15.25 1.25Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M5.75 7.5V5.53518C5.75 5.20083 5.9171 4.8886 6.1953 4.70313L8.75 3"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18.25 7.5V5.53518C18.25 5.20083 18.0829 4.8886 17.8047 4.70313L15.25 3"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle cx="8.75" cy="3" fill="currentColor" r="1.75" />
				<circle cx="15.25" cy="3" fill="currentColor" r="1.75" />
				<path
					d="M3.75 8.625C3.75 8.14175 4.14175 7.75 4.625 7.75H19.375C19.8582 7.75 20.25 8.14175 20.25 8.625C20.25 10.0747 19.0747 11.25 17.625 11.25H6.375C4.92525 11.25 3.75 10.0747 3.75 8.625Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.89844 11L5.68381 17.6043C5.86328 19.1135 7.143 20.25 8.66282 20.25H15.3341C16.8539 20.25 18.1336 19.1134 18.3131 17.6043L19.0984 11"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPolitics;
