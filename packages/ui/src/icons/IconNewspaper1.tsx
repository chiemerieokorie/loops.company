import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconNewspaper1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="newspaper-1, guide, info, faq, book">
		{variant === "filled" ? (
			<>
				<path
					d="M11.25 5.127L6.56611 4.08262C4.22348 3.56028 2 5.34259 2 7.74274V16.0329C2 17.7895 3.21938 19.3107 4.93389 19.693L11.25 21.1013V5.127Z"
					fill="currentColor"
				/>
				<path
					d="M12.75 5.127V21.1013L19.0661 19.693C20.7806 19.3107 22 17.7895 22 16.0329V7.74274C22 5.34259 19.7765 3.56028 17.4339 4.08262L12.75 5.127Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M12 6.06235L6.40289 4.81434C4.52878 4.39647 2.75 5.82231 2.75 7.74244V16.0326C2.75 17.4379 3.7255 18.6549 5.09711 18.9607L12 20.4998M12 6.06235L17.5971 4.81434C19.4712 4.39647 21.25 5.82231 21.25 7.74244V16.0326C21.25 17.4379 20.2745 18.6549 18.9029 18.9607L12 20.4998M12 6.06235V20.4998"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconNewspaper1;
