import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconChart3: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="chart-3, statistics, graph, signal">
		{variant === "filled" ? (
			<>
				<path
					d="M15.6699 5.665C15.6699 4.19316 16.8631 3 18.3349 3C19.8068 3 20.9999 4.19316 20.9999 5.665V18.335C20.9999 19.8068 19.8068 21 18.3349 21C16.8631 21 15.6699 19.8068 15.6699 18.335V5.665Z"
					fill="currentColor"
				/>
				<path
					d="M11.9951 8.33398C10.5232 8.33398 9.33008 9.52715 9.33008 10.999V18.3356C9.33008 19.8075 10.5232 21.0007 11.9951 21.0007C13.4669 21.0007 14.6601 19.8075 14.6601 18.3356V10.999C14.6601 9.52715 13.4669 8.33398 11.9951 8.33398Z"
					fill="currentColor"
				/>
				<path
					d="M5.665 12.7773C4.19316 12.7773 3 13.9705 3 15.4423V18.3346C3 19.8064 4.19316 20.9996 5.665 20.9996C7.13684 20.9996 8.33 19.8064 8.33 18.3346V15.4423C8.33 13.9705 7.13684 12.7773 5.665 12.7773Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M5.665 13.5273C4.60737 13.5273 3.75 14.3847 3.75 15.4423V18.3346C3.75 19.3922 4.60737 20.2496 5.665 20.2496C6.72263 20.2496 7.58 19.3922 7.58 18.3346V15.4423C7.58 14.3847 6.72263 13.5273 5.665 13.5273Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
				<path
					d="M11.995 9.08398C10.9374 9.08398 10.08 9.94136 10.08 10.999V18.3356C10.08 19.3933 10.9374 20.2507 11.995 20.2507C13.0526 20.2507 13.91 19.3933 13.91 18.3356V10.999C13.91 9.94136 13.0526 9.08398 11.995 9.08398Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
				<path
					d="M18.335 3.75C17.2774 3.75 16.42 4.60738 16.42 5.665V18.335C16.42 19.3926 17.2774 20.25 18.335 20.25C19.3926 20.25 20.25 19.3926 20.25 18.335V5.665C20.25 4.60738 19.3926 3.75 18.335 3.75Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconChart3;
