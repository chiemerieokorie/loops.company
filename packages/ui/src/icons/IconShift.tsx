import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconShift: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="shift">
		{variant === "filled" ? (
			<>
				<path
					d="M13.2507 2.45765C12.5641 1.75516 11.434 1.75516 10.7475 2.45765L2.37301 11.0269C1.29008 12.135 2.07519 14 3.62459 14H6.1175V17.25C6.1175 19.3211 7.79644 21 9.8675 21H14.1307C16.2017 21 17.8807 19.3211 17.8807 17.25V14H20.3736C21.923 14 22.7081 12.135 21.6252 11.0269L13.2507 2.45765Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M2.91032 11.5511L11.2848 2.98182C11.6771 2.5804 12.3229 2.5804 12.7152 2.98182L21.0897 11.5511C21.7085 12.1843 21.2599 13.25 20.3745 13.25H17.1316V17.25C17.1316 18.9069 15.7884 20.25 14.1316 20.25H9.86842C8.21157 20.25 6.86842 18.9069 6.86842 17.25V13.25H3.62551C2.74013 13.25 2.2915 12.1843 2.91032 11.5511Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconShift;
