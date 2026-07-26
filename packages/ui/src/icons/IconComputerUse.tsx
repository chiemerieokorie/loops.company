import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconComputerUse: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="computer-use, cursor">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M17.25 3C19.3211 3 21 4.67893 21 6.75V17.25C21 19.3211 19.3211 21 17.25 21H6.75C4.67893 21 3 19.3211 3 17.25V6.75C3 4.67893 4.67893 3 6.75 3H17.25ZM9.00195 7.7373C8.22025 7.4768 7.4768 8.22025 7.7373 9.00195L10.1465 16.2295C10.4596 17.1677 11.7993 17.1302 12.0596 16.1758L12.8662 13.2178C12.9128 13.047 13.047 12.9128 13.2178 12.8662L16.1758 12.0596C17.1302 11.7993 17.1677 10.4596 16.2295 10.1465L9.00195 7.7373Z"
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
					d="M10.3833 16.15L7.97434 8.92302C7.7789 8.33671 8.3367 7.7789 8.92302 7.97434L16.15 10.3833C16.854 10.618 16.8261 11.6232 16.1102 11.8184L13.1516 12.6253C12.8954 12.6952 12.6952 12.8954 12.6253 13.1516L11.8184 16.1102C11.6232 16.8261 10.618 16.854 10.3833 16.15Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconComputerUse;
