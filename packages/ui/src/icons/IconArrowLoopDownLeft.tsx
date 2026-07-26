import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowLoopDownLeft: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="arrow-loop-down-left, restore, reset">
		{variant === "filled" ? (
			<>
				<path
					d="M12.4999 3C16.6421 3.00003 19.9999 6.35788 19.9999 10.5V11C19.9999 14.866 16.8659 18 12.9999 18C12.5857 18 12.2499 17.6642 12.2499 17.25C12.2499 16.8358 12.5857 16.5 12.9999 16.5C16.0375 16.5 18.4999 14.0375 18.4999 11V10.5C18.4999 7.18631 15.8136 4.50003 12.4999 4.5C9.18624 4.5 6.49994 7.18629 6.49994 10.5V18.4395L8.96967 15.9697C9.26257 15.6769 9.73733 15.6768 10.0302 15.9697C10.3231 16.2626 10.3231 16.7374 10.0302 17.0303L6.28022 20.7803C5.98733 21.0732 5.51257 21.0731 5.21967 20.7803L1.46967 17.0303C1.17678 16.7374 1.17678 16.2626 1.46967 15.9697C1.76257 15.6769 2.23733 15.6768 2.53022 15.9697L4.99994 18.4395V10.5C4.99994 6.35786 8.35781 3 12.4999 3Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M13 17.25C16.4518 17.25 19.25 14.4518 19.25 11V10.5C19.25 6.77208 16.2279 3.75 12.5 3.75C8.77208 3.75 5.75 6.77208 5.75 10.5V20"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M2 16.5L5.75 20.25L9.5 16.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowLoopDownLeft;
