import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconUntrash: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="untrash">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M8.36453 3.26375C9.13161 1.5055 11.0249 0.432585 12.9973 0.780351C14.9693 1.12814 16.3803 2.78332 16.5003 4.69734L21.0501 5.50008L21.1253 5.51766C21.4908 5.62134 21.7259 5.98697 21.6585 6.36922C21.5911 6.75136 21.2453 7.01478 20.8665 6.98738L20.7893 6.97762L19.9778 6.83406L19.1585 18.5128C19.0205 20.4769 17.3862 22 15.4173 22.0001H8.58231C6.61335 22 4.98009 20.4769 4.84207 18.5128L4.05496 7.30281C4.0245 6.86898 4.36811 6.50008 4.80301 6.50008H18.0813L3.55496 3.93855C3.14726 3.86645 2.87466 3.4772 2.94656 3.06941C3.01867 2.66172 3.40792 2.3901 3.81571 2.46199L8.36453 3.26375ZM12.5305 10.2198C12.256 9.94524 11.8212 9.92784 11.5266 10.168L11.47 10.2198L8.72 12.9698C8.42711 13.2627 8.42711 13.7375 8.72 14.0304C9.01291 14.323 9.48773 14.3232 9.78055 14.0304L11.2503 12.5606V17.2501C11.2504 17.6642 11.5861 18.0001 12.0003 18.0001C12.4143 17.9999 12.7502 17.6641 12.7503 17.2501V12.5606L14.22 14.0304L14.2766 14.0821C14.5712 14.3222 15.006 14.3049 15.2805 14.0304C15.555 13.7558 15.5724 13.321 15.3323 13.0264L15.2805 12.9698L12.5305 10.2198ZM12.7366 2.25789C11.5889 2.05563 10.4822 2.59752 9.91043 3.53621L14.9554 4.42488C14.7388 3.34761 13.884 2.46028 12.7366 2.25789Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 6.5L5.58982 18.4601C5.70016 20.0316 7.00714 21.25 8.58245 21.25H15.4175C16.9929 21.25 18.2998 20.0316 18.4102 18.4601L19.25 6.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 16.25V10.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.25 12.5L12 9.75L14.75 12.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.909 3.95182C9.41358 2.27764 11.1023 1.20812 12.8669 1.51927C14.6316 1.83042 15.8527 3.41302 15.7542 5.15882"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.68555 3.2002L20.9197 6.23904"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconUntrash;
