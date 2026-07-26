import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconThread: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="thread">
		{variant === "filled" ? (
			<>
				<path
					d="M11.9688 1.5C12.8555 1.5 13.5954 2.14783 13.7286 3H19.25C19.6642 3 20 3.33579 20 3.75C20 4.16421 19.6642 4.5 19.25 4.5H19V9.86393L5 7.53125V4.5H4.75C4.33579 4.5 4 4.16421 4 3.75C4 3.33579 4.33579 3 4.75 3H10.2089C10.3421 2.14783 11.082 1.5 11.9688 1.5Z"
					fill="currentColor"
				/>
				<path
					d="M5 9.05176L19 11.3844V14.8638L5 12.5311V9.05176Z"
					fill="currentColor"
				/>
				<path
					d="M5 14.0518V19.4998H4.75C4.33579 19.4998 4 19.8356 4 20.2498C4 20.664 4.33579 20.9998 4.75 20.9998H10.2052C10.3265 21.8479 11.0559 22.4998 11.9375 22.4998H12C12.8816 22.4998 13.611 21.8479 13.7323 20.9998H19.25C19.6642 20.9998 20 20.664 20 20.2498C20 19.8356 19.6642 19.4998 19.25 19.4998H19V16.3844L5 14.0518Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M5.75 8.4079V3.75H10.9375H13H18.25V10.4605V15.5921V20.25H13H10.9375H5.75V13.5395V8.4079Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.75 3.75H5.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.75 8.4082L18.25 10.4608"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.75 13.5391L18.25 15.5917L21.25 16.0996"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.75 20.25H5.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18.25 3.75H19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18.25 20.25H19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10.9375 3.75V3.27632C10.9375 2.7095 11.3992 2.25 11.9688 2.25C12.5383 2.25 13 2.7095 13 3.27632V3.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10.9375 20.25V20.75C10.9375 21.3023 11.3852 21.75 11.9375 21.75H12C12.5523 21.75 13 21.3023 13 20.75V20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconThread;
