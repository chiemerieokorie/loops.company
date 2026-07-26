import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconVariables: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="variables, figma">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M10.1257 2.71627C11.2859 2.0464 12.7154 2.0464 13.8757 2.71627L19.1029 5.73422C20.2632 6.40409 20.9779 7.64207 20.9779 8.98182V15.0177C20.9779 16.3575 20.2632 17.5954 19.1029 18.2653L13.8757 21.2833C12.7154 21.9531 11.2859 21.9531 10.1257 21.2833L4.89844 18.2653C3.73818 17.5954 3.02344 16.3575 3.02344 15.0177V8.98182C3.02344 7.64207 3.73818 6.40409 4.89844 5.73422L10.1257 2.71627ZM9.75073 11.9998C9.75073 10.7571 10.7581 9.74976 12.0007 9.74976C13.2434 9.74976 14.2507 10.7571 14.2507 11.9998C14.2507 13.2424 13.2434 14.2498 12.0007 14.2498C10.7581 14.2498 9.75073 13.2424 9.75073 11.9998Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M10.5 3.36603C11.4282 2.83013 12.5718 2.83013 13.5 3.36603L18.7272 6.38397C19.6554 6.91987 20.2272 7.91025 20.2272 8.98205V15.0179C20.2272 16.0897 19.6554 17.0801 18.7272 17.616L13.5 20.634C12.5718 21.1699 11.4282 21.1699 10.5 20.634L5.27276 17.616C4.34456 17.0801 3.77276 16.0897 3.77276 15.0179V8.98205C3.77276 7.91025 4.34456 6.91987 5.27276 6.38397L10.5 3.36603Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11.25 12H12.75M13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconVariables;
