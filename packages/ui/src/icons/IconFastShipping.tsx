import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFastShipping: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="fast-shipping, truck, delivery">
		{variant === "filled" ? (
			<>
				<path
					d="M7.5015 15C8.88206 15.0002 10.0015 16.1194 10.0015 17.5C10.0015 18.8806 8.88206 19.9998 7.5015 20C6.12079 20 5.0015 18.8807 5.0015 17.5C5.0015 16.1193 6.12079 15 7.5015 15Z"
					fill="currentColor"
				/>
				<path
					d="M16.5015 15C17.8821 15.0002 19.0015 16.1194 19.0015 17.5C19.0015 18.8806 17.8821 19.9998 16.5015 20C15.1208 20 14.0015 18.8807 14.0015 17.5C14.0015 16.1193 15.1208 15 16.5015 15Z"
					fill="currentColor"
				/>
				<path
					d="M11.4517 4C13.6361 4.00004 15.3585 5.86013 15.191 8.03809L14.7388 13.9082C13.5559 14.4898 12.7035 15.6388 12.5337 17H11.4693C11.2231 15.027 9.54111 13.5002 7.5015 13.5C5.7515 13.5 4.26493 14.6241 3.72221 16.1895C2.78286 15.4436 2.21226 14.2592 2.31205 12.9619L2.42435 11.5H6.0015V10H2.53959L2.73197 7.5H8.0015V6H3.15775C3.78918 4.80509 5.04318 4 6.47416 4H11.4517Z"
					fill="currentColor"
				/>
				<path
					d="M18.815 6C19.7343 6.00013 20.5931 6.45967 21.1031 7.22461L22.2222 8.90332C22.5882 9.45242 22.7445 10.1157 22.6626 10.7705L22.4048 12.8389C22.2262 14.2679 21.4232 15.481 20.2915 16.2227C19.7583 14.6402 18.2636 13.5001 16.5015 13.5C16.402 13.5 16.3033 13.5046 16.2056 13.5117L16.8316 6H18.815Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M14.25 16.75C14.25 18.1307 15.3693 19.25 16.75 19.25C18.1307 19.25 19.25 18.1307 19.25 16.75C19.25 15.3693 18.1307 14.25 16.75 14.25C15.3693 14.25 14.25 15.3693 14.25 16.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.75 16.75C4.75 18.1307 5.86929 19.25 7.25 19.25C8.63071 19.25 9.75 18.1307 9.75 16.75C9.75 15.3693 8.63071 14.25 7.25 14.25C5.86929 14.25 4.75 15.3693 4.75 16.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.0001 16.25H10"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.2857 16.25C20.4065 16.25 21.3505 15.4125 21.484 14.2997L21.9548 10.3765C21.9839 10.1339 21.9232 9.88908 21.7841 9.68819L20.0482 7.18079C19.8615 6.91099 19.5542 6.75 19.226 6.75H16.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.64394 16.25C3.62993 16.25 2.83761 15.3744 2.93857 14.3655L3 13.7516M15.25 14.5L15.9109 8.05609C16.0923 6.28746 14.7045 4.75 12.9266 4.75H6.50045C4.94433 4.75 3.64654 5.93984 3.51173 7.49011L3.48913 7.75H8.24611M2.75019 10.75H6.25019"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFastShipping;
