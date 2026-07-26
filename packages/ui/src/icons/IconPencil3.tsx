import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPencil3: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="pencil-3, edit, write, prompt">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M14.5425 3.54224C16.1755 1.9093 18.8234 1.90955 20.4566 3.54224C22.0897 5.17538 22.0896 7.82313 20.4566 9.4563L10.3696 19.5442C9.79434 20.1194 9.0568 20.5051 8.25636 20.6506L3.67823 21.4827C3.35551 21.5412 3.02442 21.4382 2.79249 21.2063C2.5608 20.9743 2.4575 20.6432 2.51612 20.3206L3.34815 15.7424C3.49374 14.9421 3.87944 14.2044 4.4546 13.6292L14.5425 3.54224ZM18.0308 5.96997C17.7379 5.67708 17.2631 5.67708 16.9702 5.96997L13.9702 8.96997C13.6776 9.26289 13.6774 9.73771 13.9702 10.0305C14.263 10.3231 14.7379 10.3231 15.0308 10.0305L18.0308 7.03052C18.3236 6.7377 18.3234 6.26288 18.0308 5.96997Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M15.0294 3.82353L4.95922 13.8937C4.51709 14.3359 4.22415 14.9051 4.12136 15.5218L3.25 20.75L8.47816 19.8786C9.09492 19.7758 9.66415 19.4829 10.1063 19.0408L20.1765 8.97059C21.5978 7.54927 21.5978 5.24485 20.1765 3.82353C18.7552 2.40221 16.4507 2.40221 15.0294 3.82353Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.5 6.5L14.5 9.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPencil3;
