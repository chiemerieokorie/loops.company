import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconWrite: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="write, edit-list, list">
		{variant === "filled" ? (
			<>
				<path
					d="M3.75 3C3.33579 3 3 3.33579 3 3.75C3 4.16421 3.33579 4.5 3.75 4.5H20.25C20.6642 4.5 21 4.16421 21 3.75C21 3.33579 20.6642 3 20.25 3H3.75Z"
					fill="currentColor"
				/>
				<path
					d="M14.6994 9.22643C16.1006 7.82524 18.3724 7.82524 19.7736 9.22643C21.1748 10.6276 21.1748 12.8994 19.7736 14.3006L12.2938 21.7803C12.1532 21.921 11.9624 22 11.7635 22H7.75C7.33579 22 7 21.6642 7 21.25V17.2365C7 17.0376 7.07902 16.8468 7.21967 16.7062L14.6994 9.22643Z"
					fill="currentColor"
				/>
				<path
					d="M3 7.75C3 7.33579 3.33579 7 3.75 7H10.25C10.6642 7 11 7.33579 11 7.75C11 8.16421 10.6642 8.5 10.25 8.5H3.75C3.33579 8.5 3 8.16421 3 7.75Z"
					fill="currentColor"
				/>
				<path
					d="M3.75 11C3.33579 11 3 11.3358 3 11.75C3 12.1642 3.33579 12.5 3.75 12.5H7.2522C7.66641 12.5 8.0022 12.1642 8.0022 11.75C8.0022 11.3358 7.66641 11 7.2522 11H3.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M7.75 21.25H11.7635L19.2432 13.7703C20.3515 12.662 20.3515 10.8651 19.2432 9.75676C18.1349 8.64846 16.338 8.64846 15.2297 9.75676L7.75 17.2365V21.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 3.75H20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 7.75H10.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 11.75H7.2522"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconWrite;
