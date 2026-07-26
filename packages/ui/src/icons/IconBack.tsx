import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBack: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="back">
		{variant === "filled" ? (
			<>
				<path
					d="M16.4422 4.41841C17.9314 3.36641 20 4.4192 20 6.22912V17.7709C20 19.5808 17.9314 20.6336 16.4422 19.5816L8.27292 13.8108C7.01663 12.9233 7.01662 11.0768 8.27291 10.1893L16.4422 4.41841Z"
					fill="currentColor"
				/>
				<path
					d="M4 4.82998C4 4.42033 4.33579 4.08824 4.75 4.08824C5.16421 4.08824 5.5 4.42033 5.5 4.82998V19.1701C5.5 19.5798 5.16421 19.9118 4.75 19.9118C4.33579 19.9118 4 19.5798 4 19.1701V4.82998Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 4.75V19.25M16.8781 18.9713L8.70884 13.206C7.87132 12.615 7.87131 11.3851 8.70884 10.7941L16.8781 5.02867C17.8709 4.32801 19.25 5.0292 19.25 6.23465V17.7653C19.25 18.9708 17.871 19.672 16.8781 18.9713Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBack;
