import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArchive1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="archive-1, inbox, file">
		{variant === "filled" ? (
			<>
				<path
					d="M2.75 3C2.33579 3 2 3.33579 2 3.75V6.25C2 6.66421 2.33579 7 2.75 7H21.25C21.6642 7 22 6.66421 22 6.25V3.75C22 3.33579 21.6642 3 21.25 3H2.75Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M21 8.5H3L3 15.4821C2.99999 16.2949 2.99999 16.9506 3.04336 17.4815C3.08803 18.0281 3.18239 18.5082 3.40873 18.9525C3.76825 19.6581 4.34193 20.2318 5.04754 20.5913C5.49175 20.8176 5.9719 20.912 6.51853 20.9566C7.04944 21 7.70505 21 8.51788 21H15.4821C16.295 21 16.9506 21 17.4815 20.9566C18.0281 20.912 18.5082 20.8176 18.9525 20.5913C19.6581 20.2318 20.2318 19.6581 20.5913 18.9525C20.8176 18.5082 20.912 18.0281 20.9566 17.4815C21 16.9506 21 16.295 21 15.4821V8.5ZM9.25 11.75C9.25 11.3358 9.58579 11 10 11H14C14.4142 11 14.75 11.3358 14.75 11.75C14.75 12.1642 14.4142 12.5 14 12.5H10C9.58579 12.5 9.25 12.1642 9.25 11.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M20.25 7.75V15.45C20.25 17.1302 20.25 17.9702 19.923 18.612C19.6354 19.1765 19.1765 19.6354 18.612 19.923C17.9702 20.25 17.1302 20.25 15.45 20.25H8.55C6.86984 20.25 6.02976 20.25 5.38803 19.923C4.82354 19.6354 4.3646 19.1765 4.07698 18.612C3.75 17.9702 3.75 17.1302 3.75 15.45V7.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M2.75 3.75H21.25V7.75H2.75V3.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10 11.75H14"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArchive1;
