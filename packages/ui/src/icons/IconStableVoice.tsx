import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconStableVoice: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="stable-voice, stable-volume, voice-circle, voice-control"
	>
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM10.25 7C9.83579 7 9.5 7.33579 9.5 7.75V16.25C9.5 16.6642 9.83579 17 10.25 17C10.6642 17 11 16.6642 11 16.25V7.75C11 7.33579 10.6642 7 10.25 7ZM13.75 9C13.3358 9 13 9.33579 13 9.75V14.25C13 14.6642 13.3358 15 13.75 15C14.1642 15 14.5 14.6642 14.5 14.25V9.75C14.5 9.33579 14.1642 9 13.75 9ZM6.75 10C6.33579 10 6 10.3358 6 10.75V13.25C6 13.6642 6.33579 14 6.75 14C7.16421 14 7.5 13.6642 7.5 13.25V10.75C7.5 10.3358 7.16421 10 6.75 10ZM17.25 10C16.8358 10 16.5 10.3358 16.5 10.75V13.25C16.5 13.6642 16.8358 14 17.25 14C17.6642 14 18 13.6642 18 13.25V10.75C18 10.3358 17.6642 10 17.25 10Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<circle
					cx="12"
					cy="12"
					r="9.25"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M6.75 10.75V13.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10.25 7.75V16.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.75 9.75V14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.25 10.75V13.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconStableVoice;
