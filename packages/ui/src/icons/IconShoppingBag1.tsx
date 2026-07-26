import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconShoppingBag1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="shopping-bag-1">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3.83087 6.52314C3.95083 4.54381 5.59104 3 7.57401 3H16.4266C18.4096 3 20.0498 4.54381 20.1698 6.52314L20.8061 17.0231C20.9368 19.1795 19.2233 21 17.063 21H6.93764C4.77736 21 3.06382 19.1795 3.19451 17.0231L3.83087 6.52314ZM9.75032 8C9.75032 7.58579 9.41453 7.25 9.00032 7.25C8.58611 7.25 8.25032 7.58579 8.25032 8C8.25032 10.0711 9.92925 11.75 12.0003 11.75C14.0714 11.75 15.7503 10.0711 15.7503 8C15.7503 7.58579 15.4145 7.25 15.0003 7.25C14.5861 7.25 14.2503 7.58579 14.2503 8C14.2503 9.24264 13.243 10.25 12.0003 10.25C10.7577 10.25 9.75032 9.24264 9.75032 8Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M15.0003 8C15.0003 9.65685 13.6571 11 12.0003 11C10.3434 11 9.00029 9.65685 9.00029 8M4.57947 6.56851L3.94311 17.0685C3.83856 18.7936 5.20939 20.25 6.93761 20.25H17.063C18.7912 20.25 20.162 18.7936 20.0575 17.0685L19.4211 6.56851C19.3251 4.98505 18.013 3.75 16.4266 3.75H7.57398C5.9876 3.75 4.67544 4.98505 4.57947 6.56851Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconShoppingBag1;
