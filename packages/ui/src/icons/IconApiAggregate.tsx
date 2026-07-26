import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconApiAggregate: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="api-aggregate">
		{variant === "filled" ? (
			<>
				<path
					d="M12 2.25C9.51472 2.25 7.5 4.26472 7.5 6.75C7.5 9.23528 9.51472 11.25 12 11.25C14.4853 11.25 16.5 9.23528 16.5 6.75C16.5 4.26472 14.4853 2.25 12 2.25Z"
					fill="currentColor"
				/>
				<path
					d="M6.5 11.75C4.01472 11.75 2 13.7647 2 16.25C2 18.7353 4.01472 20.75 6.5 20.75C8.98528 20.75 11 18.7353 11 16.25C11 13.7647 8.98528 11.75 6.5 11.75Z"
					fill="currentColor"
				/>
				<path
					d="M17.5 11.75C15.0147 11.75 13 13.7647 13 16.25C13 18.7353 15.0147 20.75 17.5 20.75C19.9853 20.75 22 18.7353 22 16.25C22 13.7647 19.9853 11.75 17.5 11.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M15.75 6.75C15.75 8.82107 14.0711 10.5 12 10.5C9.92893 10.5 8.25 8.82107 8.25 6.75C8.25 4.67893 9.92893 3 12 3C14.0711 3 15.75 4.67893 15.75 6.75Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M10.25 16.25C10.25 18.3211 8.57107 20 6.5 20C4.42893 20 2.75 18.3211 2.75 16.25C2.75 14.1789 4.42893 12.5 6.5 12.5C8.57107 12.5 10.25 14.1789 10.25 16.25Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M21.25 16.25C21.25 18.3211 19.5711 20 17.5 20C15.4289 20 13.75 18.3211 13.75 16.25C13.75 14.1789 15.4289 12.5 17.5 12.5C19.5711 12.5 21.25 14.1789 21.25 16.25Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconApiAggregate;
