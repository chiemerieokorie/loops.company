import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSubstack: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="substack">
		{variant === "filled" ? (
			<>
				<path
					d="M19.9993 7.11905H4V9.28019H19.9993V7.11905Z"
					fill="currentColor"
				/>
				<path
					d="M4 11.2381V21.286L11.9993 16.7986L20 21.286V11.2381H4Z"
					fill="currentColor"
				/>
				<path d="M19.9993 3H4V5.16078H19.9993V3Z" fill="currentColor" />
			</>
		) : (
			<>
				<path
					d="M19.9993 7.11905H4V9.28019H19.9993V7.11905Z"
					fill="currentColor"
				/>
				<path
					d="M4 11.2381V21.286L11.9993 16.7986L20 21.286V11.2381H4Z"
					fill="currentColor"
				/>
				<path d="M19.9993 3H4V5.16078H19.9993V3Z" fill="currentColor" />
			</>
		)}
	</CentralIconBase>
);

export default IconSubstack;
