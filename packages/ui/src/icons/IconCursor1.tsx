import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCursor1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="cursor-1, arrow">
		{variant === "filled" ? (
			<>
				<path
					d="M5.66105 2.79854C3.88702 2.18542 2.1864 3.88605 2.79952 5.66008L7.92593 20.4931C8.6032 22.4528 11.3457 22.5311 12.1337 20.6133L14.4843 14.892C14.5605 14.7067 14.7077 14.5595 14.893 14.4833L20.6142 12.1327C22.5321 11.3447 22.4538 8.60222 20.4941 7.92495L5.66105 2.79854Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M3.50746 5.41564L8.63387 20.2487C9.08538 21.5551 10.9137 21.6073 11.439 20.3288L13.7897 14.6076C13.942 14.2368 14.2363 13.9425 14.6071 13.7902L20.3283 11.4395C21.6068 10.9142 21.5546 9.08587 20.2482 8.63436L5.41515 3.50795C4.23246 3.0992 3.09871 4.23295 3.50746 5.41564Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCursor1;
