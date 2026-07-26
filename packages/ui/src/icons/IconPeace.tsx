import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPeace: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="peace">
		{variant === "filled" ? (
			<>
				<path
					d="M11.25 2.02734V11.689L4.41839 18.5206C2.91114 16.7698 2 14.4911 2 11.9996C2 6.72909 6.07745 2.41087 11.25 2.02734Z"
					fill="currentColor"
				/>
				<path
					d="M12.75 2.02734V11.689L19.5816 18.5206C21.0889 16.7698 22 14.4911 22 11.9996C22 6.72909 17.9225 2.41087 12.75 2.02734Z"
					fill="currentColor"
				/>
				<path
					d="M18.5209 19.5812L12.75 13.8103V21.9719C14.9475 21.809 16.9474 20.9359 18.5209 19.5812Z"
					fill="currentColor"
				/>
				<path
					d="M11.25 21.9719V13.8103L5.47906 19.5812C7.05258 20.9359 9.05246 21.809 11.25 21.9719Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<circle
					cx="12"
					cy="12"
					r="9.25"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path d="M12 12L5.75 18.25" stroke="currentColor" strokeWidth="1.5" />
				<path d="M12 12L18.25 18.25" stroke="currentColor" strokeWidth="1.5" />
				<path d="M12 3V21" stroke="currentColor" strokeWidth="1.5" />
			</>
		)}
	</CentralIconBase>
);

export default IconPeace;
