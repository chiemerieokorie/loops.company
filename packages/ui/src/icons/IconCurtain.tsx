import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCurtain: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="curtain,showtime,theater">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M9.25547 4.00002C9.25223 3.99999 9.24898 3.99999 9.24572 4.00002H5.75C3.67893 4.00002 2 5.67895 2 7.75001V16.25C2 18.3211 3.67893 20 5.75 20H8.25C8.65893 20 8.99249 19.6724 8.99988 19.2636C9.00147 19.1751 9.00127 19.0873 8.99928 19H15.0007C14.9987 19.0872 14.9985 19.1751 15.0001 19.2636C15.0075 19.6724 15.3411 20 15.75 20H18.25C20.3211 20 22 18.3211 22 16.25V7.75002C22 5.67895 20.3211 4.00002 18.25 4.00002H14.7543C14.751 3.99999 14.7478 3.99999 14.7445 4.00002H9.25547ZM15.4731 5.50002C15.4186 7.7374 15.6552 9.37945 16.3906 10.5877C17.0854 11.7291 18.3037 12.6012 20.5 13.1433V7.75002C20.5 6.50738 19.4926 5.50002 18.25 5.50002H15.4731ZM20.5 14.866V16.25C20.5 17.4927 19.4926 18.5 18.25 18.5H16.544C16.8165 16.5701 18.3091 15.1326 20.5 14.866ZM7.45646 18.5C7.18406 16.5482 5.68015 15.0783 3.5 14.8505V16.25C3.5 17.4927 4.50736 18.5 5.75 18.5H7.45646ZM3.5 13.0971V7.75001C3.5 6.50737 4.50736 5.50002 5.75 5.50002H8.52046C8.53412 7.67605 8.10255 9.32705 7.25765 10.5518C6.46324 11.7034 5.2483 12.5574 3.5 13.0971Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M21.2509 16.2499V14.0713C18.0009 14.0713 15.6969 16.2587 15.7509 19.2499H18.2509C19.9078 19.2499 21.2509 17.9067 21.2509 16.2499Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M2.75 14.071V16.2496C2.75 17.9064 4.09315 19.2496 5.75 19.2496H8.25C8.30402 16.2584 6 13.9996 2.75 14.071Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M2.75 14.0714V7.75C2.75 6.09314 4.09315 4.75 5.75 4.75H18.25C19.9069 4.75 21.25 6.09315 21.25 7.75V14.0714C15.5 13 14.5 10 14.75 4.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M2.75 14.0714C7.5 13 9.5 10 9.25 4.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.5 18.25H15.5"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCurtain;
