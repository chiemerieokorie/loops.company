import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSquareArrowInTopLeft: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="square-arrow-in-top-left, dock, box, arrow"
	>
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M2.96967 2.96967C3.26256 2.67678 3.73744 2.67678 4.03033 2.96967L9.5 8.43934V3.75C9.5 3.33579 9.83579 3 10.25 3C10.6642 3 11 3.33579 11 3.75V9.25C11 10.2165 10.2165 11 9.25 11L3.75 11C3.33579 11 3 10.6642 3 10.25C3 9.83579 3.33579 9.5 3.75 9.5L8.43934 9.5L2.96967 4.03033C2.67678 3.73744 2.67678 3.26256 2.96967 2.96967ZM13 6.75C13 6.33579 13.3358 6 13.75 6H18.25C20.3211 6 22 7.67893 22 9.75V18.25C22 20.3211 20.3211 22 18.25 22H9.75C7.67893 22 6 20.3211 6 18.25V13.75C6 13.3358 6.33579 13 6.75 13C7.16421 13 7.5 13.3358 7.5 13.75V18.25C7.5 19.4926 8.50736 20.5 9.75 20.5H18.25C19.4926 20.5 20.5 19.4926 20.5 18.25V9.75C20.5 8.50736 19.4926 7.5 18.25 7.5H13.75C13.3358 7.5 13 7.16421 13 6.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M10.25 3.75V9.25C10.25 9.80228 9.80228 10.25 9.25 10.25L3.75 10.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.75 13.75V18.25C6.75 19.9069 8.09315 21.25 9.75 21.25H18.25C19.9069 21.25 21.25 19.9069 21.25 18.25V9.75C21.25 8.09315 19.9069 6.75 18.25 6.75H13.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9 9L3.5 3.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSquareArrowInTopLeft;
