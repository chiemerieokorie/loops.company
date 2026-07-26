import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconContacts: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="contacts,address-book">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M4 5.75C4 3.67893 5.67893 2 7.75 2H19.25C19.6642 2 20 2.33579 20 2.75V18.75C20 19.1642 19.6642 19.5 19.25 19.5H6C5.72386 19.5 5.5 19.7239 5.5 20C5.5 20.2761 5.72386 20.5 6 20.5H19.25C19.6642 20.5 20 20.8358 20 21.25C20 21.6642 19.6642 22 19.25 22H6C4.89543 22 4 21.1046 4 20V5.75ZM10.25 9.25C10.25 8.2835 11.0335 7.5 12 7.5C12.9665 7.5 13.75 8.2835 13.75 9.25C13.75 10.2165 12.9665 11 12 11C11.0335 11 10.25 10.2165 10.25 9.25ZM14.25 14.5H9.75C9.51229 14.5 8.39548 13.931 9.43125 12.55C9.88322 11.9474 10.692 11.5 12 11.5C13.308 11.5 14.1168 11.9474 14.5688 12.55C15.6045 13.931 14.4877 14.5 14.25 14.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 20V5.75C4.75 4.09315 6.09315 2.75 7.75 2.75H19.25V18.75H6C5.30964 18.75 4.75 19.3096 4.75 20ZM4.75 20C4.75 20.6904 5.30964 21.25 6 21.25H19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 12.25C9.75 12.25 9.75 13.75 9.75 13.75H14.25C14.25 13.75 14.25 12.25 12 12.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13 9.25C13 9.80228 12.5523 10.25 12 10.25C11.4477 10.25 11 9.80228 11 9.25C11 8.69772 11.4477 8.25 12 8.25C12.5523 8.25 13 8.69772 13 9.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11.5 9.25H12.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconContacts;
