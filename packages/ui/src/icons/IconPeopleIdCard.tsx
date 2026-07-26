import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPeopleIdCard: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="people-id-card, profile, user-account, badge, person"
	>
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M16.75 2C18.8211 2 20.5 3.67893 20.5 5.75V18.25C20.5 20.3211 18.8211 22 16.75 22H7.25C5.17893 22 3.5 20.3211 3.5 18.25V5.75C3.5 3.67893 5.17893 2 7.25 2H16.75ZM12 16.5C10.2077 16.5 8.00144 17.7222 7.5625 19.7705C7.47604 20.1753 7.82128 20.5156 8.23535 20.5156H15.7656C16.1795 20.5154 16.5239 20.1752 16.4375 19.7705C15.9986 17.7222 13.7922 16.5 12 16.5ZM12 10C10.6193 10 9.5 11.1193 9.5 12.5C9.5 13.8807 10.6193 15 12 15C13.3807 15 14.5 13.8807 14.5 12.5C14.5 11.1193 13.3807 10 12 10ZM9.75 4.5C9.33579 4.5 9 4.83579 9 5.25C9 5.66421 9.33579 6 9.75 6H14.25C14.6642 6 15 5.66421 15 5.25C15 4.83579 14.6642 4.5 14.25 4.5H9.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M16.75 2.75H7.25C5.59315 2.75 4.25 4.09315 4.25 5.75V18.25C4.25 19.9069 5.59315 21.25 7.25 21.25H16.75C18.4069 21.25 19.75 19.9069 19.75 18.25V5.75C19.75 4.09315 18.4069 2.75 16.75 2.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="12"
					cy="12.25"
					r="2.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16 21C16 18.7909 14.2091 17 12 17C9.79086 17 8 18.7909 8 21"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.75 6.25H14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPeopleIdCard;
