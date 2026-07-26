import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconGiftcard: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="giftcard, present">
		{variant === "filled" ? (
			<>
				<path
					d="M13.25 4H5.75C3.67893 4 2 5.67893 2 7.75V11.25H12.1893L10.7197 9.78033C10.4268 9.48744 10.4268 9.01256 10.7197 8.71967C11.0126 8.42678 11.4874 8.42678 11.7803 8.71967L13.25 10.1893V4Z"
					fill="currentColor"
				/>
				<path
					d="M2 12.75V16.25C2 18.3211 3.67893 20 5.75 20H13.25V13.8107L11.7803 15.2803C11.4874 15.5732 11.0126 15.5732 10.7197 15.2803C10.4268 14.9874 10.4268 14.5126 10.7197 14.2197L12.1893 12.75H2Z"
					fill="currentColor"
				/>
				<path
					d="M14.75 20H18.25C20.3211 20 22 18.3211 22 16.25V12.75H15.8107L17.2803 14.2197C17.5732 14.5126 17.5732 14.9874 17.2803 15.2803C16.9874 15.5732 16.5126 15.5732 16.2197 15.2803L14.75 13.8107V20Z"
					fill="currentColor"
				/>
				<path
					d="M22 11.25V7.75C22 5.67893 20.3211 4 18.25 4H14.75V10.1893L16.2197 8.71967C16.5126 8.42678 16.9874 8.42678 17.2803 8.71967C17.5732 9.01256 17.5732 9.48744 17.2803 9.78033L15.8107 11.25H22Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M14 4.75V12M14 12V19.25M14 12H21.25M14 12H2.75M14 12L16.75 9.25M14 12L11.25 9.25M14 12L16.75 14.75M14 12L11.25 14.75M5.75 19.25H18.25C19.9069 19.25 21.25 17.9069 21.25 16.25V7.75C21.25 6.09315 19.9069 4.75 18.25 4.75H5.75C4.09315 4.75 2.75 6.09315 2.75 7.75V16.25C2.75 17.9069 4.09315 19.25 5.75 19.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconGiftcard;
