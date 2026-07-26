import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSortArrowUpDown: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="sort-arrow-up-down">
		{variant === "filled" ? (
			<>
				<path
					d="M7 3C4.79086 3 3 4.79086 3 7C3 9.20914 4.79086 11 7 11C9.20914 11 11 9.20914 11 7C11 4.79086 9.20914 3 7 3Z"
					fill="currentColor"
				/>
				<path
					d="M18.5496 3.48966C18.4077 3.33684 18.2086 3.25 18 3.25C17.7914 3.25 17.5923 3.33684 17.4504 3.48966L14.2004 6.98966C13.9186 7.29319 13.9361 7.76774 14.2397 8.0496C14.5432 8.33145 15.0177 8.31387 15.2996 8.01034L17.25 5.9099V18.0901L15.2996 15.9897C15.0177 15.6861 14.5432 15.6686 14.2397 15.9504C13.9361 16.2323 13.9186 16.7068 14.2004 17.0103L17.4504 20.5103C17.5923 20.6632 17.7914 20.75 18 20.75C18.2086 20.75 18.4077 20.6632 18.5496 20.5103L21.7996 17.0103C22.0814 16.7068 22.0639 16.2323 21.7603 15.9504C21.4568 15.6686 20.9823 15.6861 20.7004 15.9897L18.75 18.0901V5.9099L20.7004 8.01034C20.9823 8.31387 21.4568 8.33145 21.7603 8.0496C22.0639 7.76774 22.0814 7.29319 21.7996 6.98966L18.5496 3.48966Z"
					fill="currentColor"
				/>
				<path
					d="M7 13C4.79086 13 3 14.7909 3 17C3 19.2091 4.79086 21 7 21C9.20914 21 11 19.2091 11 17C11 14.7909 9.20914 13 7 13Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 7C3.75 5.20507 5.20507 3.75 7 3.75C8.79493 3.75 10.25 5.20507 10.25 7C10.25 8.79493 8.79493 10.25 7 10.25C5.20507 10.25 3.75 8.79493 3.75 7Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 17C3.75 15.2051 5.20507 13.75 7 13.75C8.79493 13.75 10.25 15.2051 10.25 17C10.25 18.7949 8.79493 20.25 7 20.25C5.20507 20.25 3.75 18.7949 3.75 17Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.75 7.5L18 4L21.25 7.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M21.25 16.5L18 20L14.75 16.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18 4.5V19.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSortArrowUpDown;
