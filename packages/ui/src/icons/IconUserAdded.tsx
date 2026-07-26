import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconUserAdded: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="user-added, people, person, member, checked"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M15.9297 12.1094C16.8492 12.524 17.6609 13.1345 18.3135 13.8867L16.3604 16.9551L16.1309 16.7773C15.1498 16.0152 13.7361 16.193 12.9736 17.1738C12.2114 18.1549 12.3883 19.5686 13.3691 20.3311L14.2305 21H6.5957C5.16224 20.9998 4.00024 19.8378 4 18.4043C4 15.6021 5.6706 13.1915 8.06934 12.1094C9.14306 12.979 10.5107 13.5 12 13.5C13.4891 13.5 14.856 12.9787 15.9297 12.1094Z"
					fill="currentColor"
				/>
				<path
					d="M20.1172 13.8477C20.3395 13.4983 20.8029 13.395 21.1523 13.6172C21.5017 13.8395 21.605 14.3029 21.3828 14.6523L17.5645 20.6523C17.4511 20.8305 17.2676 20.9532 17.0596 20.9893C16.8517 21.0252 16.6383 20.9713 16.4717 20.8418L14.29 19.1465C13.963 18.8923 13.904 18.4208 14.1582 18.0938C14.4124 17.7672 14.8831 17.7081 15.21 17.9619L16.7412 19.1523L20.1172 13.8477Z"
					fill="currentColor"
				/>
				<path
					d="M12 2.5C14.6234 2.5 16.75 4.62665 16.75 7.25C16.75 9.87335 14.6234 12 12 12C9.37665 12 7.25 9.87335 7.25 7.25C7.25 4.62665 9.37665 2.5 12 2.5Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<circle
					cx="12"
					cy="7.75"
					r="4.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.0018 12.25C8.22236 12.25 5.87133 14.4212 4.94874 17.2952C4.44232 18.8728 5.84498 20.25 7.50184 20.25H11.252"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.75 18.5543L16.9318 20.25L20.75 14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconUserAdded;
