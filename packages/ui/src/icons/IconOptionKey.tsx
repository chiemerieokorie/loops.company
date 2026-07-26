import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconOptionKey: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="option-key">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M17.25 3C19.3211 3 21 4.67893 21 6.75V17.25C21 19.3211 19.3211 21 17.25 21H6.75C4.67893 21 3 19.3211 3 17.25V6.75C3 4.67893 4.67893 3 6.75 3H17.25ZM7.75 7.5C7.33579 7.5 7 7.83579 7 8.25C7 8.66421 7.33579 9 7.75 9H8.58496C9.03496 9.00015 9.44999 9.24227 9.67188 9.63379L12.7725 15.1055C13.2607 15.967 14.1748 16.4998 15.165 16.5H16.25C16.6642 16.5 17 16.1642 17 15.75C17 15.3358 16.6642 15 16.25 15H15.165C14.715 14.9998 14.3 14.7577 14.0781 14.3662L10.9775 8.89453C10.4893 8.03299 9.57519 7.50015 8.58496 7.5H7.75ZM14.25 7.5C13.8358 7.5 13.5 7.83579 13.5 8.25C13.5 8.66421 13.8358 9 14.25 9H16.25C16.6641 8.99989 17 8.66415 17 8.25C17 7.83585 16.6641 7.50011 16.25 7.5H14.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M17.25 3.75H6.75C5.09315 3.75 3.75 5.09315 3.75 6.75V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H17.25C18.9069 20.25 20.25 18.9069 20.25 17.25V6.75C20.25 5.09315 18.9069 3.75 17.25 3.75Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.75 8.25H8.58454C9.30483 8.25 9.96948 8.63731 10.3246 9.26397L13.4254 14.736C13.7805 15.3627 14.4452 15.75 15.1655 15.75H16.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.2498 8.25H14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconOptionKey;
