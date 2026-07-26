import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowUpDownLeftRight: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="arrow-up-down-left-right, move">
		{variant === "filled" ? (
			<>
				<path
					d="M11.25 4.06021L9.5301 5.7801C9.23721 6.073 8.76234 6.073 8.46944 5.7801C8.17655 5.48721 8.17655 5.01234 8.46944 4.71944L10.4088 2.7801C11.2875 1.90142 12.7121 1.90142 13.5908 2.7801L15.5301 4.71944C15.823 5.01234 15.823 5.48721 15.5301 5.7801C15.2372 6.073 14.7623 6.073 14.4694 5.7801L12.75 4.06066V11.25H19.9393L18.2194 9.5301C17.9266 9.23721 17.9266 8.76234 18.2194 8.46944C18.5123 8.17655 18.9872 8.17655 19.2801 8.46944L21.2194 10.4088C22.0981 11.2875 22.0981 12.7121 21.2194 13.5908L19.2801 15.5301C18.9872 15.823 18.5123 15.823 18.2194 15.5301C17.9266 15.2372 17.9266 14.7623 18.2194 14.4694L19.9389 12.75H12.75V19.9389L14.4694 18.2194C14.7623 17.9266 15.2372 17.9266 15.5301 18.2194C15.823 18.5123 15.823 18.9872 15.5301 19.2801L13.5908 21.2194C12.7121 22.0981 11.2875 22.0981 10.4088 21.2194L8.46944 19.2801C8.17655 18.9872 8.17655 18.5123 8.46944 18.2194C8.76234 17.9266 9.23721 17.9266 9.5301 18.2194L11.25 19.9393V12.75H4.06066L5.7801 14.4694C6.073 14.7623 6.073 15.2372 5.7801 15.5301C5.48721 15.823 5.01234 15.823 4.71944 15.5301L2.7801 13.5908C1.90142 12.7121 1.90142 11.2875 2.7801 10.4088L4.71944 8.46944C5.01234 8.17655 5.48721 8.17655 5.7801 8.46944C6.073 8.76234 6.073 9.23721 5.7801 9.5301L4.06021 11.25H11.25V4.06021Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M9 5.24977L10.9393 3.31043C11.5251 2.72465 12.4749 2.72465 13.0607 3.31043L15 5.24977"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.24977 9L3.31043 10.9393C2.72465 11.5251 2.72465 12.4749 3.31043 13.0607L5.24977 15"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18.75 9L20.6893 10.9393C21.2751 11.5251 21.2751 12.4749 20.6893 13.0607L18.75 15"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15 18.75L13.0607 20.6893C12.4749 21.2751 11.5251 21.2751 10.9393 20.6893L9 18.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 4V12M12 12V20M12 12H4M12 12H20"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowUpDownLeftRight;
