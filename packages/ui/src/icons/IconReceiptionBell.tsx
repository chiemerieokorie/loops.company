import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconReceiptionBell: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="receiption-bell, concierge, assistant">
		{variant === "filled" ? (
			<>
				<path
					d="M14.252 4.5H12.752V6.03193C17.4374 6.43365 21.002 10.5874 21.002 16.2891V17.25C21.002 17.6642 20.6662 18 20.252 18H12.752V19.5H20.25C20.6642 19.5 21 19.8358 21 20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25C3 19.8358 3.33579 19.5 3.75 19.5H11.252V18H3.75195C3.33774 18 3.00195 17.6642 3.00195 17.25V16.2891C3.00195 10.5874 6.56654 6.43365 11.252 6.03193V4.5H9.75195C9.33774 4.5 9.00195 4.16421 9.00195 3.75C9.00195 3.33579 9.33774 3 9.75195 3H14.252C14.6662 3 15.002 3.33579 15.002 3.75C15.002 4.16421 14.6662 4.5 14.252 4.5Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M12 6.75C7.44365 6.75 3.75 10.6172 3.75 16.2891V17.25H20.25V16.2891C20.25 10.6172 16.5563 6.75 12 6.75ZM12 6.75V3.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.74609 20.25H20.2461"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 17.5V20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.75 3.75H14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconReceiptionBell;
