import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBucket: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="bucket, trash, can">
		{variant === "filled" ? (
			<>
				<path
					d="M2.75 3C2.33579 3 2 3.25184 2 3.5625V6.9375C2 7.24816 2.33579 7.5 2.75 7.5H21.25C21.6642 7.5 22 7.24816 22 6.9375V3.5625C22 3.25184 21.6642 3 21.25 3H2.75Z"
					fill="currentColor"
				/>
				<path
					d="M3.58503 9L4.67676 17.7161C4.91176 19.5923 6.50683 21 8.39768 21H15.6023C17.4932 21 19.0883 19.5923 19.3233 17.7161L20.415 9H3.58503Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M4.2467 8.24805L5.42094 17.6228C5.60894 19.1238 6.88499 20.25 8.39768 20.25H15.6023C17.115 20.25 18.3911 19.1238 18.5791 17.6229L19.7534 8.24805H4.2467Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M2.75 3.75H21.25V8.25H2.75V3.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBucket;
