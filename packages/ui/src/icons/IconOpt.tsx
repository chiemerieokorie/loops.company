import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconOpt: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="opt, option, key">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3 4.75C3 4.33579 3.33579 4 3.75 4H6.22886C7.59468 4 8.85249 4.74258 9.51228 5.93846L15.8011 17.3369C16.197 18.0545 16.9516 18.5 17.7711 18.5H20.25C20.6642 18.5 21 18.8358 21 19.25C21 19.6642 20.6642 20 20.25 20H17.7711C16.4053 20 15.1475 19.2574 14.4877 18.0615L8.19891 6.66308C7.80304 5.94555 7.04835 5.5 6.22886 5.5H3.75C3.33579 5.5 3 5.16421 3 4.75ZM15 4.75C15 4.33579 15.3358 4 15.75 4H20.25C20.6642 4 21 4.33579 21 4.75C21 5.16421 20.6642 5.5 20.25 5.5H15.75C15.3358 5.5 15 5.16421 15 4.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 4.75H6.22886C7.32152 4.75 8.32776 5.34407 8.8556 6.30077L15.1444 17.6992C15.6722 18.6559 16.6785 19.25 17.7711 19.25H20.25M15.75 4.75H20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconOpt;
