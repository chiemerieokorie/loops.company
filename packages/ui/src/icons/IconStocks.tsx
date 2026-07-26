import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconStocks: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="stocks">
		{variant === "filled" ? (
			<>
				<path
					d="M11.25 10C11.25 8.60212 12.2061 7.42755 13.5 7.09451V3H6.75C4.67893 3 3 4.67893 3 6.75V15.9393L6.46967 12.4697C6.76256 12.1768 7.23744 12.1768 7.53033 12.4697L9 13.9393L11.5768 11.3626C11.368 10.9535 11.25 10.4901 11.25 10Z"
					fill="currentColor"
				/>
				<path
					d="M3.07422 17.9882C3.41704 19.7058 4.93317 21.0001 6.75161 21.0001H13.5016V12.9055C13.1663 12.8191 12.8536 12.6762 12.5746 12.4878L9.53194 15.5304C9.23905 15.8233 8.76417 15.8233 8.47128 15.5304L7.00161 14.0608L3.07422 17.9882Z"
					fill="currentColor"
				/>
				<path
					d="M15 21H17.25C19.3211 21 21 19.3211 21 17.25V6.75C21 4.67893 19.3211 3 17.25 3H15V7.09451C16.2939 7.42755 17.25 8.60212 17.25 10C17.25 11.3979 16.2939 12.5725 15 12.9055V21Z"
					fill="currentColor"
				/>
				<path
					d="M12.75 10C12.75 9.17157 13.4216 8.5 14.25 8.5C15.0784 8.5 15.75 9.17157 15.75 10C15.75 10.8284 15.0784 11.5 14.25 11.5C13.7935 11.5 13.3853 11.297 13.109 10.9738C12.8847 10.7114 12.75 10.3724 12.75 10Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M16.5 10C16.5 11.2426 15.4926 12.25 14.25 12.25C13.565 12.25 12.9516 11.9439 12.5389 11.4611C12.2029 11.068 12 10.5577 12 10C12 8.75736 13.0074 7.75 14.25 7.75C15.4926 7.75 16.5 8.75736 16.5 10Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.25 12.25V20.25H6.75C5.09315 20.25 3.75 18.9069 3.75 17.25V6.75C3.75 5.09315 5.09315 3.75 6.75 3.75H14.25V7.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.5389 11.4612L9 15.0001L7 13.0001L4 16.0001"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.25 3.75H17.25C18.9069 3.75 20.25 5.09315 20.25 6.75V17.25C20.25 18.9069 18.9069 20.25 17.25 20.25H14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconStocks;
