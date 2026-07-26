import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconMathLessThanCircle: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="math-less-than-circle, <">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12ZM15.4208 8.41459C15.2356 8.04411 14.7851 7.89394 14.4146 8.07918L7.91459 11.3292C7.6605 11.4562 7.5 11.7159 7.5 12C7.5 12.2841 7.6605 12.5438 7.91459 12.6708L14.4146 15.9208C14.7851 16.1061 15.2356 15.9559 15.4208 15.5854C15.6061 15.2149 15.4559 14.7644 15.0854 14.5792L9.92705 12L15.0854 9.42082C15.4559 9.23558 15.6061 8.78507 15.4208 8.41459Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M14.75 8.75L8.25 12L14.75 15.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconMathLessThanCircle;
