import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconShaderEffect: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="shader-effect, material">
		{variant === "filled" ? (
			<>
				<path
					d="M19.9307 4.12891C20.5919 4.80502 21 5.72962 21 6.75V17.25C21 19.3211 19.3211 21 17.25 21H6.75C5.72962 21 4.80502 20.5919 4.12891 19.9307L19.9307 4.12891Z"
					fill="currentColor"
				/>
				<path
					d="M17.25 3C17.7497 3 18.2261 3.09895 18.6621 3.27637L3.27637 18.6621C3.09895 18.2261 3 17.7497 3 17.25V13.0605L13.0605 3H17.25Z"
					fill="currentColor"
				/>
				<path
					d="M3 10.9395V6.75C3 4.67893 4.67893 3 6.75 3H10.9395L3 10.9395Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M17.25 3.75H6.75C5.09315 3.75 3.75 5.09315 3.75 6.75V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H17.25C18.9069 20.25 20.25 18.9069 20.25 17.25V6.75C20.25 5.09315 18.9069 3.75 17.25 3.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19 5L5 19"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.25 3.75L3.75 13.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconShaderEffect;
