import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconTeam: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="team, group, people, community, users">
		{variant === "filled" ? (
			<>
				<path
					d="M12.0019 12C15.3156 12 18.0019 14.1863 18.0019 17.5C18.0019 18.8807 16.8826 20 15.5019 20H8.50191C7.1212 20 6.00191 18.8807 6.00191 17.5C6.00191 14.1863 8.6882 12 12.0019 12Z"
					fill="currentColor"
				/>
				<path
					d="M6.41304 13C5.22507 14.327 4.50191 16.0788 4.50191 18V19H2.75191C1.09506 19 -0.365299 17.6068 0.190502 16.046C0.913597 14.0153 2.52695 13 5.00191 13H6.41304Z"
					fill="currentColor"
				/>
				<path
					d="M19.0019 13C21.4769 13 23.0902 14.0153 23.8133 16.046C24.3691 17.6068 22.9088 19 21.2519 19H19.5019V18C19.5019 16.0788 18.7787 14.327 17.5908 13H19.0019Z"
					fill="currentColor"
				/>
				<path
					d="M4.50191 6.25C6.0207 6.25 7.25191 7.48122 7.25191 9C7.25191 10.5188 6.0207 11.75 4.50191 11.75C2.98313 11.75 1.75191 10.5188 1.75191 9C1.75191 7.48122 2.98313 6.25 4.50191 6.25Z"
					fill="currentColor"
				/>
				<path
					d="M19.5019 6.25C21.0207 6.25 22.2519 7.48122 22.2519 9C22.2519 10.5188 21.0207 11.75 19.5019 11.75C17.9831 11.75 16.7519 10.5188 16.7519 9C16.7519 7.48122 17.9831 6.25 19.5019 6.25Z"
					fill="currentColor"
				/>
				<path
					d="M12.0019 3.5C13.9349 3.5 15.5019 5.067 15.5019 7C15.5019 8.933 13.9349 10.5 12.0019 10.5C10.0689 10.5 8.50191 8.933 8.50191 7C8.50191 5.067 10.0689 3.5 12.0019 3.5Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<circle
					cx="12"
					cy="7"
					r="2.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="4.5"
					cy="9"
					r="2"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="19.5"
					cy="9"
					r="2"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11.5561 12.25H12.4445C14.8102 12.25 16.8545 13.9026 17.3502 16.2159C17.6848 17.7774 16.4944 19.25 14.8973 19.25H9.10327C7.50618 19.25 6.31572 17.7774 6.65041 16.2157C7.14616 13.9026 9.19043 12.25 11.5561 12.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75169 18.2498H3.10161C-1.49816 18.2498 1.69299 13.812 4.50169 13.812"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20.2617 18.2498H20.9118C25.5116 18.2498 22.3204 13.812 19.5117 13.812"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconTeam;
