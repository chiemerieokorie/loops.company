import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconWeight: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="weight, scale">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M17.25 3C19.3211 3 21 4.67893 21 6.75V17.25C21 19.3211 19.3211 21 17.25 21H6.75C4.67893 21 3 19.3211 3 17.25V6.75C3 4.67893 4.67893 3 6.75 3H17.25ZM12 7C9.99896 7 8.14078 7.6122 6.60254 8.65918C6.26052 8.8921 6.20946 9.36621 6.46777 9.68945L8.53125 12.2686C8.79015 12.592 9.26044 12.6383 9.62012 12.4326C10.3217 12.0315 11.134 11.8018 12 11.8018C12.866 11.8018 13.6783 12.0315 14.3799 12.4326C14.7396 12.6383 15.2098 12.592 15.4688 12.2686L17.5322 9.68945C17.7905 9.36621 17.7395 8.8921 17.3975 8.65918C15.8592 7.6122 14.001 7 12 7Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M17.25 3.75H6.75C5.09315 3.75 3.75 5.09315 3.75 6.75V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H17.25C18.9069 20.25 20.25 18.9069 20.25 17.25V6.75C20.25 5.09315 18.9069 3.75 17.25 3.75Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.375 12.1225L6.75 8.84129C8.18836 7.68911 10.0137 7 12 7C13.9863 7 15.8116 7.68911 17.25 8.84129L14.625 12.1225C13.9058 11.5465 12.9931 11.2019 12 11.2019C11.0069 11.2019 10.0942 11.5465 9.375 12.1225Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconWeight;
