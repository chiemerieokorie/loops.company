import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSpeaker: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="speaker, music, sound">
		{variant === "filled" ? (
			<>
				<path
					d="M12 11.5C10.4812 11.5 9.25 12.7312 9.25 14.25C9.25 15.7688 10.4812 17 12 17C13.5188 17 14.75 15.7688 14.75 14.25C14.75 12.7312 13.5188 11.5 12 11.5Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M7.75 2C5.67893 2 4 3.67893 4 5.75V18.25C4 20.3211 5.67893 22 7.75 22H16.25C18.3211 22 20 20.3211 20 18.25V5.75C20 3.67893 18.3211 2 16.25 2H7.75ZM7.75 14.25C7.75 11.9028 9.65279 10 12 10C14.3472 10 16.25 11.9028 16.25 14.25C16.25 16.5972 14.3472 18.5 12 18.5C9.65279 18.5 7.75 16.5972 7.75 14.25ZM9.75 6C9.33579 6 9 6.33579 9 6.75C9 7.16421 9.33579 7.5 9.75 7.5H14.25C14.6642 7.5 15 7.16421 15 6.75C15 6.33579 14.6642 6 14.25 6H9.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 5.75C4.75 4.09315 6.09315 2.75 7.75 2.75H16.25C17.9069 2.75 19.25 4.09315 19.25 5.75V18.25C19.25 19.9069 17.9069 21.25 16.25 21.25H7.75C6.09315 21.25 4.75 19.9069 4.75 18.25V5.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.5 14.25C15.5 16.183 13.933 17.75 12 17.75C10.067 17.75 8.5 16.183 8.5 14.25C8.5 12.317 10.067 10.75 12 10.75C13.933 10.75 15.5 12.317 15.5 14.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.75 6.75H14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSpeaker;
