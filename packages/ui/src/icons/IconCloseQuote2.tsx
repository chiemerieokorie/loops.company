import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCloseQuote2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="close-quote-2, blockquote">
		{variant === "filled" ? (
			<>
				<path
					d="M5.75 4C3.67893 4 2 5.67893 2 7.75V10.0357C2 12.0228 3.54549 13.6489 5.5 13.7775V19.25C5.5 19.4975 5.62214 19.7291 5.82641 19.8689C6.29407 20.189 6.84771 19.8183 7.25254 19.5825C7.66787 19.3405 8.21967 18.9655 8.77247 18.4287C9.88719 17.3463 11 15.608 11 13.0357V7.74972C11 5.67856 9.32098 4 7.25 4H5.75Z"
					fill="currentColor"
				/>
				<path
					d="M16.75 4C14.6789 4 13 5.67893 13 7.75V10.0357C13 12.0228 14.5455 13.6489 16.5 13.7775V19.25C16.5 19.4975 16.6221 19.7291 16.8264 19.8689C17.2941 20.189 17.8477 19.8183 18.2525 19.5825C18.6679 19.3405 19.2197 18.9655 19.7725 18.4287C20.8872 17.3463 22 15.608 22 13.0357V7.74972C22 5.67856 20.321 4 18.25 4H16.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M7.25 4.75H5.75C4.09315 4.75 2.75 6.09314 2.75 7.75V10.0357C2.75 11.6926 4.09315 13.0357 5.75 13.0357H6.25V19.25C6.25 19.25 10.25 17.6964 10.25 13.0357V7.74972C10.25 6.09287 8.90685 4.75 7.25 4.75Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18.25 4.75H16.75C15.0931 4.75 13.75 6.09314 13.75 7.75V10.0357C13.75 11.6926 15.0931 13.0357 16.75 13.0357H17.25V19.25C17.25 19.25 21.25 17.6964 21.25 13.0357V7.74972C21.25 6.09287 19.9069 4.75 18.25 4.75Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCloseQuote2;
