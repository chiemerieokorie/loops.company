import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconGroup3: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="group-3">
		{variant === "filled" ? (
			<>
				<path
					d="M4.00146 7C4.00146 4.79086 5.79233 3 8.00146 3C10.2106 3 12.0015 4.79086 12.0015 7C12.0015 9.20914 10.2106 11 8.00146 11C5.79233 11 4.00146 9.20914 4.00146 7Z"
					fill="currentColor"
				/>
				<path
					d="M13.5015 7.5C13.5015 5.567 15.0685 4 17.0015 4C18.9345 4 20.5015 5.567 20.5015 7.5C20.5015 9.433 18.9345 11 17.0015 11C15.0685 11 13.5015 9.433 13.5015 7.5Z"
					fill="currentColor"
				/>
				<path
					d="M8.00139 12C4.81696 12 2.69919 14.0433 1.68843 16.8419C1.29068 17.9432 1.58284 19.0116 2.24229 19.7775C2.89073 20.5305 3.89448 21 4.97876 21H11.024C12.1083 21 13.1121 20.5305 13.7605 19.7775C14.4199 19.0116 14.7121 17.9432 14.3144 16.8419C13.3036 14.0433 11.1858 12 8.00139 12Z"
					fill="currentColor"
				/>
				<path
					d="M15.9915 20C16.5394 18.884 16.6907 17.5339 16.1954 16.1625C15.7377 14.8953 15.0638 13.7067 14.1734 12.7179C14.9785 12.26 15.9224 12 17.0012 12C19.6647 12 21.5056 13.5844 22.4657 15.8202C22.9354 16.9139 22.6635 17.9959 22.0076 18.7692C21.3658 19.5259 20.3553 20 19.2703 20H15.9915Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M11.25 7C11.25 8.79493 9.79493 10.25 8 10.25C6.20507 10.25 4.75 8.79493 4.75 7C4.75 5.20507 6.20507 3.75 8 3.75C9.79493 3.75 11.25 5.20507 11.25 7Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.75 7.5C19.75 9.01878 18.5188 10.25 17 10.25C15.4812 10.25 14.25 9.01878 14.25 7.5C14.25 5.98122 15.4812 4.75 17 4.75C18.5188 4.75 19.75 5.98122 19.75 7.5Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.00107 12.75C5.21546 12.75 3.3281 14.509 2.39351 17.0967C1.80142 18.736 3.23541 20.25 4.97844 20.25H11.0237C12.7667 20.25 14.2007 18.736 13.6086 17.0967C12.674 14.509 10.7867 12.75 8.00107 12.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.7516 19.25H19.2706C21.0149 19.25 22.4652 17.7189 21.7769 16.1161C20.9088 14.0947 19.3038 12.75 17.0016 12.75C16.5555 12.75 16.1356 12.8005 15.7422 12.8966"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconGroup3;
