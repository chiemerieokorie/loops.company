import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCircleArrowDown: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="circle-arrow-down, download square, save"
	>
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM8.75 17C8.33579 17 8 16.6642 8 16.25C8 15.8358 8.33579 15.5 8.75 15.5H15.25C15.6642 15.5 16 15.8358 16 16.25C16 16.6642 15.6642 17 15.25 17H8.75ZM14.7803 11.7803L12.5303 14.0303C12.2374 14.3232 11.7626 14.3232 11.4697 14.0303L9.21967 11.7803C8.92678 11.4874 8.92678 11.0126 9.21967 10.7197C9.51256 10.4268 9.98744 10.4268 10.2803 10.7197L11.25 11.6893V7.75C11.25 7.33579 11.5858 7 12 7C12.4142 7 12.75 7.33579 12.75 7.75V11.6893L13.7197 10.7197C14.0126 10.4268 14.4874 10.4268 14.7803 10.7197C15.0732 11.0126 15.0732 11.4874 14.7803 11.7803Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M12 7.75V13.5M12 13.5L14.25 11.25M12 13.5L9.75 11.25M8.75 16.25H15.25M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCircleArrowDown;
