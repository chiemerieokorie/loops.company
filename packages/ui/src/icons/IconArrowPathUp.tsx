import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowPathUp: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="arrow-path-up">
		{variant === "filled" ? (
			<>
				<path
					d="M4.36309 8.94702C3.68147 9.76057 4.25989 10.9998 5.32124 10.9998H8.00002V18.2498C8.00002 20.3209 9.67896 21.9998 11.75 21.9998H12.25C14.3211 21.9998 16 20.3209 16 18.2498V10.9998H18.6788C19.7402 10.9998 20.3186 9.76057 19.637 8.94703L13.7247 1.89046C12.8254 0.817116 11.1746 0.817112 10.2754 1.89045L4.36309 8.94702Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M12.2501 21.2498H11.7501C10.0932 21.2498 8.75005 19.9067 8.75005 18.2498V10.2498H5.32127C4.89673 10.2498 4.66536 9.75411 4.93801 9.42869L10.8503 2.37212C11.4498 1.65656 12.5503 1.65656 13.1498 2.37212L19.0621 9.42869C19.3347 9.75411 19.1034 10.2498 18.6788 10.2498H15.2501V18.2498C15.2501 19.9067 13.9069 21.2498 12.2501 21.2498Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowPathUp;
