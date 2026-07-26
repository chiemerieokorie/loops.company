import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconConnectors2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="connectors-2, connection, apps">
		{variant === "filled" ? (
			<>
				<path
					d="M17 3C19.2091 3 21 4.79086 21 7C21 8.95272 19.6005 10.5776 17.75 10.9287V14C17.75 16.0711 16.0711 17.75 14 17.75H10.9287C10.5776 19.6005 8.95272 21 7 21C4.79086 21 3 19.2091 3 17C3 14.7909 4.79086 13 7 13C8.95272 13 10.5776 14.3995 10.9287 16.25H14C15.2426 16.25 16.25 15.2426 16.25 14V10.9287C14.3995 10.5776 13 8.95272 13 7C13 4.79086 14.7909 3 17 3Z"
					fill="currentColor"
				/>
				<path
					d="M7 3C9.20914 3 11 4.79086 11 7C11 9.20914 9.20914 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 17C3.75 18.7949 5.20507 20.25 7 20.25C8.79493 20.25 10.25 18.7949 10.25 17C10.25 15.2051 8.79493 13.75 7 13.75C5.20507 13.75 3.75 15.2051 3.75 17Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.75 7C13.75 8.79493 15.2051 10.25 17 10.25C18.7949 10.25 20.25 8.79493 20.25 7C20.25 5.20507 18.7949 3.75 17 3.75C15.2051 3.75 13.75 5.20507 13.75 7Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 7C3.75 8.79493 5.20507 10.25 7 10.25C8.79493 10.25 10.25 8.79493 10.25 7C10.25 5.20507 8.79493 3.75 7 3.75C5.20507 3.75 3.75 5.20507 3.75 7Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17 10.5V14C17 15.6569 15.6569 17 14 17H10.5"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconConnectors2;
