import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconOldPhone: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="old-phone">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M4.75 1C5.16421 1 5.5 1.33579 5.5 1.75V3.74973C6.12675 3.27896 6.9058 3 7.75 3H16.25C18.3211 3 20 4.67893 20 6.75V17.25C20 19.8734 17.8734 22 15.25 22H8.75C6.12665 22 4 19.8734 4 17.25V1.75C4 1.33579 4.33579 1 4.75 1ZM8.75 7C8.33579 7 8 7.33579 8 7.75V13.25C8 13.6642 8.33579 14 8.75 14H15.25C15.6642 14 16 13.6642 16 13.25V7.75C16 7.33579 15.6642 7 15.25 7H8.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 6.88158V1.75M8.25 14.25H15.75C16.0261 14.25 16.25 14.0261 16.25 13.75V7.25C16.25 6.97386 16.0261 6.75 15.75 6.75H8.25C7.97386 6.75 7.75 6.97386 7.75 7.25V13.75C7.75 14.0261 7.97386 14.25 8.25 14.25ZM4.75 17.25V6.75C4.75 5.09315 6.09315 3.75 7.75 3.75H16.25C17.9069 3.75 19.25 5.09315 19.25 6.75V17.25C19.25 19.4591 17.4591 21.25 15.25 21.25H8.75C6.54086 21.25 4.75 19.4591 4.75 17.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconOldPhone;
