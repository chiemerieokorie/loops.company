import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconTestTube: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="test-tube">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12.72 3.21967C13.0129 2.92678 13.4878 2.92678 13.7807 3.21967L20.7807 10.2197C21.0736 10.5126 21.0736 10.9874 20.7807 11.2803C20.4878 11.5732 20.0129 11.5732 19.72 11.2803L19.2504 10.8107L9.28071 20.7803C7.6071 22.4539 4.89365 22.4539 3.22005 20.7803C1.54644 19.1067 1.54644 16.3933 3.22005 14.7197L13.1897 4.75L12.72 4.28033C12.4272 3.98744 12.4272 3.51256 12.72 3.21967ZM14.2504 5.81066L8.06104 12H15.9397L18.1897 9.75L14.2504 5.81066Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					d="M21.0039 6C21.0039 6.55228 20.5562 7 20.0039 7C19.4516 7 19.0039 6.55228 19.0039 6C19.0039 5.44772 19.4516 5 20.0039 5C20.5562 5 21.0039 5.44772 21.0039 6Z"
					fill="currentColor"
				/>
				<path
					d="M20.0039 2.5C20.0039 3.32843 19.3323 4 18.5039 4C17.6755 4 17.0039 3.32843 17.0039 2.5C17.0039 1.67157 17.6755 1 18.5039 1C19.3323 1 20.0039 1.67157 20.0039 2.5Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M13.2504 3.75L14.2504 4.75M14.2504 4.75L19.2504 9.75M14.2504 4.75L3.75038 15.25C2.36967 16.6307 2.36966 18.8693 3.75038 20.25C5.13109 21.6307 7.36967 21.6307 8.75038 20.25L19.2504 9.75M19.2504 9.75L20.2504 10.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.73828 12.75H15.7344"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.25 2.5C19.25 2.91421 18.9142 3.25 18.5 3.25C18.0858 3.25 17.75 2.91421 17.75 2.5C17.75 2.08579 18.0858 1.75 18.5 1.75C18.9142 1.75 19.25 2.08579 19.25 2.5Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20 6.25C20.1381 6.25 20.25 6.13807 20.25 6C20.25 5.86193 20.1381 5.75 20 5.75C19.8619 5.75 19.75 5.86193 19.75 6C19.75 6.13807 19.8619 6.25 20 6.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20 6.00023V5.99023"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconTestTube;
