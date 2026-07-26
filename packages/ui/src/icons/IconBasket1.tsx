import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBasket1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="basket-1, cart, shopping">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M1.75 2C1.33579 2 1 2.33579 1 2.75C1 3.16421 1.33579 3.5 1.75 3.5H2.27029C2.6278 3.5 2.93562 3.75234 3.00573 4.10291L4.78223 12.9854C5.1328 14.7383 6.67186 16 8.45941 16H17.0658C18.8391 16 20.3701 14.7578 20.7354 13.0225L21.98 7.11052C22.209 6.02281 21.3791 5 20.2676 5H4.71485L4.4766 3.80874C4.26626 2.75703 3.34283 2 2.27029 2H1.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					d="M8 17C6.89543 17 6 17.8954 6 19C6 20.1046 6.89543 21 8 21C9.10457 21 10 20.1046 10 19C10 17.8954 9.10457 17 8 17Z"
					fill="currentColor"
				/>
				<path
					d="M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M1.75 2.75H2.27029C2.98532 2.75 3.60094 3.25469 3.74117 3.95583L5.51767 12.8384C5.79812 14.2406 7.02937 15.25 8.45941 15.25H17.0658C18.4845 15.25 19.7092 14.2563 20.0015 12.868L21.2461 6.95601C21.377 6.33446 20.9027 5.75 20.2676 5.75H4.5M9.25 19C9.25 19.6904 8.69036 20.25 8 20.25C7.30964 20.25 6.75 19.6904 6.75 19C6.75 18.3096 7.30964 17.75 8 17.75C8.69036 17.75 9.25 18.3096 9.25 19ZM18.25 19C18.25 19.6904 17.6904 20.25 17 20.25C16.3096 20.25 15.75 19.6904 15.75 19C15.75 18.3096 16.3096 17.75 17 17.75C17.6904 17.75 18.25 18.3096 18.25 19Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBasket1;
