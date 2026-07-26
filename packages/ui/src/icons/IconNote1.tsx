import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconNote1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="note-1">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3 6.75C3 4.67893 4.67893 3 6.75 3H17.25C19.3211 3 21 4.67893 21 6.75V14.5H18.25C16.1789 14.5 14.5 16.1789 14.5 18.25V21H6.75C4.67893 21 3 19.3211 3 17.25V6.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					d="M16 20.7881C16.5252 20.6037 17.0079 20.3028 17.409 19.9016L19.9016 17.409C20.3028 17.0079 20.6037 16.5252 20.7881 16H18.25C17.0074 16 16 17.0074 16 18.25V20.7881Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 6.75C3.75 5.09315 5.09315 3.75 6.75 3.75H17.25C18.9069 3.75 20.25 5.09315 20.25 6.75V14.7574C20.25 14.9235 20.2362 15.0882 20.2093 15.25C20.1072 15.8629 19.8164 16.4336 19.3713 16.8787L16.8787 19.3713C16.4336 19.8164 15.8629 20.1072 15.25 20.2093C15.0882 20.2362 14.9235 20.25 14.7574 20.25H6.75C5.09315 20.25 3.75 18.9069 3.75 17.25V6.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20.2093 15.25H18.25C16.5931 15.25 15.25 16.5931 15.25 18.25V20.2093"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconNote1;
