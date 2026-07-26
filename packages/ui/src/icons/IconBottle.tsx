import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBottle: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="bottle, wine, campaign">
		{variant === "filled" ? (
			<>
				<path
					d="M9.375 1C8.96079 1 8.625 1.33579 8.625 1.75C8.625 2.12162 8.89529 2.43012 9.25 2.48963V5.93651C9.25 6.56448 8.98757 7.16387 8.52613 7.58981L7.20645 8.80798C6.43739 9.51788 6 10.5169 6 11.5635V19.25C6 21.3211 7.67893 23 9.75 23H14.25C16.3211 23 18 21.3211 18 19.25V11.5635C18 10.5169 17.5626 9.51788 16.7936 8.80798L15.4739 7.58981C15.0124 7.16387 14.75 6.56448 14.75 5.93651V2.48963C15.1047 2.43012 15.375 2.12162 15.375 1.75C15.375 1.33579 15.0392 1 14.625 1H9.375Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M10 5.93651V3.75C10 2.64543 10.8954 1.75 12 1.75C13.1046 1.75 14 2.64543 14 3.75V5.93651C14 6.7738 14.3499 7.573 14.9652 8.14092L16.2848 9.35908C16.9001 9.927 17.25 10.7262 17.25 11.5635V19.25C17.25 20.9069 15.9069 22.25 14.25 22.25H9.75C8.09315 22.25 6.75 20.9069 6.75 19.25V11.5635C6.75 10.7262 7.09991 9.927 7.71516 9.35908L9.03484 8.14092C9.65009 7.573 10 6.7738 10 5.93651Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10 1.75H9.375"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.625 1.75H14"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBottle;
