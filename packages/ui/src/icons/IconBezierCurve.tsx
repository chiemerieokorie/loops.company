import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBezierCurve: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="bezier-curve, bezier, vector,svg">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12 4C10.6021 4 9.42755 4.95608 9.09451 6.25H4.85462C4.55793 5.51704 3.83934 5 3 5C1.89543 5 1 5.89543 1 7C1 8.10457 1.89543 9 3 9C3.83934 9 4.55793 8.48296 4.85462 7.75H6.74927C4.79002 9.22186 3.4685 11.4972 3.27467 14.0883C1.96825 14.4127 1 15.5933 1 17C1 18.6569 2.34315 20 4 20C5.65685 20 7 18.6569 7 17C7 15.6124 6.05795 14.4449 4.77852 14.102C5.01988 11.3752 6.77194 9.08035 9.1937 8.06281C9.62274 9.19507 10.7174 10 12 10C13.2826 10 14.3773 9.19507 14.8063 8.0628C17.2281 9.08035 18.9801 11.3752 19.2215 14.102C17.9421 14.4449 17 15.6124 17 17C17 18.6569 18.3431 20 20 20C21.6569 20 23 18.6569 23 17C23 15.5933 22.0317 14.4127 20.7253 14.0883C20.5315 11.4972 19.21 9.22186 17.2507 7.75H19.1454C19.4421 8.48296 20.1607 9 21 9C22.1046 9 23 8.10457 23 7C23 5.89543 22.1046 5 21 5C20.1607 5 19.4421 5.51704 19.1454 6.25H14.9055C14.5725 4.95608 13.3979 4 12 4Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M17.75 17C17.75 15.7574 18.7574 14.75 20 14.75C21.2426 14.75 22.25 15.7574 22.25 17C22.25 18.2426 21.2426 19.25 20 19.25C18.7574 19.25 17.75 18.2426 17.75 17Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M1.75 17C1.75 15.7574 2.75736 14.75 4 14.75C5.24264 14.75 6.25 15.7574 6.25 17C6.25 18.2426 5.24264 19.25 4 19.25C2.75736 19.25 1.75 18.2426 1.75 17Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.25 7C4.25 7.69036 3.69036 8.25 3 8.25C2.30964 8.25 1.75 7.69036 1.75 7C1.75 6.30964 2.30964 5.75 3 5.75C3.69036 5.75 4.25 6.30964 4.25 7Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M22.25 7C22.25 7.69036 21.6904 8.25 21 8.25C20.3096 8.25 19.75 7.69036 19.75 7C19.75 6.30964 20.3096 5.75 21 5.75C21.6904 5.75 22.25 6.30964 22.25 7Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.75 7C9.75 8.24264 10.7574 9.25 12 9.25C13.2426 9.25 14.25 8.24264 14.25 7C14.25 5.75736 13.2426 4.75 12 4.75C10.7574 4.75 9.75 5.75736 9.75 7Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3 7H9.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.5 7H21"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.00781 14.3889C4.15819 11.0017 6.41484 8.16217 9.49982 7.14819"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.5 7.14819C17.585 8.16217 19.8416 11.0017 19.992 14.3889"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3 7.5V6.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M21 7.5V6.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBezierCurve;
