import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBasket2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="basket-2, shopping-bag">
		{variant === "filled" ? (
			<>
				<path
					d="M8.94441 4.02874C9.09824 3.64415 8.91118 3.20768 8.52659 3.05384C8.14201 2.90001 7.70553 3.08707 7.55169 3.47166L5.74036 8H4.53185C3.13506 8 2.0758 9.25939 2.31512 10.6355L3.57721 17.8925C3.8896 19.6887 5.44859 21 7.27176 21H16.7252C18.5483 21 20.1073 19.6887 20.4197 17.8925L21.6818 10.6355C21.9211 9.25939 20.8619 8 19.4651 8H18.2557L16.4444 3.47166C16.2906 3.08707 15.8541 2.90001 15.4695 3.05384C15.0849 3.20768 14.8979 3.64415 15.0517 4.02874L16.6402 8H7.35591L8.94441 4.02874Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M8.24826 3.75L6.24826 8.75H17.7483L15.7483 3.75M20.9427 10.507L19.6806 17.764C19.4307 19.201 18.1835 20.25 16.725 20.25H7.27156C5.81302 20.25 4.56583 19.201 4.31592 17.764L3.05383 10.507C2.89428 9.58959 3.60046 8.75 4.53165 8.75H19.4649C20.3961 8.75 21.1022 9.58959 20.9427 10.507Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBasket2;
