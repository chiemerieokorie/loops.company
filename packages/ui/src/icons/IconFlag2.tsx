import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFlag2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="flag-2, priority">
		{variant === "filled" ? (
			<>
				<path
					d="M11.5455 15.7345C9.45546 15.1509 7.58124 14.7024 5.5 15.5655V21.2496C5.5 21.6638 5.16421 21.9996 4.75 21.9996C4.33579 21.9996 4 21.6638 4 21.2496V4.39872C4 3.74584 4.37163 3.093 5.04245 2.82695C7.52875 1.84088 9.76493 2.37886 11.7734 2.93538C11.9051 2.97188 12.0357 3.00836 12.1653 3.04455C14.0634 3.57485 15.7401 4.04331 17.5642 3.60129C18.6368 3.34137 20 4.04343 20 5.38675V14.4616C20 15.1144 19.6284 15.7673 18.9576 16.0333C16.3236 17.078 13.9537 16.4115 11.8464 15.8189C11.7455 15.7906 11.6452 15.7623 11.5455 15.7345Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 15.0831V4.39891C4.75 4.01841 4.96525 3.66459 5.31895 3.52431C9.78767 1.75201 13.3875 5.38531 17.7409 4.33038C18.4613 4.1558 19.25 4.64565 19.25 5.38694V14.4618C19.25 14.8423 19.0348 15.1961 18.6811 15.3363C13.7067 17.3092 9.809 12.5839 4.75 15.0831ZM4.75 15.0831V21.2498"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFlag2;
