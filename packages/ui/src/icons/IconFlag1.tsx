import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFlag1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="flag-1, priority">
		{variant === "filled" ? (
			<>
				<path
					d="M5.75 2C4.7835 2 4 2.7835 4 3.75V21.25C4 21.6642 4.33579 22 4.75 22C5.16421 22 5.5 21.6642 5.5 21.25V15.5H19.3815C20.7792 15.5 21.6129 13.9422 20.8376 12.7793L18.2438 8.88868C18.1879 8.8047 18.1879 8.6953 18.2438 8.61133L20.8376 4.72073C21.6129 3.55775 20.7792 2 19.3815 2H5.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 14.75V3.75C4.75 3.19772 5.19772 2.75 5.75 2.75H19.3815C20.1802 2.75 20.6566 3.64015 20.2135 4.3047L17.6198 8.1953C17.3959 8.5312 17.3959 8.9688 17.6198 9.3047L20.2135 13.1953C20.6566 13.8599 20.1802 14.75 19.3815 14.75H4.75ZM4.75 14.75V21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFlag1;
