import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCloud: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="cloud">
		{variant === "filled" ? (
			<>
				<path
					d="M12 4C9.20241 4 6.80396 5.70153 5.77996 8.12427C3.05102 8.68825 1 11.1041 1 14C1 17.3137 3.68629 20 7 20H18.125C20.8174 20 23 17.8174 23 15.125C23 12.639 21.1392 10.5876 18.7344 10.2877C18.4969 6.77542 15.5725 4 12 4Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M17.9948 11.002C17.9983 10.9184 18 10.8344 18 10.75C18 7.43629 15.3137 4.75 12 4.75C9.3716 4.75 7.13793 6.44009 6.32647 8.7928C3.74507 9.12339 1.75 11.3287 1.75 14C1.75 16.8995 4.10051 19.25 7 19.25H18.125C20.4032 19.25 22.25 17.4032 22.25 15.125C22.25 12.8468 20.4032 11 18.125 11C18.0814 11 18.038 11.0007 17.9948 11.002Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCloud;
