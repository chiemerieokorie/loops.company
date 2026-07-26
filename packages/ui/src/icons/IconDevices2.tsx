import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconDevices2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="devices-2, macbook, iphone, phone, connected"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M20 9C21.6569 9 23 10.3431 23 12V18C23 19.6569 21.6569 21 20 21H18C16.3431 21 15 19.6569 15 18V12C15 10.3431 16.3431 9 18 9H20Z"
					fill="currentColor"
				/>
				<path
					d="M13.5 18C13.5 18.9253 13.78 19.7849 14.2588 20.5H4.5C2.567 20.5 1 18.933 1 17C1 16.4477 1.44772 16 2 16H13.5V18Z"
					fill="currentColor"
				/>
				<path
					d="M18 3C19.6569 3 21 4.34315 21 6V7.6123C20.6783 7.5393 20.3438 7.5 20 7.5H18C15.5147 7.5 13.5 9.51472 13.5 12V14.5H3.04395C3.0164 14.3374 3 14.1706 3 14V6C3 4.34315 4.34315 3 6 3H18Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M15.75 11.75C15.75 10.6454 16.6454 9.75 17.75 9.75L20.25 9.75C21.3546 9.75 22.25 10.6454 22.25 11.75V18.25C22.25 19.3546 21.3546 20.25 20.25 20.25H17.75C16.6454 20.25 15.75 19.3546 15.75 18.25V11.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.75 19.75H4.75C3.09315 19.75 1.75 18.4069 1.75 16.75C1.75 16.1977 2.19771 15.75 2.75 15.75H12.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20.25 6.75C20.25 5.09315 18.9069 3.75 17.25 3.75H6.75C5.09315 3.75 3.75 5.09315 3.75 6.75V15.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconDevices2;
