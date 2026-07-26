import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFeather2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="feather-2, writing">
		{variant === "filled" ? (
			<>
				<path
					d="M20.25 3C20.5123 3 20.7557 3.13698 20.8916 3.36133C21.0274 3.58583 21.0358 3.8652 20.9141 4.09766C20.2252 5.4127 19.4819 6.80261 18.4443 7.84961C17.6232 8.67815 16.6209 9.28896 15.3389 9.53125C15.6105 10.1442 15.7295 10.7773 15.707 11.4072C15.6711 12.4153 15.2759 13.3615 14.6631 14.1621C13.4458 15.7523 11.3085 16.8525 9 16.8525C7.81524 16.8525 6.66544 17.0636 5.83594 17.584C5.059 18.0715 4.5 18.8656 4.5 20.25C4.5 20.6642 4.16421 21 3.75 21C3.33579 21 3 20.6642 3 20.25V16.1025C3.00022 8.86409 8.88554 3.00014 16.1406 3H20.25Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 16.1029V20.25C3.75 16.9746 6.5 16.1029 9 16.1029C13.1643 16.1029 16.6578 12.1147 14.0757 8.89706C17.4661 8.89706 18.856 6.41115 20.25 3.75H16.1409C9.29758 3.75 3.75 9.2806 3.75 16.1029Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFeather2;
