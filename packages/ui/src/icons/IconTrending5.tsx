import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconTrending5: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="trending-5, chart, analytics">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3.75 3C4.16421 3 4.5 3.33579 4.5 3.75V15.3456L7.60248 12.2431C8.60731 11.2383 10.2364 11.2383 11.2413 12.2431C11.6603 12.6621 12.3397 12.6621 12.7587 12.2431L14.5634 10.4384C15.9954 9.00644 18.3171 9.00644 19.7491 10.4384C20.042 10.7313 20.042 11.2062 19.7491 11.4991C19.4562 11.792 18.9813 11.792 18.6884 11.4991C17.8422 10.6529 16.4703 10.6529 15.6241 11.4991L13.8194 13.3038C12.8146 14.3086 11.1854 14.3086 10.1806 13.3038C9.76157 12.8847 9.08218 12.8847 8.66314 13.3038L4.50944 17.4575C4.61415 18.6029 5.57731 19.5 6.75 19.5H20.25C20.6642 19.5 21 19.8358 21 20.25C21 20.6642 20.6642 21 20.25 21H6.75C4.67893 21 3 19.3211 3 17.25V3.75C3 3.33579 3.33579 3 3.75 3Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M19.2188 10.9688V10.9688C18.0797 9.82966 16.2328 9.82966 15.0937 10.9688L13.2891 12.7734C12.5771 13.4854 11.4229 13.4854 10.7109 12.7734V12.7734C9.99901 12.0615 8.84474 12.0615 8.13281 12.7734L3.75 17.1562M3.75 3.75V17.1562M20.25 20.25H6.75C5.09315 20.25 3.75 18.9069 3.75 17.25V17.1562"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconTrending5;
