import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconContrast: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="contrast">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12 3.5V20.5C12.6567 20.5 13.2961 20.4255 13.91 20.2846V3.71545C13.2961 3.57448 12.6567 3.5 12 3.5ZM15.41 4.21165V19.7883C16.0716 19.4982 16.6892 19.1263 17.25 18.6853V5.31467C16.6892 4.87369 16.0716 4.50175 15.41 4.21165ZM18.75 6.83329V17.1667C19.8477 15.7348 20.5 13.9436 20.5 12C20.5 10.0564 19.8477 8.26516 18.75 6.83329ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 3V21"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15 3.5V20.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18 5V19"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconContrast;
