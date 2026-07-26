import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconGiroCards: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="giro-cards">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M2 7.75C2 5.67893 3.67893 4 5.75 4H14.25C16.3211 4 18 5.67893 18 7.75V8H18.25C20.3211 8 22 9.67893 22 11.75V16.25C22 18.3211 20.3211 20 18.25 20H9.75C7.67893 20 6 18.3211 6 16.25V16H5.75C3.67893 16 2 14.3211 2 12.25V7.75ZM7.5 16V16.25C7.5 17.4926 8.50736 18.5 9.75 18.5H18.25C19.4926 18.5 20.5 17.4926 20.5 16.25V11.75C20.5 10.5074 19.4926 9.5 18.25 9.5H18V12.25C18 14.3211 16.3211 16 14.25 16H7.5ZM6 8.75C6 8.33579 6.33579 8 6.75 8H8.25C8.66421 8 9 8.33579 9 8.75C9 9.16421 8.66421 9.5 8.25 9.5H6.75C6.33579 9.5 6 9.16421 6 8.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M17.25 8.75H18.25C19.9069 8.75 21.25 10.0931 21.25 11.75V16.25C21.25 17.9069 19.9069 19.25 18.25 19.25H9.75C8.09315 19.25 6.75 17.9069 6.75 16.25V15.25M6.75 8.75H8.25M5.75 15.25H14.25C15.9069 15.25 17.25 13.9069 17.25 12.25V7.75C17.25 6.09315 15.9069 4.75 14.25 4.75H5.75C4.09315 4.75 2.75 6.09315 2.75 7.75V12.25C2.75 13.9069 4.09315 15.25 5.75 15.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconGiroCards;
