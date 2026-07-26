import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBrain: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="brain, thinking, human, clever">
		{variant === "filled" ? (
			<>
				<path
					d="M9.375 2C9.92595 2 10.4458 2.1324 10.905 2.36671C11.1279 2.48041 11.25 2.71949 11.25 2.96968V20.5157C11.25 20.7288 11.1614 20.9346 10.9927 21.0648C10.2336 21.6505 9.28312 22 8.25 22C5.76472 22 3.75 19.9853 3.75 17.5V17.1709C2.69893 16.5065 2 15.3354 2 14C2.00006 12.8521 2.51723 11.8272 3.3291 11.1396C3.11753 10.6342 3 10.0801 3 9.5C3.00001 7.58641 4.2638 5.9688 6.00195 5.43555C6.0016 5.4154 6 5.39523 6 5.375C6 3.51104 7.51104 2 9.375 2Z"
					fill="currentColor"
				/>
				<path
					d="M14.625 2C16.489 2 18 3.51104 18 5.375C18 5.39524 17.9974 5.41539 17.9971 5.43555C19.7357 5.96852 21 7.58608 21 9.5C21 10.0802 20.8816 10.6341 20.6699 11.1396C21.4821 11.8272 21.9999 12.8518 22 14C22 15.3354 21.3011 16.5065 20.25 17.1709V17.5C20.25 19.9853 18.2353 22 15.75 22C14.7169 22 13.7664 21.6505 13.0073 21.0648C12.8386 20.9346 12.75 20.7288 12.75 20.5157V2.96968C12.75 2.71949 12.8721 2.48041 13.095 2.36671C13.5542 2.1324 14.0741 2 14.625 2Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M4.08682 11C3.87085 10.5454 3.75 10.0368 3.75 9.50002C3.75 7.82446 4.92741 6.4239 6.5 6.08057"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.08682 11C3.87085 10.5454 3.75 10.0368 3.75 9.50002C3.75 7.82446 4.92741 6.4239 6.5 6.08057"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.08682 11C3.87085 10.5454 3.75 10.0368 3.75 9.50002C3.75 7.82446 4.92741 6.4239 6.5 6.08057"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.9132 11C20.1292 10.5454 20.25 10.0368 20.25 9.50002C20.25 7.82446 19.0726 6.4239 17.5 6.08057"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.9132 11C20.1292 10.5454 20.25 10.0368 20.25 9.50002C20.25 7.82446 19.0726 6.4239 17.5 6.08057"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.9132 11C20.1292 10.5454 20.25 10.0368 20.25 9.50002C20.25 7.82446 19.0726 6.4239 17.5 6.08057"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7 16.7282C6.61947 16.9028 6.19611 17.0002 5.75 17.0002C4.09315 17.0002 2.75 15.6571 2.75 14.0002C2.75 12.6023 3.70608 11.4278 5 11.0947"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17 16.7282C17.3805 16.9028 17.8039 17.0002 18.25 17.0002C19.9069 17.0002 21.25 15.6571 21.25 14.0002C21.25 12.6023 20.2939 11.4278 19 11.0947"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 5.375C12 3.92525 10.8247 2.75 9.375 2.75C7.92525 2.75 6.75 3.92525 6.75 5.375C6.75 5.98861 6.96054 6.55304 7.31331 7"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 5.375C12 3.92525 13.1753 2.75 14.625 2.75C16.0747 2.75 17.25 3.92525 17.25 5.375C17.25 5.98861 17.0395 6.55304 16.6867 7"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 5.25V17.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 17.5C12 19.5711 10.3211 21.25 8.25 21.25C6.17893 21.25 4.5 19.5711 4.5 17.5V17"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 17.5C12 19.5711 13.6789 21.25 15.75 21.25C17.8211 21.25 19.5 19.5711 19.5 17.5V17"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBrain;
