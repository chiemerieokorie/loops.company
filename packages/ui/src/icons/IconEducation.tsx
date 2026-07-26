import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconEducation: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="education, book, reading, freetime, apple"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M22 16H21.0312C20.6822 17.1406 20.6822 18.3594 21.0312 19.5H22V21H5.25C3.45507 21 2 19.5449 2 17.75C2 15.9551 3.45507 14.5 5.25 14.5H22V16Z"
					fill="currentColor"
				/>
				<path
					d="M14.0303 2.78027C13.5971 3.21344 13.2958 3.56573 13.0947 3.88379C14.7306 3.53791 15.9688 3.89575 16.8154 4.7002C17.8376 5.67168 18.2231 7.23228 18.1094 8.75293C17.9954 10.2759 17.3776 11.8218 16.3145 12.7852C15.78 13.2693 15.1304 13.607 14.3809 13.7139C13.6601 13.8165 12.8618 13.7014 11.999 13.3223C11.1367 13.7012 10.3386 13.8164 9.61816 13.7139C8.86894 13.607 8.22081 13.2691 7.68652 12.7852C6.62331 11.8219 6.00556 10.2761 5.8916 8.75293C5.77791 7.23224 6.16254 5.67169 7.18457 4.7002C8.11384 3.8172 9.51469 3.47289 11.3955 4.00684C11.6493 3.17213 12.2189 2.47055 12.9697 1.71973L14.0303 2.78027Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M21.25 20.25H5.75C4.09315 20.25 2.75 18.9069 2.75 17.25C2.75 15.5931 4.09315 14.25 5.75 14.25H21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20.5 14.25L20.2379 15.0364C19.7589 16.4733 19.7589 18.0267 20.2379 19.4636L20.5 20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.0027 5.21584C3.30673 1.95449 5.07456 16.9989 12.0025 13.801C18.9321 16.9989 20.7005 1.9545 12.0027 5.21584Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 5.00016C12 4.17043 12.3115 3.52112 13 2.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconEducation;
