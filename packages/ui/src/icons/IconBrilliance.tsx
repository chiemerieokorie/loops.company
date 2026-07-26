import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBrilliance: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="brilliance, yin yang, ballance">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M7.00402 5.12247C4.88041 6.66777 3.5 9.17268 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C14.2281 20.5 16 18.7464 16 16.625C16 15.2619 15.5125 14.5103 14.8156 13.9875C14.0513 13.4142 13.0032 13.0876 11.7825 12.7178C11.7603 12.711 11.738 12.7043 11.7156 12.6975C10.5771 12.3528 9.2817 11.9605 8.28433 11.2124C7.20004 10.3991 6.5 9.19792 6.5 7.375C6.5 6.56877 6.68075 5.80621 7.00402 5.12247ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M12 2.75C9.37665 2.75 7.25 4.82068 7.25 7.375C7.25 13.747 16.75 10.253 16.75 16.625C16.75 19.1793 14.6234 21.25 12 21.25"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBrilliance;
