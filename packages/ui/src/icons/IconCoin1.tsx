import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCoin1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="coin-1, credits, money">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M8.59709 3.82273C5.71609 4.81863 3.5 8.01813 3.5 12C3.5 15.9819 5.71609 19.1814 8.5971 20.1773C6.3984 18.3447 5 15.3215 5 12C5 8.67854 6.39839 5.65527 8.59709 3.82273ZM13.5 22H10.5C5.68675 22 2 17.3931 2 12C2 6.60693 5.68675 2 10.5 2H13.5C18.3132 2 22 6.60693 22 12C22 17.3931 18.3132 22 13.5 22Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M13.5 21.25C17.7802 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.7802 2.75 13.5 2.75M13.5 21.25C9.21979 21.25 5.75 17.1086 5.75 12C5.75 6.89137 9.21979 2.75 13.5 2.75M13.5 21.25H10.5C6.21979 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.21979 2.75 10.5 2.75H13.5"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCoin1;
