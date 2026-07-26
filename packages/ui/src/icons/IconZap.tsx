import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconZap: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="zap, lightning, flash, thunder">
		{variant === "filled" ? (
			<>
				<path
					d="M13.9992 2.35561C13.9992 1.12899 12.4165 0.636187 11.7202 1.64595L3.17236 14.0403C2.60048 14.8695 3.19407 15.9999 4.20137 15.9999H9.99917V21.6442C9.99917 22.8708 11.5818 23.3637 12.2782 22.3539L20.826 9.95958C21.3979 9.13036 20.8043 7.99992 19.797 7.99992H13.9992V2.35561Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M19.7978 8.75H13.75C13.4739 8.75 13.25 8.52614 13.25 8.25V2.3557C13.25 1.86505 12.6169 1.66792 12.3384 2.07183L3.7906 14.4661C3.56185 14.7978 3.79928 15.25 4.2022 15.25H10.25C10.5261 15.25 10.75 15.4739 10.75 15.75V21.6443C10.75 22.135 11.383 22.3321 11.6616 21.9282L20.2094 9.53387C20.4382 9.20218 20.2007 8.75 19.7978 8.75Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconZap;
