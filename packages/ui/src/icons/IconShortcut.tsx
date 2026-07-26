import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconShortcut: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="shortcut, hotkey, powerkey, skill">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M17.25 3C19.3211 3 21 4.67893 21 6.75V17.25C21 19.3211 19.3211 21 17.25 21H6.75C4.67893 21 3 19.3211 3 17.25V6.75C3 4.67893 4.67893 3 6.75 3H17.25ZM13.3652 7.8291C13.508 7.30557 12.8313 6.96125 12.4922 7.38477L8.64941 12.1875C8.38774 12.5148 8.62101 12.9998 9.04004 13H11.5L10.6348 16.1709C10.492 16.6944 11.1687 17.0388 11.5078 16.6152L15.3506 11.8125C15.6123 11.4852 15.379 11.0002 14.96 11H12.5L13.3652 7.8291Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M17.25 3.75H6.75C5.09315 3.75 3.75 5.09315 3.75 6.75V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H17.25C18.9069 20.25 20.25 18.9069 20.25 17.25V6.75C20.25 5.09315 18.9069 3.75 17.25 3.75Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.4997 11.0001H14.9594C15.3786 11.0001 15.6117 11.485 15.3498 11.8124L11.5076 16.6151C11.1686 17.0389 10.492 16.6948 10.6348 16.1712L11.4997 13.0001H9.04C8.62075 13.0001 8.38766 12.5151 8.64957 12.1877L12.4917 7.385C12.8308 6.9612 13.5073 7.3053 13.3645 7.82891L12.4997 11.0001Z"
					fill="currentColor"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconShortcut;
