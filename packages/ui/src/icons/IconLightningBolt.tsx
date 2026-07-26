import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconLightningBolt: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="lightning-bolt, speed, thunder, flash, high woltage"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M11.8034 3.02149C12.9085 1.50152 15.3061 2.55449 14.9343 4.39649L13.9528 9.25H17.2878C18.7175 9.25034 19.5433 10.8727 18.7028 12.0293L12.198 20.9785C11.0929 22.4987 8.69526 21.4456 9.06709 19.6035L10.0485 14.75H6.71358C5.28366 14.7499 4.45782 13.1274 5.29854 11.9707L11.8034 3.02149Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<g clipPath="url(#clip0_15051_27779)">
					<path
						d="M5.90413 12.4121L12.409 3.4623C13.0405 2.59346 14.4108 3.19551 14.1981 4.24832L13.1568 9.40096C13.0942 9.71063 13.3309 10 13.6469 10H17.287C18.1041 10 18.5763 10.9269 18.0959 11.5879L11.591 20.5377C10.9595 21.4065 9.58916 20.8045 9.80192 19.7517L10.8432 14.599C10.9058 14.2894 10.6691 14 10.3531 14H6.71305C5.8959 14 5.42371 13.0731 5.90413 12.4121Z"
						stroke="currentColor"
						strokeLinejoin="round"
						strokeWidth="1.5"
					/>
				</g>
				<defs>
					<clipPath id="clip0_15051_27779">
						<rect fill="white" height="24" width="24" />
					</clipPath>
				</defs>
			</>
		)}
	</CentralIconBase>
);

export default IconLightningBolt;
