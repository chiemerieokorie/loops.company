import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconMorningBrief: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="morning-brief, daily-todo">
		{variant === "filled" ? (
			<>
				<path
					d="M5 19.25C5.55228 19.25 6 19.6977 6 20.25C6 20.8023 5.55228 21.25 5 21.25C4.44772 21.25 4 20.8023 4 20.25C4 19.6977 4.44772 19.25 5 19.25Z"
					fill="currentColor"
				/>
				<path
					d="M15.25 19.5C15.6642 19.5 16 19.8358 16 20.25C16 20.6642 15.6642 21 15.25 21H8.25C7.83579 21 7.5 20.6642 7.5 20.25C7.5 19.8358 7.83579 19.5 8.25 19.5H15.25Z"
					fill="currentColor"
				/>
				<path
					d="M5 15.25C5.55228 15.25 6 15.6977 6 16.25C6 16.8023 5.55228 17.25 5 17.25C4.44772 17.25 4 16.8023 4 16.25C4 15.6977 4.44772 15.25 5 15.25Z"
					fill="currentColor"
				/>
				<path
					d="M18.25 15.5C18.6642 15.5 19 15.8358 19 16.25C19 16.6642 18.6642 17 18.25 17H8.25C7.83579 17 7.5 16.6642 7.5 16.25C7.5 15.8358 7.83579 15.5 8.25 15.5H18.25Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M12 6.75C14.7831 6.75 17.0814 8.81737 17.4473 11.5H22.25C22.6642 11.5 23 11.8358 23 12.25C23 12.6642 22.6642 13 22.25 13H1.75C1.33579 13 1 12.6642 1 12.25C1 11.8358 1.33579 11.5 1.75 11.5H6.55273C6.91865 8.81737 9.21693 6.75 12 6.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					d="M4.22168 4.22168C4.51457 3.92879 4.98933 3.92879 5.28223 4.22168L7.0498 5.98926C7.3427 6.28215 7.3427 6.75691 7.0498 7.0498C6.75691 7.3427 6.28215 7.3427 5.98926 7.0498L4.22168 5.28223C3.92879 4.98933 3.92879 4.51457 4.22168 4.22168Z"
					fill="currentColor"
				/>
				<path
					d="M18.7178 4.22168C19.0107 3.92906 19.4855 3.92896 19.7783 4.22168C20.0709 4.51451 20.0709 4.9894 19.7783 5.28223L18.0107 7.0498C17.7179 7.34262 17.2431 7.34245 16.9502 7.0498C16.6574 6.7569 16.6573 6.28212 16.9502 5.98926L18.7178 4.22168Z"
					fill="currentColor"
				/>
				<path
					d="M12 1C12.4142 1 12.75 1.33579 12.75 1.75V4.25C12.75 4.66421 12.4142 5 12 5C11.5858 5 11.25 4.66421 11.25 4.25V1.75C11.25 1.33579 11.5858 1 12 1Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M12 1.75V4.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.2477 4.75195L17.48 6.51972"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.75195 4.75195L6.51972 6.51972"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.25 16.25H18.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.25 20.25H15.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M1.75 12.25H22.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle cx="5" cy="16.25" fill="currentColor" r="1" />
				<circle cx="5" cy="20.25" fill="currentColor" r="1" />
				<path
					d="M16.75 12.25C16.75 9.62665 14.6234 7.5 12 7.5C9.37665 7.5 7.25 9.62665 7.25 12.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconMorningBrief;
