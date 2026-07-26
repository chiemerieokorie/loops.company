import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSimCard1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="sim-card-1">
		{variant === "filled" ? (
			<>
				<path
					d="M9.5 13.25C9.5 12.8358 9.83579 12.5 10.25 12.5H13.75C14.1642 12.5 14.5 12.8358 14.5 13.25V15.75C14.5 16.1642 14.1642 16.5 13.75 16.5H10.25C9.83579 16.5 9.5 16.1642 9.5 15.75V13.25Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M4 5.75C4 3.67893 5.67893 2 7.75 2H12.5931C13.8529 2 15.0611 2.50044 15.9519 3.39124L18.6088 6.0481C19.4996 6.9389 20 8.14708 20 9.40685V18.25C20 20.3211 18.3211 22 16.25 22H7.75C5.67893 22 4 20.3211 4 18.25V5.75ZM10.25 11C9.00736 11 8 12.0074 8 13.25V15.75C8 16.9926 9.00736 18 10.25 18H13.75C14.9926 18 16 16.9926 16 15.75V13.25C16 12.0074 14.9926 11 13.75 11H10.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M8.75 13.25C8.75 12.4216 9.42157 11.75 10.25 11.75H13.75C14.5784 11.75 15.25 12.4216 15.25 13.25V15.75C15.25 16.5784 14.5784 17.25 13.75 17.25H10.25C9.42157 17.25 8.75 16.5784 8.75 15.75V13.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.75 5.75C4.75 4.09315 6.09315 2.75 7.75 2.75H12.5931C13.654 2.75 14.6714 3.17143 15.4216 3.92157L18.0784 6.57843C18.8286 7.32857 19.25 8.34599 19.25 9.40685V18.25C19.25 19.9069 17.9069 21.25 16.25 21.25H7.75C6.09315 21.25 4.75 19.9069 4.75 18.25V5.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSimCard1;
