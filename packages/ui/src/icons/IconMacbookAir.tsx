import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconMacbookAir: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="macbook-air">
		{variant === "filled" ? (
			<>
				<path
					d="M1.75 17C1.33579 17 1 17.3358 1 17.75V18.25C1 19.2165 1.7835 20 2.75 20H21.25C22.2165 20 23 19.2165 23 18.25V17.75C23 17.3358 22.6642 17 22.25 17H15.075C14.956 17 14.8387 17.0283 14.7328 17.0826L14.08 17.4174C13.9741 17.4717 13.8568 17.5 13.7378 17.5H10.3318C10.2225 17.5 10.1145 17.4761 10.0155 17.43L9.2413 17.07C9.14222 17.0239 9.03427 17 8.925 17H1.75Z"
					fill="currentColor"
				/>
				<path
					d="M5.75 4C3.67893 4 2 5.67893 2 7.75V15.25C2 15.6642 2.33579 16 2.75 16H21.25C21.6642 16 22 15.6642 22 15.25V7.75C22 5.67893 20.3211 4 18.25 4H5.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M21.25 13.75V7.75C21.25 6.09315 19.9069 4.75 18.25 4.75H5.75C4.09315 4.75 2.75 6.09315 2.75 7.75V13.75M1.75 16.75V18.25C1.75 18.8023 2.19772 19.25 2.75 19.25H21.25C21.8023 19.25 22.25 18.8023 22.25 18.25V16.75H15.3165C15.1578 16.75 15.0014 16.7878 14.8601 16.8602L14.3149 17.1398C14.1736 17.2122 14.0172 17.25 13.8585 17.25H10.2212C10.0755 17.25 9.93155 17.2182 9.79945 17.1567L9.12555 16.8433C8.99345 16.7818 8.84951 16.75 8.70382 16.75H1.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconMacbookAir;
