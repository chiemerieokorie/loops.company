import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconAmericanFootball: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="american-football, nfl">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M11.3874 2.44808C7.04858 3.63129 3.63129 7.04858 2.44808 11.3874L12.6126 21.5519C16.9514 20.3687 20.3687 16.9514 21.5519 12.6126L11.3874 2.44808ZM14.5303 10.5303C14.8232 10.2374 14.8232 9.76256 14.5303 9.46967C14.2374 9.17678 13.7626 9.17678 13.4697 9.46967L9.46967 13.4697C9.17678 13.7626 9.17678 14.2374 9.46967 14.5303C9.76256 14.8232 10.2374 14.8232 10.5303 14.5303L14.5303 10.5303Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					d="M2 14.75C2 14.2112 2.03342 13.6802 2.0983 13.159L10.841 21.9017C10.3198 21.9666 9.7888 22 9.25 22H3.75C2.7835 22 2 21.2165 2 20.25V14.75Z"
					fill="currentColor"
				/>
				<path
					d="M21.9017 10.841C21.9666 10.3198 22 9.7888 22 9.25V3.75C22 2.7835 21.2165 2 20.25 2H14.75C14.2112 2 13.6802 2.03342 13.159 2.0983L21.9017 10.841Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M13 3L21 11M3 13L11 21M10 14L14 10M14.75 2.75H19.25C20.3546 2.75 21.25 3.64543 21.25 4.75V9.25C21.25 15.8774 15.8774 21.25 9.25 21.25H4.75C3.64543 21.25 2.75 20.3546 2.75 19.25V14.75C2.75 8.12258 8.12258 2.75 14.75 2.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconAmericanFootball;
