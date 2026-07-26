import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowsRepeat: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="arrows-repeat, repost">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12.1062 1.22905C12.3939 0.931069 12.8687 0.922739 13.1667 1.21045L16.2738 4.21045C16.4202 4.35178 16.5029 4.54653 16.5029 4.75C16.5029 4.95348 16.4202 5.14822 16.2738 5.28955L13.1667 8.28955C12.8687 8.57726 12.3939 8.56893 12.1062 8.27095C11.8185 7.97296 11.8268 7.49816 12.1248 7.21045L13.8963 5.5H6.75C5.50736 5.5 4.5 6.50736 4.5 7.75V13.25C4.5 13.6642 4.16421 14 3.75 14C3.33579 14 3 13.6642 3 13.25V7.75C3 5.67893 4.67893 4 6.75 4H13.8963L12.1248 2.28955C11.8268 2.00184 11.8185 1.52704 12.1062 1.22905ZM20.25 10C20.6642 10 21 10.3358 21 10.75V16.25C21 18.3211 19.3211 20 17.25 20H10.1037L11.8752 21.7104C12.1732 21.9982 12.1815 22.473 11.8938 22.7709C11.6061 23.0689 11.1313 23.0773 10.8333 22.7896L7.7262 19.7896C7.57982 19.6482 7.49714 19.4535 7.49714 19.25C7.49714 19.0465 7.57982 18.8518 7.7262 18.7104L10.8333 15.7105C11.1313 15.4227 11.6061 15.4311 11.8938 15.7291C12.1815 16.027 12.1732 16.5018 11.8752 16.7896L10.1037 18.5H17.25C18.4926 18.5 19.5 17.4926 19.5 16.25V10.75C19.5 10.3358 19.8358 10 20.25 10Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 13.25V7.75C3.75 6.09315 5.09315 4.75 6.75 4.75H15.1071"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.6455 1.75L15.7527 4.75L12.6455 7.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20.2502 10.75V16.25C20.2502 17.9069 18.9071 19.25 17.2502 19.25H8.89307"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11.3542 22.25L8.24707 19.25L11.3542 16.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowsRepeat;
