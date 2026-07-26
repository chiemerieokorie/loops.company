import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconTape2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="tape-2, cassette, record, music">
		{variant === "filled" ? (
			<>
				<path
					d="M12.9062 9C12.6503 9.44158 12.501 9.95294 12.501 10.5C12.501 11.047 12.6503 11.5584 12.9062 12H11.0938C11.3495 11.5587 11.4988 11.0477 11.499 10.501C11.499 9.95382 11.3497 9.44166 11.0938 9H12.9062Z"
					fill="currentColor"
				/>
				<path
					d="M8.50098 9.00195C9.32815 9.00248 9.99902 9.67368 9.99902 10.501C9.9985 11.3278 9.32782 11.9985 8.50098 11.999C7.67368 11.999 7.00248 11.3281 7.00195 10.501C7.00195 9.67336 7.67336 9.00195 8.50098 9.00195Z"
					fill="currentColor"
				/>
				<path
					d="M15.5 9.00098C16.3276 9.00111 16.999 9.67233 16.999 10.5C16.9989 11.3276 16.3276 11.9989 15.5 11.999C14.6724 11.9989 14.0011 11.3276 14.001 10.5C14.001 9.67233 14.6724 9.00111 15.5 9.00098Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M18.25 4C20.3211 4 22 5.67893 22 7.75V16.25C22 18.3211 20.3211 20 18.25 20H5.75C3.67893 20 2 18.3211 2 16.25V7.75C2 5.67893 3.67893 4 5.75 4H18.25ZM8.61816 16C7.86064 16 7.1679 16.4279 6.8291 17.1055L6.3291 18.1055C6.26418 18.2353 6.21533 18.3674 6.18066 18.5H17.8193C17.7847 18.3674 17.7358 18.2353 17.6709 18.1055L17.1709 17.1055C16.8321 16.4279 16.1394 16 15.3818 16H8.61816ZM8.5 7.5C6.84315 7.5 5.5 8.84315 5.5 10.5C5.5 12.1569 6.84315 13.5 8.5 13.5H15.501C17.1576 13.4997 18.501 12.1567 18.501 10.5C18.501 8.84335 17.1575 7.50033 15.501 7.5H8.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 7.75C2.75 6.09315 4.09315 4.75 5.75 4.75H18.25C19.9069 4.75 21.25 6.09315 21.25 7.75V16.25C21.25 17.9069 19.9069 19.25 18.25 19.25H5.75C4.09315 19.25 2.75 17.9069 2.75 16.25V7.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.25 10.5C6.25 9.25736 7.25736 8.25 8.5 8.25H15.5007C16.7434 8.25 17.7507 9.25736 17.7507 10.5C17.7507 11.7426 16.7434 12.75 15.5007 12.75H8.5C7.25736 12.75 6.25 11.7426 6.25 10.5Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.4805 16.9622C7.79566 16.2268 8.51874 15.75 9.31879 15.75H14.6812C15.4813 15.75 16.2043 16.2268 16.5195 16.9622L17.5 19.25H6.5L7.4805 16.9622Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<rect
					height="4.49707"
					rx="2.24854"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					width="4.49707"
					x="6.25195"
					y="8.25146"
				/>
				<rect
					height="4.49756"
					rx="2.24878"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					width="4.49756"
					x="13.252"
					y="8.25098"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconTape2;
