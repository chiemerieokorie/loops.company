import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowRedoDown: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="arrow-redo-down, forward">
		{variant === "filled" ? (
			<>
				<path
					d="M17.4699 18.4697C17.177 18.7626 17.177 19.2374 17.4699 19.5303C17.7628 19.8232 18.2377 19.8232 18.5306 19.5303L21.4699 16.591C22.3486 15.7123 22.3486 14.2877 21.4699 13.409L18.5306 10.4697C18.2377 10.1768 17.7628 10.1768 17.4699 10.4697C17.177 10.7626 17.177 11.2374 17.4699 11.5303L20.2234 14.2838C20.1528 14.2618 20.0778 14.25 20 14.25H7.375C5.2349 14.25 3.5 12.5151 3.5 10.375C3.5 8.2349 5.2349 6.5 7.375 6.5H12.25C12.6642 6.5 13 6.16421 13 5.75C13 5.33579 12.6642 5 12.25 5H7.375C4.40647 5 2 7.40647 2 10.375C2 13.3435 4.40647 15.75 7.375 15.75H20C20.0778 15.75 20.1528 15.7382 20.2234 15.7162L17.4699 18.4697Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M18 19L20.9393 16.0607C21.5251 15.4749 21.5251 14.5251 20.9393 13.9393L18 11"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20 15L7.375 15C4.82068 15 2.75 12.9293 2.75 10.375C2.75 7.82068 4.82068 5.75 7.375 5.75L12.25 5.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowRedoDown;
