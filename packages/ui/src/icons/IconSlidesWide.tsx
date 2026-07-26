import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSlidesWide: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="slides-wide">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M2 7.75C2 5.67893 3.67893 4 5.75 4H14.25C16.3211 4 18 5.67893 18 7.75V8H18.25C20.3211 8 22 9.67893 22 11.75V16.25C22 18.3211 20.3211 20 18.25 20H9.75C7.67893 20 6 18.3211 6 16.25V16H5.75C3.67893 16 2 14.3211 2 12.25V7.75ZM6 11.75V14.5H5.75C4.50736 14.5 3.5 13.4926 3.5 12.25V7.75C3.5 6.50736 4.50736 5.5 5.75 5.5H14.25C15.4926 5.5 16.5 6.50736 16.5 7.75V8H9.75C7.67893 8 6 9.67893 6 11.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M6.75 15.25H5.75C4.09315 15.25 2.75 13.9069 2.75 12.25V7.75C2.75 6.09315 4.09315 4.75 5.75 4.75H14.25C15.9069 4.75 17.25 6.09315 17.25 7.75V8.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.75 19.25C8.09315 19.25 6.75 17.9069 6.75 16.25V11.75C6.75 10.0931 8.09315 8.75 9.75 8.75H18.25C19.9069 8.75 21.25 10.0931 21.25 11.75V16.25C21.25 17.9069 19.9069 19.25 18.25 19.25H9.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSlidesWide;
