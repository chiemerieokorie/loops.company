import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconChart1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="chart-1, statistics, flipchart, presentation, graph 2"
	>
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M2 6.75C2 4.67893 3.67893 3 5.75 3H18.25C20.3211 3 22 4.67893 22 6.75V15.25C22 17.3211 20.3211 19 18.25 19H15.9943L16.7211 21.544C16.8349 21.9422 16.6043 22.3573 16.206 22.4711C15.8078 22.5849 15.3927 22.3543 15.2789 21.956L14.4343 19H9.56573L8.72114 21.956C8.60735 22.3543 8.19224 22.5849 7.79396 22.4711C7.39568 22.3573 7.16506 21.9422 7.27886 21.544L8.0057 19H5.75C3.67893 19 2 17.3211 2 15.25V6.75ZM8.5 12.75C8.5 12.3358 8.16421 12 7.75 12C7.33579 12 7 12.3358 7 12.75V14.25C7 14.6642 7.33579 15 7.75 15C8.16421 15 8.5 14.6642 8.5 14.25V12.75ZM12 7C12.4142 7 12.75 7.33579 12.75 7.75V14.25C12.75 14.6642 12.4142 15 12 15C11.5858 15 11.25 14.6642 11.25 14.25V7.75C11.25 7.33579 11.5858 7 12 7ZM17 10.75C17 10.3358 16.6642 10 16.25 10C15.8358 10 15.5 10.3358 15.5 10.75V14.25C15.5 14.6642 15.8358 15 16.25 15C16.6642 15 17 14.6642 17 14.25V10.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M18.25 18.25C19.9069 18.25 21.25 16.9069 21.25 15.25V6.75C21.25 5.09315 19.9069 3.75 18.25 3.75H5.75C4.09315 3.75 2.75 5.09315 2.75 6.75V15.25C2.75 16.9069 4.09315 18.25 5.75 18.25H18.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.75 12.75V14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 7.75V14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.25 10.75V14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.85694 18.7507L8 21.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.1445 18.7507L16.0015 21.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconChart1;
