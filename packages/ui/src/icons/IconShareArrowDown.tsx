import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconShareArrowDown: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="share-arrow-down, save">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12.75 1.75C12.75 1.33579 12.4142 1 12 1C11.5858 1 11.25 1.33579 11.25 1.75V4H6.75C4.67893 4 3 5.67893 3 7.75V17.25C3 19.3211 4.67893 21 6.75 21H17.25C19.3211 21 21 19.3211 21 17.25V7.75C21 5.67893 19.3211 4 17.25 4H12.75V1.75ZM12.75 4H11.25V13.1893L9.03033 10.9697C8.73744 10.6768 8.26256 10.6768 7.96967 10.9697C7.67678 11.2626 7.67678 11.7374 7.96967 12.0303L11.4697 15.5303C11.7626 15.8232 12.2374 15.8232 12.5303 15.5303L16.0303 12.0303C16.3232 11.7374 16.3232 11.2626 16.0303 10.9697C15.7374 10.6768 15.2626 10.6768 14.9697 10.9697L12.75 13.1893V4Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M16.75 4.75H17.25C18.9069 4.75 20.25 6.09315 20.25 7.75V17.25C20.25 18.9069 18.9069 20.25 17.25 20.25H6.75C5.09315 20.25 3.75 18.9069 3.75 17.25V7.75C3.75 6.09315 5.09315 4.75 6.75 4.75H7.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.5 11.5L12 15L15.5 11.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 15V1.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconShareArrowDown;
