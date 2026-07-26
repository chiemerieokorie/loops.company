import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSkip: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="skip, next">
		{variant === "filled" ? (
			<>
				<path
					d="M7.55779 4.41841C6.06859 3.36641 4 4.4192 4 6.22912V17.7709C4 19.5808 6.06857 20.6336 7.55778 19.5816L15.7271 13.8108C16.9834 12.9233 16.9834 11.0768 15.7271 10.1893L7.55779 4.41841Z"
					fill="currentColor"
				/>
				<path
					d="M20 4.82998C20 4.42033 19.6642 4.08824 19.25 4.08824C18.8358 4.08824 18.5 4.42033 18.5 4.82998V19.1701C18.5 19.5798 18.8358 19.9118 19.25 19.9118C19.6642 19.9118 20 19.5798 20 19.1701V4.82998Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M19.25 4.75V19.25M7.12185 18.9713L15.2912 13.206C16.1287 12.615 16.1287 11.3851 15.2912 10.7941L7.12186 5.02867C6.12906 4.32801 4.75 5.0292 4.75 6.23465V17.7653C4.75 18.9708 6.12905 19.672 7.12185 18.9713Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSkip;
