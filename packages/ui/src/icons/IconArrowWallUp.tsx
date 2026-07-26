import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowWallUp: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="arrow-wall-up, align top">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M4 2.75C4 2.33579 4.33579 2 4.75 2H19.25C19.6642 2 20 2.33579 20 2.75C20 3.16421 19.6642 3.5 19.25 3.5H4.75C4.33579 3.5 4 3.16421 4 2.75ZM10.409 6.78033C11.2877 5.90165 12.7123 5.90165 13.591 6.78033L16.7803 9.96967C17.0732 10.2626 17.0732 10.7374 16.7803 11.0303C16.4874 11.3232 16.0126 11.3232 15.7197 11.0303L12.75 8.06067V21.25C12.75 21.6642 12.4142 22 12 22C11.5858 22 11.25 21.6642 11.25 21.25V8.06065L8.28033 11.0303C7.98743 11.3232 7.51256 11.3232 7.21967 11.0303C6.92678 10.7374 6.92678 10.2626 7.21967 9.96967L10.409 6.78033Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M16.25 10.4998L13.0607 7.31044C12.4749 6.72465 11.5251 6.72465 10.9394 7.31043L7.75 10.4998"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 21.25V7"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.25 2.75H4.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowWallUp;
