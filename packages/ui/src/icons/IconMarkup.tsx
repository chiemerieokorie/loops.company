import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconMarkup: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="markup, marker, highlight">
		{variant === "filled" ? (
			<>
				<path
					d="M15.2051 17.1104L13.7148 19.5H20.2598C20.674 19.5 21.0098 19.8358 21.0098 20.25C21.0098 20.6642 20.674 21 20.2598 21H4.75C3.7835 21 3 20.2165 3 19.25V18.2405C3 17.9326 3.08121 17.6302 3.23543 17.3638L6.35547 11.9736L15.2051 17.1104Z"
					fill="currentColor"
				/>
				<path
					d="M21.2042 8.05528C21.565 8.26468 21.6856 8.72822 21.4726 9.08689L18.9846 13.2765C17.9346 15.0447 15.6564 15.6373 13.8778 14.605L9.23975 11.9131C7.43585 10.8661 6.83289 8.54835 7.89786 6.75501L10.3552 2.61696C10.5652 2.26333 11.0209 2.1448 11.3766 2.35126L21.2042 8.05528Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M21.0099 20.25H5.54741C4.55473 20.25 3.75 19.4452 3.75 18.4526C3.75 18.1378 3.83266 17.8286 3.9897 17.5558L7.49507 11.467"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.0925 15.855L12.3984 20.1915"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10.5695 3.75293L7.79232 8.44183C6.94268 9.87634 7.42567 11.7284 8.86766 12.5653L13.4952 15.251C14.9233 16.0799 16.7528 15.5988 17.5885 14.1746L20.7694 8.75384"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconMarkup;
