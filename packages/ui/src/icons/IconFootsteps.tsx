import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFootsteps: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="footsteps">
		{variant === "filled" ? (
			<>
				<path
					d="M10 16C10.0275 15.1798 9.37001 14.5 8.54937 14.5H5.55105C4.71416 14.5 4.028 15.1636 4 16C4 17.6569 5.34315 19 7 19C8.65685 19 10 17.6569 10 16Z"
					fill="currentColor"
				/>
				<path
					d="M10.4246 11.9405C10.186 12.6186 9.5059 13 8.78706 13H5.21302C4.49415 13 3.81401 12.6186 3.57547 11.9405C2.29304 8.29464 3.03655 2 6.99985 2C10.9632 2 11.7071 8.2947 10.4246 11.9405Z"
					fill="currentColor"
				/>
				<path
					d="M20.4246 14.9405C20.186 15.6186 19.5059 16 18.7871 16H15.213C14.4942 16 13.814 15.6186 13.5755 14.9405C12.293 11.2946 13.0365 5 16.9998 5C20.9632 5 21.7071 11.2947 20.4246 14.9405Z"
					fill="currentColor"
				/>
				<path
					d="M20 19C20 18.1716 19.3284 17.5 18.5 17.5H15.5C14.6716 17.5 14 18.1716 14 19C14 20.6569 15.3431 22 17 22C18.6569 22 20 20.6569 20 19Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M9.25 16.25C9.25 15.6977 8.80228 15.25 8.25 15.25H4.75C4.19772 15.25 3.75 15.6977 3.75 16.25V16.4375C3.75 17.9908 4.98122 19.25 6.5 19.25C8.01878 19.25 9.25 17.9908 9.25 16.4375V16.25Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.52637 12.2422C9.38081 12.5656 9.04762 12.75 8.69296 12.75H4.30709C3.95242 12.75 3.61921 12.5656 3.47366 12.2421C2.02779 9.02924 2.60768 2.75 6.49986 2.75C10.392 2.75 10.9723 9.02927 9.52637 12.2422Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20.25 18.25C20.25 17.6977 19.8023 17.25 19.25 17.25H15.75C15.1977 17.25 14.75 17.6977 14.75 18.25V18.4375C14.75 19.9908 15.9812 21.25 17.5 21.25C19.0188 21.25 20.25 19.9908 20.25 18.4375V18.25Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20.5264 14.2422C20.3808 14.5656 20.0476 14.75 19.693 14.75H15.3071C14.9524 14.75 14.6192 14.5656 14.4737 14.2421C13.0278 11.0292 13.6077 4.75 17.4999 4.75C21.392 4.75 21.9723 11.0293 20.5264 14.2422Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFootsteps;
