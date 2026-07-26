import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconChevronDoubleRight: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="chevron-double-right">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M6.46967 7.46967C6.76256 7.17678 7.23744 7.17678 7.53033 7.46967L10.4697 10.409C11.3483 11.2877 11.3484 12.7123 10.4697 13.591L7.53033 16.5303C7.23744 16.8232 6.76256 16.8232 6.46967 16.5303C6.17678 16.2374 6.17678 15.7626 6.46967 15.4697L9.40901 12.5303C9.7019 12.2374 9.7019 11.7626 9.40901 11.4697L6.46967 8.53033C6.17678 8.23744 6.17678 7.76256 6.46967 7.46967ZM13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L17.4697 10.409C18.3483 11.2877 18.3484 12.7123 17.4697 13.591L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.409 12.5303C16.7019 12.2374 16.7019 11.7626 16.409 11.4697L13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M14 16L16.9393 13.0607C17.5251 12.4749 17.5251 11.5251 16.9393 10.9393L14 8"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7 16L9.93934 13.0607C10.5251 12.4749 10.5251 11.5251 9.93934 10.9393L7 8"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconChevronDoubleRight;
