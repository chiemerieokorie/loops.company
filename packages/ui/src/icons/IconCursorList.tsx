import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCursorList: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="cursor-list, cursor, list">
		{variant === "filled" ? (
			<>
				<path
					d="M10 3.75C10 3.33579 10.3358 3 10.75 3H20.25C20.6642 3 21 3.33579 21 3.75C21 4.16421 20.6642 4.5 20.25 4.5H10.75C10.3358 4.5 10 4.16421 10 3.75Z"
					fill="currentColor"
				/>
				<path
					d="M15 7.75C15 7.33579 15.3358 7 15.75 7H20.25C20.6642 7 21 7.33579 21 7.75C21 8.16421 20.6642 8.5 20.25 8.5H15.75C15.3358 8.5 15 8.16421 15 7.75Z"
					fill="currentColor"
				/>
				<path
					d="M3.24075 9.97451C2.75025 8.58724 4.08675 7.25074 5.47402 7.74124L14.7488 11.0206C15.9623 11.4496 16.313 12.9978 15.4029 13.9079L12.9355 16.3753L17.2802 20.72C17.5731 21.0129 17.5731 21.4878 17.2802 21.7807C16.9873 22.0736 16.5124 22.0736 16.2195 21.7807L11.8748 17.436L9.40743 19.9034C8.4973 20.8135 6.94914 20.4628 6.52008 19.2493L3.24075 9.97451Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M20.25 3.75H10.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20.25 7.75H15.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11.875 16.375L14.8727 13.3773C15.3928 12.8572 15.1924 11.9725 14.499 11.7273L5.22416 8.44801C4.43144 8.16772 3.66772 8.93144 3.94801 9.72417L7.22734 18.999C7.47252 19.6924 8.35718 19.8928 8.87725 19.3727L11.875 16.375ZM11.875 16.375L16.75 21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCursorList;
