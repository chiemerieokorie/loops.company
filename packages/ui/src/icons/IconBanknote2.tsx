import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBanknote2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="banknote-2,money, bill">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M1.5 8.25C1.5 6.17893 3.17893 4.5 5.25 4.5H18.75C20.8211 4.5 22.5 6.17893 22.5 8.25V15.75C22.5 17.8211 20.8211 19.5 18.75 19.5H5.25C3.17893 19.5 1.5 17.8211 1.5 15.75V8.25ZM5.25 18H5.5C5.5 16.6193 4.38071 15.5 3 15.5V15.75C3 16.9926 4.00736 18 5.25 18ZM21 15.75V15.5C19.6193 15.5 18.5 16.6193 18.5 18H18.75C19.9926 18 21 16.9926 21 15.75ZM21 8.5C19.6193 8.5 18.5 7.38071 18.5 6H18.75C19.9926 6 21 7.00736 21 8.25V8.5ZM5.25 6H5.5C5.5 7.38071 4.38071 8.5 3 8.5V8.25C3 7.00736 4.00736 6 5.25 6ZM12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M2.25 8.25C2.25 6.59315 3.59315 5.25 5.25 5.25H18.75C20.4069 5.25 21.75 6.59315 21.75 8.25V15.75C21.75 17.4069 20.4069 18.75 18.75 18.75H5.25C3.59315 18.75 2.25 17.4069 2.25 15.75V8.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="12"
					cy="12"
					r="2.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.75 5.25C5.75 7.183 4.183 8.75 2.25 8.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18.25 5.25C18.25 7.183 19.817 8.75 21.75 8.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.75 18.75C5.75 16.817 4.183 15.25 2.25 15.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18.25 18.75C18.25 16.817 19.817 15.25 21.75 15.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBanknote2;
