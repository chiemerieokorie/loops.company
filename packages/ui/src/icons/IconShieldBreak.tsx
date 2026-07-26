import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconShieldBreak: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="shield-break, not-secure">
		{variant === "filled" ? (
			<>
				<path
					d="M17.0653 15.1142L2.22028 3.16577C1.89761 2.90605 1.42548 2.95709 1.16577 3.27977C0.906052 3.60245 0.957092 4.07457 1.27977 4.33428L3.40356 6.04368C3.14329 6.55808 3 7.13546 3 7.73606V13C3 17.9705 7.02944 22 12 22C14.8442 22 17.3802 20.6807 19.0295 18.6207L21.7798 20.8343C22.1024 21.094 22.5746 21.043 22.8343 20.7203C23.094 20.3976 23.043 19.9255 22.7203 19.6658L19.8692 17.371C19.8739 17.3624 19.8787 17.3538 19.8834 17.3452L17.0653 15.1142Z"
					fill="currentColor"
				/>
				<path
					d="M21 13C21 14.0355 20.8251 15.0302 20.5032 15.9562L5.7542 4.08501L10.5354 2.05661C11.4714 1.65952 12.5286 1.65952 13.4646 2.05661L18.7146 4.28388C20.1001 4.8717 21 6.23096 21 7.73606V13Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 5.75V13C3.75 17.5563 7.44365 21.25 12 21.25C14.8328 21.25 17.3321 19.8223 18.8176 17.6471M7 4.37121L10.8284 2.74706C11.5772 2.42939 12.4228 2.42939 13.1716 2.74706L18.4216 4.97434C19.5301 5.44459 20.25 6.532 20.25 7.73608V13C20.25 13.6049 20.1849 14.1945 20.0613 14.7624M1.75 3.75L22.25 20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconShieldBreak;
