import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPaperclip2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="paperclip-2, attachment">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M11.25 5.375C11.25 3.51104 12.761 2 14.625 2C16.489 2 18 3.51104 18 5.375V16C18 19.3137 15.3137 22 12 22C8.68629 22 6 19.3137 6 16V8.75C6 8.33579 6.33579 8 6.75 8C7.16421 8 7.5 8.33579 7.5 8.75V16C7.5 18.4853 9.51472 20.5 12 20.5C14.4853 20.5 16.5 18.4853 16.5 16V5.375C16.5 4.33947 15.6605 3.5 14.625 3.5C13.5895 3.5 12.75 4.33947 12.75 5.375V15.25C12.75 15.6642 12.4142 16 12 16C11.5858 16 11.25 15.6642 11.25 15.25V5.375Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M6.75 8.75V16C6.75 18.8995 9.10051 21.25 12 21.25C14.8995 21.25 17.25 18.8995 17.25 16V5.375C17.25 3.92525 16.0747 2.75 14.625 2.75C13.1753 2.75 12 3.92525 12 5.375V15.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPaperclip2;
