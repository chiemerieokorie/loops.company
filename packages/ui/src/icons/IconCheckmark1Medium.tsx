import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCheckmark1Medium: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="checkmark-1-medium">
		{variant === "filled" ? (
			<>
				<path
					d="M17.1905 6.41296C17.5146 5.96596 18.1399 5.8664 18.587 6.1903C19.034 6.51435 19.1336 7.13962 18.8097 7.58679L10.8419 18.5868C10.6726 18.8204 10.4105 18.9697 10.1232 18.996C9.83575 19.0221 9.55073 18.9227 9.34192 18.7235L5.30969 14.8729C4.91027 14.4915 4.89509 13.8583 5.27649 13.4589C5.65786 13.0595 6.29111 13.0453 6.69055 13.4266L9.89367 16.4852L17.1905 6.41296Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M6 14.15L10.0321 18L18 7"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCheckmark1Medium;
