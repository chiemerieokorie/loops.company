import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconOptAlt: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="opt-alt, option alt, key">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M17.7711 5.5C16.9516 5.5 16.197 5.94555 15.8011 6.66308L9.51228 18.0615C8.85249 19.2574 7.59468 20 6.22886 20H3.75C3.33579 20 3 19.6642 3 19.25C3 18.8358 3.33579 18.5 3.75 18.5H6.22886C7.04835 18.5 7.80304 18.0545 8.19891 17.3369L14.4877 5.93846C15.1475 4.74258 16.4053 4 17.7711 4H20.25C20.6642 4 21 4.33579 21 4.75C21 5.16421 20.6642 5.5 20.25 5.5H17.7711ZM15 19.25C15 18.8358 15.3358 18.5 15.75 18.5H20.25C20.6642 18.5 21 18.8358 21 19.25C21 19.6642 20.6642 20 20.25 20H15.75C15.3358 20 15 19.6642 15 19.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 19.25H6.22886C7.32152 19.25 8.32776 18.6559 8.8556 17.6992L15.1444 6.30077C15.6722 5.34407 16.6785 4.75 17.7711 4.75H20.25M15.75 19.25H20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconOptAlt;
