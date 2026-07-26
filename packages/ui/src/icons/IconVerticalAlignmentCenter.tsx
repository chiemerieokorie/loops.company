import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconVerticalAlignmentCenter: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="vertical-alignment-center">
		{variant === "filled" ? (
			<>
				<path
					d="M12.75 3.75C12.75 3.33579 12.4142 3 12 3C11.5858 3 11.25 3.33579 11.25 3.75V6H6.5C5.11929 6 4 7.11929 4 8.5C4 9.88071 5.11929 11 6.5 11H11.25V13H8.5C7.11929 13 6 14.1193 6 15.5C6 16.8807 7.11929 18 8.5 18H11.25V20.25C11.25 20.6642 11.5858 21 12 21C12.4142 21 12.75 20.6642 12.75 20.25V18H15.5C16.8807 18 18 16.8807 18 15.5C18 14.1193 16.8807 13 15.5 13H12.75V11H17.5C18.8807 11 20 9.88071 20 8.5C20 7.11929 18.8807 6 17.5 6H12.75V3.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M12 3.75V6.75M12 17.25V20.25M12 10.25V13.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.5 6.75H6.5C5.5335 6.75 4.75 7.5335 4.75 8.5C4.75 9.4665 5.5335 10.25 6.5 10.25H17.5C18.4665 10.25 19.25 9.4665 19.25 8.5C19.25 7.5335 18.4665 6.75 17.5 6.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.5 13.75H8.5C7.5335 13.75 6.75 14.5335 6.75 15.5C6.75 16.4665 7.5335 17.25 8.5 17.25H15.5C16.4665 17.25 17.25 16.4665 17.25 15.5C17.25 14.5335 16.4665 13.75 15.5 13.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconVerticalAlignmentCenter;
