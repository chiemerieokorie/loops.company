import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCar10: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="car-10, truck">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12 5C12 4.44772 11.5523 4 11 4C8.91667 4 6.83333 4 4.75 4C2.67893 4 1 5.67893 1 7.75V15.25C1 16.7688 2.23122 18 3.75 18H3.83682C4.39855 19.1825 5.6038 20 7 20C8.3962 20 9.60145 19.1825 10.1632 18H13.8368C14.3985 19.1825 15.6038 20 17 20C18.3962 20 19.6015 19.1825 20.1632 18H20.25C21.7688 18 23 16.7688 23 15.25V12.9082C23 12.2606 22.8325 11.6256 22.5156 11.0645L22.3701 10.8281L20.2646 7.66992C19.5692 6.6267 18.3983 6.00003 17.1445 6H14.5C13.9477 6 13.5 6.44772 13.5 7V16.5H12V5ZM7 14.5C8.10457 14.5 9 15.3954 9 16.5C9 17.6046 8.10457 18.5 7 18.5C5.89543 18.5 5 17.6046 5 16.5C5 15.3954 5.89543 14.5 7 14.5ZM17 14.5C18.1046 14.5 19 15.3954 19 16.5C19 17.6046 18.1046 18.5 17 18.5C15.8954 18.5 15 17.6046 15 16.5C15 15.3954 15.8954 14.5 17 14.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M4.5 17.25H3.75C2.64543 17.25 1.75 16.3546 1.75 15.25V7.75C1.75 6.09315 3.09315 4.75 4.75 4.75H11.75C12.3023 4.75 12.75 5.19772 12.75 5.75V6.75H17.1444C18.1475 6.75 19.0842 7.2513 19.6406 8.0859L21.7462 11.2442C22.0747 11.737 22.25 12.3161 22.25 12.9083V15.25C22.25 16.3546 21.3546 17.25 20.25 17.25H19.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.75 6V16.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path d="M9.75 17.25H14.25" stroke="currentColor" strokeWidth="1.5" />
				<circle
					cx="7"
					cy="16.75"
					r="2.5"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<circle
					cx="17"
					cy="16.75"
					r="2.5"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCar10;
