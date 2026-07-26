import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconEraser: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="eraser, rubber, clean-up">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12.584 17.6442L6.50055 11.5607L4.75081 13.3104C3.84378 14.2175 3.87741 15.6981 4.8247 16.563L7.39699 18.9116C7.81158 19.2902 8.3527 19.5 8.9141 19.5H9.83337C10.4426 19.5 11.0257 19.253 11.4496 18.8154L12.584 17.6442ZM12.3489 3.59103C13.8134 2.12656 16.1877 2.12656 17.6522 3.59102L20.4432 6.38199C21.8911 7.82995 21.9098 10.1717 20.4852 11.6426L12.527 19.859C11.8206 20.5883 10.8487 21 9.83337 21H8.9141C7.97843 21 7.07656 20.6502 6.38559 20.0194L3.81329 17.6707C2.23448 16.2292 2.17843 13.7615 3.69015 12.2498L12.3489 3.59103Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M12.8792 4.12136L4.22048 12.7801C3.0111 13.9895 3.05594 15.9637 4.31899 17.1169L6.89129 19.4655C7.44407 19.9702 8.16556 20.25 8.91409 20.25H9.83337C10.6456 20.25 11.4232 19.9207 11.9883 19.3372L19.9464 11.1208C21.0862 9.9441 21.0712 8.07069 19.9128 6.91232L17.1219 4.12135C15.9503 2.94978 14.0508 2.94978 12.8792 4.12136Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7 11L13.5 17.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconEraser;
