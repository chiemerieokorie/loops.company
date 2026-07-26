import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconMouse: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="mouse">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9ZM12.75 6.75C12.75 6.33579 12.4142 6 12 6C11.5858 6 11.25 6.33579 11.25 6.75V8.75C11.25 9.16421 11.5858 9.5 12 9.5C12.4142 9.5 12.75 9.16421 12.75 8.75V6.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M12 6.75V8.75M12 21.25C8.54822 21.25 5.75 18.4518 5.75 15V9C5.75 5.54822 8.54822 2.75 12 2.75C15.4518 2.75 18.25 5.54822 18.25 9V15C18.25 18.4518 15.4518 21.25 12 21.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconMouse;
