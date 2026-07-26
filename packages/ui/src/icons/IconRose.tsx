import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconRose: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="rose, flower, romance, love">
		{variant === "filled" ? (
			<>
				<path
					d="M13.2424 2.27172C12.4603 1.88801 11.5398 1.88802 10.7577 2.27176C9.09123 3.08947 8.00681 4.17504 7.29395 5.60785C9.0373 5.85923 10.6429 6.53958 12 7.53645C13.3571 6.53955 14.9628 5.85919 16.7062 5.60783C15.9934 4.17501 14.909 3.08944 13.2424 2.27172Z"
					fill="currentColor"
				/>
				<path
					d="M7.44478 7.26379C5.54548 7.05744 4 8.77705 4 10.75V11.9583C4 16.1418 7.18013 19.585 11.25 19.9651V21.25C11.25 21.6642 11.5858 22 12 22C12.4142 22 12.75 21.6642 12.75 21.25V14.25C12.75 10.9196 10.5044 8.11369 7.44478 7.26379Z"
					fill="currentColor"
				/>
				<path
					d="M14.25 19.6777C17.5749 18.7002 20 15.6115 20 11.9583V10.75C20 8.67893 18.297 6.88702 16.2694 7.30908C14.9307 7.58774 13.6706 8.10211 12.5229 9.02982C13.6079 10.4871 14.25 12.2936 14.25 14.25V19.6777Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M12 9.5712C14.1966 12.0742 14.0714 15.0987 14.0714 18.2083M12 9.5712C10.7979 8.2014 9.33628 7.43858 7.72725 7.06114C6.11418 6.68275 4.75 8.09315 4.75 9.75V11.9583C4.75 15.9854 7.99594 19.25 12 19.25C16.0041 19.25 19.25 15.9854 19.25 11.9583V9.75C19.25 8.09315 17.8858 6.68275 16.2728 7.06114C14.6637 7.43858 13.2021 8.2014 12 9.5712Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 19.25V21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.75 6.80624C8.65719 5.14618 9.70151 3.59372 11.2909 2.89808C11.742 2.70064 12.258 2.70064 12.7091 2.89808C14.2985 3.59372 15.3428 5.14618 16.25 6.80624"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconRose;
