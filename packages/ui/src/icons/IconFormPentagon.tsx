import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFormPentagon: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="form-pentagon">
		{variant === "filled" ? (
			<>
				<path
					d="M9.79501 2.42456C11.1092 1.46975 12.8889 1.46987 14.2032 2.42456L20.4249 6.94409C21.7391 7.89895 22.2891 9.59243 21.7872 11.1374L19.4112 18.4509C18.9092 19.996 17.4684 21.0417 15.8438 21.0417H8.15438C6.52987 21.0417 5.08901 19.9959 4.587 18.4509L2.21103 11.1374C1.70921 9.59247 2.25911 7.89892 3.57333 6.94409L9.79501 2.42456Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M10.2366 3.03115C11.2881 2.26722 12.7119 2.26722 13.7634 3.03115L19.985 7.55142C21.0364 8.31535 21.4764 9.66946 21.0748 10.9055L18.6983 18.2195C18.2967 19.4555 17.1449 20.2924 15.8452 20.2924H8.15483C6.85515 20.2924 5.70328 19.4555 5.30166 18.2195L2.92521 10.9055C2.52359 9.66946 2.96356 8.31535 4.01503 7.55142L10.2366 3.03115Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFormPentagon;
