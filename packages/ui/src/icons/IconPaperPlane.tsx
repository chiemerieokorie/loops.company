import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPaperPlane: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="paper-plane, send">
		{variant === "filled" ? (
			<>
				<path
					d="M2.75772 5.91475C1.99138 3.9989 3.99291 2.14806 5.84305 3.06171L19.8582 9.98279C21.5299 10.8083 21.5299 13.1921 19.8582 14.0176L5.84305 20.9387C3.99292 21.8524 1.99138 20.0015 2.75772 18.0857L4.89199 12.75H9.24969C9.6639 12.75 9.99969 12.4142 9.99969 12C9.99969 11.5858 9.6639 11.25 9.24969 11.25H4.89182L2.75772 5.91475Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M5.99931 12H9.24931M5.99931 12L3.45371 5.63604C2.94282 4.3588 4.27717 3.12491 5.5106 3.73401L19.5258 10.6551C20.6402 11.2054 20.6402 12.7946 19.5258 13.345L5.5106 20.2661C4.27718 20.8752 2.94282 19.6413 3.45371 18.364L5.99931 12Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPaperPlane;
