import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconTrending6: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="trending-6, trends, downward">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M15 17.25C15 17.6642 15.3358 18 15.75 18H21.25C21.6642 18 22 17.6642 22 17.25V11.75C22 11.3358 21.6642 11 21.25 11C20.8358 11 20.5 11.3358 20.5 11.75V15.4293L15.5307 10.4671C14.1325 9.07099 11.8675 9.0718 10.4704 10.469C9.65831 11.281 8.34168 11.281 7.52961 10.469L3.28033 6.21967C2.98744 5.92678 2.51256 5.92678 2.21967 6.21967C1.92678 6.51256 1.92678 6.98744 2.21967 7.28033L6.46895 11.5296C7.86681 12.9275 10.1332 12.9275 11.531 11.5296C12.3427 10.718 13.6585 10.7175 14.4708 11.5286L19.4494 16.5H15.75C15.3358 16.5 15 16.8358 15 17.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M15.75 17.25H21.25V11.75M20.7361 16.725L15.0007 10.9978C13.8955 9.89424 12.1051 9.89488 11.0007 10.9993C9.89575 12.1042 8.10425 12.1042 6.99928 10.9993L2.75 6.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconTrending6;
