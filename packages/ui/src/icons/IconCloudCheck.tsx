import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCloudCheck: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="cloud-check, save">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M1 14C1 17.3137 3.68629 20 7 20H17C20.3137 20 23 17.3137 23 14C23 11.342 21.2717 9.08774 18.8776 8.29963C18.5816 8.20219 18.3319 7.99536 18.1856 7.72017C17.0097 5.50705 14.6809 4 12 4C9.31914 4 6.99026 5.50705 5.81435 7.72017C5.66814 7.99536 5.41842 8.20219 5.12243 8.29963C2.72831 9.08774 1 11.342 1 14ZM15.5483 11.0117C15.8309 10.7089 15.8146 10.2343 15.5117 9.95171C15.2089 9.66908 14.7343 9.68545 14.4517 9.98826L10.3333 14.4008L8.54829 12.4883C8.26567 12.1854 7.79107 12.1691 7.48826 12.4517C7.18545 12.7343 7.16908 13.2089 7.45171 13.5117L9.78504 16.0117C9.92689 16.1637 10.1254 16.25 10.3333 16.25C10.5412 16.25 10.7398 16.1637 10.8816 16.0117L15.5483 11.0117Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M4.96941 18.89C3.08259 18.1254 1.75 16.259 1.75 14.0779C1.75 11.669 3.37554 9.64394 5.57797 9.06313C5.94417 8.96655 6.25476 8.71287 6.41185 8.36827C7.38551 6.23246 9.52154 4.75 12 4.75C14.4785 4.75 16.6145 6.23246 17.5882 8.36827C17.7452 8.71287 18.0558 8.96655 18.422 9.06313C20.6245 9.64394 22.25 11.669 22.25 14.0779C22.25 16.259 20.9174 18.1254 19.0306 18.89"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.75 17L11.25 19.75L16.25 14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCloudCheck;
