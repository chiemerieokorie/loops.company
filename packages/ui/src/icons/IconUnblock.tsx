import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconUnblock: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="unblock, unban">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 14.0769 4.24621 15.9787 5.4834 17.4551L8.96973 13.9697C9.26262 13.6768 9.73738 13.6768 10.0303 13.9697C10.3232 14.2626 10.3232 14.7374 10.0303 15.0303L6.54395 18.5156C8.02046 19.7533 9.9226 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 9.9226 19.7533 8.02046 18.5156 6.54395L15.0303 10.0303C14.7374 10.3232 14.2626 10.3232 13.9697 10.0303C13.6768 9.73738 13.6768 9.26262 13.9697 8.96973L17.4551 5.4834C15.9787 4.24621 14.0769 3.5 12 3.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M5.5 18.5L9.5 14.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.5 9.5L18.5 5.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconUnblock;
