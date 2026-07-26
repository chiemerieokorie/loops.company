import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPowerPlant: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="power-plant, coal, gas, factory">
		{variant === "filled" ? (
			<>
				<path
					d="M8.75 5.25C8.75 4.55964 9.30964 4 10 4H19.25C19.6642 4 20 3.66421 20 3.25C20 2.83579 19.6642 2.5 19.25 2.5H10C8.48122 2.5 7.25 3.73122 7.25 5.25C7.25 5.66421 7.58579 6 8 6C8.41421 6 8.75 5.66421 8.75 5.25Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M19.17 10.9691C20.0023 10.5331 21 11.1368 21 12.0764V20.2501C21 20.6643 20.6643 21.0001 20.25 21.0001H12.478C12.4392 21.0001 12.401 20.9971 12.3636 20.9914C12.3263 20.9971 12.2883 21 12.25 21H3.75001C3.53039 21 3.32181 20.9037 3.17932 20.7366C3.03682 20.5695 2.97473 20.3484 3.00943 20.1315L4.73998 9.31553C4.95344 7.98143 6.10438 7 7.45544 7H8.54457C9.89563 7 11.0466 7.98143 11.26 9.31553L11.7254 12.2243L13.8893 11.0125C14.7225 10.5459 15.75 11.1481 15.75 12.1031V12.7605L19.17 10.9691ZM6.22114 9.55251C6.31817 8.9461 6.84132 8.5 7.45544 8.5H8.54457C9.15869 8.5 9.68184 8.9461 9.77887 9.55251L11.3705 19.5H4.62954L6.22114 9.55251Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M5.48056 9.43402C5.6358 8.46377 6.47285 7.75 7.45544 7.75H8.54456C9.52715 7.75 10.3642 8.46377 10.5194 9.43402L12.25 20.25H3.75L5.48056 9.43402Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.25 3.25H10C8.89543 3.25 8 4.14543 8 5.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11.5898 13.25L14.417 11.6668C14.7503 11.4802 15.1613 11.7211 15.1613 12.1031V14L19.6793 11.6334C20.0122 11.4591 20.4113 11.7005 20.4113 12.0764V20.25H12.1613"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPowerPlant;
