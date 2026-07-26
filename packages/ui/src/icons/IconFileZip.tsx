import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFileZip: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="file-zip">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12.5 5.75V2H7.75C5.67893 2 4 3.67893 4 5.75V18.25C4 20.3211 5.67893 22 7.75 22H8V20.5H9.5V22H16.25C18.3211 22 20 20.3211 20 18.25V9.5H16.25C14.1789 9.5 12.5 7.82107 12.5 5.75ZM9.5 19V20.5H11V19H9.5ZM9.5 17.5H8V19H9.5V17.5ZM9.5 16V17.5H11V16H9.5ZM9.5 14.5H8V16H9.5V14.5ZM9.5 13V14.5H11V13H9.5ZM9.5 13V11.5H8V13H9.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					d="M14 5.75V2.14941C14.2348 2.24683 14.4506 2.38998 14.6339 2.57322L19.4268 7.36612C19.61 7.54936 19.7532 7.7652 19.8506 8H16.25C15.0074 8 14 6.99264 14 5.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M13.25 2.75H7.75C6.09315 2.75 4.75 4.09315 4.75 5.75V18.25C4.75 19.9069 6.09315 21.25 7.75 21.25H16.25C17.9069 21.25 19.25 19.9069 19.25 18.25V8.75M13.25 2.75V5.75C13.25 7.40685 14.5931 8.75 16.25 8.75H19.25M13.25 2.75C13.5701 2.75 13.8772 2.87718 14.1036 3.10355L18.8964 7.89645C19.1228 8.12282 19.25 8.42986 19.25 8.75M8.75 19V17.5M10.25 17.5V16M8.75 16V14.5M10.25 20.5V19M10.25 14.5V13M8.75 13V11.5"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFileZip;
