import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconRuler: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="ruler">
		{variant === "filled" ? (
			<>
				<path
					d="M13.8479 2.84103C15.3124 1.37656 17.6867 1.37656 19.1512 2.84103L21.1586 4.84838C22.623 6.31285 22.623 8.68722 21.1586 10.1517L10.1512 21.159C8.68673 22.6235 6.31236 22.6235 4.8479 21.159L2.84054 19.1517C1.37607 17.6872 1.37607 15.3129 2.84054 13.8484L4.3141 12.3748L6.46967 14.5304C6.76256 14.8233 7.23744 14.8233 7.53033 14.5304C7.82322 14.2375 7.82322 13.7626 7.53033 13.4697L5.37476 11.3142L7.8141 8.87482L10.9697 12.0304C11.2626 12.3233 11.7374 12.3233 12.0303 12.0304C12.3232 11.7375 12.3232 11.2626 12.0303 10.9697L8.87476 7.81416L11.3141 5.37482L13.4697 7.53039C13.7626 7.82328 14.2374 7.82328 14.5303 7.53039C14.8232 7.2375 14.8232 6.76262 14.5303 6.46973L12.3748 4.31416L13.8479 2.84103Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M20.6282 5.37872L18.6209 3.37136C17.4493 2.19978 15.5498 2.19978 14.3782 3.37136L12.3745 5.37504L8.87455 8.87504L5.37455 12.375L3.37087 14.3787C2.19929 15.5503 2.19929 17.4498 3.37087 18.6214L5.37823 20.6287C6.5498 21.8003 8.44929 21.8003 9.62087 20.6287L20.6282 9.62136C21.7998 8.44978 21.7998 6.55029 20.6282 5.37872Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.875 8.875L11.5 11.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7 14L5.375 12.375"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14 7L12.375 5.375"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconRuler;
