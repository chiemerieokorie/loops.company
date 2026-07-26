import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconChevronDoubleLeft: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="chevron-double-left">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M10.5301 7.46967C10.823 7.76256 10.823 8.23744 10.5301 8.53033L7.59076 11.4697C7.29787 11.7626 7.29787 12.2374 7.59076 12.5303L10.5301 15.4697C10.823 15.7626 10.823 16.2374 10.5301 16.5303C10.2372 16.8232 9.76234 16.8232 9.46944 16.5303L6.5301 13.591C5.65142 12.7123 5.65143 11.2877 6.5301 10.409L9.46944 7.46967C9.76234 7.17678 10.2372 7.17678 10.5301 7.46967ZM17.5301 7.46967C17.823 7.76256 17.823 8.23744 17.5301 8.53033L14.5908 11.4697C14.2979 11.7626 14.2979 12.2374 14.5908 12.5303L17.5301 15.4697C17.823 15.7626 17.823 16.2374 17.5301 16.5303C17.2372 16.8232 16.7623 16.8232 16.4694 16.5303L13.5301 13.591C12.6514 12.7123 12.6514 11.2877 13.5301 10.409L16.4694 7.46967C16.7623 7.17678 17.2372 7.17678 17.5301 7.46967Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M9.99977 8L7.06043 10.9393C6.47465 11.5251 6.47465 12.4749 7.06043 13.0607L9.99977 16"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.9998 8L14.0604 10.9393C13.4746 11.5251 13.4746 12.4749 14.0604 13.0607L16.9998 16"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconChevronDoubleLeft;
