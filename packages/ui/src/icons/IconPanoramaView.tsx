import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPanoramaView: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="panorama-view">
		{variant === "filled" ? (
			<>
				<path
					d="M5.92656 4.09056C3.51652 3.57766 1 5.29742 1 7.8842V16.111C1 18.706 3.53065 20.4252 5.94459 19.9081C10.0281 19.0335 13.9719 19.0335 18.0554 19.9081C20.4693 20.4252 23 18.706 23 16.111V7.8842C23 5.29741 20.4835 3.57766 18.0734 4.09056C13.9684 4.96418 10.0316 4.96418 5.92656 4.09056Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M22.25 16.1067V7.87227C22.25 5.82174 20.2352 4.38148 18.2297 4.80868C14.0216 5.70506 9.9784 5.70506 5.77031 4.80868C3.76478 4.38148 1.75 5.82175 1.75 7.87227V16.1067C1.75 18.1633 3.77646 19.605 5.78737 19.1739C9.97453 18.2762 14.0255 18.2762 18.2126 19.1739C20.2235 19.605 22.25 18.1633 22.25 16.1067Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPanoramaView;
