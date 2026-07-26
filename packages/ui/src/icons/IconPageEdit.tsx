import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPageEdit: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="page-edit, document">
		{variant === "filled" ? (
			<>
				<path
					d="M4 5.75C4 3.67893 5.67893 2 7.75 2H16.25C18.3211 2 20 3.67893 20 5.75V12.6674C18.6206 12.1667 17.0152 12.4694 15.909 13.5756L12.159 17.3256C11.7371 17.7476 11.5 18.3199 11.5 18.9166V21.2499C11.5 21.5129 11.5451 21.7654 11.6281 22H7.75C5.67893 22 4 20.3211 4 18.25V5.75Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M19.303 15.6969C18.9516 15.3455 18.3818 15.3455 18.0303 15.6969L14.5 19.2273V20.4999H15.7727L19.303 16.9696C19.6544 16.6182 19.6544 16.0484 19.303 15.6969ZM16.9697 14.6363C17.9069 13.699 19.4264 13.699 20.3637 14.6363C21.3009 15.5735 21.3009 17.093 20.3637 18.0303L16.6137 21.7803C16.473 21.9209 16.2822 21.9999 16.0833 21.9999H13.75C13.3358 21.9999 13 21.6641 13 21.2499V18.9166C13 18.7177 13.079 18.5269 13.2197 18.3863L16.9697 14.6363Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M10.75 21.25H7.75C6.09315 21.25 4.75 19.9069 4.75 18.25V5.75C4.75 4.09315 6.09315 2.75 7.75 2.75H16.25C17.9069 2.75 19.25 4.09315 19.25 5.75V11.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.75 21.2502V18.9168L17.5 15.1668C18.1443 14.5225 19.189 14.5225 19.8333 15.1668C20.4777 15.8112 20.4777 16.8558 19.8333 17.5002L16.0833 21.2502H13.75Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPageEdit;
