import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconMouseScrollUp: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="mouse-scroll-up">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M6 12C6 8.68628 8.68629 5.99999 12 5.99999C15.3137 5.99999 18 8.68628 18 12V17C18 20.3137 15.3137 23 12 23C8.68629 23 6 20.3137 6 17V12ZM12.75 10.75C12.75 10.3358 12.4142 9.99999 12 9.99999C11.5858 9.99999 11.25 10.3358 11.25 10.75V13.25C11.25 13.6642 11.5858 14 12 14C12.4142 14 12.75 13.6642 12.75 13.25V10.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M8.37596 4.41601C8.60573 4.76066 9.07138 4.85379 9.41602 4.62402L11.3066 3.36362C11.7265 3.08371 12.2735 3.08371 12.6934 3.36362L14.584 4.62402C14.9286 4.85379 15.3943 4.76066 15.624 4.41601C15.8538 4.07136 15.7607 3.60571 15.416 3.37595L13.5254 2.11555C12.6017 1.49973 11.3983 1.49973 10.4746 2.11555L8.58397 3.37595C8.23933 3.60571 8.1462 4.07136 8.37596 4.41601Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M15 3.99999L13.1094 2.73959C12.4376 2.29172 11.5624 2.29172 10.8906 2.73959L9 3.99999M12 10.75V13.25M12 22.25C9.10051 22.25 6.75 19.8995 6.75 17V12C6.75 9.10049 9.10051 6.74999 12 6.74999C14.8995 6.74999 17.25 9.10049 17.25 12V17C17.25 19.8995 14.8995 22.25 12 22.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconMouseScrollUp;
