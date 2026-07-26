import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBookSimple: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="book-simple, guide, info, faq">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M6.75 2C5.23122 2 4 3.23122 4 4.75V19.25C4 20.7688 5.23122 22 6.75 22H16.25C18.3211 22 20 20.3211 20 18.25V5.75C20 3.67893 18.3211 2 16.25 2H6.75ZM5.5 19V19.25C5.5 19.9404 6.05964 20.5 6.75 20.5H16.25C17.4926 20.5 18.5 19.4926 18.5 18.25V16.7503C17.8733 17.221 17.0942 17.5 16.25 17.5H7C6.17157 17.5 5.5 18.1716 5.5 19Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M16.25 2.75H6.75C5.64543 2.75 4.75 3.64543 4.75 4.75V19.25C4.75 20.3546 5.64543 21.25 6.75 21.25H16.25C17.9069 21.25 19.25 19.9069 19.25 18.25V5.75C19.25 4.09315 17.9069 2.75 16.25 2.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBookSimple;
