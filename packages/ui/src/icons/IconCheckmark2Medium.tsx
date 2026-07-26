import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCheckmark2Medium: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="checkmark-2-medium">
		{variant === "filled" ? (
			<>
				<path
					d="M18.2529 6.33498C18.6202 5.92271 19.2526 5.88585 19.665 6.25295C20.0772 6.62024 20.1141 7.25268 19.747 7.66506L9.94623 18.6651C9.76422 18.8693 9.50676 18.9899 9.23334 18.999C8.95987 19.0082 8.69419 18.9056 8.49896 18.7139L4.29877 14.5889C3.90477 14.2019 3.89909 13.5679 4.28607 13.1738C4.67307 12.7798 5.30709 12.7742 5.70111 13.1612L9.15131 16.5498L18.2529 6.33498Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M5 13.875L9.2 18L19 7"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCheckmark2Medium;
