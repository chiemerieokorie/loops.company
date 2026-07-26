import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconJump: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="jump, skip">
		{variant === "filled" ? (
			<>
				<path
					d="M21.2496 4C21.6639 4 21.9996 4.33579 21.9996 4.75V11C21.9996 11.4142 21.6639 11.75 21.2496 11.75C20.8355 11.7499 20.4996 11.4142 20.4996 11V6.50977C16.4349 10.1894 13.4397 13.7855 12.8121 18.5H16.2496C16.6639 18.5 16.9996 18.8358 16.9996 19.25C16.9996 19.6642 16.6639 20 16.2496 20H7.74965C7.3355 19.9999 6.99965 19.6642 6.99965 19.25C6.99965 18.8358 7.3355 18.5001 7.74965 18.5H11.2389C11.0184 12.9589 6.39809 8.20591 1.68227 7.78125C1.26985 7.74398 0.965444 7.37925 1.00258 6.9668C1.03978 6.55435 1.40458 6.25004 1.81703 6.28711C6.30607 6.6914 10.5659 10.3575 12.1237 15.0859C13.4826 11.4083 16.1931 8.39711 19.3805 5.5H14.9996C14.5855 5.49992 14.2496 5.16417 14.2496 4.75C14.2496 4.33583 14.5855 4.00008 14.9996 4H21.2496Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M7.75 19.25L16.25 19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15 4.75H21.25V11"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20.5 5.5C16 9.5 12.5 13.5 12 19"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11.9998 19.0002V18.9125C11.9998 12.8287 6.98889 7.50594 1.75 7.03418"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconJump;
