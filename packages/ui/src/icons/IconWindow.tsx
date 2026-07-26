import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconWindow: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="window, timeline, feed, posts">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3 6.75C3 4.67893 4.67893 3 6.75 3H17.25C19.3211 3 21 4.67893 21 6.75V17.25C21 19.3211 19.3211 21 17.25 21H6.75C4.67893 21 3 19.3211 3 17.25V6.75ZM6.75 4.5C5.50736 4.5 4.5 5.50736 4.5 6.75V10H19.5V6.75C19.5 5.50736 18.4926 4.5 17.25 4.5H6.75ZM6 7.25C6 6.42157 6.67157 5.75 7.5 5.75C8.32843 5.75 9 6.42157 9 7.25C9 8.07843 8.32843 8.75 7.5 8.75C6.67157 8.75 6 8.07843 6 7.25ZM10 7.25C10 6.83579 10.3358 6.5 10.75 6.5H17.25C17.6642 6.5 18 6.83579 18 7.25C18 7.66421 17.6642 8 17.25 8H10.75C10.3358 8 10 7.66421 10 7.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 10.75V6.75C3.75 5.09315 5.09315 3.75 6.75 3.75H17.25C18.9069 3.75 20.25 5.09315 20.25 6.75V10.75M3.75 10.75V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H17.25C18.9069 20.25 20.25 18.9069 20.25 17.25V10.75M3.75 10.75H20.25M10.75 7.25H17.25M8.25 7.25C8.25 7.66421 7.91421 8 7.5 8C7.08579 8 6.75 7.66421 6.75 7.25C6.75 6.83579 7.08579 6.5 7.5 6.5C7.91421 6.5 8.25 6.83579 8.25 7.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconWindow;
