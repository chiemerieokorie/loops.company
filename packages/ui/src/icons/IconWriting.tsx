import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconWriting: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="writing, sketching, drawing">
		{variant === "filled" ? (
			<>
				<path
					d="M16.2197 3.71965C17.341 2.59833 19.159 2.59833 20.2803 3.71965C21.4016 4.84097 21.4017 6.65899 20.2803 7.78031L16.159 11.9016C15.4557 12.6049 14.5019 13 13.5074 13H11.75C11.3358 13 11 12.6642 11 12.25V10.4926C11 9.49806 11.3951 8.54423 12.0983 7.84097L16.2197 3.71965Z"
					fill="currentColor"
				/>
				<path
					d="M5.75 11.5C4.23122 11.5 3 12.7312 3 14.25C3 15.7688 4.23122 17 5.75 17H16.25C16.9404 17 17.5 17.5596 17.5 18.25C17.5 18.9404 16.9404 19.5 16.25 19.5H11.75C11.3358 19.5 11 19.8358 11 20.25C11 20.6642 11.3358 21 11.75 21H16.25C17.7688 21 19 19.7688 19 18.25C19 16.7312 17.7688 15.5 16.25 15.5H5.75C5.05964 15.5 4.5 14.9404 4.5 14.25C4.5 13.5596 5.05964 13 5.75 13H8.25C8.66421 13 9 12.6642 9 12.25C9 11.8358 8.66421 11.5 8.25 11.5H5.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M19.75 4.24998C18.9216 3.42156 17.5784 3.42156 16.75 4.24998L12.6287 8.3713C12.0661 8.93391 11.75 9.69697 11.75 10.4926V12.25H13.5074C14.303 12.25 15.0661 11.9339 15.6287 11.3713L19.75 7.24998C20.5784 6.42155 20.5784 5.07841 19.75 4.24998Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.25 12.25H5.75C4.64543 12.25 3.75 13.1454 3.75 14.25C3.75 15.3546 4.64543 16.25 5.75 16.25H16.25C17.3546 16.25 18.25 17.1454 18.25 18.25C18.25 19.3546 17.3546 20.25 16.25 20.25H11.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconWriting;
