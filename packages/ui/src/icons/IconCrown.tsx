import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCrown: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="crown, vip">
		{variant === "filled" ? (
			<>
				<path
					d="M12.6278 3.33956C12.4892 3.12769 12.2532 3 12 3C11.7469 3 11.5108 3.12769 11.3723 3.33956L7.51232 9.24306L2.12793 6.10217C1.87239 5.9531 1.55311 5.96818 1.31275 6.14067C1.0724 6.31315 0.955898 6.61081 1.01531 6.90062L3.08632 17.0031C3.44394 18.7476 4.97913 20 6.75992 20H17.2401C19.0209 20 20.5561 18.7476 20.9137 17.0031L22.9848 6.90062C23.0442 6.61081 22.9277 6.31315 22.6873 6.14067C22.447 5.96818 22.1277 5.9531 21.8721 6.10217L16.4877 9.24306L12.6278 3.33956Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M3.82101 16.8525L1.75 6.75L7.75 10.25L12 3.75L16.25 10.25L22.25 6.75L20.179 16.8525C19.8929 18.2481 18.6647 19.25 17.2401 19.25H6.75989C5.33526 19.25 4.10711 18.2481 3.82101 16.8525Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCrown;
