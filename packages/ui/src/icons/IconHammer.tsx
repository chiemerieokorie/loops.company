import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconHammer: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="hammer, craft, build">
		{variant === "filled" ? (
			<>
				<path
					d="M1.73717 12.7374C1.05375 12.054 1.05376 10.946 1.73717 10.2626L9.48717 2.51256C9.81536 2.18437 10.2605 2 10.7246 2H14.2749C14.739 2 15.1841 2.18437 15.5123 2.51256L16.2623 3.26256C16.9457 3.94598 16.9457 5.05402 16.2623 5.73744L6.73717 15.2626C6.05376 15.946 4.94572 15.946 4.2623 15.2626L1.73717 12.7374Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M20.2497 20.25C19.2832 21.2165 17.7162 21.2165 16.7497 20.25L10.2497 13.75L13.7497 10.25L20.2497 16.75C21.2162 17.7165 21.2162 19.2835 20.2497 20.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M6.60333 15.0366C6.21233 15.4299 5.57595 15.4299 5.18496 15.0366L2.20097 12.035C1.81322 11.645 1.81322 11.015 2.20097 10.625L9.73649 3.04498C9.9242 2.85617 10.1794 2.75 10.4457 2.75L14.2664 2.75C14.5326 2.75 14.7879 2.85617 14.9756 3.04498L16.0492 4.12495C16.437 4.51499 16.437 5.14495 16.0492 5.53499L6.60333 15.0366Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.5 12.5L16.25 19.25C17.0784 20.0784 18.4216 20.0784 19.25 19.25C20.0784 18.4216 20.0784 17.0784 19.25 16.25L12.5 9.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconHammer;
