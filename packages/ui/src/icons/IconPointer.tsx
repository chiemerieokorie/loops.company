import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPointer: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="pointer, hand">
		{variant === "filled" ? (
			<>
				<path
					d="M11.1875 9.12333H15.9853C18.3406 9.12333 20.25 11.0859 20.25 13.5069V14.1416C20.25 18.4817 16.8271 22 12.6047 22C9.76611 22 7.16121 20.3835 5.83916 17.8016L2.80581 11.8777C2.71598 11.7022 2.73582 11.4891 2.85641 11.3341L3.45831 10.5608C4.19399 9.61558 5.53587 9.46232 6.45548 10.2185L7.45583 11.0411V3.91781C7.45583 2.85863 8.29119 2 9.32165 2C10.3521 2 11.1875 2.85863 11.1875 3.91781V9.12333Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M11.25 9.25004H15.75C17.9591 9.25004 19.75 11.0409 19.75 13.25V13.8292C19.75 17.7895 16.5395 21 12.5792 21C9.91687 21 7.47366 19.525 6.23368 17.169L3.25 11.5L4.00061 10.5617C4.69063 9.69921 5.94921 9.55937 6.81174 10.2494L7.75 11V4.5C7.75 3.5335 8.5335 2.75 9.5 2.75C10.4665 2.75 11.25 3.5335 11.25 4.5V9.25004Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPointer;
