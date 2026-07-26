import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconShield: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="shield, security, protection">
		{variant === "filled" ? (
			<>
				<path
					d="M13.1859 2.35455C12.4161 2.09796 11.5839 2.09796 10.8141 2.35455L4.88037 4.33247C3.75743 4.70678 3 5.75767 3 6.94135V11.9122C3 14.6495 4.18351 16.6699 5.85876 18.2595C7.5058 19.8223 9.65956 20.9973 11.6439 22.0678C11.8662 22.1877 12.1338 22.1877 12.3561 22.0678C14.3404 20.9973 16.4942 19.8223 18.1412 18.2595C19.8165 16.6699 21 14.6495 21 11.9122V6.94135C21 5.75767 20.2426 4.70678 19.1196 4.33247L13.1859 2.35455Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M20.25 6.94153C20.25 6.08067 19.6991 5.31639 18.8825 5.04417L12.9487 3.06624C12.3329 2.86098 11.6671 2.86098 11.0513 3.06624L5.11754 5.04417C4.30086 5.31639 3.75 6.08067 3.75 6.94153V11.9124C3.75 16.8848 8 19.25 12 21.4079C16 19.25 20.25 16.8848 20.25 11.9124V6.94153Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconShield;
