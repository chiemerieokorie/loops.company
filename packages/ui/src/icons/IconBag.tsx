import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBag: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="bag, luggage, buggage ">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M7.2522 7V5.75C7.2522 4.23122 8.48341 3 10.0022 3H14.0022C15.521 3 16.7522 4.23122 16.7522 5.75V7H18.25C20.3211 7 22 8.67893 22 10.75V12H2V10.75C2 8.67893 3.67893 7 5.75 7H7.2522ZM8.7522 5.75C8.7522 5.05964 9.31184 4.5 10.0022 4.5H14.0022C14.6926 4.5 15.2522 5.05964 15.2522 5.75V7H8.7522V5.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					d="M22 13.5V17.25C22 19.3211 20.3211 21 18.25 21H5.75C3.67893 21 2 19.3211 2 17.25V13.5H11.2507L11.2522 15.2507C11.2526 15.6649 11.5886 16.0004 12.0029 16C12.4171 15.9996 12.7526 15.6636 12.7522 15.2493L12.7507 13.5H22Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 17.25C2.75 18.9069 4.09315 20.25 5.75 20.25H18.25C19.9069 20.25 21.25 18.9069 21.25 17.25V10.75C21.25 9.09315 19.9069 7.75 18.25 7.75H5.75C4.09315 7.75 2.75 9.09315 2.75 10.75V17.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M21 12.75H3"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 12.75L12.0022 15.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.00391 7.75V6.75C8.00391 5.09315 9.34705 3.75 11.0039 3.75H13.0039C14.6608 3.75 16.0039 5.09315 16.0039 6.75V7.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBag;
