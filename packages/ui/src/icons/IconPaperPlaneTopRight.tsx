import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPaperPlaneTopRight: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="paper-plane-top-right, send">
		{variant === "filled" ? (
			<>
				<path
					d="M1.46783 6.05797C0.265136 4.9889 1.02132 3 2.63047 3H21.2788C22.6218 3 23.4643 4.45027 22.799 5.61691L13.6528 21.6554C12.8643 23.038 10.7893 22.7356 10.4282 21.1855L8.36566 12.3316L14.9744 8.65542C15.3364 8.45407 15.4666 7.9974 15.2653 7.63542C15.0639 7.27344 14.6072 7.14322 14.2453 7.34458L7.27632 11.2211L1.46783 6.05797Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M9.45214 10.8687L20.9997 4.44532M8.97026 10.8627L3.84348 5.43678C3.24097 4.79911 3.69304 3.75 4.57035 3.75H20.5045C21.2772 3.75 21.758 4.58899 21.3673 5.25564L13.1848 19.2171C12.7385 19.9785 11.5965 19.8306 11.3589 18.9806L9.20648 11.2803C9.16279 11.124 9.08172 10.9807 8.97026 10.8627Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPaperPlaneTopRight;
