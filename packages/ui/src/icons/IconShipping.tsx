import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconShipping: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="shipping, truck, delivery">
		{variant === "filled" ? (
			<>
				<path
					d="M7.5 15C8.88071 15 10 16.1193 10 17.5C10 18.8807 8.88071 20 7.5 20C6.11929 20 5 18.8807 5 17.5C5 16.1193 6.11929 15 7.5 15Z"
					fill="currentColor"
				/>
				<path
					d="M16.5 15C17.8807 15 19 16.1193 19 17.5C19 18.8807 17.8807 20 16.5 20C15.1193 20 14 18.8807 14 17.5C14 16.1193 15.1193 15 16.5 15Z"
					fill="currentColor"
				/>
				<path
					d="M10.75 4C12.8211 4 14.5 5.67893 14.5 7.75V14.0361C13.4414 14.6487 12.6904 15.7319 12.5322 17H11.4678C11.2217 15.0269 9.53975 13.5 7.5 13.5C5.68502 13.5 4.15222 14.7088 3.66309 16.3652C2.66034 15.6922 2 14.5485 2 13.25V7.75C2 5.67893 3.67893 4 5.75 4H10.75Z"
					fill="currentColor"
				/>
				<path
					d="M18.0635 6C18.9829 6.00002 19.8415 6.45958 20.3516 7.22461L21.5381 9.00488C21.8391 9.45656 22 9.98747 22 10.5303V12.8418C22 14.2252 21.3236 15.4501 20.2842 16.2061C19.7462 14.6322 18.2561 13.5 16.5 13.5C16.3307 13.5 16.1638 13.5108 16 13.5312V6H18.0635Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M14.25 16.75C14.25 18.1307 15.3693 19.25 16.75 19.25C18.1307 19.25 19.25 18.1307 19.25 16.75C19.25 15.3693 18.1307 14.25 16.75 14.25C15.3693 14.25 14.25 15.3693 14.25 16.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.75 16.75C4.75 18.1307 5.86929 19.25 7.25 19.25C8.63071 19.25 9.75 18.1307 9.75 16.75C9.75 15.3693 8.63071 14.25 7.25 14.25C5.86929 14.25 4.75 15.3693 4.75 16.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14 16.25H10"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.25 16.25C20.3546 16.25 21.25 15.3546 21.25 14.25V10.6248C21.25 10.2179 21.1259 9.82081 20.8944 9.48633L19.5965 7.61158C19.2229 7.07198 18.6084 6.75 17.9521 6.75H15.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.64394 16.25C3.59795 16.25 2.75 15.4021 2.75 14.3561V7.75C2.75 6.09315 4.09315 4.75 5.75 4.75H12.25C13.9069 4.75 15.25 6.09315 15.25 7.75V14.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconShipping;
