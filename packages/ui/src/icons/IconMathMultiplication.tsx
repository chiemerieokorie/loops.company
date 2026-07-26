import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconMathMultiplication: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="math-multiplication">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M4 12C4 11.5858 4.33579 11.25 4.75 11.25H19.25C19.6642 11.25 20 11.5858 20 12C20 12.4142 19.6642 12.75 19.25 12.75H4.75C4.33579 12.75 4 12.4142 4 12Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M10.75 6.25C10.75 5.55964 11.3096 5 12 5C12.6904 5 13.25 5.55964 13.25 6.25C13.25 6.94036 12.6904 7.5 12 7.5C11.3096 7.5 10.75 6.94036 10.75 6.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M10.75 17.75C10.75 17.0596 11.3096 16.5 12 16.5C12.6904 16.5 13.25 17.0596 13.25 17.75C13.25 18.4404 12.6904 19 12 19C11.3096 19 10.75 18.4404 10.75 17.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 12H19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11.75 6.25H12.25M12.5 6.25C12.5 6.52614 12.2761 6.75 12 6.75C11.7239 6.75 11.5 6.52614 11.5 6.25C11.5 5.97386 11.7239 5.75 12 5.75C12.2761 5.75 12.5 5.97386 12.5 6.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11.75 17.75H12.25M12.5 17.75C12.5 18.0261 12.2761 18.25 12 18.25C11.7239 18.25 11.5 18.0261 11.5 17.75C11.5 17.4739 11.7239 17.25 12 17.25C12.2761 17.25 12.5 17.4739 12.5 17.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconMathMultiplication;
