import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconGarage: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="garage">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M10.0411 3.57052C11.2432 2.83408 12.7568 2.83408 13.9589 3.57052L20.2089 7.39935C21.3216 8.08101 22 9.2921 22 10.597V16.25C22 18.3211 20.3211 20 18.25 20H5.75C3.67893 20 2 18.3211 2 16.25V10.597C2 9.2921 2.67835 8.08101 3.79107 7.39935L10.0411 3.57052ZM7.5 18.5H16.5V16H7.5V18.5ZM7.5 14.5H16.5V14.25C16.5 13.0074 15.4926 12 14.25 12H9.75C8.50736 12 7.5 13.0074 7.5 14.25V14.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M18.25 19.25H5.75C4.09315 19.25 2.75 17.9069 2.75 16.25V10.597C2.75 9.55308 3.29268 8.58421 4.18285 8.03888L10.4329 4.21005C11.3946 3.6209 12.6054 3.6209 13.5671 4.21005L19.8171 8.03888C20.7073 8.58421 21.25 9.55308 21.25 10.597V16.25C21.25 17.9069 19.9069 19.25 18.25 19.25Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.75 15.25H17.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.25 19.25V14.25C17.25 12.5931 15.9069 11.25 14.25 11.25H9.75C8.09315 11.25 6.75 12.5931 6.75 14.25V19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconGarage;
