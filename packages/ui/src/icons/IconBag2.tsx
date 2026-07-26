import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBag2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="bag-2, luggage, buggage ">
		{variant === "filled" ? (
			<>
				<path
					d="M8.75195 5.75C8.75195 5.05964 9.3116 4.5 10.002 4.5H14.002C14.6923 4.5 15.252 5.05964 15.252 5.75V7H16.75V21H18.25C20.3211 21 22 19.3211 22 17.25V10.75C22 8.67893 20.3211 7 18.25 7H16.752V5.75C16.752 4.23122 15.5207 3 14.002 3H10.002C8.48317 3 7.25195 4.23122 7.25195 5.75V7H8.75V21H15.25V7H8.75195V5.75Z"
					fill="currentColor"
				/>
				<path
					d="M5.75 7H7.25V21H5.75C3.67893 21 2 19.3211 2 17.25V10.75C2 8.67893 3.67893 7 5.75 7Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M5.75 20.25H18.25C19.9069 20.25 21.25 18.9069 21.25 17.25V10.75C21.25 9.09315 19.9069 7.75 18.25 7.75H5.75C4.09315 7.75 2.75 9.09315 2.75 10.75V17.25C2.75 18.9069 4.09315 20.25 5.75 20.25Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
				<path
					d="M8.00391 20.25V6.75C8.00391 5.09315 9.34705 3.75 11.0039 3.75H13.0039C14.6608 3.75 16.0039 5.09315 16.0039 6.75V20.25"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBag2;
