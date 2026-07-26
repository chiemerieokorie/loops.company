import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPageAttachment: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="page-attachment">
		{variant === "filled" ? (
			<>
				<path
					d="M6.5 4.25C6.5 3.83579 6.83579 3.5 7.25 3.5C7.66421 3.5 8 3.83579 8 4.25V8.75C8 9.99264 6.99264 11 5.75 11C4.50736 11 3.5 9.99264 3.5 8.75V4.75C3.5 4.33579 3.16421 4 2.75 4C2.33579 4 2 4.33579 2 4.75V8.75C2 10.8211 3.67893 12.5 5.75 12.5C7.82107 12.5 9.5 10.8211 9.5 8.75V4.25C9.5 3.00736 8.49264 2 7.25 2C6.00736 2 5 3.00736 5 4.25V8.75C5 9.16421 5.33579 9.5 5.75 9.5C6.16421 9.5 6.5 9.16421 6.5 8.75V4.25Z"
					fill="currentColor"
				/>
				<path
					d="M5.75 14C5.13639 14 4.54736 13.8947 4 13.7013V18.25C4 20.3211 5.67893 22 7.75 22H16.25C18.3211 22 20 20.3211 20 18.25V5.75C20 3.67893 18.3211 2 16.25 2H10.2503C10.721 2.62675 11 3.4058 11 4.25V8.75C11 11.6495 8.6495 14 5.75 14Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M11.75 2.75H16.25C17.9069 2.75 19.25 4.09315 19.25 5.75V18.25C19.25 19.9069 17.9069 21.25 16.25 21.25H7.75C6.09315 21.25 4.75 19.9069 4.75 18.25V14.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.75 8.75V4.25C5.75 3.42157 6.42157 2.75 7.25 2.75C8.07843 2.75 8.75 3.42157 8.75 4.25V8.75C8.75 10.4069 7.40685 11.75 5.75 11.75C4.09315 11.75 2.75 10.4069 2.75 8.75V4.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPageAttachment;
