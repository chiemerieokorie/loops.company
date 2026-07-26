import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPuzzle: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="puzzle, plugin">
		{variant === "filled" ? (
			<>
				<path
					d="M9.5 4V3.5C9.5 2.11929 10.6193 1 12 1C13.3807 1 14.5 2.11929 14.5 3.5V4H19.25C20.2165 4 21 4.7835 21 5.75V9C21 9.27614 20.7761 9.5 20.5 9.5C19.1193 9.5 18 10.6193 18 12C18 13.3807 19.1193 14.5 20.5 14.5C20.7761 14.5 21 14.7239 21 15V18.25C21 19.2165 20.2165 20 19.25 20H4.75C3.7835 20 3 19.2165 3 18.25V5.75C3 4.7835 3.7835 4 4.75 4H9.5Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 7.75C3.75 6.09315 5.09315 4.75 6.75 4.75H9.25V4.5C9.25 2.98122 10.4812 1.75 12 1.75C13.5188 1.75 14.75 2.98122 14.75 4.5V4.75H17.25C18.9069 4.75 20.25 6.09315 20.25 7.75V9.25H20C18.4812 9.25 17.25 10.4812 17.25 12C17.25 13.5188 18.4812 14.75 20 14.75H20.25V16.25C20.25 17.9069 18.9069 19.25 17.25 19.25H6.75C5.09315 19.25 3.75 17.9069 3.75 16.25V7.75Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPuzzle;
