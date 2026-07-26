import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconMouseScrollDown: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="mouse-scroll-down">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M8.37596 19.834C8.60573 19.4893 9.07138 19.3962 9.41602 19.626L11.3066 20.8864C11.7265 21.1663 12.2735 21.1663 12.6934 20.8864L14.584 19.626C14.9286 19.3962 15.3943 19.4893 15.624 19.834C15.8538 20.1786 15.7607 20.6443 15.416 20.874L13.5254 22.1344C12.6017 22.7503 11.3983 22.7503 10.4746 22.1344L8.58397 20.874C8.23933 20.6443 8.1462 20.1786 8.37596 19.834Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12V7ZM12.75 5.75C12.75 5.33579 12.4142 5 12 5C11.5858 5 11.25 5.33579 11.25 5.75V8.25C11.25 8.66421 11.5858 9 12 9C12.4142 9 12.75 8.66421 12.75 8.25V5.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M15 20.25L13.1094 21.5104C12.4376 21.9583 11.5624 21.9583 10.8906 21.5104L9 20.25M12 5.75V8.25M12 17.25C9.10051 17.25 6.75 14.8995 6.75 12V7C6.75 4.1005 9.10051 1.75 12 1.75C14.8995 1.75 17.25 4.10051 17.25 7V12C17.25 14.8995 14.8995 17.25 12 17.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconMouseScrollDown;
