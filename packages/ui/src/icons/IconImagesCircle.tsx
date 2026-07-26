import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconImagesCircle: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="images-circle">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM14 11.75C15.2426 11.75 16.25 10.7426 16.25 9.5C16.25 8.25736 15.2426 7.25 14 7.25C12.7574 7.25 11.75 8.25736 11.75 9.5C11.75 10.7426 12.7574 11.75 14 11.75ZM12 20C13.1739 20 14.2887 19.7472 15.293 19.293L9.94457 13.9445C8.87062 12.8706 7.12942 12.8706 6.05548 13.9445L4.70703 15.293C5.9623 18.0687 8.75562 20 12 20Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M16 20.0002L10.0589 13.9366C8.8828 12.7362 6.95024 12.736 5.7738 13.9359L3.75 16.0002"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14 11.75C15.2426 11.75 16.25 10.7426 16.25 9.5C16.25 8.25736 15.2426 7.25 14 7.25C12.7574 7.25 11.75 8.25736 11.75 9.5C11.75 10.7426 12.7574 11.75 14 11.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconImagesCircle;
