import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconTag: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="tag, sale">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M2 5.75C2 3.67893 3.67893 2 5.75 2H10.7411C11.7357 2 12.6895 2.39509 13.3928 3.09835L20.909 10.6146C22.3735 12.079 22.3735 14.4534 20.909 15.9179L15.9179 20.909C14.4534 22.3735 12.079 22.3735 10.6146 20.909L3.09835 13.3928C2.39509 12.6895 2 11.7357 2 10.7411V5.75ZM7.5 9C8.32843 9 9 8.32843 9 7.5C9 6.67157 8.32843 6 7.5 6C6.67157 6 6 6.67157 6 7.5C6 8.32843 6.67157 9 7.5 9Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 10.7411V5.75C2.75 4.09315 4.09315 2.75 5.75 2.75H10.7411C11.5368 2.75 12.2998 3.06607 12.8624 3.62868L20.3787 11.1449C21.5503 12.3165 21.5503 14.216 20.3787 15.3876L15.3876 20.3787C14.216 21.5503 12.3165 21.5503 11.1449 20.3787L3.62868 12.8624C3.06607 12.2998 2.75 11.5368 2.75 10.7411Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.25 7.5C8.25 7.91421 7.91421 8.25 7.5 8.25C7.08579 8.25 6.75 7.91421 6.75 7.5C6.75 7.08579 7.08579 6.75 7.5 6.75C7.91421 6.75 8.25 7.08579 8.25 7.5Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconTag;
