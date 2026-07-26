import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconTape: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="tape">
		{variant === "filled" ? (
			<>
				<path
					d="M7 12C7 11.1716 7.67157 10.5 8.5 10.5C9.32843 10.5 10 11.1716 10 12C10 12.8284 9.32843 13.5 8.5 13.5C7.67157 13.5 7 12.8284 7 12Z"
					fill="currentColor"
				/>
				<path
					d="M15.5 13.5C16.3284 13.5 17 12.8284 17 12C17 11.1716 16.3284 10.5 15.5 10.5C14.6716 10.5 14 11.1716 14 12C14 12.8284 14.6716 13.5 15.5 13.5Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M1 7.75C1 5.67893 2.67893 4 4.75 4H19.25C21.3211 4 23 5.67893 23 7.75V16.25C23 18.3211 21.3211 20 19.25 20H4.75C2.67893 20 1 18.3211 1 16.25V7.75ZM11.5 12C11.5 12.5464 11.3539 13.0587 11.0987 13.5H12.9013C12.6461 13.0587 12.5 12.5464 12.5 12C12.5 10.3431 13.8431 9 15.5 9C17.1569 9 18.5 10.3431 18.5 12C18.5 13.6569 17.1569 15 15.5 15H8.5C6.84315 15 5.5 13.6569 5.5 12C5.5 10.3431 6.84315 9 8.5 9C10.1569 9 11.5 10.3431 11.5 12Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M19.25 4.75H4.75C3.09315 4.75 1.75 6.09315 1.75 7.75V16.25C1.75 17.9069 3.09315 19.25 4.75 19.25H19.25C20.9069 19.25 22.25 17.9069 22.25 16.25V7.75C22.25 6.09315 20.9069 4.75 19.25 4.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10.75 12C10.75 13.2426 9.74264 14.25 8.5 14.25C7.25736 14.25 6.25 13.2426 6.25 12C6.25 10.7574 7.25736 9.75 8.5 9.75C9.74264 9.75 10.75 10.7574 10.75 12Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.75 12C17.75 13.2426 16.7426 14.25 15.5 14.25C14.2574 14.25 13.25 13.2426 13.25 12C13.25 10.7574 14.2574 9.75 15.5 9.75C16.7426 9.75 17.75 10.7574 17.75 12Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.5 14.25H15.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconTape;
