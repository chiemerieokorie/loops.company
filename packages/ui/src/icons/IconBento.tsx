import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBento: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="bento, layout, grid, flex">
		{variant === "filled" ? (
			<>
				<path
					d="M17.25 3.00391C19.3211 3.00391 21 4.68284 21 6.75391V17.2539C21 19.325 19.3211 21.0039 17.25 21.0039H16.75C14.6789 21.0039 13 19.325 13 17.2539V6.75391C13 4.68284 14.6789 3.00391 16.75 3.00391H17.25Z"
					fill="currentColor"
				/>
				<path
					d="M7.25 13C9.32107 13 11 14.6789 11 16.75V17.25C11 19.3211 9.32107 21 7.25 21H6.75C4.67893 21 3 19.3211 3 17.25V16.75C3 14.6789 4.67893 13 6.75 13H7.25Z"
					fill="currentColor"
				/>
				<path
					d="M7.25 3C9.32107 3 11 4.67893 11 6.75V7.25C11 9.32107 9.32107 11 7.25 11H6.75C4.67893 11 3 9.32107 3 7.25V6.75C3 4.67893 4.67893 3 6.75 3H7.25Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 6.75C3.75 5.09315 5.09315 3.75 6.75 3.75H7.25C8.90685 3.75 10.25 5.09315 10.25 6.75V7.25C10.25 8.90685 8.90685 10.25 7.25 10.25H6.75C5.09315 10.25 3.75 8.90685 3.75 7.25V6.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.75 6.75391C13.75 5.09705 15.0931 3.75391 16.75 3.75391H17.25C18.9069 3.75391 20.25 5.09705 20.25 6.75391V17.2539C20.25 18.9108 18.9069 20.2539 17.25 20.2539H16.75C15.0931 20.2539 13.75 18.9108 13.75 17.2539V6.75391Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 16.75C3.75 15.0931 5.09315 13.75 6.75 13.75H7.25C8.90685 13.75 10.25 15.0931 10.25 16.75V17.25C10.25 18.9069 8.90685 20.25 7.25 20.25H6.75C5.09315 20.25 3.75 18.9069 3.75 17.25V16.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBento;
