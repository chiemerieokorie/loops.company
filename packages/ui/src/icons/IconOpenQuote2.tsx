import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconOpenQuote2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="open-quote-2, blockquote">
		{variant === "filled" ? (
			<>
				<path
					d="M18.25 20C20.3211 20 22 18.3204 22 16.2485V13.9618C22 11.9739 20.4545 10.3472 18.5 10.2185V4.74375C18.5 4.49612 18.3779 4.26443 18.1736 4.12457C17.7059 3.80438 17.1523 4.17519 16.7475 4.41114C16.3321 4.65321 15.7803 5.02842 15.2275 5.56539C14.1128 6.64821 13 8.38727 13 10.9606V16.2487C13 18.3208 14.679 20 16.75 20H18.25Z"
					fill="currentColor"
				/>
				<path
					d="M7.25 20C9.32107 20 11 18.3204 11 16.2485V13.9618C11 11.9739 9.45451 10.3472 7.5 10.2185V4.74375C7.5 4.49612 7.37786 4.26443 7.17359 4.12457C6.70593 3.80439 6.15229 4.17519 5.74746 4.41114C5.33213 4.65321 4.78033 5.02841 4.22754 5.56539C3.11281 6.64821 2 8.38727 2 10.9606V16.2487C2 18.3208 3.67902 20 5.75 20H7.25Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M16.75 19.25H18.25C19.9069 19.25 21.25 17.9069 21.25 16.25V13.9643C21.25 12.3074 19.9069 10.9643 18.25 10.9643H17.75V4.75C17.75 4.75 13.75 6.30357 13.75 10.9643V16.2503C13.75 17.9071 15.0931 19.25 16.75 19.25Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.75 19.25H7.25C8.90685 19.25 10.25 17.9069 10.25 16.25V13.9643C10.25 12.3074 8.90685 10.9643 7.25 10.9643H6.75L6.75 4.75C6.75 4.75 2.75 6.30357 2.75 10.9643L2.75 16.2503C2.75 17.9071 4.09315 19.25 5.75 19.25Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconOpenQuote2;
