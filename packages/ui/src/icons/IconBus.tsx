import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBus: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="bus, school-bus">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M5.75 3C4.23122 3 3 4.23122 3 5.75V7H1.75C1.33579 7 1 7.33579 1 7.75C1 8.16421 1.33579 8.5 1.75 8.5H3V12.5H21V8.5H22.25C22.6642 8.5 23 8.16421 23 7.75C23 7.33579 22.6642 7 22.25 7H21V5.75C21 4.23122 19.7688 3 18.25 3H5.75ZM9 5.25C9 5.66421 9.33579 6 9.75 6H14.25C14.6642 6 15 5.66421 15 5.25C15 4.83579 14.6642 4.5 14.25 4.5H9.75C9.33579 4.5 9 4.83579 9 5.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M4.75 21C3.7835 21 3 20.2165 3 19.25V14H21V19.25C21 20.2165 20.2165 21 19.25 21H17.25C16.2835 21 15.5 20.2165 15.5 19.25V19H8.5V19.25C8.5 20.2165 7.7165 21 6.75 21H4.75ZM6 16.25C6 16.6642 6.33579 17 6.75 17H8.25C8.66421 17 9 16.6642 9 16.25C9 15.8358 8.66421 15.5 8.25 15.5H6.75C6.33579 15.5 6 15.8358 6 16.25ZM18 16.25C18 16.6642 17.6642 17 17.25 17H15.75C15.3358 17 15 16.6642 15 16.25C15 15.8358 15.3358 15.5 15.75 15.5H17.25C17.6642 15.5 18 15.8358 18 16.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M6.75 20.25H4.75C4.19772 20.25 3.75 19.8023 3.75 19.25V6.75C3.75 5.09315 5.09315 3.75 6.75 3.75H17.25C18.9069 3.75 20.25 5.09315 20.25 6.75V19.25C20.25 19.8023 19.8023 20.25 19.25 20.25H17.25C16.6977 20.25 16.25 19.8023 16.25 19.25V18.25H7.75V19.25C7.75 19.8023 7.30228 20.25 6.75 20.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4 12.25H20"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.75 15.25H8.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.75 15.25H17.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M1.75 7.75L3.70959 7.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20.5 7.75H22.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.75 6.25H14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBus;
