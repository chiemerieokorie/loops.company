import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconChart2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="chart-2, statistics, flipchart, presentation, graph"
	>
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M1 3.75C1 3.33579 1.33579 3 1.75 3H22.25C22.6642 3 23 3.33579 23 3.75C23 4.16421 22.6642 4.5 22.25 4.5H21V14.25C21 16.3211 19.3211 18 17.25 18H13.4014L14.624 19.834C14.8538 20.1786 14.7607 20.6443 14.416 20.874C14.0714 21.1038 13.6057 21.0107 13.376 20.666L12 18.6021L10.624 20.666C10.3943 21.0107 9.92861 21.1038 9.58397 20.874C9.23932 20.6443 9.14619 20.1786 9.37596 19.834L10.5986 18H6.74999C4.67893 18 2.99999 16.3211 2.99999 14.25V4.5H1.75C1.33579 4.5 1 4.16421 1 3.75ZM12.75 7.75C12.75 7.33579 12.4142 7 12 7C11.5858 7 11.25 7.33579 11.25 7.75V13.25C11.25 13.6642 11.5858 14 12 14C12.4142 14 12.75 13.6642 12.75 13.25V7.75ZM16.5 9.75C16.5 9.33579 16.1642 9 15.75 9C15.3358 9 15 9.33579 15 9.75V13.25C15 13.6642 15.3358 14 15.75 14C16.1642 14 16.5 13.6642 16.5 13.25V9.75ZM9 11.75C9 11.3358 8.66421 11 8.25 11C7.83579 11 7.5 11.3358 7.5 11.75V13.25C7.5 13.6642 7.83579 14 8.25 14C8.66421 14 9 13.6642 9 13.25V11.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3.74999 3.75H20.25M3.74999 3.75V14.25C3.74999 15.9069 5.09314 17.25 6.74999 17.25H17.25C18.9069 17.25 20.25 15.9069 20.25 14.25V3.75M3.74999 3.75H23H20.25M3.74999 3.75H1"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 7.75V13.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.25 11.75V13.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.75 9.75V13.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.332 17.7506L13.9983 20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11.6662 17.7506L10 20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconChart2;
