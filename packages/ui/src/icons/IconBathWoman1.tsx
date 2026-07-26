import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBathWoman1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="bath-woman-1, women, female">
		{variant === "filled" ? (
			<>
				<path
					d="M12 1C10.3431 1 9 2.34315 9 4C9 5.65685 10.3431 7 12 7C13.6569 7 15 5.65685 15 4C15 2.34315 13.6569 1 12 1Z"
					fill="currentColor"
				/>
				<path
					d="M11.0937 8C9.37291 8 7.87297 9.17111 7.45563 10.8405L5.83436 17.3256C5.55824 18.4301 6.39361 19.5 7.53211 19.5H8.00134V21.25C8.00134 22.2165 8.78484 23 9.75134 23H14.2513C15.2178 23 16.0013 22.2165 16.0013 21.25V19.5H16.4706C17.6091 19.5 18.4444 18.4301 18.1683 17.3256L16.547 10.8405C16.1297 9.17112 14.6298 8 12.909 8H11.0937Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<circle
					cx="12"
					cy="4"
					r="2.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.251 22.25V18.75H16.4702C17.1208 18.75 17.5981 18.1386 17.4403 17.5075L15.8191 11.0224C15.4852 9.68689 14.2852 8.75 12.9086 8.75H11.0933C9.71669 8.75 8.51674 9.68689 8.18287 11.0224L6.5616 17.5075C6.40381 18.1386 6.88117 18.75 7.53174 18.75H8.75097V22.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBathWoman1;
