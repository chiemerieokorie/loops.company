import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconToggle: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="toggle, settings, control">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M23.5 12C23.5 16.4183 19.9183 20 15.5 20H8.5C4.08172 20 0.5 16.4183 0.5 12C0.5 7.58172 4.08172 4 8.5 4H15.5C19.9183 4 23.5 7.58172 23.5 12ZM15.5 15C17.1569 15 18.5 13.6569 18.5 12C18.5 10.3431 17.1569 9 15.5 9C13.8431 9 12.5 10.3431 12.5 12C12.5 13.6569 13.8431 15 15.5 15Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<rect
					height="14.5"
					rx="7.25"
					stroke="currentColor"
					strokeWidth="1.5"
					width="21.5"
					x="1.25"
					y="4.75"
				/>
				<circle cx="8.5" cy="12" fill="currentColor" r="3" />
			</>
		)}
	</CentralIconBase>
);

export default IconToggle;
