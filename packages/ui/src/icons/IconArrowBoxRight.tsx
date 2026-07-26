import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowBoxRight: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="arrow-box-right, login, enter, door">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M17.25 4.5L14.75 4.5C14.3358 4.5 14 4.16421 14 3.75C14 3.33579 14.3358 3 14.75 3L17.25 3C19.3211 3 21 4.67893 21 6.75V17.25C21 19.3211 19.3211 21 17.25 21H14.75C14.3358 21 14 20.6642 14 20.25C14 19.8358 14.3358 19.5 14.75 19.5H17.25C18.4926 19.5 19.5 18.4926 19.5 17.25V6.75C19.5 5.50736 18.4926 4.5 17.25 4.5ZM10.9697 7.96967C11.2626 7.67678 11.7374 7.67678 12.0303 7.96967L15.5303 11.4697C15.671 11.6103 15.75 11.8011 15.75 12C15.75 12.1989 15.671 12.3897 15.5303 12.5303L12.0303 16.0303C11.7374 16.3232 11.2626 16.3232 10.9697 16.0303C10.6768 15.7374 10.6768 15.2626 10.9697 14.9697L13.1893 12.75H3.75C3.33579 12.75 3 12.4142 3 12C3 11.5858 3.33579 11.25 3.75 11.25H13.1893L10.9697 9.03033C10.6768 8.73744 10.6768 8.26257 10.9697 7.96967Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M14.75 3.75L17.25 3.75C18.9069 3.75 20.25 5.09315 20.25 6.75V17.25C20.25 18.9069 18.9069 20.25 17.25 20.25H14.75M15 12H3.75M15 12L11.5 15.5M15 12L11.5 8.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowBoxRight;
