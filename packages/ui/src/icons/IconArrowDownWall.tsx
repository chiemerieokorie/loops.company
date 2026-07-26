import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowDownWall: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="arrow-down-wall">
		{variant === "filled" ? (
			<>
				<path
					d="M12 7C12.4142 7 12.75 7.33579 12.75 7.75V18.4395L15.9697 15.2197C16.2626 14.9268 16.7374 14.9268 17.0303 15.2197C17.3232 15.5126 17.3232 15.9874 17.0303 16.2803L12.5303 20.7803C12.2374 21.0732 11.7626 21.0732 11.4697 20.7803L6.96973 16.2803C6.67683 15.9874 6.67683 15.5126 6.96973 15.2197C7.26262 14.9268 7.73738 14.9268 8.03027 15.2197L11.25 18.4395V7.75C11.25 7.33579 11.5858 7 12 7Z"
					fill="currentColor"
				/>
				<path
					d="M19.25 3C19.6642 3 20 3.33579 20 3.75C20 4.16421 19.6642 4.5 19.25 4.5H4.75C4.33579 4.5 4 4.16421 4 3.75C4 3.33579 4.33579 3 4.75 3H19.25Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M19.25 3.75L4.75 3.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.5 15.75L12 20.25L7.5 15.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 7.75V19.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowDownWall;
