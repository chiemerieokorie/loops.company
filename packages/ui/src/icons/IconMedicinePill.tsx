import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconMedicinePill: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="medicine-pill">
		{variant === "filled" ? (
			<>
				<path
					d="M9.71461 3.59312C11.8388 1.46896 15.2827 1.46896 17.4069 3.59312C18.6821 4.86833 19.1915 6.61842 18.9359 8.27334C17.8949 7.77752 16.7298 7.5 15.5 7.5C13.5609 7.5 11.783 8.18988 10.3982 9.33758L7.1842 6.12353L9.71461 3.59312Z"
					fill="currentColor"
				/>
				<path
					d="M7.5 15.5C7.5 13.5609 8.18988 11.783 9.33758 10.3982L6.12353 7.1842L3.59312 9.71461C1.46896 11.8388 1.46896 15.2827 3.59312 17.4069C4.86833 18.6821 6.61842 19.1915 8.27334 18.9359C7.77752 17.8949 7.5 16.7298 7.5 15.5Z"
					fill="currentColor"
				/>
				<path
					d="M9 15.5C9 12.5687 10.9403 10.0906 13.6067 9.28006L15.917 21.9868C15.7791 21.9956 15.6401 22 15.5 22C11.9101 22 9 19.0899 9 15.5Z"
					fill="currentColor"
				/>
				<path
					d="M22 15.5C22 18.4314 20.0595 20.9095 17.3931 21.72L15.0827 9.01318C15.2207 9.00444 15.3598 9 15.5 9C19.0899 9 22 11.9101 22 15.5Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M17.4968 9.98987C18.677 8.17259 18.4702 5.71715 16.8765 4.12345C15.0453 2.29218 12.0762 2.29218 10.2449 4.12345L4.12345 10.2449C2.29218 12.0762 2.29218 15.0453 4.12345 16.8765C5.71715 18.4702 8.17259 18.677 9.98987 17.4968"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.5 7.5L11 11"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="15.5"
					cy="15.5"
					r="5.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.5 21L14.5 10"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconMedicinePill;
