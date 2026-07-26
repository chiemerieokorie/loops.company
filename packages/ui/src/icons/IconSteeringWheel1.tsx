import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSteeringWheel1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="steering-wheel, autopilot, drive">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM10 17.3682C10 15.2628 7.88786 13.8126 5.92285 14.5684L4.6123 15.0723C5.56701 17.3654 7.55738 19.1183 10 19.7471V17.3682ZM18.0771 14.5684C16.1121 13.8126 14 15.2628 14 17.3682V19.7471C16.4425 19.1183 18.432 17.3652 19.3867 15.0723L18.0771 14.5684ZM12 4C7.81005 4 4.37438 7.22126 4.03027 11.3223C10.0718 8.89338 13.9274 8.89357 19.9688 11.3223C19.6246 7.2213 16.1899 4 12 4Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3 11.75C10 8.75005 14 8.75 21 11.75"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M3.5 15.5C5.66826 14.6661 6.75238 14.2491 7.62164 14.4332C8.40081 14.5982 9.08237 15.0663 9.51611 15.7343C10 16.4795 10 17.6411 10 19.9642V21"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M20.5 15.5C18.3317 14.6661 17.2476 14.2491 16.3784 14.4332C15.5992 14.5982 14.9176 15.0663 14.4839 15.7343C14 16.4795 14 17.6411 14 19.9642V21"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<circle
					cx="12"
					cy="12"
					r="9.25"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSteeringWheel1;
