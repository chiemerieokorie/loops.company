import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconVectorLogo: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="vector-logo,svg">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M1 12C1 10.735 1.78289 9.65296 2.89056 9.21182C4.08551 5.32513 7.71188 2.5 12 2.5C16.288 2.5 19.9144 5.32512 21.1094 9.21179C22.2171 9.6529 23 10.735 23 12C23 13.265 22.2171 14.3471 21.1094 14.7882C19.9144 18.6749 16.288 21.5 12 21.5C7.71188 21.5 4.08551 18.6749 2.89057 14.7882C1.78289 14.347 1 13.265 1 12ZM6.90549 11.25C6.61616 10.1259 5.69165 9.25674 4.53737 9.048C5.71577 6.0912 8.61286 4 12 4C15.3871 4 18.2842 6.09121 19.4626 9.04801C18.3083 9.25678 17.3838 10.1259 17.0945 11.25H6.90549ZM6.90549 12.75H17.0945C17.3838 13.8741 18.3083 14.7432 19.4626 14.952C18.2842 17.9088 15.3871 20 12 20C8.61286 20 5.71577 17.9088 4.53738 14.952C5.69166 14.7433 6.61616 13.8741 6.90549 12.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M6.25 12C6.25 13.2426 5.24264 14.25 4 14.25C2.75736 14.25 1.75 13.2426 1.75 12C1.75 10.7574 2.75736 9.75 4 9.75C5.24264 9.75 6.25 10.7574 6.25 12Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
				<path
					d="M22.25 12C22.25 13.2426 21.2426 14.25 20 14.25C18.7574 14.25 17.75 13.2426 17.75 12C17.75 10.7574 18.7574 9.75 20 9.75C21.2426 9.75 22.25 10.7574 22.25 12Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
				<path
					d="M6.5 12H17.5"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
				<path
					d="M3.58789 9.5C4.66683 5.88564 8.02516 3.25 12.0009 3.25C15.9767 3.25 19.335 5.88564 20.414 9.5"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
				<path
					d="M20.414 14.5C19.335 18.1144 15.9767 20.75 12.0009 20.75C8.02517 20.75 4.66684 18.1144 3.58789 14.5"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconVectorLogo;
