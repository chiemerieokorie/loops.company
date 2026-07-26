import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBank2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="bank-2, library, gov">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M21 19.5H21.25C21.6642 19.5 22 19.8358 22 20.25C22 20.6642 21.6642 21 21.25 21H2.75C2.33579 21 2 20.6642 2 20.25C2.00001 19.8358 2.33579 19.5 2.75 19.5H3V11H21V19.5ZM8.75 13C8.33579 13 8.00001 13.3358 8 13.75V19.5H9.5V13.75C9.49999 13.3358 9.16421 13 8.75 13ZM15.25 13C14.8358 13 14.5 13.3358 14.5 13.75V19.5H16V13.75C16 13.3358 15.6642 13 15.25 13Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M10.0713 2.76369C11.2992 2.21809 12.7008 2.21809 13.9287 2.76369L20.8662 5.8467C21.5555 6.15315 22 6.83742 22 7.59182C21.9996 8.64587 21.145 9.501 20.0908 9.501H3.90918C2.85504 9.501 2.00038 8.64587 2 7.59182C2 6.83742 2.44445 6.15315 3.13379 5.8467L10.0713 2.76369ZM12 5.501C11.4477 5.501 11 5.94871 11 6.501C11.0004 7.05293 11.448 7.501 12 7.501C12.552 7.501 12.9996 7.05293 13 6.501C13 5.94871 12.5523 5.501 12 5.501Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M21.25 19.5C21.6642 19.5 22 19.8358 22 20.25C22 20.6642 21.6642 21 21.25 21H2.75C2.33579 21 2 20.6642 2 20.25C2 19.8358 2.33579 19.5 2.75 19.5H21.25Z"
					fill="currentColor"
				/>
				<path
					d="M3.75 20V10.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20.25 20V10.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.93284 6.4885L10.8093 3.51491C11.5691 3.18634 12.4309 3.18634 13.1907 3.51491L20.0672 6.4885C20.7852 6.79899 21.25 7.50644 21.25 8.2887C21.25 9.37189 20.3719 10.25 19.2887 10.25H4.7113C3.62811 10.25 2.75 9.37189 2.75 8.2887C2.75 7.50644 3.21484 6.79899 3.93284 6.4885Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.25 20V13.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.75 20V13.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle cx="12" cy="7" fill="currentColor" r="1" />
			</>
		)}
	</CentralIconBase>
);

export default IconBank2;
