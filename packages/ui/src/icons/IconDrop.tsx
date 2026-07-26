import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconDrop: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="drop, water, precipitation, liquid">
		{variant === "filled" ? (
			<>
				<path
					d="M13.7914 2.75518C12.7955 1.74665 11.2045 1.74665 10.2086 2.75518C9.15198 3.82517 7.61537 5.52064 6.33827 7.49132C5.07184 9.44557 4 11.7621 4 14.0556C4 18.4486 7.58717 22 12 22C16.4128 22 20 18.4486 20 14.0556C20 11.7621 18.9282 9.44557 17.6617 7.49132C16.3846 5.52064 14.848 3.82517 13.7914 2.75518Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M19.25 14.0556C19.25 18.029 16.0041 21.25 12 21.25C7.99594 21.25 4.75 18.029 4.75 14.0556C4.75 9.90093 8.66637 5.38435 10.7422 3.28215C11.4445 2.57099 12.5555 2.57099 13.2578 3.28216C15.3336 5.38435 19.25 9.90093 19.25 14.0556Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconDrop;
