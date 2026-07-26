import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconWarningSign: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="warning-sign,attention,coution">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M9.1098 3C7.37905 3 5.87312 4.18447 5.46536 5.8665L2.02129 20.0733C1.9237 20.4759 2.17092 20.8813 2.57347 20.9789C2.97603 21.0765 3.38147 20.8293 3.47906 20.4267L4.18856 17.5H13.1451L12.5213 20.0733C12.4237 20.4759 12.6709 20.8813 13.0735 20.9789C13.476 21.0765 13.8815 20.8293 13.9791 20.4267L14.6886 17.5H19.8118L20.5213 20.4267C20.6189 20.8293 21.0243 21.0765 21.4269 20.9789C21.8294 20.8813 22.0767 20.4759 21.9791 20.0733L18.535 5.8665C18.1272 4.18447 16.6213 3 14.8906 3H9.1098ZM17.2496 6.93098C17.2435 6.9592 17.2371 6.98744 17.2302 7.0157L15.0522 16H19.4481L17.2496 6.93098Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 20.25L6.19407 6.0432C6.52028 4.69758 7.72503 3.75 9.10962 3.75H14.0715M14.0715 3.75H14.8904C16.275 3.75 17.4797 4.69758 17.8059 6.0432L21.25 20.25M14.0715 3.75C15.6906 3.75 16.8826 5.26551 16.5012 6.839L14.0985 16.75M13.25 20.25L14.0985 16.75M14.0985 16.75H4M14.0985 16.75H20"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconWarningSign;
