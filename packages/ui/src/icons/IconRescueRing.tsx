import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconRescueRing: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="rescue-ring, swim-boyle, help, support"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M4.41837 5.479C2.91113 7.22982 2 9.50846 2 11.9999C2 14.4914 2.91116 16.7701 4.41844 18.5209L8.33198 14.6074C7.80811 13.8717 7.5 12.9718 7.5 11.9999C7.5 11.0281 7.80808 10.1282 8.33191 9.39255L4.41837 5.479Z"
					fill="currentColor"
				/>
				<path
					d="M5.48047 4.41842L9.39401 8.33196C10.1296 7.8081 11.0296 7.5 12.0014 7.5C12.9733 7.5 13.8733 7.80811 14.6089 8.33198L18.5224 4.41844C16.7716 2.91116 14.4929 2 12.0014 2C9.50996 2 7.23129 2.91115 5.48047 4.41842Z"
					fill="currentColor"
				/>
				<path
					d="M19.5816 5.479L15.668 9.39255C16.1919 10.1282 16.4999 11.028 16.4999 11.9999C16.4999 12.9718 16.1918 13.8717 15.668 14.6073L19.5815 18.5209C21.0888 16.7701 21.9999 14.4914 21.9999 11.9999C21.9999 9.50845 21.0888 7.22982 19.5816 5.479Z"
					fill="currentColor"
				/>
				<path
					d="M18.5223 19.5815L14.6087 15.668C13.8731 16.1918 12.9732 16.4999 12.0014 16.4999C11.0295 16.4999 10.1296 16.1918 9.39402 15.668L5.48047 19.5815C7.23128 21.0888 9.50992 21.9999 12.0014 21.9999C14.4928 21.9999 16.7715 21.0888 18.5223 19.5815Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M16.25 12C16.25 14.3472 14.3472 16.25 12 16.25C9.65279 16.25 7.75 14.3472 7.75 12C7.75 9.65279 9.65279 7.75 12 7.75C14.3472 7.75 16.25 9.65279 16.25 12Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M18.5013 5.5L14.8672 9.13411"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M9.1289 14.8711L5.5 18.5"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M5.5 5.5L9.1289 9.1289"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M14.8672 14.866L18.5013 18.5001"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconRescueRing;
