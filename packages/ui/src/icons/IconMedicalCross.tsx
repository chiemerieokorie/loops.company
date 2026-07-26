import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconMedicalCross: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="medical-cross, first-aid, emergency">
		{variant === "filled" ? (
			<>
				<path
					d="M13.25 2C14.7688 2 16 3.23122 16 4.75V6.75C16 7.44036 16.5596 8 17.25 8H19.25C20.7688 8 22 9.23122 22 10.75V13.25C22 14.7688 20.7688 16 19.25 16H17.25C16.5596 16 16 16.5596 16 17.25V19.25C16 20.7688 14.7688 22 13.25 22H10.75C9.23122 22 8 20.7688 8 19.25V17.25C8 16.5596 7.44036 16 6.75 16H4.75C3.23122 16 2 14.7688 2 13.25V10.75C2 9.23122 3.23122 8 4.75 8H6.75C7.44036 8 8 7.44036 8 6.75V4.75C8 3.23122 9.23122 2 10.75 2H13.25Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					clipRule="evenodd"
					d="M10.75 2.75C9.64543 2.75 8.75 3.64543 8.75 4.75L8.75 6.75C8.75 7.85457 7.85457 8.75 6.75 8.75H4.75C3.64543 8.75 2.75 9.64543 2.75 10.75L2.75 13.25C2.75 14.3546 3.64543 15.25 4.75 15.25L6.75 15.25C7.85457 15.25 8.75 16.1454 8.75 17.25V19.25C8.75 20.3546 9.64543 21.25 10.75 21.25H13.25C14.3546 21.25 15.25 20.3546 15.25 19.25V17.25C15.25 16.1454 16.1454 15.25 17.25 15.25L19.25 15.25C20.3546 15.25 21.25 14.3546 21.25 13.25V10.75C21.25 9.64543 20.3546 8.75 19.25 8.75H17.25C16.1454 8.75 15.25 7.85457 15.25 6.75V4.75C15.25 3.64543 14.3546 2.75 13.25 2.75L10.75 2.75Z"
					fillRule="evenodd"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconMedicalCross;
