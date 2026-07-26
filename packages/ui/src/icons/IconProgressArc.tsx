import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconProgressArc: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="progress-arc, progress-dynamic, ideas, open, status, task"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 12L18.7549 16.2861C19.5224 15.0766 19.9511 13.6828 19.9961 12.251C20.041 10.8191 19.7009 9.40091 19.0107 8.14551C18.3205 6.89013 17.3054 5.84352 16.0723 5.11426C14.8391 4.38495 13.4327 4 12 4V12Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
				<path
					d="M12 5.25C13.2089 5.25 14.3955 5.57464 15.436 6.18999C16.4765 6.80535 17.3327 7.68884 17.9151 8.74816C18.4974 9.80749 18.7846 11.0038 18.7467 12.212C18.7087 13.4203 18.3469 14.5962 17.6992 15.6168L12 12V5.25Z"
					fill="currentColor"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconProgressArc;
