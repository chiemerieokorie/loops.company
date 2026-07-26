import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconMedicalCrossSquare: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="medical-cross-square, first-aid, emergency"
	>
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M17.25 3C19.3211 3 21 4.67893 21 6.75V17.25C21 19.3211 19.3211 21 17.25 21H6.75C4.67893 21 3 19.3211 3 17.25V6.75C3 4.67893 4.67893 3 6.75 3H17.25ZM11 8C10.7239 8 10.5 8.22386 10.5 8.5V10C10.5 10.2761 10.2761 10.5 10 10.5H8.5C8.22386 10.5 8 10.7239 8 11V13C8 13.2761 8.22386 13.5 8.5 13.5H10C10.2761 13.5 10.5 13.7239 10.5 14V15.5C10.5 15.7761 10.7239 16 11 16H13C13.2761 16 13.5 15.7761 13.5 15.5V14C13.5 13.7239 13.7239 13.5 14 13.5H15.5C15.7761 13.5 16 13.2761 16 13V11C16 10.7239 15.7761 10.5 15.5 10.5H14C13.7239 10.5 13.5 10.2761 13.5 10V8.5C13.5 8.22386 13.2761 8 13 8H11Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M17.25 3.75H6.75C5.09315 3.75 3.75 5.09315 3.75 6.75V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H17.25C18.9069 20.25 20.25 18.9069 20.25 17.25V6.75C20.25 5.09315 18.9069 3.75 17.25 3.75Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					clipRule="evenodd"
					d="M13.5 10.5V7.75H10.5V10.5H7.75V13.5H10.5V16.25H13.5V13.5H16.25V10.5H13.5Z"
					fillRule="evenodd"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconMedicalCrossSquare;
