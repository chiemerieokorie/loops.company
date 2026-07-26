import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPeopleGroup2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="people-group-2, user, friend">
		{variant === "filled" ? (
			<>
				<path
					d="M12.25 14C14.3245 14 15.9998 15.689 16 17.7646V19.25C16 19.6642 15.6642 20 15.25 20H2.75C2.33579 20 2 19.6642 2 19.25V17.7646C2.0002 15.689 3.67553 14 5.75 14H12.25Z"
					fill="currentColor"
				/>
				<path
					d="M18.25 14C20.3245 14 21.9998 15.689 22 17.7646V19C22 19.5523 21.5523 20 21 20H17.5V17.7646L17.4932 17.4941C17.424 16.1294 16.8351 14.8985 15.9189 14H18.25Z"
					fill="currentColor"
				/>
				<path
					d="M9 4C11.4853 4 13.5 6.01472 13.5 8.5C13.5 10.9853 11.4853 13 9 13C6.51472 13 4.5 10.9853 4.5 8.5C4.5 6.01472 6.51472 4 9 4Z"
					fill="currentColor"
				/>
				<path
					d="M15 4C17.4853 4 19.5 6.01472 19.5 8.5C19.5 10.9853 17.4853 13 15 13C14.7953 13 14.594 12.9845 14.3965 12.958C14.0679 12.8103 13.721 12.6959 13.3604 12.6182C14.3757 11.5434 15 10.0952 15 8.5C15 6.87843 14.3549 5.40892 13.3096 4.3291C13.8316 4.11733 14.402 4 15 4Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M12.75 8.5C12.75 10.5711 11.0711 12.25 9 12.25C6.92893 12.25 5.25 10.5711 5.25 8.5C5.25 6.42893 6.92893 4.75 9 4.75C11.0711 4.75 12.75 6.42893 12.75 8.5Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.9997 4.75C17.0708 4.75 18.7497 6.42893 18.7497 8.5C18.7497 10.5711 17.0708 12.25 14.9997 12.25C14.975 12.25 14.9504 12.2498 14.9258 12.2493"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M2.75 19.25V17.765C2.75 16.0999 4.09315 14.75 5.75 14.75H12C13.6569 14.75 15 16.0999 15 17.765V19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M21.25 19.25V17.765C21.25 16.0999 19.9069 14.75 18.25 14.75H17.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPeopleGroup2;
