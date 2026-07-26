import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconLibrary: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="library, stuff, vinyl-records">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12.4396 3.06741C12.8167 2.89601 13.2614 3.06275 13.4328 3.43983L20.9328 19.9398C21.1042 20.3169 20.9374 20.7616 20.5604 20.933C20.1833 21.1044 19.7386 20.9376 19.5672 20.5605L12.0672 4.06054C11.8958 3.68345 12.0626 3.23881 12.4396 3.06741ZM3.75 3.00018C4.16421 3.00018 4.5 3.33597 4.5 3.75018V20.2502C4.5 20.6644 4.16421 21.0002 3.75 21.0002C3.33579 21.0002 3 20.6644 3 20.2502V3.75018C3 3.33597 3.33579 3.00018 3.75 3.00018ZM8.75 3.00018C9.16421 3.00018 9.5 3.33597 9.5 3.75018V20.2502C9.5 20.6644 9.16421 21.0002 8.75 21.0002C8.33579 21.0002 8 20.6644 8 20.2502V3.75018C8 3.33597 8.33579 3.00018 8.75 3.00018Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 3.75V20.25M8.75 3.75V20.25M12.75 3.75L20.25 20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconLibrary;
