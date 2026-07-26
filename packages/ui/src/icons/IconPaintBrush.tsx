import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPaintBrush: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="paint-brush, design, color, appearance"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M20 12.25C20 13.7688 18.7688 15 17.25 15H14.5L14.8008 19.5068C14.9087 21.1267 13.6235 22.5 12 22.5C10.3765 22.5 9.09135 21.1267 9.19922 19.5068L9.5 15H6.75C5.23122 15 4 13.7688 4 12.25V12H20V12.25Z"
					fill="currentColor"
				/>
				<path
					d="M8.125 2C8.36094 2 8.58296 2.11114 8.72461 2.2998L9.7998 3.7334C9.8998 3.86673 10.1002 3.86673 10.2002 3.7334L11.2754 2.2998C11.417 2.11114 11.6391 2 11.875 2H18.25C19.2165 2 20 2.7835 20 3.75V10.5H4V3.75C4 2.7835 4.7835 2 5.75 2H8.125Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M19.25 10.75V3.75C19.25 3.19772 18.8023 2.75 18.25 2.75H11.5L10 4.75L8.5 2.75H5.75C5.19772 2.75 4.75 3.19771 4.75 3.75V10.75C4.75 12.4069 6.09315 13.75 7.75 13.75H9.75L9.42705 18.7557C9.33117 20.2419 10.5107 21.5 12 21.5C13.4893 21.5 14.6688 20.2419 14.5729 18.7557L14.25 13.75H16.25C17.9069 13.75 19.25 12.4069 19.25 10.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.75 10.25H19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPaintBrush;
