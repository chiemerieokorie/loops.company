import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconShieldCheck2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="shield-check-2, protect, security, check"
	>
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3 6.75C3 4.67893 4.67893 3 6.75 3H17.25C19.3211 3 21 4.67893 21 6.75V15.9691C21 17.3414 20.2504 18.6041 19.0457 19.2612L13.7957 22.1248C12.6764 22.7354 11.3236 22.7354 10.2043 22.1248L4.95431 19.2612C3.74958 18.6041 3 17.3414 3 15.9691V6.75ZM15.0303 10.7803C15.3232 10.4874 15.3232 10.0126 15.0303 9.71967C14.7374 9.42678 14.2626 9.42678 13.9697 9.71967L11 12.6893L10.0303 11.7197C9.73744 11.4268 9.26256 11.4268 8.96967 11.7197C8.67678 12.0126 8.67678 12.4874 8.96967 12.7803L10.4697 14.2803C10.6103 14.421 10.8011 14.5 11 14.5C11.1989 14.5 11.3897 14.421 11.5303 14.2803L15.0303 10.7803Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M9.5 12.25L11 13.75L14.5 10.25M6.75 3.75H17.25C18.9069 3.75 20.25 5.09315 20.25 6.75V15.9691C20.25 17.0669 19.6503 18.0771 18.6866 18.6028L13.4366 21.4664C12.5411 21.9548 11.4589 21.9548 10.5634 21.4664L5.31344 18.6028C4.34966 18.0771 3.75 17.0669 3.75 15.9691V6.75C3.75 5.09315 5.09315 3.75 6.75 3.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconShieldCheck2;
