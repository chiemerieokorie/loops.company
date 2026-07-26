import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconNuclearPowerPlant: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="nuclear-power-plant, radiation">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M4.91663 6.44633C5.10002 4.51046 6.71195 3 8.67502 3H14.1101C16.0731 3 17.6851 4.51046 17.8685 6.44633C18.0152 7.99561 18.1832 9.43019 18.4015 10.8295C20.5793 11.9915 22.0018 14.2708 22.0018 17V19.25C22.0018 20.2165 21.2183 21 20.2518 21H4.1608C2.94855 21 2.12325 19.808 2.49027 18.6816C3.91247 14.317 4.50006 10.8437 4.91663 6.44633ZM9.69027 15.5H20.3134C19.6967 13.1327 17.6268 11.5 15.0018 11.5C12.3769 11.5 10.307 13.1327 9.69027 15.5ZM20.5018 17H9.50183V19.5H20.2518C20.3899 19.5 20.5018 19.3881 20.5018 19.25V17Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M17.7218 11.3294C17.4705 9.79059 17.2832 8.22048 17.1218 6.51674C16.974 4.95671 15.6771 3.75 14.1101 3.75H8.67502C7.108 3.75 5.81107 4.95702 5.66329 6.51706C5.24304 10.9531 4.64707 14.4833 3.20337 18.9139C2.99 19.5688 3.47209 20.25 4.16079 20.25H9.00183"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.75 17C8.75 13.4363 11.4363 10.75 15 10.75C18.5637 10.75 21.25 13.4363 21.25 17V19.25C21.25 19.8023 20.8023 20.25 20.25 20.25H8.75V17Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9 16.25H21"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconNuclearPowerPlant;
