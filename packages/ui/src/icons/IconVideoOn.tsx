import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconVideoOn: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="video-on, cam-on">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M2 7.75C2 5.67893 3.67893 4 5.75 4H13.25C15.2325 4 16.8557 5.53841 16.9909 7.48656L19.4066 6.15789C20.5729 5.51643 22 6.36022 22 7.69127V16.3087C22 17.6398 20.5729 18.4836 19.4066 17.8421L16.9909 16.5134C16.8557 18.4616 15.2325 20 13.25 20H5.75C3.67893 20 2 18.3211 2 16.25V7.75ZM9.5 15C11.1569 15 12.5 13.6569 12.5 12C12.5 10.3431 11.1569 9 9.5 9C7.84315 9 6.5 10.3431 6.5 12C6.5 13.6569 7.84315 15 9.5 15Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M5.75 4.75H13.25C14.9069 4.75 16.25 6.09315 16.25 7.75V8.75L19.7681 6.81505C20.4345 6.44851 21.25 6.93067 21.25 7.69127V16.3087C21.25 17.0693 20.4345 17.5515 19.7681 17.1849L16.25 15.25V16.25C16.25 17.9069 14.9069 19.25 13.25 19.25H5.75C4.09315 19.25 2.75 17.9069 2.75 16.25V7.75C2.75 6.09315 4.09315 4.75 5.75 4.75Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M12.25 12C12.25 13.5188 11.0188 14.75 9.5 14.75C7.98122 14.75 6.75 13.5188 6.75 12C6.75 10.4812 7.98122 9.25 9.5 9.25C11.0188 9.25 12.25 10.4812 12.25 12Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconVideoOn;
