import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCoinPesos: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="coin-pesos, currency, money">
		{variant === "filled" ? (
			<>
				<path
					d="M14.1348 11.25C13.8161 12.2642 12.8693 13 11.75 13H10.5V11.25H14.1348Z"
					fill="currentColor"
				/>
				<path
					d="M11.75 8C12.8693 8 13.8161 8.73584 14.1348 9.75H10.5V8H11.75Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM9.75 6.5C9.36183 6.5 9.04253 6.79488 9.00391 7.17285L9 7.25V9.75H7.75C7.33579 9.75 7 10.0858 7 10.5C7 10.9142 7.33579 11.25 7.75 11.25H9V16.75C9 17.1642 9.33579 17.5 9.75 17.5C10.1642 17.5 10.5 17.1642 10.5 16.75V14.5H11.75C13.7027 14.5 15.3276 13.1005 15.6787 11.25H16.25C16.6642 11.25 17 10.9142 17 10.5C17 10.0858 16.6642 9.75 16.25 9.75H15.6787C15.3276 7.89945 13.7027 6.5 11.75 6.5H9.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M7.75 10.5L16.25 10.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.75 13.75H11.75C13.5449 13.75 15 12.2949 15 10.5C15 8.70507 13.5449 7.25 11.75 7.25H9.75V13.75ZM9.75 13.75V16.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCoinPesos;
