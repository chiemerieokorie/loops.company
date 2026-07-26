import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPersona: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="persona, thanos-effect, remove-user, remove-account, blip"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M12.0001 10.5C12.0001 10.7761 11.7753 11.0029 11.5009 10.9726C9.25049 10.7243 7.50005 8.81656 7.50005 6.5C7.50005 4.18345 9.25049 2.27574 11.5009 2.02738C11.7753 1.99709 12.0001 2.22386 12.0001 2.5V10.5Z"
					fill="currentColor"
				/>
				<path
					d="M12.0001 20.5C12.0001 20.7761 11.7762 21 11.5001 21H7.15025C5.07918 21 3.33254 19.2426 4.22203 17.3723C5.49952 14.6861 8.16529 12.6954 11.5 12.5136C11.7757 12.4985 12.0001 12.7239 12.0001 13V20.5Z"
					fill="currentColor"
				/>
				<circle cx="14.0016" cy="3.24961" fill="currentColor" r="0.9" />
				<circle cx="14.0016" cy="6.49961" fill="currentColor" r="0.9" />
				<circle cx="17" cy="5" fill="currentColor" r="0.75" />
				<circle cx="17" cy="8" fill="currentColor" r="0.75" />
				<circle cx="14.0016" cy="9.74961" fill="currentColor" r="0.9" />
				<circle cx="14.0016" cy="12.9996" fill="currentColor" r="0.9" />
				<circle cx="17" cy="13" fill="currentColor" r="0.75" />
				<circle cx="20" cy="16.5" fill="currentColor" r="0.75" />
				<circle cx="14.0016" cy="16.4996" fill="currentColor" r="0.9" />
				<circle cx="17.0016" cy="16.4996" fill="currentColor" r="0.9" />
				<circle cx="14.0016" cy="19.9996" fill="currentColor" r="0.9" />
				<circle cx="17.0016" cy="19.9996" fill="currentColor" r="0.9" />
				<circle cx="20" cy="20" fill="currentColor" r="0.75" />
			</>
		) : (
			<>
				<path
					d="M14.9016 3.24961C14.9016 3.74667 14.4986 4.14961 14.0016 4.14961C13.5045 4.14961 13.1016 3.74667 13.1016 3.24961C13.1016 2.75255 13.5045 2.34961 14.0016 2.34961C14.4986 2.34961 14.9016 2.75255 14.9016 3.24961Z"
					fill="currentColor"
				/>
				<circle cx="14.0016" cy="6.49961" fill="currentColor" r="0.9" />
				<circle cx="17" cy="5" fill="currentColor" r="0.75" />
				<circle cx="17" cy="8" fill="currentColor" r="0.75" />
				<circle cx="14.0016" cy="9.74961" fill="currentColor" r="0.9" />
				<circle cx="14.0016" cy="12.9996" fill="currentColor" r="0.9" />
				<circle cx="17" cy="13" fill="currentColor" r="0.75" />
				<circle cx="20" cy="16.5" fill="currentColor" r="0.75" />
				<circle cx="14.0016" cy="16.4996" fill="currentColor" r="0.9" />
				<circle cx="17.0016" cy="16.4996" fill="currentColor" r="0.9" />
				<circle cx="14.0016" cy="19.9996" fill="currentColor" r="0.9" />
				<circle cx="17.0016" cy="19.9996" fill="currentColor" r="0.9" />
				<path
					d="M11.25 2.8252C9.53833 3.17264 8.25 4.68596 8.25 6.50018C8.25 8.31441 9.53833 9.82772 11.25 10.1752"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11.2459 20.2502H7.29525C5.52749 20.2502 4.11832 18.6709 4.98606 17.1308C6.24464 14.897 8.55265 13.2842 11.2459 13.2842"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle cx="20" cy="20" fill="currentColor" r="0.75" />
			</>
		)}
	</CentralIconBase>
);

export default IconPersona;
