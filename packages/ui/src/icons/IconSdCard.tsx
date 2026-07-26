import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSdCard: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="sd-card, memory-stick">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M7.75 2C5.67893 2 4 3.67893 4 5.75V18.25C4 20.3211 5.67893 22 7.75 22H16.25C18.3211 22 20 20.3211 20 18.25V11.8491C20 11.1552 19.8074 10.4748 19.4437 9.88376L18.3338 8.08009C18.1155 7.72548 18 7.31726 18 6.90087V5.75C18 3.67893 16.3211 2 14.25 2H7.75ZM9.25 6C9.66421 6 10 6.33579 10 6.75V9.25C10 9.66421 9.66421 10 9.25 10C8.83579 10 8.5 9.66421 8.5 9.25V6.75C8.5 6.33579 8.83579 6 9.25 6ZM13.5 6.75C13.5 6.33579 13.1642 6 12.75 6C12.3358 6 12 6.33579 12 6.75V9.25C12 9.66421 12.3358 10 12.75 10C13.1642 10 13.5 9.66421 13.5 9.25V6.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M14.25 2.75H7.75C6.09315 2.75 4.75 4.09315 4.75 5.75V18.25C4.75 19.9069 6.09315 21.25 7.75 21.25H16.25C17.9069 21.25 19.25 19.9069 19.25 18.25V11.8491C19.25 11.2939 19.0959 10.7497 18.805 10.2768L17.695 8.47317C17.4041 8.00034 17.25 7.45605 17.25 6.90087V5.75C17.25 4.09315 15.9069 2.75 14.25 2.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.25 6.75V9.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.75 6.75V9.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSdCard;
