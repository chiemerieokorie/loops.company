import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconRepeat: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="repeat">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M5.75 4.5C4.50736 4.5 3.5 5.50736 3.5 6.75V15.25C3.5 16.4926 4.50736 17.5 5.75 17.5H7.25C7.66421 17.5 8 17.8358 8 18.25C8 18.6642 7.66421 19 7.25 19H5.75C3.67893 19 2 17.3211 2 15.25V6.75C2 4.67893 3.67893 3 5.75 3H18.25C20.3211 3 22 4.67893 22 6.75V15.25C22 17.3211 20.3211 19 18.25 19H13.6682L15.5087 20.6989C15.8131 20.9799 15.8321 21.4543 15.5511 21.7587C15.2702 22.0631 14.7957 22.0821 14.4913 21.8011L11.2413 18.8011C11.0913 18.6627 11.0042 18.4691 11.0001 18.265C10.9961 18.0609 11.0753 17.864 11.2197 17.7197L14.4697 14.4697C14.7626 14.1768 15.2374 14.1768 15.5303 14.4697C15.8232 14.7626 15.8232 15.2374 15.5303 15.5303L13.5607 17.5H18.25C19.4926 17.5 20.5 16.4926 20.5 15.25V6.75C20.5 5.50736 19.4926 4.5 18.25 4.5H5.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M7.25 18.25H5.75C4.09315 18.25 2.75 16.9069 2.75 15.25V6.75C2.75 5.09315 4.09315 3.75 5.75 3.75H18.25C19.9069 3.75 21.25 5.09315 21.25 6.75V15.25C21.25 16.9069 19.9069 18.25 18.25 18.25H12.25M15 15L11.75 18.25L15 21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconRepeat;
