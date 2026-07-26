import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconTelevisionOld: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="television-old, tv, monitor, video, screen, display"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M6.90802 2.78958C7.16232 2.46262 7.63353 2.40372 7.96049 2.65802L12 5.79989L16.0396 2.65802C16.3665 2.40372 16.8377 2.46262 17.092 2.78958C17.3464 3.11654 17.2875 3.58775 16.9605 3.84205L14.186 6H18.25C20.3211 6 22 7.67893 22 9.75V17.25C22 19.3211 20.3211 21 18.25 21H5.75C3.67893 21 2 19.3211 2 17.25V9.75C2 7.67893 3.67893 6 5.75 6H9.81409L7.03958 3.84205C6.71262 3.58775 6.65372 3.11654 6.90802 2.78958Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 9.75C2.75 8.09315 4.09315 6.75 5.75 6.75H18.25C19.9069 6.75 21.25 8.09315 21.25 9.75V17.25C21.25 18.9069 19.9069 20.25 18.25 20.25H5.75C4.09315 20.25 2.75 18.9069 2.75 17.25V9.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.5 3.25L12 6.75L16.5 3.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconTelevisionOld;
