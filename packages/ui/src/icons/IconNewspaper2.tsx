import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconNewspaper2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="newspaper-2, guide, info, faq, book">
		{variant === "filled" ? (
			<>
				<path
					d="M11.25 7.75C11.25 5.67893 9.57107 4 7.5 4H3.75C2.23122 4 1 5.23122 1 6.75V17.25C1 18.7688 2.23122 20 3.75 20H8.723C9.28361 20 9.81011 20.135 10.2549 20.4099C10.6676 20.6649 11.0093 21.0186 11.25 21.4378V7.75Z"
					fill="currentColor"
				/>
				<path
					d="M12.75 21.4378C12.9907 21.0186 13.3324 20.6649 13.7451 20.4099C14.1899 20.135 14.7164 20 15.277 20H20.25C21.7688 20 23 18.7688 23 17.25V6.75C23 5.23122 21.7688 4 20.25 4H16.5C14.4289 4 12.75 5.67893 12.75 7.75V21.4378Z"
					fill="currentColor"
				/>
				<path
					d="M12.0102 22H11.9894C11.9963 22.0001 12.0033 22.0001 12.0102 22Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M12 7.75C12 6.09315 13.3431 4.75 15 4.75H20.25C21.3546 4.75 22.25 5.64543 22.25 6.75V17.25C22.25 18.3546 21.3546 19.25 20.25 19.25H15.277C14.5966 19.25 13.9296 19.4142 13.3508 19.7719C12.772 20.1296 12.3043 20.6414 12 21.25M12 7.75C12 6.09315 10.6569 4.75 9 4.75H3.75C2.64543 4.75 1.75 5.64543 1.75 6.75V17.25C1.75 18.3546 2.64543 19.25 3.75 19.25H8.723C9.40341 19.25 10.0704 19.4142 10.6492 19.7719C11.228 20.1296 11.6957 20.6414 12 21.25M12 7.75V21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconNewspaper2;
