import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSquareBehindSquare6: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="square-behind-square-6, layers, copy 6, pages"
	>
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M7 6.75C7 4.67893 8.67893 3 10.75 3H17.25C19.3211 3 21 4.67893 21 6.75V13.26C21 15.3311 19.3211 17.01 17.25 17.01H17V17.25C17 19.3211 15.3211 21 13.25 21H6.75C4.67893 21 3 19.3211 3 17.25V10.75C3 8.67893 4.67893 7 6.75 7H7V6.75ZM17 15.51V10.75C17 8.67893 15.3211 7 13.25 7H8.5V6.75C8.5 5.50736 9.50736 4.5 10.75 4.5H17.25C18.4926 4.5 19.5 5.50736 19.5 6.75V13.26C19.5 14.5026 18.4926 15.51 17.25 15.51H17Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M7.75 7.75V6.75C7.75 5.09315 9.09315 3.75 10.75 3.75H17.25C18.9069 3.75 20.25 5.09315 20.25 6.75V13.26C20.25 14.9169 18.9069 16.26 17.25 16.26H16.25M3.75 10.75V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H13.25C14.9069 20.25 16.25 18.9069 16.25 17.25V10.75C16.25 9.09315 14.9069 7.75 13.25 7.75H6.75C5.09315 7.75 3.75 9.09315 3.75 10.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSquareBehindSquare6;
