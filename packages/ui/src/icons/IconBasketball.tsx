import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBasketball: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="basketball, nba">
		{variant === "filled" ? (
			<>
				<path
					d="M11.2539 2.02734C8.94828 2.1983 6.86024 3.15102 5.25391 4.62138C7.0788 6.2918 8.28199 8.63031 8.4762 11.2496H11.2539V2.02734Z"
					fill="currentColor"
				/>
				<path
					d="M6.97091 11.2497C6.77961 9.06143 5.75917 7.11088 4.22556 5.71399C2.98314 7.24947 2.18617 9.16022 2.03125 11.2497H6.97091Z"
					fill="currentColor"
				/>
				<path
					d="M2.03125 12.7496H6.97091C6.77961 14.9379 5.75917 16.8884 4.22556 18.2853C2.98314 16.7498 2.18617 14.8391 2.03125 12.7496Z"
					fill="currentColor"
				/>
				<path
					d="M8.4762 12.7496H11.2539V21.9719C8.94828 21.801 6.86024 20.8483 5.25391 19.3779C7.0788 17.7075 8.28199 15.369 8.4762 12.7496Z"
					fill="currentColor"
				/>
				<path
					d="M12.7539 21.9719C15.0595 21.801 17.1476 20.8483 18.7539 19.3779C16.929 17.7075 15.7258 15.369 15.5316 12.7496H12.7539V21.9719Z"
					fill="currentColor"
				/>
				<path
					d="M17.0352 12.7496C17.2265 14.9379 18.2469 16.8884 19.7805 18.2853C21.0229 16.7498 21.8199 14.8391 21.9748 12.7496H17.0352Z"
					fill="currentColor"
				/>
				<path
					d="M21.9748 11.2497H17.0352C17.2265 9.06143 18.2469 7.11088 19.7805 5.71399C21.0229 7.24947 21.8199 9.16021 21.9748 11.2497Z"
					fill="currentColor"
				/>
				<path
					d="M15.5316 11.2496H12.7539V2.02734C15.0595 2.1983 17.1476 3.15102 18.7539 4.62138C16.929 6.29181 15.7258 8.63032 15.5316 11.2496Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path d="M2.75 12H21.25" stroke="currentColor" strokeWidth="1.5" />
				<path
					d="M18.4597 6C17.0818 7.61524 16.25 9.71048 16.25 12C16.25 14.2895 17.0818 16.3848 18.4597 18"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M5.53906 18C6.91696 16.3848 7.74876 14.2895 7.74876 12C7.74876 9.71048 6.91696 7.61524 5.53906 6"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path d="M12 3V21" stroke="currentColor" strokeWidth="1.5" />
			</>
		)}
	</CentralIconBase>
);

export default IconBasketball;
