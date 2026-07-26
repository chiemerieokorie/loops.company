import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconLock: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="lock, private">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12 2.25C9.23858 2.25 7 4.48858 7 7.25V9.07501C5.28832 9.42247 4 10.9358 4 12.75V18.25C4 20.3211 5.67893 22 7.75 22H16.25C18.3211 22 20 20.3211 20 18.25V12.75C20 10.9358 18.7117 9.42247 17 9.07501V7.25C17 4.48858 14.7614 2.25 12 2.25ZM15.5 9V7.25C15.5 5.317 13.933 3.75 12 3.75C10.067 3.75 8.5 5.317 8.5 7.25V9H15.5ZM12 13.25C12.4142 13.25 12.75 13.5858 12.75 14V17C12.75 17.4142 12.4142 17.75 12 17.75C11.5858 17.75 11.25 17.4142 11.25 17V14C11.25 13.5858 11.5858 13.25 12 13.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M7.75 9.75H16.25M7.75 9.75C6.09315 9.75 4.75 11.0931 4.75 12.75V18.25C4.75 19.9069 6.09315 21.25 7.75 21.25H16.25C17.9069 21.25 19.25 19.9069 19.25 18.25V12.75C19.25 11.0931 17.9069 9.75 16.25 9.75M7.75 9.75V7.25C7.75 4.90279 9.65279 3 12 3C14.3472 3 16.25 4.90279 16.25 7.25V9.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 14V17"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconLock;
