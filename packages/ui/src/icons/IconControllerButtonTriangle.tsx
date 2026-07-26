import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconControllerButtonTriangle: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="controller-button-triangle, menu, options, action, more, expand"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M11.5645 8.64648C11.7636 8.32146 12.2364 8.32146 12.4355 8.64648L15.6855 13.9531C15.8938 14.2932 15.6488 14.7305 15.25 14.7305H8.75C8.35118 14.7305 8.10616 14.2932 8.31445 13.9531L11.5645 8.64648Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.7148 7.86328C12.9306 6.58271 11.0694 6.58271 10.2852 7.86328L7.03516 13.1699C6.21477 14.5095 7.17915 16.2305 8.75 16.2305H15.25C16.8209 16.2305 17.7852 14.5095 16.9648 13.1699L13.7148 7.86328Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<circle
					cx="12"
					cy="12"
					r="9.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10.9251 8.25505C11.4168 7.4522 12.5832 7.4522 13.0749 8.25505L16.3249 13.5618C16.8393 14.4017 16.2349 15.4805 15.2501 15.4805H8.74995C7.7651 15.4805 7.16073 14.4017 7.67509 13.5618L10.9251 8.25505Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconControllerButtonTriangle;
