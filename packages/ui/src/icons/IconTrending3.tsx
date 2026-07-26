import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconTrending3: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="trending-3, trends, upward">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M15 6.75C15 6.33579 15.3358 6 15.75 6H21.25C21.6642 6 22 6.33579 22 6.75V12.25C22 12.6642 21.6642 13 21.25 13C20.8358 13 20.5 12.6642 20.5 12.25V8.57067L15.5307 13.5329C14.1325 14.929 11.8675 14.9282 10.4704 13.531C9.65831 12.719 8.34168 12.719 7.52961 13.531L3.28033 17.7803C2.98744 18.0732 2.51256 18.0732 2.21967 17.7803C1.92678 17.4874 1.92678 17.0126 2.21967 16.7197L6.46895 12.4704C7.86681 11.0725 10.1332 11.0725 11.531 12.4704C12.3427 13.282 13.6585 13.2825 14.4708 12.4714L19.4494 7.5H15.75C15.3358 7.5 15 7.16421 15 6.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M15.75 6.75H21.25V12.25M20.7361 7.275L15.0007 13.0022C13.8955 14.1058 12.1051 14.1051 11.0007 13.0007C9.89575 11.8958 8.10425 11.8958 6.99928 13.0007L2.75 17.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconTrending3;
