import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconTextareaDrag: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="textarea-drag">
		{variant === "filled" ? (
			<>
				<path
					d="M20.7197 6.21967C21.0126 5.92678 21.4873 5.92678 21.7802 6.21967C22.0731 6.51256 22.0731 6.98732 21.7802 7.28022L7.28022 21.7802C6.98732 22.0731 6.51256 22.0731 6.21967 21.7802C5.92678 21.4873 5.92678 21.0126 6.21967 20.7197L20.7197 6.21967ZM20.7197 14.2197C21.0126 13.9268 21.4873 13.9268 21.7802 14.2197C22.0731 14.5126 22.0731 14.9873 21.7802 15.2802L15.2802 21.7802C14.9873 22.0731 14.5126 22.0731 14.2197 21.7802C13.9268 21.4873 13.9268 21.0126 14.2197 20.7197L20.7197 14.2197Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M14.75 21.25L21.25 14.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.75 21.25L21.25 6.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconTextareaDrag;
