import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconStreaming: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="streaming, live, stream">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M2 7.75C2 5.67893 3.67893 4 5.75 4H18.25C20.3211 4 22 5.67893 22 7.75V16.25C22 18.3211 20.3211 20 18.25 20H5.75C3.67893 20 2 18.3211 2 16.25V7.75ZM17.75 9.5C18.4404 9.5 19 8.94036 19 8.25C19 7.55964 18.4404 7 17.75 7C17.0596 7 16.5 7.55964 16.5 8.25C16.5 8.94036 17.0596 9.5 17.75 9.5ZM14.5 11C14.5 12.3807 13.3807 13.5 12 13.5C10.6193 13.5 9.5 12.3807 9.5 11C9.5 9.61929 10.6193 8.5 12 8.5C13.3807 8.5 14.5 9.61929 14.5 11ZM7.64872 17.7691C8.09496 16.5621 9.54538 15 12 15C14.4546 15 15.905 16.5621 16.3513 17.7691C16.4949 18.1576 16.1642 18.5 15.75 18.5H8.25C7.83579 18.5 7.50509 18.1576 7.64872 17.7691Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M14.5 10.75C14.5 12.1307 13.3807 13.25 12 13.25C10.6193 13.25 9.5 12.1307 9.5 10.75C9.5 9.36929 10.6193 8.25 12 8.25C13.3807 8.25 14.5 9.36929 14.5 10.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.75 19C7.95907 16.8976 9.62555 15.25 12 15.25C14.3744 15.25 16.0409 16.8976 16.25 19"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M21.25 7.75C21.25 6.09315 19.9069 4.75 18.25 4.75H5.75C4.09315 4.75 2.75 6.09315 2.75 7.75V16.25C2.75 17.9069 4.09315 19.25 5.75 19.25H18.25C19.9069 19.25 21.25 17.9069 21.25 16.25V7.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18.25 8.25C18.25 8.52614 18.0261 8.75 17.75 8.75C17.4739 8.75 17.25 8.52614 17.25 8.25C17.25 7.97386 17.4739 7.75 17.75 7.75C18.0261 7.75 18.25 7.97386 18.25 8.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.5 8.25H18"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconStreaming;
