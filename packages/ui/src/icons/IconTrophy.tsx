import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconTrophy: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="trophy, win, champion">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M6.75 2C5.7835 2 5 2.7835 5 3.75V4H3.75C2.7835 4 2 4.7835 2 5.75V7.25C2 9.14088 3.3995 10.7049 5.2192 10.9627C5.93693 13.707 8.33863 15.7703 11.2539 15.982V18H7.75C6.7835 18 6 18.7835 6 19.75V20.25C6 21.2165 6.7835 22 7.75 22H16.25C17.2165 22 18 21.2165 18 20.25V19.75C18 18.7835 17.2165 18 16.25 18H12.7539V15.9815C15.6657 15.7666 18.0637 13.7046 18.7808 10.9627C20.6005 10.7049 22 9.14088 22 7.25V5.75C22 4.7835 21.2165 4 20.25 4H19V3.75C19 2.7835 18.2165 2 17.25 2H6.75ZM3.75 5.5H5V9.25C5 9.29087 5.00036 9.33166 5.00109 9.37235C4.12663 9.06379 3.5 8.23007 3.5 7.25V5.75C3.5 5.61193 3.61193 5.5 3.75 5.5ZM20.5 7.25C20.5 8.23007 19.8734 9.06379 18.9989 9.37235C18.9996 9.33166 19 9.29087 19 9.25V5.5H20.25C20.3881 5.5 20.5 5.61193 20.5 5.75V7.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M12 18V15"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18.25 4.75H18.75C20.1307 4.75 21.25 5.86929 21.25 7.25C21.25 8.90685 19.9069 10.25 18.25 10.25"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.75 5.75C5.75 4.09315 7.09315 2.75 8.75 2.75H15.25C16.9069 2.75 18.25 4.09315 18.25 5.75V9.25C18.25 12.5637 15.5637 15.25 12.25 15.25H11.75C8.43629 15.25 5.75 12.5637 5.75 9.25V5.75Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.75 19.25C6.75 18.4216 7.42157 17.75 8.25 17.75H15.75C16.5784 17.75 17.25 18.4216 17.25 19.25V19.75C17.25 20.5784 16.5784 21.25 15.75 21.25H8.25C7.42157 21.25 6.75 20.5784 6.75 19.75V19.25Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.75 4.75H5.25C3.86929 4.75 2.75 5.86929 2.75 7.25C2.75 8.90685 4.09315 10.25 5.75 10.25"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconTrophy;
